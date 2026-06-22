import { createLocalRecommendations } from "@/lib/geospatial/intervention-engine";
import { 
  fetchCityUrbanSignals, 
  isPointInBoundary, 
  parseGeoJsonToBoundary, 
  simplifyPolygon,
  type OsmFeature 
} from "@/lib/geospatial/overpass";
import { reverseGeocode } from "@/lib/geocoding/nominatim";
import { getCachedItem, setCachedItem } from "@/lib/utils/cache";
import type { Coordinates, GeocodedLocation, Hotspot, HotspotSignals } from "@/lib/types";

interface LocalityDef {
  name: string;
  lat: number;
  lng: number;
}

const LOCALITY_DATABASE: Record<string, LocalityDef[]> = {
  "delhi": [
    { name: "Connaught Place", lat: 28.6304, lng: 77.2177 },
    { name: "Civil Lines", lat: 28.6814, lng: 77.2217 },
    { name: "Karol Bagh", lat: 28.6514, lng: 77.1907 },
    { name: "Dwarka", lat: 28.5823, lng: 77.0500 },
    { name: "Saket", lat: 28.5244, lng: 77.2066 },
    { name: "Okhla", lat: 28.5358, lng: 77.2831 },
    { name: "Rohini", lat: 28.7159, lng: 77.1140 },
    { name: "Chandni Chowk", lat: 28.6562, lng: 77.2307 },
    { name: "Rajouri Garden", lat: 28.6415, lng: 77.1209 },
    { name: "Vasant Kunj", lat: 28.5292, lng: 77.1541 }
  ],
  "mumbai": [
    { name: "Bandra", lat: 19.0544, lng: 72.8402 },
    { name: "Andheri", lat: 19.1136, lng: 72.8697 },
    { name: "Colaba", lat: 18.9067, lng: 72.8147 },
    { name: "Dadar", lat: 19.0178, lng: 72.8478 },
    { name: "Kurla", lat: 19.0607, lng: 72.8901 },
    { name: "Powai", lat: 19.1176, lng: 72.9060 },
    { name: "Chembur", lat: 19.0618, lng: 72.8990 },
    { name: "Worli", lat: 19.0117, lng: 72.8184 },
    { name: "Borivali", lat: 19.2290, lng: 72.8573 },
    { name: "Juhu", lat: 19.1075, lng: 72.8263 }
  ],
  "bengaluru": [
    { name: "Electronic City", lat: 12.8452, lng: 77.6722 },
    { name: "Koramangala", lat: 12.9352, lng: 77.6244 },
    { name: "Indiranagar", lat: 12.9784, lng: 77.6408 },
    { name: "Whitefield", lat: 12.9698, lng: 77.7500 },
    { name: "HSR Layout", lat: 12.9103, lng: 77.6450 },
    { name: "Jayanagar", lat: 12.9307, lng: 77.5838 },
    { name: "Hebbal", lat: 13.0354, lng: 77.5988 },
    { name: "Yelahanka", lat: 13.1007, lng: 77.5963 },
    { name: "Malleshwaram", lat: 12.9984, lng: 77.5703 },
    { name: "Rajajinagar", lat: 12.9892, lng: 77.5550 }
  ],
  "hyderabad": [
    { name: "Gachibowli", lat: 17.4401, lng: 78.3489 },
    { name: "Jubilee Hills", lat: 17.4312, lng: 78.4074 },
    { name: "Banjara Hills", lat: 17.4175, lng: 78.4314 },
    { name: "Madhapur", lat: 17.4483, lng: 78.3741 },
    { name: "Secunderabad", lat: 17.4399, lng: 78.4983 },
    { name: "Begumpet", lat: 17.4447, lng: 78.4664 },
    { name: "Kukatpally", lat: 17.4875, lng: 78.3953 },
    { name: "Hitech City", lat: 17.4485, lng: 78.3813 }
  ],
  "chennai": [
    { name: "Adyar", lat: 13.0012, lng: 80.2565 },
    { name: "T. Nagar", lat: 13.0418, lng: 80.2341 },
    { name: "Mylapore", lat: 13.0330, lng: 80.2690 },
    { name: "Velachery", lat: 12.9759, lng: 80.2207 },
    { name: "Nungambakkam", lat: 13.0569, lng: 80.2425 },
    { name: "Anna Nagar", lat: 13.0850, lng: 80.2101 },
    { name: "Guindy", lat: 13.0067, lng: 80.2206 },
    { name: "Tambaram", lat: 12.9229, lng: 80.1275 }
  ],
  "pune": [
    { name: "Kothrud", lat: 18.5074, lng: 73.8077 },
    { name: "Koregaon Park", lat: 18.5362, lng: 73.8940 },
    { name: "Shivajinagar", lat: 18.5308, lng: 73.8474 },
    { name: "Viman Nagar", lat: 18.5679, lng: 73.9143 },
    { name: "Hinjewadi", lat: 18.5913, lng: 73.7389 },
    { name: "Hadapsar", lat: 18.5089, lng: 73.9260 },
    { name: "Aundh", lat: 18.5580, lng: 73.8075 },
    { name: "Baner", lat: 18.5590, lng: 73.7797 }
  ],
  "jaipur": [
    { name: "C-Scheme", lat: 26.9101, lng: 75.8022 },
    { name: "Malviya Nagar", lat: 26.8549, lng: 75.8203 },
    { name: "Vaishali Nagar", lat: 26.9076, lng: 75.7380 },
    { name: "Mansarovar", lat: 26.8530, lng: 75.7554 },
    { name: "Bani Park", lat: 26.9273, lng: 75.7903 },
    { name: "Raja Park", lat: 26.8974, lng: 75.8368 }
  ],
  "lucknow": [
    { name: "Hazratganj", lat: 26.8467, lng: 80.9462 },
    { name: "Gomti Nagar", lat: 26.8488, lng: 80.9991 },
    { name: "Aliganj", lat: 26.8906, lng: 80.9383 },
    { name: "Indira Nagar", lat: 26.8837, lng: 80.9961 },
    { name: "Aminabad", lat: 26.8439, lng: 80.9238 }
  ],
  "varanasi": [
    { name: "Lahurabir", lat: 25.3204, lng: 82.9961 },
    { name: "Sigra", lat: 25.3169, lng: 82.9845 },
    { name: "Lanka", lat: 25.2785, lng: 83.0012 },
    { name: "Assi Ghat", lat: 25.2897, lng: 83.0124 },
    { name: "Cantonment", lat: 25.3340, lng: 82.9730 },
    { name: "Sarnath", lat: 25.3762, lng: 83.0227 }
  ],
  "ahmedabad": [
    { name: "Satellite", lat: 23.0305, lng: 72.5177 },
    { name: "Vastrapur", lat: 23.0361, lng: 72.5273 },
    { name: "Navrangpura", lat: 23.0365, lng: 72.5611 },
    { name: "Bodakdev", lat: 23.0397, lng: 72.5119 },
    { name: "Ashram Road", lat: 23.0402, lng: 72.5715 },
    { name: "Maninagar", lat: 22.9978, lng: 72.6012 }
  ],
  "indore": [
    { name: "Vijay Nagar", lat: 22.7533, lng: 75.8937 },
    { name: "Palasia", lat: 22.7244, lng: 75.8839 },
    { name: "Rajendra Nagar", lat: 22.6806, lng: 75.8302 },
    { name: "Saket", lat: 22.7301, lng: 75.8924 },
    { name: "Khajrana", lat: 22.7291, lng: 75.9083 }
  ],
  "bhopal": [
    { name: "MP Nagar", lat: 23.2324, lng: 77.4302 },
    { name: "Arera Colony", lat: 23.2107, lng: 77.4354 },
    { name: "Kolar Road", lat: 23.1672, lng: 77.4190 },
    { name: "TT Nagar", lat: 23.2435, lng: 77.4002 },
    { name: "Habibganj", lat: 23.2198, lng: 77.4423 }
  ],
  "surat": [
    { name: "Adajan", lat: 21.1960, lng: 72.7954 },
    { name: "Vesu", lat: 21.1398, lng: 72.7758 },
    { name: "Ghoddod Road", lat: 21.1764, lng: 72.8021 },
    { name: "Piplod", lat: 21.1683, lng: 72.7794 },
    { name: "Varachha", lat: 21.2185, lng: 72.8702 }
  ],
  "noida": [
    { name: "Sector 62", lat: 28.6273, lng: 77.3725 },
    { name: "Sector 18", lat: 28.5708, lng: 77.3261 },
    { name: "Sector 15", lat: 28.5830, lng: 77.3130 },
    { name: "Sector 50", lat: 28.5714, lng: 77.3685 },
    { name: "Sector 137", lat: 28.5034, lng: 77.4150 }
  ],
  "gurugram": [
    { name: "DLF Phase 3", lat: 28.4905, lng: 77.0901 },
    { name: "Sector 29", lat: 28.4682, lng: 77.0631 },
    { name: "Sector 45", lat: 28.4412, lng: 77.0682 },
    { name: "Sector 56", lat: 28.4185, lng: 77.1002 },
    { name: "Golf Course Road", lat: 28.4410, lng: 77.0984 },
    { name: "Udyog Vihar", lat: 28.5002, lng: 77.0784 }
  ],
  "patna": [
    { name: "Kankarbagh", lat: 25.5990, lng: 85.1504 },
    { name: "Boring Road", lat: 25.6174, lng: 85.1202 },
    { name: "Bailey Road", lat: 25.6110, lng: 85.1012 },
    { name: "Patliputra Colony", lat: 25.6268, lng: 85.1054 }
  ],
  "chandigarh": [
    { name: "Sector 17", lat: 30.7410, lng: 76.7823 },
    { name: "Sector 35", lat: 30.7240, lng: 76.7602 },
    { name: "Sector 22", lat: 30.7300, lng: 76.7702 },
    { name: "Sector 8", lat: 30.7490, lng: 76.7902 },
    { name: "Manimajra", lat: 30.7220, lng: 76.8350 }
  ]
};

export function getAdaptiveCellSize(cityName: string): number {
  const name = cityName.toLowerCase();
  
  // Metro Cities (1km = 1000m)
  const metros = ["delhi", "mumbai", "bengaluru", "hyderabad", "chennai", "kolkata"];
  if (metros.some(m => name.includes(m))) {
    return 1000;
  }
  
  // Tier 2 / Medium Cities (750m)
  const tier2 = ["pune", "jaipur", "lucknow", "ahmedabad", "indore", "bhopal", "surat", "noida", "gurugram", "patna", "chandigarh"];
  if (tier2.some(t => name.includes(t))) {
    return 750;
  }
  
  // Tier 3 / Small Cities (500m)
  return 500;
}

export function getFallbackBoundary(center: Coordinates, cityName: string): Coordinates[][] {
  const name = cityName.toLowerCase();
  // Set scale span
  const metros = ["delhi", "mumbai", "bengaluru", "hyderabad", "chennai", "kolkata"];
  const tier2 = ["pune", "jaipur", "lucknow", "ahmedabad", "indore", "bhopal", "surat", "noida", "gurugram", "patna", "chandigarh"];
  
  const halfSpan = metros.some(m => name.includes(m)) 
    ? 0.15 
    : (tier2.some(t => name.includes(t)) ? 0.08 : 0.05);

  const latMin = center.lat - halfSpan;
  const latMax = center.lat + halfSpan;
  const lngMin = center.lng - halfSpan;
  const lngMax = center.lng + halfSpan;
  
  return [[
    { lat: latMin, lng: lngMin },
    { lat: latMax, lng: lngMin },
    { lat: latMax, lng: lngMax },
    { lat: latMin, lng: lngMax },
    { lat: latMin, lng: lngMin }
  ]];
}

export function generateAdaptiveCityGrid(
  boundary: Coordinates[][], 
  center: Coordinates, 
  initialCellSizeMeters: number
): { grid: Coordinates[], cellSizeUsed: number } {
  let cellSize = initialCellSizeMeters;
  let attempts = 0;
  
  // Find bounding box of boundary
  let latMin = 90, latMax = -90, lngMin = 180, lngMax = -180;
  for (const ring of boundary) {
    for (const pt of ring) {
      if (pt.lat < latMin) latMin = pt.lat;
      if (pt.lat > latMax) latMax = pt.lat;
      if (pt.lng < lngMin) lngMin = pt.lng;
      if (pt.lng > lngMax) lngMax = pt.lng;
    }
  }

  while (attempts < 5) {
    const latStep = cellSize / 111000;
    const lngStep = cellSize / (111000 * Math.cos(center.lat * Math.PI / 180));
    
    const grid: Coordinates[] = [];
    for (let lat = latMin + latStep / 2; lat <= latMax; lat += latStep) {
      for (let lng = lngMin + lngStep / 2; lng <= lngMax; lng += lngStep) {
        const pt = { lat, lng };
        if (isPointInBoundary(pt, boundary)) {
          grid.push(pt);
        }
      }
    }
    
    if (grid.length <= 300) {
      return { grid, cellSizeUsed: cellSize };
    }
    
    // Inundation protection: increase size to reduce grid cells count
    cellSize = Math.round(cellSize * 1.3);
    attempts++;
  }
  
  // Fallback
  return { grid: [], cellSizeUsed: cellSize };
}

function getBoundaryBBox(boundary: Coordinates[][]): string[] {
  let latMin = 90, latMax = -90, lngMin = 180, lngMax = -180;
  for (const ring of boundary) {
    for (const pt of ring) {
      if (pt.lat < latMin) latMin = pt.lat;
      if (pt.lat > latMax) latMax = pt.lat;
      if (pt.lng < lngMin) lngMin = pt.lng;
      if (pt.lng > lngMax) lngMax = pt.lng;
    }
  }
  return [
    latMin.toString(),
    latMax.toString(),
    lngMin.toString(),
    lngMax.toString()
  ];
}

function getLocalLocality(cityName: string, coord: Coordinates): string | null {
  const normCity = cityName.toLowerCase();
  const cityKey = Object.keys(LOCALITY_DATABASE).find(k => normCity.includes(k) || k.includes(normCity));
  if (!cityKey) return null;
  
  const localities = LOCALITY_DATABASE[cityKey];
  let minDistance = 4500; // max 4.5km
  let bestLocality: string | null = null;
  
  for (const loc of localities) {
    const d = distanceMeters(coord, { lat: loc.lat, lng: loc.lng });
    if (d < minDistance) {
      minDistance = d;
      bestLocality = loc.name;
    }
  }
  return bestLocality;
}

function scoreGridCellSignals(C: Coordinates, cellSize: number, features: OsmFeature[]): HotspotSignals {
  const countNear = (kind: OsmFeature["kind"], radius: number) =>
    features.filter((feature) => feature.kind === kind && distanceMeters(C, feature.coordinates) <= radius).length;
    
  const nearest = (kind: OsmFeature["kind"], fallbackMeters: number) => {
    const distances = features
      .filter((feature) => feature.kind === kind)
      .map((feature) => distanceMeters(C, feature.coordinates));
    return distances.length > 0 ? Math.min(...distances) : fallbackMeters;
  };

  const buildingDensity = normalize(countNear("building", cellSize), 0, 15);
  const roadDensity = normalize(countNear("road", cellSize), 0, 10);
  const landUseHeat = normalize(countNear("hotLandUse", cellSize), 0, 5);
  
  const vegetationProximity = 1 - normalize(nearest("vegetation", 1500), 50, 1500);
  const waterProximity = 1 - normalize(nearest("water", 2000), 50, 2000);

  return {
    roadDensity,
    buildingDensity,
    landUseHeat,
    vegetationProximity: clamp01(vegetationProximity),
    waterProximity: clamp01(waterProximity)
  };
}

function computeCellScore(signals: HotspotSignals, baseTempC: number, baseAQI: number): number {
  const greenDeficit = 1 - signals.vegetationProximity;
  const waterDeficit = 1 - signals.waterProximity;
  
  const tempFactor = clamp01((baseTempC - 20) / 25);
  const heatSignal = clamp01(0.6 * signals.landUseHeat + 0.4 * tempFactor);
  const aqiContribution = clamp01(baseAQI / 300);
  
  const score = 
    (0.30 * signals.buildingDensity) +
    (0.25 * greenDeficit) +
    (0.15 * signals.roadDensity) +
    (0.15 * heatSignal) +
    (0.10 * waterDeficit) +
    (0.05 * aqiContribution);
    
  return clamp01(score);
}

function getHotspotNameDetails(signals: HotspotSignals, baseAQI: number) {
  const greenDeficit = 1 - signals.vegetationProximity;
  const waterDeficit = 1 - signals.waterProximity;
  
  const values = [
    { val: signals.buildingDensity, reason: "Built-Up Stress", type: "Zone" },
    { val: greenDeficit, reason: "Green Deficit", type: "Region" },
    { val: signals.roadDensity, reason: "High Density", type: "Corridor" },
    { val: signals.landUseHeat, reason: "Urban Heat", type: "Zone" },
    { val: waterDeficit, reason: "Water Stress", type: "Zone" },
    { val: baseAQI / 300, reason: "AQI Risk", type: "Zone" }
  ];
  
  values.sort((a, b) => b.val - a.val);
  return { reason: values[0].reason, type: values[0].type };
}

function toHotspotObject(
  location: GeocodedLocation,
  baseTempC: number,
  baseAQI: number,
  candidate: { coordinates: Coordinates, signals: HotspotSignals, score: number },
  index: number,
  localityName: string | null,
  riskCategory: "Critical" | "Severe"
): Hotspot {
  const details = getHotspotNameDetails(candidate.signals, baseAQI);
  
  const name = localityName
    ? `${localityName} — ${details.reason}`
    : `${location.name} Heat Risk Zone ${index + 1}`;

  const mappedCategory = riskCategory === "Critical" ? "Severe" : "High";

  return {
    id: `${location.id}-hotspot-${riskCategory.toLowerCase()}-${index + 1}`,
    name,
    coordinates: candidate.coordinates,
    radiusMeters: Math.round(500 + candidate.score * 1000),
    averageTemperatureC: Math.round((baseTempC + candidate.score * 5.0) * 10) / 10,
    riskCategory: mappedCategory,
    signals: candidate.signals,
    recommendations: createLocalRecommendations(candidate.signals),
    suggestedAction: createLocalRecommendations(candidate.signals)[0]?.rationale ?? "Prioritize local environmental risk mitigation.",
    hotspotType: "Real",
    confidenceScore: "High"
  };
}

export async function generateGeospatialHotspots(
  location: GeocodedLocation,
  baseTempC: number,
  baseAQI: number
): Promise<Hotspot[]> {
  console.log("Generating city-wide hotspots for", location.name);
  
  let boundary: Coordinates[][] = [];
  if (location.geojson) {
    boundary = parseGeoJsonToBoundary(location.geojson);
  }
  
  if (boundary.length === 0) {
    const cachedBoundary = getCachedItem<Coordinates[][]>(`boundary-${location.id}`);
    if (cachedBoundary && cachedBoundary.length > 0) {
      boundary = cachedBoundary;
    } else {
      boundary = getFallbackBoundary(location.coordinates, location.name);
      setCachedItem(`boundary-${location.id}`, boundary);
    }
  } else {
    boundary = boundary.map(ring => simplifyPolygon(ring, 0.0005));
    setCachedItem(`boundary-${location.id}`, boundary);
  }
  
  const cellSize = getAdaptiveCellSize(location.name);
  const { grid, cellSizeUsed } = generateAdaptiveCityGrid(boundary, location.coordinates, cellSize);
  console.log(`Generated grid of ${grid.length} cells with size ${cellSizeUsed}m for ${location.name}`);
  
  if (grid.length === 0) {
    return [];
  }
  
  const bbox = getBoundaryBBox(boundary);
  const features = await fetchCityUrbanSignals(bbox, boundary);
  console.log(`Fetched ${features.length} urban signals inside boundary for ${location.name}`);
  
  if (features.length === 0) {
    const candidates = grid.map((cellCoord) => {
      // Deterministic simulation using coordinate hash
      const latHash = Math.abs(Math.sin(cellCoord.lat * 1000 + cellCoord.lng * 2000));
      const lngHash = Math.abs(Math.cos(cellCoord.lng * 1000 + cellCoord.lat * 2000));
      
      const distanceToCenter = distanceMeters(cellCoord, location.coordinates);
      // Higher density towards center
      const centerFactor = Math.max(0, 1 - (distanceToCenter / 15000));
      
      const buildingDensity = clamp01(0.1 + centerFactor * 0.5 + latHash * 0.2);
      const roadDensity = clamp01(0.1 + centerFactor * 0.4 + lngHash * 0.2);
      const landUseHeat = clamp01(0.2 + centerFactor * 0.5 + latHash * 0.1);
      const vegetationProximity = clamp01(0.4 - centerFactor * 0.3 + lngHash * 0.2);
      const waterProximity = clamp01(0.1 + latHash * 0.3);
      
      const signals = {
        buildingDensity,
        roadDensity,
        landUseHeat,
        vegetationProximity,
        waterProximity
      };
      
      const score = computeCellScore(signals, baseTempC, baseAQI);
      return {
        coordinates: cellCoord,
        signals,
        score
      };
    });
    
    const criticalCandidates = candidates
      .filter(c => c.score >= 0.70)
      .sort((a, b) => b.score - a.score);
      
    const severeCandidates = candidates
      .filter(c => c.score >= 0.50 && c.score < 0.70)
      .sort((a, b) => b.score - a.score);
      
    const selectedCritical = selectSeparatedCandidates(criticalCandidates, 2, cellSizeUsed * 1.5);
    const selectedSevere = selectSeparatedCandidates(severeCandidates, 4, cellSizeUsed * 1.5);
    
    const hotspots: Hotspot[] = [];
    
    for (let i = 0; i < selectedCritical.length; i++) {
      const cand = selectedCritical[i];
      const locality = getLocalLocality(location.name, cand.coordinates) || 
                       await reverseGeocode(cand.coordinates.lat, cand.coordinates.lng) ||
                       null;
      const hotspotObj = toHotspotObject(location, baseTempC, baseAQI, cand, i, locality, "Critical");
      hotspotObj.hotspotType = "Derived";
      hotspotObj.confidenceScore = "Medium";
      hotspots.push(hotspotObj);
    }
    
    for (let i = 0; i < selectedSevere.length; i++) {
      const cand = selectedSevere[i];
      const locality = getLocalLocality(location.name, cand.coordinates) || 
                       await reverseGeocode(cand.coordinates.lat, cand.coordinates.lng) ||
                       null;
      const hotspotObj = toHotspotObject(location, baseTempC, baseAQI, cand, i, locality, "Severe");
      hotspotObj.hotspotType = "Derived";
      hotspotObj.confidenceScore = "Medium";
      hotspots.push(hotspotObj);
    }
    
    return hotspots;
  }
  
  const candidates = grid.map((cellCoord) => {
    const signals = scoreGridCellSignals(cellCoord, cellSizeUsed, features);
    const score = computeCellScore(signals, baseTempC, baseAQI);
    return {
      coordinates: cellCoord,
      signals,
      score
    };
  });
  
  const criticalCandidates = candidates
    .filter(c => c.score >= 0.75)
    .sort((a, b) => b.score - a.score);
    
  const severeCandidates = candidates
    .filter(c => c.score >= 0.55 && c.score < 0.75)
    .sort((a, b) => b.score - a.score);
    
  const selectedCritical = selectSeparatedCandidates(criticalCandidates, 10, cellSizeUsed * 1.5);
  const selectedSevere = selectSeparatedCandidates(severeCandidates, 15, cellSizeUsed * 1.5);
  
  const hotspots: Hotspot[] = [];
  
  for (let i = 0; i < selectedCritical.length; i++) {
    const cand = selectedCritical[i];
    const locality = getLocalLocality(location.name, cand.coordinates) || 
                     await reverseGeocode(cand.coordinates.lat, cand.coordinates.lng) ||
                     null;
    hotspots.push(toHotspotObject(location, baseTempC, baseAQI, cand, i, locality, "Critical"));
  }
  
  for (let i = 0; i < selectedSevere.length; i++) {
    const cand = selectedSevere[i];
    const locality = getLocalLocality(location.name, cand.coordinates) || 
                     await reverseGeocode(cand.coordinates.lat, cand.coordinates.lng) ||
                     null;
    hotspots.push(toHotspotObject(location, baseTempC, baseAQI, cand, i, locality, "Severe"));
  }
  
  return hotspots;
}

function selectSeparatedCandidates(candidates: any[], count: number, minDistance = 1000) {
  const selected: any[] = [];
  for (const candidate of candidates) {
    if (selected.every((item) => distanceMeters(item.coordinates, candidate.coordinates) > minDistance)) {
      selected.push(candidate);
    }
    if (selected.length === count) break;
  }
  return selected.length > 0 ? selected : candidates.slice(0, count);
}

function distanceMeters(a: Coordinates, b: Coordinates) {
  const earthRadius = 6371000;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * earthRadius * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function normalize(value: number, min: number, max: number) {
  return clamp01((value - min) / (max - min));
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}
