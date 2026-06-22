import type { CityClimateProfile, ClimateMetric, GeocodedLocation } from "@/lib/types";
import { createScoreMethodology } from "@/lib/climate-score";
import { generateGeospatialHotspots } from "@/lib/geospatial/hotspot-engine";
import { getRealTimeWeather, getRealTimeAQI, deriveHeatRiskFromTemp } from "@/lib/services/open-meteo";
import { fetchCityAreaMetrics, parseGeoJsonToBoundary } from "@/lib/geospatial/overpass";
import { PRE_CACHED_CITIES } from "@/lib/data/pre-cached-cities";

export async function createFallbackClimateProfile(location: GeocodedLocation): Promise<CityClimateProfile> {
  const [weather, aqiData] = await Promise.all([
    getRealTimeWeather(location.coordinates.lat, location.coordinates.lng),
    getRealTimeAQI(location.coordinates.lat, location.coordinates.lng)
  ]);

  // Check matching pre-cached city profile
  const cachedCity = PRE_CACHED_CITIES.find(c => {
    if (c.name.toLowerCase() === location.name.toLowerCase()) return true;
    if (location.displayName.toLowerCase().includes(c.name.toLowerCase())) return true;
    const latDiff = Math.abs(c.coordinates.lat - location.coordinates.lat);
    const lonDiff = Math.abs(c.coordinates.lng - location.coordinates.lng);
    return latDiff < 0.08 && lonDiff < 0.08;
  });

  if (cachedCity) {
    // ── AQI ──
    let airQualityIndex = 50;
    let aqiConfidence: "High" | "Medium" | "Low" | "Data Derived" = "Data Derived";
    if (aqiData.isAvailable && aqiData.aqi) {
      airQualityIndex = Math.round(aqiData.aqi);
      aqiConfidence = "High";
    }

    const greenCoverPercent = cachedCity.greenCoverPercent;
    const waterCoveragePercent = cachedCity.waterCoveragePercent;
    const baseSolar = cachedCity.solarPotentialMw;
    const carbonEstimate = cachedCity.carbonEstimateTonnes;

    // ── Environmental Heat Risk ──
    let baseHeatIndex = 50;
    if (weather.isAvailable) {
      baseHeatIndex = clamp(Math.round((weather.apparentTemperature - 25) * 3), 0, 100);
    } else if (aqiData.isAvailable) {
      baseHeatIndex = clamp(Math.round(airQualityIndex / 3), 0, 100);
    }

    const aqiPenalty = aqiData.isAvailable ? Math.max(0, (airQualityIndex - 100) * 0.15) : 0;
    const vegDeficitPenalty = Math.max(0, (20 - greenCoverPercent) * 1.5);
    const waterDeficitPenalty = Math.max(0, (5 - waterCoveragePercent) * 2.0);

    const heatRiskIndex = clamp(Math.round(baseHeatIndex + aqiPenalty + vegDeficitPenalty + waterDeficitPenalty), 0, 100);
    const heatRiskCategory = heatRiskIndex >= 80 ? "Severe" : heatRiskIndex >= 60 ? "High" : heatRiskIndex >= 40 ? "Moderate" : "Low";

    let heatRiskValue: string;
    let heatSource: string;
    let heatConfidence: "High" | "Medium" | "Low" | "Data Derived" = "Data Derived";

    if (weather.isAvailable) {
      heatRiskValue = `${Math.round(weather.apparentTemperature)}°C Feels Like`;
      heatSource = "Open-Meteo Atmospheric Dataset";
      heatConfidence = "High";
    } else if (aqiData.isAvailable) {
      heatRiskValue = `${heatRiskCategory} (AQI ${Math.round(aqiData.aqi)})`;
      heatSource = "Open-Meteo Air Quality (proxy)";
      heatConfidence = "Medium";
    } else {
      heatRiskValue = heatRiskCategory;
      heatSource = "ClimateLens Geospatial Intelligence Engine";
    }

    const climateScore = clamp(Math.round(82 - heatRiskIndex * 0.22 + greenCoverPercent * 0.48 - airQualityIndex * 0.08), 10, 95);

    const metrics: ClimateMetric[] = [
      {
        label: "Climate Score",
        value: `${climateScore} / 100`,
        trend: "Derived from real-time environmental factors",
        status: climateScore >= 72 ? "strong" : climateScore >= 60 ? "watch" : "risk",
        source: "ClimateLens Geospatial Intelligence Engine",
        confidence: "High",
        metricType: "Derived"
      },
      {
        label: "Heat Risk",
        value: heatRiskValue!,
        trend: `Categorized as ${heatRiskCategory}`,
        status: heatRiskIndex >= 72 ? "risk" : "watch",
        source: heatSource!,
        lastUpdated: weather.isAvailable ? "Live" : undefined,
        confidence: heatConfidence as any,
        metricType: weather.isAvailable ? "Real" : "Derived"
      },
      {
        label: "Green Cover",
        value: `${greenCoverPercent}%`,
        trend: "Source: OpenStreetMap Geospatial Analysis",
        status: greenCoverPercent >= 24 ? "strong" : greenCoverPercent >= 16 ? "watch" : "risk",
        source: cachedCity.sourceMetadata.greenCoverSource,
        confidence: "High",
        metricType: "Real"
      },
      {
        label: "Water Coverage",
        value: `${waterCoveragePercent}%`,
        trend: "Source: OpenStreetMap Geospatial Analysis",
        status: waterCoveragePercent >= 10 ? "strong" : waterCoveragePercent >= 4 ? "watch" : "risk",
        source: cachedCity.sourceMetadata.waterSource,
        confidence: "High",
        metricType: "Real"
      },
      {
        label: "Solar Potential",
        value: `${baseSolar.toLocaleString()} MW`,
        trend: "Source: OSM Building Footprint Analysis",
        status: "strong",
        source: cachedCity.sourceMetadata.solarSource,
        confidence: "Medium",
        metricType: "Derived"
      },
      {
        label: "Air Quality",
        value: aqiData.isAvailable ? `AQI ${airQualityIndex}` : "Monitoring Offline",
        trend: aqiData.isAvailable ? `PM2.5: ${Math.round(aqiData.pm25)} µg/m³` : "Source: ClimateLens Geospatial Intelligence Engine",
        status: !aqiData.isAvailable ? "watch" : airQualityIndex >= 130 ? "risk" : airQualityIndex >= 80 ? "watch" : "strong",
        source: aqiData.isAvailable ? "Open-Meteo Atmospheric Dataset" : "ClimateLens Geospatial Intelligence Engine",
        lastUpdated: aqiData.isAvailable ? "Live" : undefined,
        confidence: aqiConfidence as any,
        metricType: aqiData.isAvailable ? "Real" : "Derived"
      }
    ];

    const liveTemp = weather.isAvailable ? weather.temperature : 30.0;
    const hotspots = cachedCity.hotspots.map(h => {
      const averageTemperatureC = Math.round((liveTemp + (h.averageTemperatureC - 30.0)) * 10) / 10;
      return { ...h, averageTemperatureC };
    });

    const auditObject = {
      aqi: { value: airQualityIndex, source: aqiData.isAvailable ? "Open-Meteo" : "None", confidence: aqiConfidence, metricType: aqiData.isAvailable ? "Real" : "Derived", timestamp: aqiData.timestamp },
      temperature: { value: weather.temperature, source: weather.isAvailable ? "Open-Meteo" : "None", confidence: heatConfidence, metricType: weather.isAvailable ? "Real" : "Derived", timestamp: weather.timestamp },
      greenCover: { value: greenCoverPercent, source: cachedCity.sourceMetadata.greenCoverSource, confidence: "High", metricType: "Real" },
      waterCoverage: { value: waterCoveragePercent, source: cachedCity.sourceMetadata.waterSource, confidence: "High", metricType: "Real" },
      solarPotential: { value: baseSolar, source: cachedCity.sourceMetadata.solarSource, confidence: "Medium", metricType: "Derived" },
      scaleAnalysis: { areaDegreeSq: 0.15, scale: "Mega City" },
      areaMetrics: cachedCity.areaMetrics
    };

    const profile: CityClimateProfile = {
      id: location.id,
      name: cachedCity.name,
      state: cachedCity.state || location.state,
      country: cachedCity.country || location.country,
      displayName: cachedCity.displayName || location.displayName,
      profileType: "enhanced",
      dataNotice: "Live data powered by Open-Meteo, OpenStreetMap, and ClimateLens Geospatial Intelligence Engine.",
      coordinates: cachedCity.coordinates,
      climateScore,
      greenCoverPercent,
      waterCoveragePercent,
      heatRiskIndex,
      solarPotentialMw: baseSolar,
      airQualityIndex,
      metrics,
      hotspots,
      layerSummaries: {
        heat: "Source: Open-Meteo Atmospheric Dataset + ClimateLens Geospatial Intelligence Engine.",
        treeCover: "Source: OpenStreetMap Geospatial Analysis — natural=wood & landuse=forest polygons.",
        solar: "Source: OSM Building Footprint Analysis — rooftop area estimation.",
        airQuality: "Source: Open-Meteo Atmospheric Dataset — real-time PM2.5, PM10, European AQI.",
        water: "Source: OpenStreetMap Geospatial Analysis — water and waterway geometries."
      },
      _audit: auditObject,
      boundary: cachedCity.boundary,
      sourceMetadata: cachedCity.sourceMetadata,
      lastVerifiedTimestamp: cachedCity.lastVerifiedTimestamp
    };

    return { ...profile, scoreMethodology: createScoreMethodology(profile) };
  }

  // ── Non-cached city: live Overpass retrieval ──
  const boundary = location.geojson ? parseGeoJsonToBoundary(location.geojson) : undefined;
  const areaMetrics = await fetchCityAreaMetrics(location.boundingbox || [], boundary);

  let scale = "City";
  let areaDegreeSq = 0.05;
  if (location.boundingbox && location.boundingbox.length === 4) {
    const latDiff = Math.abs(parseFloat(location.boundingbox[1]) - parseFloat(location.boundingbox[0]));
    const lonDiff = Math.abs(parseFloat(location.boundingbox[3]) - parseFloat(location.boundingbox[2]));
    areaDegreeSq = latDiff * lonDiff;
    if (areaDegreeSq > 0.15) scale = "Mega City";
    else if (areaDegreeSq > 0.05) scale = "Metro";
    else if (areaDegreeSq > 0.01) scale = "City";
    else if (areaDegreeSq > 0.002) scale = "Town";
    else scale = "Village";
  }

  // ── AQI ──
  let airQualityIndex = 50;
  let aqiConfidence: "High" | "Medium" | "Low" | "Data Derived" = "Data Derived";
  if (aqiData.isAvailable && aqiData.aqi) {
    airQualityIndex = Math.round(aqiData.aqi);
    aqiConfidence = "High";
  }

  let greenCoverPercent = 0;
  let waterCoveragePercent = 0;
  let hasRealArea = false;

  if (areaMetrics.isAvailable && areaMetrics.totalAreaSqMeters > 0) {
    greenCoverPercent = Math.round((areaMetrics.vegetatedAreaSqMeters / areaMetrics.totalAreaSqMeters) * 1000) / 10;
    waterCoveragePercent = Math.round((areaMetrics.waterAreaSqMeters / areaMetrics.totalAreaSqMeters) * 1000) / 10;
    hasRealArea = true;
  }

  let baseSolar = 0;
  if (hasRealArea && areaMetrics.buildingAreaSqMeters > 0) {
    baseSolar = Math.round((areaMetrics.buildingAreaSqMeters * 0.30 * 0.15) / 1000);
  }

  // ── Environmental Heat Risk ──
  let baseHeatIndex = 50;
  if (weather.isAvailable) {
    baseHeatIndex = clamp(Math.round((weather.apparentTemperature - 25) * 3), 0, 100);
  } else if (aqiData.isAvailable) {
    baseHeatIndex = clamp(Math.round(airQualityIndex / 3), 0, 100);
  }

  const aqiPenalty = aqiData.isAvailable ? Math.max(0, (airQualityIndex - 100) * 0.15) : 0;
  const vegDeficitPenalty = Math.max(0, (20 - greenCoverPercent) * 1.5);
  const waterDeficitPenalty = Math.max(0, (5 - waterCoveragePercent) * 2.0);

  const heatRiskIndex = clamp(Math.round(baseHeatIndex + aqiPenalty + vegDeficitPenalty + waterDeficitPenalty), 0, 100);
  const heatRiskCategory = heatRiskIndex >= 80 ? "Severe" : heatRiskIndex >= 60 ? "High" : heatRiskIndex >= 40 ? "Moderate" : "Low";

  let heatRiskValue: string;
  let heatSource: string;
  let heatConfidence: "High" | "Medium" | "Low" | "Data Derived" = "Data Derived";

  if (weather.isAvailable) {
    heatRiskValue = `${Math.round(weather.apparentTemperature)}°C Feels Like`;
    heatSource = "Open-Meteo Atmospheric Dataset";
    heatConfidence = "High";
  } else if (aqiData.isAvailable) {
    heatRiskValue = `${heatRiskCategory} (AQI ${Math.round(aqiData.aqi)})`;
    heatSource = "Open-Meteo Air Quality (proxy)";
    heatConfidence = "Medium";
  } else {
    heatRiskValue = heatRiskCategory;
    heatSource = "ClimateLens Geospatial Intelligence Engine";
  }

  const isFallbackEstimate = areaMetrics.isFallback === true;
  const climateScore = clamp(Math.round(82 - heatRiskIndex * 0.22 + (hasRealArea ? greenCoverPercent : 20) * 0.48 - airQualityIndex * 0.08), 10, 95);

  const metrics: ClimateMetric[] = [
    {
      label: "Climate Score",
      value: `${climateScore} / 100`,
      trend: "Derived from real-time environmental factors",
      status: climateScore >= 72 ? "strong" : climateScore >= 60 ? "watch" : "risk",
      source: "ClimateLens Geospatial Intelligence Engine",
      confidence: "High",
      metricType: "Derived"
    },
    {
      label: "Heat Risk",
      value: heatRiskValue!,
      trend: `Categorized as ${heatRiskCategory}`,
      status: heatRiskIndex >= 72 ? "risk" : "watch",
      source: heatSource!,
      lastUpdated: weather.isAvailable ? "Live" : undefined,
      confidence: heatConfidence as any,
      metricType: weather.isAvailable ? "Real" : "Derived"
    },
    {
      label: "Green Cover",
      value: hasRealArea ? `${greenCoverPercent}%` : "Analysing...",
      trend: hasRealArea
        ? (isFallbackEstimate ? "Source: OpenStreetMap Geospatial Analysis (bbox)" : "Source: OpenStreetMap Geospatial Analysis")
        : "Source: ClimateLens Geospatial Intelligence Engine",
      status: !hasRealArea ? "watch" : greenCoverPercent >= 24 ? "strong" : greenCoverPercent >= 16 ? "watch" : "risk",
      source: hasRealArea ? "OpenStreetMap Geospatial Analysis" : "ClimateLens Geospatial Intelligence Engine",
      confidence: hasRealArea ? (isFallbackEstimate ? "Medium" : "High") : "Medium",
      metricType: hasRealArea ? (isFallbackEstimate ? "Derived" : "Real") : "Derived"
    },
    {
      label: "Water Coverage",
      value: hasRealArea ? `${waterCoveragePercent}%` : "Analysing...",
      trend: hasRealArea
        ? (isFallbackEstimate ? "Source: OpenStreetMap Geospatial Analysis (bbox)" : "Source: OpenStreetMap Geospatial Analysis")
        : "Source: ClimateLens Geospatial Intelligence Engine",
      status: !hasRealArea ? "watch" : waterCoveragePercent >= 10 ? "strong" : waterCoveragePercent >= 4 ? "watch" : "risk",
      source: hasRealArea ? "OpenStreetMap Geospatial Analysis" : "ClimateLens Geospatial Intelligence Engine",
      confidence: hasRealArea ? (isFallbackEstimate ? "Medium" : "High") : "Medium",
      metricType: hasRealArea ? (isFallbackEstimate ? "Derived" : "Real") : "Derived"
    },
    {
      label: "Solar Potential",
      value: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? `${baseSolar.toLocaleString()} MW` : "Analysing...",
      trend: hasRealArea && areaMetrics.buildingAreaSqMeters > 0
        ? (isFallbackEstimate ? "Source: OSM Building Footprint Analysis (bbox)" : `Source: OSM Building Footprint — ${Math.round(areaMetrics.buildingAreaSqMeters / 10000) / 100} sq km`)
        : "Source: ClimateLens Geospatial Intelligence Engine",
      status: (!hasRealArea || areaMetrics.buildingAreaSqMeters <= 0) ? "watch" : "strong",
      source: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? "OSM Building Footprint Analysis" : "ClimateLens Geospatial Intelligence Engine",
      confidence: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Medium" : "Medium") : "Medium",
      metricType: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Derived" : "Derived") : "Derived"
    },
    {
      label: "Air Quality",
      value: aqiData.isAvailable ? `AQI ${airQualityIndex}` : "Monitoring Offline",
      trend: aqiData.isAvailable ? `PM2.5: ${Math.round(aqiData.pm25)} µg/m³` : "Source: ClimateLens Geospatial Intelligence Engine",
      status: !aqiData.isAvailable ? "watch" : airQualityIndex >= 130 ? "risk" : airQualityIndex >= 80 ? "watch" : "strong",
      source: aqiData.isAvailable ? "Open-Meteo Atmospheric Dataset" : "ClimateLens Geospatial Intelligence Engine",
      lastUpdated: aqiData.isAvailable ? "Live" : undefined,
      confidence: aqiConfidence as any,
      metricType: aqiData.isAvailable ? "Real" : "Derived"
    }
  ];

  const hotspots = await generateGeospatialHotspots(location, weather.isAvailable ? weather.temperature : 32, airQualityIndex);

  const auditObject = {
    aqi: { value: airQualityIndex, source: aqiData.isAvailable ? "Open-Meteo" : "None", confidence: aqiConfidence, metricType: aqiData.isAvailable ? "Real" : "Derived", timestamp: aqiData.timestamp },
    temperature: { value: weather.temperature, source: weather.isAvailable ? "Open-Meteo" : "None", confidence: heatConfidence, metricType: weather.isAvailable ? "Real" : "Derived", timestamp: weather.timestamp },
    greenCover: { value: greenCoverPercent, source: hasRealArea ? "OpenStreetMap Geospatial Analysis" : "None", confidence: hasRealArea ? (isFallbackEstimate ? "Medium" : "High") : "Medium", metricType: hasRealArea ? (isFallbackEstimate ? "Derived" : "Real") : "Derived" },
    waterCoverage: { value: waterCoveragePercent, source: hasRealArea ? "OpenStreetMap Geospatial Analysis" : "None", confidence: hasRealArea ? (isFallbackEstimate ? "Medium" : "High") : "Medium", metricType: hasRealArea ? (isFallbackEstimate ? "Derived" : "Real") : "Derived" },
    solarPotential: { value: baseSolar, source: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? "OSM Building Footprint Analysis" : "None", confidence: "Medium", metricType: "Derived" },
    scaleAnalysis: { areaDegreeSq, scale },
    areaMetrics
  };

  const profile: CityClimateProfile = {
    id: location.id,
    name: location.name,
    state: location.state,
    country: location.country,
    displayName: location.displayName,
    profileType: "enhanced",
    dataNotice: isFallbackEstimate
      ? "Note: Overpass API timed out — geospatial signals derived from boundary analysis."
      : "Live data powered by Open-Meteo, OpenStreetMap, and ClimateLens Geospatial Intelligence Engine.",
    coordinates: location.coordinates,
    climateScore,
    greenCoverPercent,
    waterCoveragePercent,
    heatRiskIndex,
    solarPotentialMw: baseSolar,
    airQualityIndex,
    metrics,
    hotspots,
    layerSummaries: {
      heat: "Source: Open-Meteo Atmospheric Dataset + ClimateLens Geospatial Intelligence Engine.",
      treeCover: "Source: OpenStreetMap Geospatial Analysis — natural=wood & landuse=forest polygons.",
      solar: "Source: OSM Building Footprint Analysis — rooftop area estimation.",
      airQuality: "Source: Open-Meteo Atmospheric Dataset — real-time PM2.5, PM10, European AQI.",
      water: "Source: OpenStreetMap Geospatial Analysis — water and waterway geometries."
    },
    _audit: auditObject,
    boundary: boundary && boundary.length > 0 ? boundary : undefined
  };

  return { ...profile, scoreMethodology: createScoreMethodology(profile) };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
