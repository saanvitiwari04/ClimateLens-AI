import type { CityClimateProfile, ClimateScoreMethodology } from "@/lib/types";

export const climateScoreWeights = {
  heatRiskWeight: 0.35,
  greenCoverWeight: 0.25,
  solarPotentialWeight: 0.2,
  airQualityWeight: 0.2
};

export function createScoreMethodology(city: CityClimateProfile): ClimateScoreMethodology {
  return {
    ...climateScoreWeights,
    formula:
      "Score = heat resilience x 35% + green cover x 25% + solar readiness x 20% + air quality x 20%",
    inputs: {
      heatRiskIndex: city.heatRiskIndex,
      greenCoverPercent: city.greenCoverPercent,
      solarPotentialMw: city.solarPotentialMw,
      airQualityIndex: city.airQualityIndex
    }
  };
}

export function scoreComponents(city: CityClimateProfile) {
  return [
    {
      label: "Heat Risk",
      weight: climateScoreWeights.heatRiskWeight,
      normalized: Math.max(0, 100 - city.heatRiskIndex)
    },
    {
      label: "Green Cover",
      weight: climateScoreWeights.greenCoverWeight,
      normalized: Math.min(100, city.greenCoverPercent * 3)
    },
    {
      label: "Solar Potential",
      weight: climateScoreWeights.solarPotentialWeight,
      normalized: Math.min(100, city.solarPotentialMw / 12)
    },
    {
      label: "Air Quality",
      weight: climateScoreWeights.airQualityWeight,
      normalized: Math.max(0, 100 - city.airQualityIndex * 0.45)
    }
  ].map((component) => ({
    ...component,
    contribution: Math.round(component.normalized * component.weight)
  }));
}
