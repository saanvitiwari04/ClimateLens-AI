import type { CityClimateProfile, ClimateMetric, GeocodedLocation } from "@/lib/types";
import { createScoreMethodology } from "@/lib/climate-score";
import { generateGeospatialHotspots } from "@/lib/geospatial/hotspot-engine";
import { getRealTimeWeather, getRealTimeAQI } from "@/lib/services/open-meteo";
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
    // Real Temperature & Heat Risk
    let heatRiskIndex = 50;
    let heatRiskCategory = "Moderate";
    let heatConfidence: "High" | "Medium" | "Low" | "Estimated" = "Estimated";
    if (weather.isAvailable) {
      heatRiskIndex = clamp(Math.round((weather.apparentTemperature - 25) * 3), 0, 100);
      heatRiskCategory = heatRiskIndex >= 80 ? "Severe" : heatRiskIndex >= 60 ? "High" : heatRiskIndex >= 40 ? "Moderate" : "Low";
      heatConfidence = "High";
    }

    // Real AQI
    let airQualityIndex = 50;
    let aqiConfidence: "High" | "Medium" | "Low" | "Estimated" = "Estimated";
    if (aqiData.isAvailable && aqiData.aqi) {
      airQualityIndex = Math.round(aqiData.aqi);
      aqiConfidence = "High";
    }

    const greenCoverPercent = cachedCity.greenCoverPercent;
    const waterCoveragePercent = cachedCity.waterCoveragePercent;
    const baseSolar = cachedCity.solarPotentialMw;
    const carbonEstimate = cachedCity.carbonEstimateTonnes;

    const climateScore = clamp(Math.round(82 - heatRiskIndex * 0.22 + greenCoverPercent * 0.48 - airQualityIndex * 0.08), 10, 95);

    const metrics: ClimateMetric[] = [
      {
        label: "Climate Score",
        value: `${climateScore} / 100`,
        trend: "Derived from real-time environmental factors",
        status: climateScore >= 72 ? "strong" : climateScore >= 60 ? "watch" : "risk",
        source: "ClimateLens Engine",
        confidence: "High",
        metricType: "Derived"
      },
      {
        label: "Heat Risk",
        value: weather.isAvailable ? `${Math.round(weather.apparentTemperature)}°C Feels Like` : "Data Unavailable",
        trend: `Categorized as ${heatRiskCategory}`,
        status: heatRiskIndex >= 72 ? "risk" : "watch",
        source: weather.isAvailable ? "Open-Meteo Weather API" : undefined,
        lastUpdated: weather.isAvailable ? "Live" : undefined,
        confidence: heatConfidence as any,
        metricType: weather.isAvailable ? "Real" : "Unavailable"
      },
      {
        label: "Green Cover",
        value: `${greenCoverPercent}%`,
        trend: "Based on real OSM administrative boundary polygons",
        status: greenCoverPercent >= 24 ? "strong" : greenCoverPercent >= 16 ? "watch" : "risk",
        source: cachedCity.sourceMetadata.greenCoverSource,
        confidence: "High",
        metricType: "Real"
      },
      {
        label: "Water Coverage",
        value: `${waterCoveragePercent}%`,
        trend: "Based on real OSM administrative boundary polygons",
        status: waterCoveragePercent >= 10 ? "strong" : waterCoveragePercent >= 4 ? "watch" : "risk",
        source: cachedCity.sourceMetadata.waterSource,
        confidence: "High",
        metricType: "Real"
      },
      {
        label: "Solar Potential",
        value: `${baseSolar.toLocaleString()} MW`,
        trend: `Derived from OSM building footprint roof area`,
        status: "strong",
        source: cachedCity.sourceMetadata.solarSource,
        confidence: "Medium",
        metricType: "Derived"
      },
      {
        label: "Air Quality",
        value: aqiData.isAvailable ? `AQI ${airQualityIndex}` : "Live AQI Unavailable",
        trend: aqiData.isAvailable ? `PM2.5: ${Math.round(aqiData.pm25)} µg/m³` : "Source Not Available",
        status: !aqiData.isAvailable ? "unavailable" : airQualityIndex >= 130 ? "risk" : airQualityIndex >= 80 ? "watch" : "strong",
        source: aqiData.isAvailable ? "Open-Meteo Air Quality" : undefined,
        lastUpdated: aqiData.isAvailable ? "Live" : undefined,
        confidence: aqiConfidence as any,
        metricType: aqiData.isAvailable ? "Real" : "Unavailable"
      }
    ];

    const liveTemp = weather.isAvailable ? weather.temperature : 30.0;
    const hotspots = cachedCity.hotspots.map(h => {
      const averageTemperatureC = Math.round((liveTemp + (h.averageTemperatureC - 30.0)) * 10) / 10;
      return {
        ...h,
        averageTemperatureC
      };
    });

    const auditObject = {
      aqi: { value: airQualityIndex, source: aqiData.isAvailable ? "Open-Meteo" : "None", confidence: aqiConfidence, metricType: aqiData.isAvailable ? "Real" : "Unavailable", timestamp: aqiData.timestamp },
      temperature: { value: weather.temperature, source: weather.isAvailable ? "Open-Meteo" : "None", confidence: heatConfidence, metricType: weather.isAvailable ? "Real" : "Unavailable", timestamp: weather.timestamp },
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
      dataNotice: "Live data powered by Open-Meteo, OpenStreetMap, and Geospatial processing.",
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
        heat: "Heat regions are dynamically derived from Open-Meteo actuals and OpenStreetMap built-up density.",
        treeCover: "Vegetation proximity derived from OpenStreetMap natural=wood and landuse=forest features.",
        solar: "Solar opportunity scaled based on bounding box analysis and settlement classification.",
        airQuality: "Air-quality processed from real-time Open-Meteo atmospheric datasets.",
        water: "Water proximity derived from OpenStreetMap water and waterway geometries."
      },
      _audit: auditObject,
      boundary: cachedCity.boundary,
      sourceMetadata: cachedCity.sourceMetadata,
      lastVerifiedTimestamp: cachedCity.lastVerifiedTimestamp
    };

    return {
      ...profile,
      scoreMethodology: createScoreMethodology(profile)
    };
  }

  // Bounding-box and fallback API retrieval if not in cache
  const boundary = location.geojson ? parseGeoJsonToBoundary(location.geojson) : undefined;
  const areaMetrics = await fetchCityAreaMetrics(location.boundingbox || [], boundary);

  // Derive Scale
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

  // Real Temperature & Heat Risk
  let heatRiskIndex = 50;
  let heatRiskCategory = "Moderate";
  let heatConfidence: "High" | "Medium" | "Low" | "Estimated" = "Estimated";
  if (weather.isAvailable) {
    heatRiskIndex = clamp(Math.round((weather.apparentTemperature - 25) * 3), 0, 100);
    heatRiskCategory = heatRiskIndex >= 80 ? "Severe" : heatRiskIndex >= 60 ? "High" : heatRiskIndex >= 40 ? "Moderate" : "Low";
    heatConfidence = "High";
  }

  // Real AQI
  let airQualityIndex = 50;
  let aqiConfidence: "High" | "Medium" | "Low" | "Estimated" = "Estimated";
  if (aqiData.isAvailable && aqiData.aqi) {
    airQualityIndex = Math.round(aqiData.aqi);
    aqiConfidence = "High";
  }

  // Priority 3: Green Cover & Water Coverage from Real OSM Data
  let greenCoverPercent = 0;
  let waterCoveragePercent = 0;
  let hasRealArea = false;
  
  if (areaMetrics.isAvailable && areaMetrics.totalAreaSqMeters > 0) {
    greenCoverPercent = Math.round((areaMetrics.vegetatedAreaSqMeters / areaMetrics.totalAreaSqMeters) * 1000) / 10;
    waterCoveragePercent = Math.round((areaMetrics.waterAreaSqMeters / areaMetrics.totalAreaSqMeters) * 1000) / 10;
    hasRealArea = true;
  }

  // Priority 4: Solar Potential using Real Estimates
  let baseSolar = 0;
  if (hasRealArea && areaMetrics.buildingAreaSqMeters > 0) {
    const suitableRooftopSqMeters = areaMetrics.buildingAreaSqMeters * 0.30;
    baseSolar = Math.round((suitableRooftopSqMeters * 0.15) / 1000); // MW
  }

  const isFallbackEstimate = areaMetrics.isFallback === true;

  const climateScore = clamp(Math.round(82 - heatRiskIndex * 0.22 + (hasRealArea ? greenCoverPercent : 20) * 0.48 - airQualityIndex * 0.08), 10, 95);

  const metrics: ClimateMetric[] = [
    {
      label: "Climate Score",
      value: `${climateScore} / 100`,
      trend: "Derived from real-time environmental factors",
      status: climateScore >= 72 ? "strong" : climateScore >= 60 ? "watch" : "risk",
      source: "ClimateLens Engine",
      confidence: "High",
      metricType: "Derived"
    },
    {
      label: "Heat Risk",
      value: weather.isAvailable ? `${Math.round(weather.apparentTemperature)}°C Feels Like` : "Data Unavailable",
      trend: `Categorized as ${heatRiskCategory}`,
      status: heatRiskIndex >= 72 ? "risk" : "watch",
      source: weather.isAvailable ? "Open-Meteo Weather API" : undefined,
      lastUpdated: weather.isAvailable ? "Live" : undefined,
      confidence: heatConfidence as any,
      metricType: weather.isAvailable ? "Real" : "Unavailable"
    },
    {
      label: "Green Cover",
      value: hasRealArea ? `${greenCoverPercent}%` : "Data Unavailable",
      trend: hasRealArea ? (isFallbackEstimate ? "Estimated from bounding box" : "Based on real OSM polygons") : "No OSM Data",
      status: !hasRealArea ? "unavailable" : greenCoverPercent >= 24 ? "strong" : greenCoverPercent >= 16 ? "watch" : "risk",
      source: hasRealArea ? (isFallbackEstimate ? "OSM Bounding Box Estimate" : "OpenStreetMap Land Cover") : undefined,
      confidence: hasRealArea ? (isFallbackEstimate ? "Estimated" : "High") : "Estimated",
      metricType: hasRealArea ? (isFallbackEstimate ? "Estimated" : "Real") : "Unavailable"
    },
    {
      label: "Water Coverage",
      value: hasRealArea ? `${waterCoveragePercent}%` : "Data Unavailable",
      trend: hasRealArea ? (isFallbackEstimate ? "Estimated from bounding box" : "Based on real OSM polygons") : "No OSM Data",
      status: !hasRealArea ? "unavailable" : waterCoveragePercent >= 10 ? "strong" : waterCoveragePercent >= 4 ? "watch" : "risk",
      source: hasRealArea ? (isFallbackEstimate ? "OSM Bounding Box Estimate" : "OpenStreetMap Water Bodies") : undefined,
      confidence: hasRealArea ? (isFallbackEstimate ? "Estimated" : "High") : "Estimated",
      metricType: hasRealArea ? (isFallbackEstimate ? "Estimated" : "Real") : "Unavailable"
    },
    {
      label: "Solar Potential",
      value: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? `${baseSolar.toLocaleString()} MW` : "Data Unavailable",
      trend: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Estimated from bounding box roof area" : `Derived from ${Math.round(areaMetrics.buildingAreaSqMeters / 10000) / 100} sq km roof area`) : "OSM Building Data Needed",
      status: (!hasRealArea || areaMetrics.buildingAreaSqMeters <= 0) ? "unavailable" : "strong",
      source: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "OSM Bounding Box Estimate" : "OSM Building Footprint") : undefined,
      confidence: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Estimated" : "Medium") : "Estimated",
      metricType: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Estimated" : "Derived") : "Unavailable"
    },
    {
      label: "Air Quality",
      value: aqiData.isAvailable ? `AQI ${airQualityIndex}` : "Live AQI Unavailable",
      trend: aqiData.isAvailable ? `PM2.5: ${Math.round(aqiData.pm25)} µg/m³` : "Source Not Available",
      status: !aqiData.isAvailable ? "unavailable" : airQualityIndex >= 130 ? "risk" : airQualityIndex >= 80 ? "watch" : "strong",
      source: aqiData.isAvailable ? "Open-Meteo Air Quality" : undefined,
      lastUpdated: aqiData.isAvailable ? "Live" : undefined,
      confidence: aqiConfidence as any,
      metricType: aqiData.isAvailable ? "Real" : "Unavailable"
    }
  ];

  const hotspots = await generateGeospatialHotspots(location, weather.temperature, airQualityIndex);

  const auditObject = {
    aqi: { value: airQualityIndex, source: aqiData.isAvailable ? "Open-Meteo" : "None", confidence: aqiConfidence, metricType: aqiData.isAvailable ? "Real" : "Unavailable", timestamp: aqiData.timestamp },
    temperature: { value: weather.temperature, source: weather.isAvailable ? "Open-Meteo" : "None", confidence: heatConfidence, metricType: weather.isAvailable ? "Real" : "Unavailable", timestamp: weather.timestamp },
    greenCover: { value: greenCoverPercent, source: hasRealArea ? (isFallbackEstimate ? "OSM Bounding Box Estimate" : "OpenStreetMap Land Cover") : "None", confidence: hasRealArea ? (isFallbackEstimate ? "Estimated" : "High") : "Estimated", metricType: hasRealArea ? (isFallbackEstimate ? "Estimated" : "Real") : "Unavailable" },
    waterCoverage: { value: waterCoveragePercent, source: hasRealArea ? (isFallbackEstimate ? "OSM Bounding Box Estimate" : "OpenStreetMap Water Bodies") : "None", confidence: hasRealArea ? (isFallbackEstimate ? "Estimated" : "High") : "Estimated", metricType: hasRealArea ? (isFallbackEstimate ? "Estimated" : "Real") : "Unavailable" },
    solarPotential: { value: baseSolar, source: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "OSM Bounding Box Estimate" : "OSM Building Footprint") : "None", confidence: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Estimated" : "Medium") : "Estimated", metricType: hasRealArea && areaMetrics.buildingAreaSqMeters > 0 ? (isFallbackEstimate ? "Estimated" : "Derived") : "Unavailable" },
    scaleAnalysis: { areaDegreeSq, scale },
    areaMetrics
  };

  const profile: CityClimateProfile = {
    id: location.id,
    name: location.name,
    state: location.state,
    country: location.country,
    displayName: location.displayName,
    profileType: isFallbackEstimate ? "estimated" : "enhanced",
    dataNotice: isFallbackEstimate
      ? "NOTICE: Overpass API connection timed out. Geospatial indicators are estimated using scale-aware geographic fallback models."
      : "Live data powered by Open-Meteo, OpenStreetMap, and Geospatial processing.",
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
      heat: "Heat regions are dynamically derived from Open-Meteo actuals and OpenStreetMap built-up density.",
      treeCover: "Vegetation proximity derived from OpenStreetMap natural=wood and landuse=forest features.",
      solar: "Solar opportunity scaled based on bounding box analysis and settlement classification.",
      airQuality: "Air-quality processed from real-time Open-Meteo atmospheric datasets.",
      water: "Water proximity derived from OpenStreetMap water and waterway geometries."
    },
    _audit: auditObject,
    boundary: boundary && boundary.length > 0 ? boundary : undefined
  };

  return {
    ...profile,
    scoreMethodology: createScoreMethodology(profile)
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
