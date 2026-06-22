import type { Coordinates } from "@/lib/types";

export function calculatePolygonArea(coords: Coordinates[], centerLat: number): number {
  if (coords.length < 3) return 0;
  const R = 6371000; // Earth radius in meters
  const cosLat = Math.cos(centerLat * Math.PI / 180);
  
  const projected = coords.map(c => ({
    x: c.lng * Math.PI / 180 * R * cosLat,
    y: c.lat * Math.PI / 180 * R
  }));

  let area = 0;
  for (let i = 0; i < projected.length; i++) {
    const j = (i + 1) % projected.length;
    area += projected[i].x * projected[j].y - projected[j].x * projected[i].y;
  }
  
  return Math.abs(area / 2);
}

export function calculateBoundingBoxArea(bbox: string[]): number {
  // bbox from Nominatim is [latMin, latMax, lonMin, lonMax]
  if (!bbox || bbox.length !== 4) return 0;
  const latMin = parseFloat(bbox[0]);
  const latMax = parseFloat(bbox[1]);
  const lonMin = parseFloat(bbox[2]);
  const lonMax = parseFloat(bbox[3]);
  
  const coords: Coordinates[] = [
    { lat: latMin, lng: lonMin },
    { lat: latMax, lng: lonMin },
    { lat: latMax, lng: lonMax },
    { lat: latMin, lng: lonMax }
  ];
  const centerLat = (latMin + latMax) / 2;
  return calculatePolygonArea(coords, centerLat);
}
