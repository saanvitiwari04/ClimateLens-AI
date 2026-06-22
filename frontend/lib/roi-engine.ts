import { CityClimateProfile, Hotspot, HotspotRecommendationInfo, ROIEngineResult, InterventionROI } from "./types";



export function getCityScale(name: string): "Mega" | "Large" | "Medium" | "Small" {
  const n = name.toLowerCase();
  if (["tokyo", "delhi", "mumbai", "london", "new york", "sao paulo", "shanghai", "beijing", "dhaka", "mexico city"].some(m => n.includes(m))) return "Mega";
  if (["hyderabad", "bengaluru", "chennai", "kolkata", "chicago", "los angeles", "paris"].some(l => n.includes(l))) return "Large";
  if (["pune", "jaipur", "lucknow", "ahmedabad", "indore", "bhopal", "surat", "noida", "gurugram", "patna", "chandigarh", "prayagraj"].some(m => n.includes(m))) return "Medium";
  return "Small";
}

export function getHotspotRecommendation(hotspot: Hotspot, city: CityClimateProfile): HotspotRecommendationInfo {
  const sig = hotspot.signals;

  if (sig) {
    if (sig.landUseHeat > 0.8 && sig.buildingDensity > 0.7) {
      return {
        action: "Reflective Roofing",
        expectedBenefit: "Estimated 0.6°C local temperature reduction",
        reasoning: "Extreme land surface temperature combined with dense construction and high surface exposure."
      };
    }
    
    if (sig.buildingDensity > 0.8 && sig.vegetationProximity < 0.2) {
      return {
        action: "Green Roofs",
        expectedBenefit: "Improved thermal insulation and local micro-cooling",
        reasoning: "Dense urban area with limited ground space for traditional planting."
      };
    }

    if (sig.buildingDensity > 0.5 && city.solarPotentialMw > 150) {
      return {
        action: "Solar Deployment",
        expectedBenefit: "Significant local carbon offset and reduced grid load",
        reasoning: "High roof suitability and excellent city-level solar potential."
      };
    }

    if (sig.buildingDensity <= 0.6 || sig.vegetationProximity < 0.4) {
      return {
        action: "Tree Plantation & Urban Canopy",
        expectedBenefit: "Estimated 0.8°C local temperature reduction",
        reasoning: "Available ground space combined with low existing vegetation proximity necessitates targeted greening."
      };
    }
  }

  // Fallbacks if signals miss some thresholds or aren't present
  if (hotspot.riskCategory === "Severe") {
    return {
      action: "Reflective Roofing & Shading",
      expectedBenefit: "Estimated 0.5°C local temperature reduction",
      reasoning: "Severe heat risk requires immediate surface-level interventions."
    };
  }

  return {
    action: "Tree Plantation",
    expectedBenefit: "Estimated 0.3°C local temperature reduction",
    reasoning: "General heat mitigation and canopy restoration."
  };
}

export function generateCityROI(city: CityClimateProfile): ROIEngineResult {
  const interventions: InterventionROI[] = [];
  const scale = getCityScale(city.name);
  
  const tempReductionMult = { "Mega": 0.2, "Large": 0.5, "Medium": 1.0, "Small": 1.5 }[scale];
  const carbonReductionMult = { "Mega": 80, "Large": 20, "Medium": 5, "Small": 1 }[scale];
  
  // 1. Tree Plantation
  const treeImpact = Math.min(98, Math.round(50 + (100 - city.greenCoverPercent) * 0.45 + city.heatRiskIndex * 0.3));
  interventions.push({
    name: "Tree Plantation",
    estimatedTempReductionC: Number((1.2 * tempReductionMult).toFixed(1)),
    carbonReductionTonnes: 450 * carbonReductionMult,
    climateScoreImprovement: Math.round(treeImpact / 10),
    greenCoverImprovementPercent: Number((4.5 * tempReductionMult).toFixed(1)),
    impactScore: treeImpact,
    confidence: "High"
  });

  // 2. Solar Deployment
  const solarImpact = Math.min(98, Math.round(45 + (city.solarPotentialMw / 5) * 0.5));
  interventions.push({
    name: "Solar Deployment",
    estimatedTempReductionC: Number((0.1 * tempReductionMult).toFixed(1)),
    carbonReductionTonnes: 1200 * carbonReductionMult,
    climateScoreImprovement: Math.round(solarImpact / 10),
    greenCoverImprovementPercent: 0,
    impactScore: solarImpact,
    confidence: "High"
  });

  // 3. Reflective Roofing
  const roofImpact = Math.min(95, Math.round(50 + city.heatRiskIndex * 0.45));
  interventions.push({
    name: "Reflective Roofing",
    estimatedTempReductionC: Number((0.9 * tempReductionMult).toFixed(1)),
    carbonReductionTonnes: 150 * carbonReductionMult,
    climateScoreImprovement: Math.round(roofImpact / 10),
    greenCoverImprovementPercent: 0,
    impactScore: roofImpact,
    confidence: "Medium"
  });

  // 4. Green Roofs
  const greenRoofImpact = Math.min(92, Math.round(45 + (100 - city.greenCoverPercent) * 0.35 + city.heatRiskIndex * 0.25));
  interventions.push({
    name: "Green Roofs",
    estimatedTempReductionC: Number((0.6 * tempReductionMult).toFixed(1)),
    carbonReductionTonnes: 200 * carbonReductionMult,
    climateScoreImprovement: Math.round(greenRoofImpact / 10),
    greenCoverImprovementPercent: Number((1.5 * tempReductionMult).toFixed(1)),
    impactScore: greenRoofImpact,
    confidence: "Estimated"
  });

  interventions.sort((a, b) => b.impactScore - a.impactScore);

  const top1 = interventions[0];
  const top2 = interventions[1];
  
  const totalScoreGain = top1.climateScoreImprovement + top2.climateScoreImprovement;
  const totalCarbon = top1.carbonReductionTonnes + top2.carbonReductionTonnes;
  const avgTempReduction = (top1.estimatedTempReductionC + top2.estimatedTempReductionC) / 2;

  // Base carbon emissions estimation using city scale and actual built-up proxy
  const scaleMultipliers = { "Mega": 100, "Large": 25, "Medium": 4, "Small": 1 };
  const carbonMultiplier = scaleMultipliers[scale];
  
  // Use solar potential as a proxy for building footprint/built-up density
  // Solar is derived from building area (MW = Area * 0.3 * 0.15 / 1000)
  // Therefore, Area ~ Solar * 1000 / (0.3 * 0.15) ~ Solar * 22222
  const estimatedBuildingAreaSqM = city.solarPotentialMw * 22222;
  
  // Rough proxy: 1 sq meter of building footprint ~ 0.5 tonnes of CO2 annually for typical Indian urban operations (residential + commercial mixed)
  // If no solar potential (no OSM data), fallback to a basic scale-based minimum.
  const baseCarbon = city.solarPotentialMw > 0 
    ? Math.round(estimatedBuildingAreaSqM * 0.5) 
    : 30000 * carbonMultiplier;
  
  const projection = {
    currentClimateScore: city.climateScore,
    projectedClimateScore: Math.min(100, city.climateScore + totalScoreGain),
    currentGreenCover: city.greenCoverPercent,
    projectedGreenCover: Math.round((city.greenCoverPercent + top1.greenCoverImprovementPercent + top2.greenCoverImprovementPercent) * 10) / 10,
    currentCarbonOutput: baseCarbon,
    projectedCarbonOutput: baseCarbon - totalCarbon,
    currentTemperature: city.hotspots.length > 0 ? city.hotspots[0].averageTemperatureC : 35,
    projectedTemperature: Math.round(((city.hotspots.length > 0 ? city.hotspots[0].averageTemperatureC : 35) - avgTempReduction) * 10) / 10
  };

  const hotspotNames = city.hotspots.slice(0, 2).map(h => h.name);
  const hsText = hotspotNames.length === 2 ? `${hotspotNames[0]} and ${hotspotNames[1]}` : hotspotNames[0] || "key vulnerable areas";

  const executiveSummary = `ClimateLens recommends prioritizing ${top1.name.toLowerCase()} in ${hsText}. Combined implementation with ${top2.name.toLowerCase()} is projected to improve the climate score by ${totalScoreGain} points while reducing annual carbon emissions by ${totalCarbon} tonnes and improving urban thermal resilience.`;

  return {
    interventions,
    projection,
    executiveSummary
  };
}
