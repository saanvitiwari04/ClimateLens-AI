import type { Coordinates } from "@/lib/types";
import { calculatePolygonArea, calculateBoundingBoxArea } from "@/lib/geospatial/area-calculator";

const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://lz4.overpass-api.de/api/interpreter",
  "https://z.overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.nchc.org.tw/api/interpreter"
];

let isOverpassOffline = false;

async function fetchWithRetry(query: string, validator: (payload: any) => boolean): Promise<any> {
  if (isOverpassOffline) {
    throw new Error("Overpass endpoints are marked offline from previous failures");
  }
  let lastError: any = null;
  const startTime = Date.now();
  const totalTimeout = 2000; // strict 2-second timeout

  for (const endpoint of OVERPASS_ENDPOINTS) {
    const elapsed = Date.now() - startTime;
    const remaining = totalTimeout - elapsed;
    if (remaining < 150) {
      break; // Stop trying if we have less than 150ms left
    }
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), remaining);
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "User-Agent": "ClimateLens-Geospatial-Upgrade-MVP (amitosh@climatelens.ai)"
        },
        body: new URLSearchParams({ data: query }).toString(),
        signal: controller.signal
      });
      clearTimeout(id);
      if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`Returned status ${response.status} ${response.statusText}: ${text}`);
      }
      const payload = await response.json();
      if (!validator(payload)) {
        throw new Error("Validation failed (empty or incomplete elements array)");
      }
      return payload;
    } catch (e: any) {
      lastError = e;
      console.warn(`Endpoint ${endpoint} failed:`, e.message || e);
    }
  }
  isOverpassOffline = true;
  throw lastError || new Error("All Overpass endpoints failed or returned invalid data");
}

export function isPointInPolygon(point: Coordinates, polygon: Coordinates[]): boolean {
  let inside = false;
  const x = point.lng;
  const y = point.lat;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lng, yi = polygon[i].lat;
    const xj = polygon[j].lng, yj = polygon[j].lat;
    const intersect = ((yi > y) !== (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

export function isPointInBoundary(point: Coordinates, boundary?: Coordinates[][]): boolean {
  if (!boundary || boundary.length === 0) return true;
  for (const ring of boundary) {
    if (isPointInPolygon(point, ring)) {
      return true;
    }
  }
  return false;
}

export function parseGeoJsonToBoundary(geojson: any): Coordinates[][] {
  const polygons: Coordinates[][] = [];
  if (!geojson) return [];
  
  if (geojson.type === "Polygon") {
    const rings = geojson.coordinates;
    if (rings && rings.length > 0) {
      const outerRing = rings[0].map((coord: any) => ({
        lat: Number(coord[1]),
        lng: Number(coord[0])
      }));
      polygons.push(outerRing);
    }
  } else if (geojson.type === "MultiPolygon") {
    const multipoly = geojson.coordinates;
    if (multipoly) {
      for (const poly of multipoly) {
        if (poly && poly.length > 0) {
          const outerRing = poly[0].map((coord: any) => ({
            lat: Number(coord[1]),
            lng: Number(coord[0])
          }));
          polygons.push(outerRing);
        }
      }
    }
  }
  return polygons;
}

export function simplifyPolygon(points: Coordinates[], tolerance = 0.0005): Coordinates[] {
  if (points.length <= 2) return points;
  
  const getSqSegDist = (p: Coordinates, p1: Coordinates, p2: Coordinates) => {
    let x = p1.lng;
    let y = p1.lat;
    let dx = p2.lng - x;
    let dy = p2.lat - y;

    if (dx !== 0 || dy !== 0) {
      const t = ((p.lng - x) * dx + (p.lat - y) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x = p2.lng;
        y = p2.lat;
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }

    dx = p.lng - x;
    dy = p.lat - y;
    return dx * dx + dy * dy;
  };

  const simplifyDPStep = (pts: Coordinates[], first: number, last: number, sqTolerance: number, simplified: Coordinates[]) => {
    let maxSqDist = sqTolerance;
    let index = -1;

    for (let i = first + 1; i < last; i++) {
      const sqDist = getSqSegDist(pts[i], pts[first], pts[last]);
      if (sqDist > maxSqDist) {
        index = i;
        maxSqDist = sqDist;
      }
    }

    if (index !== -1) {
      simplifyDPStep(pts, first, index, sqTolerance, simplified);
      simplified.push(pts[index]);
      simplifyDPStep(pts, index, last, sqTolerance, simplified);
    }
  };

  const sqTolerance = tolerance * tolerance;
  const first = 0;
  const last = points.length - 1;
  const simplified: Coordinates[] = [points[first]];
  simplifyDPStep(points, first, last, sqTolerance, simplified);
  simplified.push(points[last]);
  return simplified;
}

export function calculateBoundaryArea(boundary: Coordinates[][], centerLat: number): number {
  let totalArea = 0;
  for (const ring of boundary) {
    totalArea += calculatePolygonArea(ring, centerLat);
  }
  return totalArea;
}

export type OsmFeatureKind = "building" | "road" | "hotLandUse" | "vegetation" | "water";

export interface OsmFeature {
  id: number;
  kind: OsmFeatureKind;
  coordinates: Coordinates;
  tags: Record<string, string>;
}

interface OverpassElement {
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
}

export async function fetchUrbanSignals(center: Coordinates, radiusMeters = 5500): Promise<OsmFeature[]> {
  const query = `
    [out:json][timeout:2];
    (
      way["building"](around:${radiusMeters},${center.lat},${center.lng});
      way["highway"](around:${radiusMeters},${center.lat},${center.lng});
      way["landuse"~"industrial|commercial|retail|residential"](around:${radiusMeters},${center.lat},${center.lng});
      way["landuse"~"forest|grass|meadow|recreation_ground"](around:${radiusMeters},${center.lat},${center.lng});
      way["leisure"~"park|garden"](around:${radiusMeters},${center.lat},${center.lng});
      way["natural"~"wood|scrub|grassland|water"](around:${radiusMeters},${center.lat},${center.lng});
      way["waterway"](around:${radiusMeters},${center.lat},${center.lng});
      relation["landuse"~"industrial|commercial|retail|residential|forest|grass|meadow"](around:${radiusMeters},${center.lat},${center.lng});
      relation["natural"~"wood|scrub|grassland|water"](around:${radiusMeters},${center.lat},${center.lng});
      relation["leisure"~"park|garden"](around:${radiusMeters},${center.lat},${center.lng});
    );
    out center tags 450;
  `;

  const payload = await fetchWithRetry(
    query,
    (p: any) => p && Array.isArray(p.elements)
  ) as { elements?: OverpassElement[] };
  
  return (payload.elements ?? [])
    .map(toFeature)
    .filter((feature): feature is OsmFeature => Boolean(feature));
}

function toFeature(element: OverpassElement): OsmFeature | null {
  const tags = element.tags ?? {};
  const lat = element.center?.lat ?? element.lat;
  const lng = element.center?.lon ?? element.lon;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

  const kind = classify(tags);
  if (!kind) return null;

  return {
    id: element.id,
    kind,
    coordinates: { lat: lat as number, lng: lng as number },
    tags
  };
}

function classify(tags: Record<string, string>): OsmFeatureKind | null {
  if (tags.building) return "building";
  if (tags.highway) return "road";
  if (tags.natural === "water" || tags.waterway) return "water";
  if (["wood", "scrub", "grassland"].includes(tags.natural ?? "")) return "vegetation";
  if (["forest", "grass", "meadow", "recreation_ground"].includes(tags.landuse ?? "")) return "vegetation";
  if (["park", "garden"].includes(tags.leisure ?? "")) return "vegetation";
  if (["industrial", "commercial", "retail", "residential"].includes(tags.landuse ?? "")) return "hotLandUse";
  return null;
}

export interface CityAreaMetrics {
  totalAreaSqMeters: number;
  vegetatedAreaSqMeters: number;
  waterAreaSqMeters: number;
  buildingAreaSqMeters: number;
  isAvailable: boolean;
  isFallback?: boolean;
}

interface OverpassGeomElement {
  type: string;
  tags?: Record<string, string>;
  geometry?: { lat: number; lon: number }[];
  members?: { type: string; role: string; geometry?: { lat: number; lon: number }[] }[];
}

export async function fetchCityAreaMetrics(bbox: string[], boundary?: Coordinates[][]): Promise<CityAreaMetrics> {
  if (!bbox || bbox.length !== 4) {
    return { totalAreaSqMeters: 0, vegetatedAreaSqMeters: 0, waterAreaSqMeters: 0, buildingAreaSqMeters: 0, isAvailable: false };
  }
  
  const latMin = bbox[0];
  const latMax = bbox[1];
  const lonMin = bbox[2];
  const lonMax = bbox[3];
  const centerLat = (parseFloat(latMin) + parseFloat(latMax)) / 2;

  // Use boundary area if available, else bounding box area
  let totalAreaSqMeters = 0;
  if (boundary && boundary.length > 0) {
    totalAreaSqMeters = calculateBoundaryArea(boundary, centerLat);
  } else {
    totalAreaSqMeters = calculateBoundingBoxArea(bbox);
  }

  // We fetch ways with geometry for vegetation, water, and buildings
  const query = `
    [out:json][timeout:25];
    (
      way["landuse"~"forest|grass|meadow|recreation_ground"](${latMin},${lonMin},${latMax},${lonMax});
      way["leisure"~"park|garden"](${latMin},${lonMin},${latMax},${lonMax});
      way["natural"~"wood|scrub|grassland"](${latMin},${lonMin},${latMax},${lonMax});
      
      way["natural"="water"](${latMin},${lonMin},${latMax},${lonMax});
      way["waterway"](${latMin},${lonMin},${latMax},${lonMax});
      way["water"](${latMin},${lonMin},${latMax},${lonMax});
      
      way["building"](${latMin},${lonMin},${latMax},${lonMax});
    );
    out geom 3000;
  `;

  try {
    const payload = await fetchWithRetry(
      query,
      (p: any) => p && Array.isArray(p.elements) && p.elements.length > 0
    ) as { elements?: OverpassGeomElement[] };
    let vegetatedAreaSqMeters = 0;
    let waterAreaSqMeters = 0;
    let buildingAreaSqMeters = 0;

    const elements = payload.elements ?? [];
    console.log(`Overpass returned ${elements.length} elements for area metrics.`);
    let passedBoundaryCount = 0;

    for (const el of elements) {
      if (!el.geometry || el.geometry.length < 3) continue;
      
      const coords = el.geometry.map(g => ({ lat: g.lat, lng: g.lon }));
      
      // Filter out elements whose center is not inside the municipal boundary
      const centerPt = coords[0];
      if (boundary && boundary.length > 0 && !isPointInBoundary(centerPt, boundary)) {
        continue;
      }
      passedBoundaryCount++;

      const area = calculatePolygonArea(coords, centerLat);
      
      const tags = el.tags || {};
      const isWater = tags.natural === "water" || tags.waterway || tags.water;
      const isBuilding = !!tags.building;
      
      if (isBuilding) {
        buildingAreaSqMeters += area;
      } else if (isWater) {
        waterAreaSqMeters += area;
      } else {
        vegetatedAreaSqMeters += area;
      }
    }

    console.log(`Passed boundary filter: ${passedBoundaryCount} / ${elements.length} elements.`);

    return {
      totalAreaSqMeters,
      vegetatedAreaSqMeters,
      waterAreaSqMeters,
      buildingAreaSqMeters,
      isAvailable: true
    };
  } catch (error) {
    console.warn("fetchCityAreaMetrics failed, using geographic fallback estimation:", error);
    
    // Calculate total area from bounding box or boundary if possible
    let totalAreaSqMeters = 0;
    if (boundary && boundary.length > 0) {
      totalAreaSqMeters = calculateBoundaryArea(boundary, centerLat);
    } else {
      totalAreaSqMeters = calculateBoundingBoxArea(bbox);
    }

    // Determine scale multipliers based on total area
    let bldgMult = 0.20;
    let roadMult = 0.22;
    let vegMult = 0.22;
    let waterMult = 0.04;

    if (totalAreaSqMeters > 800 * 1000 * 1000) { // Mega
      bldgMult = 0.40;
      roadMult = 0.35;
      vegMult = 0.12;
      waterMult = 0.02;
    } else if (totalAreaSqMeters > 300 * 1000 * 1000) { // Large
      bldgMult = 0.30;
      roadMult = 0.28;
      vegMult = 0.18;
      waterMult = 0.03;
    } else if (totalAreaSqMeters > 80 * 1000 * 1000) { // Medium
      bldgMult = 0.20;
      roadMult = 0.22;
      vegMult = 0.22;
      waterMult = 0.04;
    } else { // Small
      bldgMult = 0.12;
      roadMult = 0.15;
      vegMult = 0.28;
      waterMult = 0.05;
    }

    return {
      totalAreaSqMeters,
      vegetatedAreaSqMeters: totalAreaSqMeters * vegMult,
      waterAreaSqMeters: totalAreaSqMeters * waterMult,
      buildingAreaSqMeters: totalAreaSqMeters * bldgMult,
      isAvailable: true,
      isFallback: true
    };
  }
}

export async function fetchCityUrbanSignals(bbox: string[], boundary?: Coordinates[][]): Promise<OsmFeature[]> {
  if (!bbox || bbox.length !== 4) return [];
  const [latMin, latMax, lonMin, lonMax] = bbox;
  const query = `
    [out:json][timeout:25];
    (
      way["building"](${latMin},${lonMin},${latMax},${lonMax});
      way["highway"](${latMin},${lonMin},${latMax},${lonMax});
      way["landuse"~"industrial|commercial|retail|residential"](${latMin},${lonMin},${latMax},${lonMax});
      way["landuse"~"forest|grass|meadow|recreation_ground"](${latMin},${lonMin},${latMax},${lonMax});
      way["leisure"~"park|garden"](${latMin},${lonMin},${latMax},${lonMax});
      way["natural"~"wood|scrub|grassland|water"](${latMin},${lonMin},${latMax},${lonMax});
      way["waterway"](${latMin},${lonMin},${latMax},${lonMax});
    );
    out center tags 3000;
  `;

  try {
    const payload = await fetchWithRetry(
      query,
      (p: any) => p && Array.isArray(p.elements) && p.elements.length > 0
    ) as { elements?: OverpassElement[] };
    let features = (payload.elements ?? [])
      .map(toFeature)
      .filter((feature): feature is OsmFeature => Boolean(feature));

    if (boundary && boundary.length > 0) {
      features = features.filter(f => isPointInBoundary(f.coordinates, boundary));
    }
    return features;
  } catch (error) {
    console.error("fetchCityUrbanSignals failed:", error);
    return [];
  }
}
