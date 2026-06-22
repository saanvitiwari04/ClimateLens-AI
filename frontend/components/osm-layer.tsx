"use client";

import { useEffect, useRef, useState } from "react";
import { Polygon, Polyline, FeatureGroup, Circle } from "react-leaflet";
import type { CityClimateProfile } from "@/lib/types";
import { useClimateStore } from "@/store/climate-store";
import { isPointInBoundary } from "@/lib/geospatial/overpass";

interface OsmLayerProps {
  city: CityClimateProfile;
  type: "water" | "treeCover";
}

// Global request cache to prevent duplicate requests across rapid toggles
const activeRequests = new Map<string, Promise<any>>();

const getRadiusKm = (cityName: string) => {
  const name = cityName.toLowerCase();
  if (["mumbai", "delhi", "bengaluru", "hyderabad", "chennai", "kolkata"].some((c) => name.includes(c))) return 15;
  if (["pune", "jaipur", "ahmedabad", "surat", "lucknow"].some((c) => name.includes(c))) return 10;
  if (name.includes("noida")) return 8;
  return 8;
};

/** Derive city-center proxy polygons using cached metrics when OSM fails */
function buildDerivedOverlay(city: CityClimateProfile, type: "water" | "treeCover"): [number, number][][] {
  const { lat, lng } = city.coordinates;
  const effectivePct = Math.max(3, type === "treeCover" ? city.greenCoverPercent : (city.waterCoveragePercent ?? 4));

  const count = Math.max(2, Math.min(12, Math.round(effectivePct / 4)));
  const seed = Math.abs(Math.sin(lat * 100 + lng * 200 + (type === "treeCover" ? 0 : 999)));
  const results: [number, number][][] = [];

  for (let i = 0; i < count; i++) {
    const angle = ((seed * 7 + i * 137.5) % 360) * (Math.PI / 180);
    const dist = 0.015 + ((seed * (i + 3)) % 40) / 1000;
    const clat = lat + Math.cos(angle) * dist;
    const clng = lng + Math.sin(angle) * dist;
    const r = 0.006 + ((seed * (i + 1)) % 8) / 1000;
    const pts = 8;
    const ring: [number, number][] = [];
    for (let p = 0; p < pts; p++) {
      const a = (p / pts) * Math.PI * 2;
      const noise = 0.8 + Math.sin(p * 11 + i) * 0.2;
      ring.push([clat + Math.cos(a) * r * noise, clng + Math.sin(a) * r * 0.7 * noise]);
    }
    results.push(ring);
  }
  return results;
}

export function OsmLayer({ city, type }: OsmLayerProps) {
  const [elements, setElements] = useState<any[]>([]);
  const [derivedPolygons, setDerivedPolygons] = useState<[number, number][][]>([]);
  const [status, setStatus] = useState<"loading" | "loaded" | "derived" | "error">("loading");
  const setLayerLoading = useClimateStore((state) => state.setLayerLoading);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cacheKey = `osm-${city.id}-${type}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setElements(parsed);
        setStatus("loaded");
        setLayerLoading(type, false);
      } catch {
        sessionStorage.removeItem(cacheKey);
      }
      return;
    }

    setLayerLoading(type, true);
    setStatus("loading");

    // Hard cap: after 2 seconds, fall back to derived overlay – never stay stuck
    timeoutRef.current = setTimeout(() => {
      setLayerLoading(type, false);
      setStatus("derived");
      setDerivedPolygons(buildDerivedOverlay(city, type));
      window.dispatchEvent(new CustomEvent("osm-fallback", { detail: { type } }));
    }, 2000);

    let bbox = "";
    if (city.boundary && city.boundary.length > 0) {
      let latMin = 90, latMax = -90, lngMin = 180, lngMax = -180;
      for (const ring of city.boundary) {
        for (const pt of ring) {
          if (pt.lat < latMin) latMin = pt.lat;
          if (pt.lat > latMax) latMax = pt.lat;
          if (pt.lng < lngMin) lngMin = pt.lng;
          if (pt.lng > lngMax) lngMax = pt.lng;
        }
      }
      bbox = `${latMin},${lngMin},${latMax},${lngMax}`;
    } else {
      const radiusDeg = getRadiusKm(city.name) / 111.0;
      const S = city.coordinates.lat - radiusDeg;
      const N = city.coordinates.lat + radiusDeg;
      const W = city.coordinates.lng - radiusDeg;
      const E = city.coordinates.lng + radiusDeg;
      bbox = `${S},${W},${N},${E}`;
    }

    let query = "";
    if (type === "water") {
      query = `[out:json][timeout:10];(way["natural"="water"]["water"~"river|lake|reservoir"](${bbox});relation["natural"="water"](${bbox});way["waterway"~"river|canal"](${bbox}););out geom;`;
    } else {
      query = `[out:json][timeout:10];(way["leisure"="park"](${bbox});relation["leisure"="park"](${bbox});way["landuse"="forest"](${bbox});relation["landuse"="forest"](${bbox});way["natural"="wood"](${bbox}););out geom;`;
    }

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
    let isActive = true;

    if (!activeRequests.has(cacheKey)) {
      const controller = new AbortController();
      const fetchPromise = fetch(url, { signal: controller.signal })
        .then((res) => {
          if (!res.ok) throw new Error("HTTP error " + res.status);
          return res.json();
        })
        .catch((err) => {
          if (err.name === "AbortError") return null;
          throw err;
        });

      activeRequests.set(cacheKey, fetchPromise);
      setTimeout(() => { activeRequests.delete(cacheKey); controller.abort(); }, 15000);
    }

    activeRequests.get(cacheKey)!.then((data) => {
      if (!isActive) return;
      if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }

      if (data && data.elements && data.elements.length > 0) {
        let parsed = data.elements
          .filter((e: any) => e.type === "way" && e.geometry)
          .map((e: any) => ({ id: e.id, type: e.type, geometry: e.geometry, tags: e.tags }));

        if (city.boundary && city.boundary.length > 0) {
          parsed = parsed.filter((e: any) => {
            const centerPt = { lat: e.geometry[0].lat, lng: e.geometry[0].lon };
            return isPointInBoundary(centerPt, city.boundary!);
          });
        }

        parsed = parsed.slice(0, 400);
        if (parsed.length > 0) {
          sessionStorage.setItem(cacheKey, JSON.stringify(parsed));
          setElements(parsed);
          setStatus("loaded");
          setLayerLoading(type, false);
        } else {
          setDerivedPolygons(buildDerivedOverlay(city, type));
          setStatus("derived");
          setLayerLoading(type, false);
          window.dispatchEvent(new CustomEvent("osm-fallback", { detail: { type } }));
        }
      } else {
        // OSM returned empty: use derived overlay
        setDerivedPolygons(buildDerivedOverlay(city, type));
        setStatus("derived");
        setLayerLoading(type, false);
        window.dispatchEvent(new CustomEvent("osm-fallback", { detail: { type } }));
      }
    }).catch((err) => {
      if (!isActive) return;
      if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
      console.warn(`OSM Fetch Error for ${type}:`, err);
      setDerivedPolygons(buildDerivedOverlay(city, type));
      setStatus("derived");
      setLayerLoading(type, false);
      window.dispatchEvent(new CustomEvent("osm-fallback", { detail: { type } }));
    });

    return () => {
      isActive = false;
      if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    };
  }, [city, type, setLayerLoading]);

  if (status === "loading") return null;

  // Show real OSM geometry
  if (status === "loaded" && elements.length > 0) {
    return (
      <FeatureGroup>
        {elements.map((el) => {
          const positions = el.geometry.map((pt: any) => [pt.lat, pt.lon] as [number, number]);
          if (type === "water") {
            const isLine = el.tags && el.tags.waterway && !el.tags.natural;
            if (isLine) {
              return <Polyline key={el.id} positions={positions} pathOptions={{ color: "#2563eb", weight: 3, opacity: 0.8 }} />;
            }
            return <Polygon key={el.id} positions={positions} pathOptions={{ color: "#2563eb", fillColor: "#60a5fa", fillOpacity: 0.55, weight: 1 }} />;
          } else {
            return <Polygon key={el.id} positions={positions} pathOptions={{ color: "#15803d", fillColor: "#4ade80", fillOpacity: 0.55, weight: 1 }} />;
          }
        })}
      </FeatureGroup>
    );
  }

  // Derived overlay: always show something meaningful
  if ((status === "derived" || status === "error") && derivedPolygons.length > 0) {
    return (
      <FeatureGroup>
        {derivedPolygons.map((ring, i) =>
          type === "water"
            ? <Polygon key={`d-water-${i}`} positions={ring as [number, number][]} pathOptions={{ color: "#2563eb", fillColor: "#93c5fd", fillOpacity: 0.45, weight: 1, dashArray: "4 3" }} />
            : <Polygon key={`d-tree-${i}`} positions={ring as [number, number][]} pathOptions={{ color: "#15803d", fillColor: "#86efac", fillOpacity: 0.45, weight: 1, dashArray: "4 3" }} />
        )}
      </FeatureGroup>
    );
  }

  return null;
}
