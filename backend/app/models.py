from pydantic import BaseModel


class Coordinates(BaseModel):
    lat: float
    lng: float


class ClimateMetric(BaseModel):
    label: str
    value: str
    trend: str
    status: str


class HotspotSignals(BaseModel):
    roadDensity: float
    buildingDensity: float
    landUseHeat: float
    vegetationProximity: float
    waterProximity: float


class LocalRecommendation(BaseModel):
    name: str
    score: int
    rationale: str


class Hotspot(BaseModel):
    id: str
    name: str
    coordinates: Coordinates
    radiusMeters: int | None = None
    averageTemperatureC: float
    riskCategory: str
    suggestedAction: str
    signals: HotspotSignals | None = None
    recommendations: list[LocalRecommendation] | None = None
    confidenceScore: str | None = None


class CityClimateProfile(BaseModel):
    id: str
    name: str
    state: str
    country: str
    displayName: str | None = None
    profileType: str | None = None
    dataNotice: str | None = None
    coordinates: Coordinates
    metrics: list[ClimateMetric]
    climateScore: int
    greenCoverPercent: float
    heatRiskIndex: int
    solarPotentialMw: int
    airQualityIndex: int
    hotspots: list[Hotspot]
    layerSummaries: dict[str, str]


class GeocodedLocation(BaseModel):
    id: str
    name: str
    state: str
    country: str
    displayName: str
    coordinates: Coordinates
