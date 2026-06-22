import type { HotspotSignals, LocalRecommendation } from "@/lib/types";

export function createLocalRecommendations(signals: HotspotSignals): LocalRecommendation[] {
  const recommendations: LocalRecommendation[] = [
    {
      name: "Tree Plantation",
      score: clamp(Math.round(52 + signals.roadDensity * 18 + (1 - signals.vegetationProximity) * 30)),
      rationale:
        signals.vegetationProximity < 0.45
          ? "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          : "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
    },
    {
      name: "Solar Deployment",
      score: clamp(Math.round(48 + signals.buildingDensity * 32 + signals.landUseHeat * 12)),
      rationale:
        signals.buildingDensity > 0.55
          ? "Dense building footprints indicate stronger rooftop solar deployment potential."
          : "Solar deployment should start with civic, commercial, and large roof assets."
    },
    {
      name: "Green Roofs",
      score: clamp(Math.round(42 + signals.buildingDensity * 24 + (1 - signals.vegetationProximity) * 20)),
      rationale:
        "Green roofs are most useful where building density is high and ground-level planting space is limited."
    },
    {
      name: "Reflective Roofing",
      score: clamp(Math.round(50 + signals.landUseHeat * 24 + signals.buildingDensity * 16)),
      rationale:
        signals.landUseHeat > 0.55
          ? "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          : "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
    }
  ];

  return recommendations.sort((a, b) => b.score - a.score);
}

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}
