export type ClimateLayer = "heat" | "treeCover" | "solar" | "airQuality" | "water";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ClimateMetric {
  label: string;
  value: string | number;
  trend: string;
  status: "strong" | "watch" | "risk" | "unavailable";
  source?: string;
  lastUpdated?: string;
  confidence?: "High" | "Medium" | "Low" | "Estimated" | "Data Derived";
  metricType?: "Real" | "Derived" | "Estimated" | "Unavailable";
}

export interface HotspotSignals {
  roadDensity: number;
  buildingDensity: number;
  landUseHeat: number;
  vegetationProximity: number;
  waterProximity: number;
}

export interface LocalRecommendation {
  name: string;
  score: number;
  rationale: string;
}

export interface Hotspot {
  id: string;
  name: string;
  coordinates: Coordinates;
  radiusMeters?: number;
  averageTemperatureC: number;
  riskCategory: "Moderate" | "High" | "Severe";
  suggestedAction: string;
  signals?: HotspotSignals;
  recommendations?: LocalRecommendation[];
  confidenceScore?: "High" | "Medium" | "Low" | "Estimated" | "Data Derived";
  hotspotType?: "Real" | "Derived" | "Estimated";
}

export interface CityClimateProfile {
  id: string;
  name: string;
  state: string;
  country: string;
  displayName?: string;
  profileType?: "enhanced" | "estimated";
  dataNotice?: string;
  coordinates: Coordinates;
  metrics: ClimateMetric[];
  climateScore: number;
  greenCoverPercent: number;
  waterCoveragePercent?: number | null;
  heatRiskIndex: number;
  solarPotentialMw: number;
  airQualityIndex: number;
  hotspots: Hotspot[];
  layerSummaries: Record<ClimateLayer, string>;
  scoreMethodology?: ClimateScoreMethodology;
  _audit?: Record<string, any>;
  boundary?: Coordinates[][];
  sourceMetadata?: {
    boundarySource: string;
    greenCoverSource: string;
    waterSource: string;
    solarSource: string;
    carbonSource: string;
  };
  lastVerifiedTimestamp?: string;
}

export interface ClimateScoreMethodology {
  heatRiskWeight: number;
  greenCoverWeight: number;
  solarPotentialWeight: number;
  airQualityWeight: number;
  formula: string;
  inputs: {
    heatRiskIndex: number;
    greenCoverPercent: number;
    solarPotentialMw: number;
    airQualityIndex: number;
    waterCoveragePercent?: number | null;
  };
}

export interface GeocodedLocation {
  id: string;
  name: string;
  state: string;
  country: string;
  displayName: string;
  coordinates: Coordinates;
  boundingbox?: string[];
  type?: string;
  geojson?: {
    type: string;
    coordinates: any;
  };
}

export interface InterventionInput {
  trees: number;
  solarPanels: number;
  greenRoofSqm: number;
  reflectiveRoofSqm: number;
}

export interface ImpactResult {
  temperatureReductionC: number;
  carbonReductionTonsPerYear: number;
  greenCoverImprovementPercent: number;
  updatedClimateScore: number;
  recommendations: Array<{
    name: string;
    score: number;
    rationale: string;
  }>;
}

export interface HotspotRecommendationInfo {
  action: string;
  expectedBenefit: string;
  reasoning: string;
}

export interface InterventionROI {
  name: string;
  estimatedTempReductionC: number;
  carbonReductionTonnes: number;
  climateScoreImprovement: number;
  greenCoverImprovementPercent: number;
  impactScore: number;
  confidence: "High" | "Medium" | "Estimated";
}

export interface ROIProjection {
  currentClimateScore: number;
  projectedClimateScore: number;
  currentGreenCover: number;
  projectedGreenCover: number;
  currentCarbonOutput: number;
  projectedCarbonOutput: number;
  currentTemperature: number;
  projectedTemperature: number;
}

export interface ROIEngineResult {
  interventions: InterventionROI[];
  projection: ROIProjection;
  executiveSummary: string;
}
