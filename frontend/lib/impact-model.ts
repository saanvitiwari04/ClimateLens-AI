import type { CityClimateProfile, Hotspot, ImpactResult, InterventionInput } from "@/lib/types";

export function simulateImpact(city: CityClimateProfile, input: InterventionInput, hotspot?: Hotspot | null): ImpactResult {
  const temperatureReductionC =
    input.trees * 0.00008 + input.greenRoofSqm * 0.000015 + input.reflectiveRoofSqm * 0.000022;
  const carbonReductionTonsPerYear =
    input.trees * 0.021 + input.solarPanels * 0.52 + input.greenRoofSqm * 0.0025;
  const greenCoverImprovementPercent = input.trees * 0.00042 + input.greenRoofSqm * 0.00003;
  const updatedClimateScore = Math.min(
    100,
    Math.round(city.climateScore + temperatureReductionC * 4 + carbonReductionTonsPerYear / 350 + greenCoverImprovementPercent * 1.7)
  );

  const recommendationInputs = [
    {
      name: "Tree Plantation",
      score: Math.min(100, Math.round(64 + input.trees / 180)),
      rationale: "Best for heat mitigation, canopy gaps, and long-term public-realm cooling."
    },
    {
      name: "Solar Deployment",
      score: Math.min(100, Math.round(58 + input.solarPanels / 20)),
      rationale: "Strong carbon benefit where rooftop suitability and grid access are favorable."
    },
    {
      name: "Green Roofs",
      score: Math.min(100, Math.round(52 + input.greenRoofSqm / 120)),
      rationale: "Useful in dense zones with limited ground-level planting space."
    },
    {
      name: "Reflective Roofing",
      score: Math.min(100, Math.round(55 + input.reflectiveRoofSqm / 150)),
      rationale: "Fast heat-risk reduction for industrial and low-rise dense rooftops."
    }
  ];

  const localRecommendations = hotspot?.recommendations?.map((recommendation) => ({
    ...recommendation,
    score: Math.min(100, Math.round(recommendation.score + carbonReductionTonsPerYear / 700))
  }));

  return {
    temperatureReductionC: round(temperatureReductionC),
    carbonReductionTonsPerYear: round(carbonReductionTonsPerYear),
    greenCoverImprovementPercent: round(greenCoverImprovementPercent),
    updatedClimateScore,
    recommendations: (localRecommendations?.length ? localRecommendations : recommendationInputs).sort((a, b) => b.score - a.score)
  };
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
