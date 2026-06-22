"use client";

import { Polygon, FeatureGroup } from "react-leaflet";
import type { CityClimateProfile } from "@/lib/types";
import { getCityScale } from "@/lib/roi-engine";
import { getAqiColor } from "@/lib/services/open-meteo";

// Generate an organic polygon offset from a center point
const generatePolygon = (lat: number, lng: number, radiusX: number, radiusY: number, points: number, angleOffset: number) => {
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

export function SyntheticSolarLayer({ city }: { city: CityClimateProfile }) {
  const pseudoSeed = Math.floor(Math.abs(city.coordinates.lat * city.coordinates.lng));
  const scale = getCityScale(city.name);
  const baseZones = { "Mega": 14, "Large": 10, "Medium": 7, "Small": 5 }[scale] ?? 8;
  const numZones = baseZones + (pseudoSeed % 4);
  const spreadMult = { "Mega": 2.8, "Large": 1.8, "Medium": 1.2, "Small": 0.7 }[scale] ?? 1.5;
  const zones = [];

  // Color graduated by solar intensity: brighter = higher potential
  const potentialColors = [
    { color: "#fbbf24", opacity: 0.65 }, // Prime rooftops – Amber
    { color: "#f59e0b", opacity: 0.55 }, // Good – Deep Amber
    { color: "#fcd34d", opacity: 0.45 }, // Moderate – Light Amber
  ];

  for (let i = 0; i < numZones; i++) {
    const angle = ((pseudoSeed * (i + 1)) % 360) * (Math.PI / 180);
    const distance = (0.01 + ((pseudoSeed * (i + 2)) % 50) / 1000) * spreadMult;
    const lat = city.coordinates.lat + Math.cos(angle) * distance;
    const lng = city.coordinates.lng + Math.sin(angle) * distance;
    const points = 4 + (pseudoSeed % 3);
    const radiusX = 0.006 + ((pseudoSeed * i) % 10) / 1000;
    const radiusY = 0.005 + ((pseudoSeed * (i + 1)) % 10) / 1000;
    const style = potentialColors[i % 3];

    zones.push(
      <Polygon
        key={`solar-${i}`}
        positions={generatePolygon(lat, lng, radiusX, radiusY, points, angle)}
        pathOptions={{ color: style.color, fillColor: style.color, fillOpacity: style.opacity, weight: 1 }}
      />
    );
  }

  return <FeatureGroup>{zones}</FeatureGroup>;
}

export function SyntheticAqiLayer({ city }: { city: CityClimateProfile }) {
  const aqi = city.airQualityIndex;
  const pseudoSeed = Math.floor(Math.abs(city.coordinates.lat * city.coordinates.lng)) + 999;
  const scale = getCityScale(city.name);
  const baseZones = { "Mega": 10, "Large": 7, "Medium": 5, "Small": 4 }[scale] ?? 6;
  const numZones = baseZones + (pseudoSeed % 4);
  const spreadMult = { "Mega": 2.8, "Large": 1.8, "Medium": 1.2, "Small": 0.7 }[scale] ?? 1.5;
  const zones = [];

  // CPCB-accurate AQI colour palette based on actual city AQI
  // High-pollution zones are darker/redder, peripheral zones lighter
  const baseColor = getAqiColor(aqi);

  // Gradient: centre zones use actual AQI colour, outer zones one step better
  const centerColor  = getAqiColor(aqi);
  const outerColor   = getAqiColor(Math.max(0, aqi - 80));  // one tier lighter for outskirts

  for (let i = 0; i < numZones; i++) {
    const angle = ((pseudoSeed * (i + 7)) % 360) * (Math.PI / 180);
    const distance = (0.008 + ((pseudoSeed * (i + 3)) % 70) / 1000) * spreadMult;
    const lat = city.coordinates.lat + Math.cos(angle) * distance;
    const lng = city.coordinates.lng + Math.sin(angle) * distance;
    const points = 8 + (pseudoSeed % 5);
    const radius = 0.018 + ((pseudoSeed * i) % 25) / 1000;

    // Central zones (first half) get actual AQI color; outer zones get lighter shade
    const color = i < numZones / 2 ? centerColor : outerColor;
    const opacity = i < numZones / 2 ? 0.35 : 0.22;

    zones.push(
      <Polygon
        key={`aqi-${i}`}
        positions={generatePolygon(lat, lng, radius, radius * 0.85, points, angle)}
        pathOptions={{ color, fillColor: color, fillOpacity: opacity, weight: 0 }}
      />
    );
  }

  return <FeatureGroup>{zones}</FeatureGroup>;
}
