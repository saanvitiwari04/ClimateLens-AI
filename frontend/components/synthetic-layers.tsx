"use client";

import { Polygon, FeatureGroup } from "react-leaflet";
import type { CityClimateProfile } from "@/lib/types";
import { getCityScale } from "@/lib/roi-engine";

// Generate a polygon offset from a center point
const generatePolygon = (lat: number, lng: number, radiusX: number, radiusY: number, points: number, angleOffset: number) => {
  const positions: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2 + angleOffset;
    // Add some noise to make it less perfectly circular/rectangular
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
  const baseZones = {"Mega": 12, "Large": 8, "Medium": 6, "Small": 4}[scale];
  const numZones = baseZones + (pseudoSeed % 4);
  const spreadMult = {"Mega": 2.5, "Large": 1.5, "Medium": 1.0, "Small": 0.5}[scale];
  const zones = [];

  const potentialColors = [
    { color: "#eab308", opacity: 0.6 }, // High (Yellow)
    { color: "#f59e0b", opacity: 0.5 }, // Medium (Amber)
    { color: "#f97316", opacity: 0.4 }, // Low (Orange)
  ];

  for (let i = 0; i < numZones; i++) {
    const angle = ((pseudoSeed * (i + 1)) % 360) * (Math.PI / 180);
    const distance = (0.01 + ((pseudoSeed * (i + 2)) % 50) / 1000) * spreadMult;
    
    const lat = city.coordinates.lat + Math.cos(angle) * distance;
    const lng = city.coordinates.lng + Math.sin(angle) * distance;
    
    // Solar zones tend to be blocky (building footprints/industrial parks)
    const points = 4 + (pseudoSeed % 3); // 4 to 6 points
    const radiusX = 0.005 + ((pseudoSeed * i) % 10) / 1000;
    const radiusY = 0.005 + ((pseudoSeed * (i+1)) % 10) / 1000;
    
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
  const pseudoSeed = Math.floor(Math.abs(city.coordinates.lat * city.coordinates.lng)) + 999;
  const scale = getCityScale(city.name);
  const baseZones = {"Mega": 8, "Large": 6, "Medium": 4, "Small": 3}[scale];
  const numZones = baseZones + (pseudoSeed % 5);
  const spreadMult = {"Mega": 2.5, "Large": 1.5, "Medium": 1.0, "Small": 0.5}[scale];
  const zones = [];

  const aqiColors = [
    "#22c55e", // Good (Green)
    "#eab308", // Moderate (Yellow)
    "#f97316", // Unhealthy for Sensitive (Orange)
    "#ef4444", // Unhealthy (Red)
    "#a855f7", // Severe (Purple)
  ];

  for (let i = 0; i < numZones; i++) {
    const angle = ((pseudoSeed * (i + 7)) % 360) * (Math.PI / 180);
    const distance = (0.01 + ((pseudoSeed * (i + 3)) % 80) / 1000) * spreadMult;
    
    const lat = city.coordinates.lat + Math.cos(angle) * distance;
    const lng = city.coordinates.lng + Math.sin(angle) * distance;
    
    // AQI zones are more fluid/blob-like
    const points = 8 + (pseudoSeed % 6); // 8 to 13 points
    const radius = 0.02 + ((pseudoSeed * i) % 30) / 1000; // 0.02 to 0.05
    
    const colorIdx = (pseudoSeed + i) % aqiColors.length;
    const color = aqiColors[colorIdx];
    
    zones.push(
      <Polygon 
        key={`aqi-${i}`} 
        positions={generatePolygon(lat, lng, radius, radius, points, angle)}
        pathOptions={{ color: color, fillColor: color, fillOpacity: 0.3, weight: 0 }}
      />
    );
  }

  return <FeatureGroup>{zones}</FeatureGroup>;
}
