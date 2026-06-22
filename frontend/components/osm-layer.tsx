"use client";

import { useEffect, useState } from "react";
import { Polygon, Polyline, FeatureGroup } from "react-leaflet";
import type { CityClimateProfile } from "@/lib/types";
import { useClimateStore } from "@/store/climate-store";
import { isPointInBoundary } from "@/lib/geospatial/overpass";

// Generate an organic polygon offset from a center point
const generateOrganicPolygon = (lat: number, lng: number, radiusX: number, radiusY: number, points: number, angleOffset: number) => {
  const positions: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2 + angleOffset;
    const noise = 0.8 + (Math.sin(i * 13) * 0.2);
    positions.push([
      lat + Math.cos(angle) * radiusX * noise,
      lng + Math.sin(angle) * radiusY * noise
    ]);
  }
  return positions;
};

interface OsmLayerProps {
  city: CityClimateProfile;
  type: "water" | "treeCover";
}

// Global request cache to prevent duplicate requests across rapid toggles
const activeRequests = new Map<string, Promise<any>>();

const getRadiusKm = (cityName: string) => {
  const name = cityName.toLowerCase();
  if (["mumbai", "delhi", "tokyo", "bengaluru", "hyderabad"].some((c) => name.includes(c))) return 15;
  if (name.includes("noida")) return 10;
  if (name.includes("prayagraj")) return 8;
  return 10; // Default medium city
};

export function OsmLayer({ city, type }: OsmLayerProps) {
  const [elements, setElements] = useState<any[]>([]);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const setLayerLoading = useClimateStore((state) => state.setLayerLoading);

  useEffect(() => {
    // Basic memory cache
    const cacheKey = `osm-${city.id}-${type}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setElements(JSON.parse(cached));
      setStatus("loaded");
      setLayerLoading(type, false);
      return;
    }

    setLayerLoading(type, true);
    setStatus("loading");

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
      query = `[out:json][timeout:15];(way["natural"="water"]["water"~"river|lake|reservoir"](${bbox});relation["natural"="water"](${bbox});way["waterway"~"river|canal"](${bbox}););out geom;`;
    } else {
      query = `[out:json][timeout:15];(way["leisure"="park"](${bbox});relation["leisure"="park"](${bbox});way["landuse"="forest"](${bbox});relation["landuse"="forest"](${bbox}););out geom;`;
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
        .catch(err => {
          if (err.name === 'AbortError') return null;
          throw err;
        });
      
      activeRequests.set(cacheKey, fetchPromise);
      
      // Auto cleanup request from map after 30 seconds
      setTimeout(() => {
        activeRequests.delete(cacheKey);
        controller.abort();
      }, 30000);
    }

    activeRequests.get(cacheKey)!.then((data) => {
      if (!isActive) return;
      if (data && data.elements) {
        let parsed = data.elements.filter((e: any) => e.type === "way" && e.geometry).map((e: any) => ({
          id: e.id,
          type: e.type,
          geometry: e.geometry,
          tags: e.tags
        }));

        if (city.boundary && city.boundary.length > 0) {
          parsed = parsed.filter((e: any) => {
            const centerPt = { lat: e.geometry[0].lat, lng: e.geometry[0].lon };
            return isPointInBoundary(centerPt, city.boundary);
          });
        }

        parsed = parsed.slice(0, 300);

        sessionStorage.setItem(cacheKey, JSON.stringify(parsed));
        setElements(parsed);
        setStatus("loaded");
        setLayerLoading(type, false);
      } else {
        setStatus("error");
        setLayerLoading(type, false);
      }
    }).catch((err) => {
      if (!isActive) return;
      console.warn(`OSM Fetch Error for ${type}:`, err);
      window.dispatchEvent(new CustomEvent('osm-fallback', { detail: { type } }));
      setStatus("error");
      setLayerLoading(type, false);
    });
      
    return () => {
      isActive = false;
      // We don't abort the global request, so other mounts can reuse it.
    };
  }, [city, type, setLayerLoading]);

  if (status === "error") {
    // Return nothing. Never fabricate environmental numbers.
    return null;
  }

  if (status === "loading" || elements.length === 0) return null;

  return (
    <FeatureGroup>
      {elements.map((el) => {
        const positions = el.geometry.map((pt: any) => [pt.lat, pt.lon] as [number, number]);
        if (type === "water") {
          const isLine = el.tags && el.tags.waterway && !el.tags.natural;
          if (isLine) {
            return <Polyline key={el.id} positions={positions} pathOptions={{ color: "#3b82f6", weight: 3 }} />;
          }
          return <Polygon key={el.id} positions={positions} pathOptions={{ color: "#3b82f6", fillColor: "#93c5fd", fillOpacity: 0.5, weight: 1 }} />;
        } else {
          return <Polygon key={el.id} positions={positions} pathOptions={{ color: "#166534", fillColor: "#22c55e", fillOpacity: 0.5, weight: 1 }} />;
        }
      })}
    </FeatureGroup>
  );
}
