// Pre-cached static environmental metrics and boundaries for 17 target Indian cities.
// Generated on 2026-06-22T11:18:42.811Z

import type { Coordinates, Hotspot } from "../types";

export interface CachedHotspot extends Hotspot {
  severity: "Critical" | "Severe" | "High" | "Moderate";
  reason: string;
  recommendedAction: string;
}

export interface CachedCityProfile {
  id: string;
  name: string;
  state: string;
  country: string;
  displayName: string;
  coordinates: Coordinates;
  boundingbox?: string[];
  boundary?: Coordinates[][];
  greenCoverPercent: number;
  waterCoveragePercent: number;
  solarPotentialMw: number;
  carbonEstimateTonnes: number;
  hotspots: CachedHotspot[];
  areaMetrics: {
    totalAreaSqMeters: number;
    vegetatedAreaSqMeters: number;
    waterAreaSqMeters: number;
    buildingAreaSqMeters: number;
    isAvailable: boolean;
    isFallback?: boolean;
  };
  sourceMetadata: {
    boundarySource: string;
    greenCoverSource: string;
    waterSource: string;
    solarSource: string;
    carbonSource: string;
  };
  lastVerifiedTimestamp: string;
}

export const PRE_CACHED_CITIES: CachedCityProfile[] = [
  {
    "id": "osm-245475613",
    "name": "New Delhi",
    "state": "Unspecified region",
    "country": "India",
    "displayName": "New Delhi, Delhi, India",
    "coordinates": {
      "lat": 28.6138954,
      "lng": 77.2090057
    },
    "boundingbox": [
      "28.4812209",
      "28.6456842",
      "77.0503708",
      "77.2551392"
    ],
    "boundary": [
      [
        {
          "lat": 28.5587053,
          "lng": 77.0503708
        },
        {
          "lat": 28.5479897,
          "lng": 77.0699823
        },
        {
          "lat": 28.5433856,
          "lng": 77.0699496
        },
        {
          "lat": 28.538262,
          "lng": 77.0883852
        },
        {
          "lat": 28.531623,
          "lng": 77.0851582
        },
        {
          "lat": 28.5183896,
          "lng": 77.1025691
        },
        {
          "lat": 28.5070803,
          "lng": 77.0957528
        },
        {
          "lat": 28.5048552,
          "lng": 77.0976518
        },
        {
          "lat": 28.495139,
          "lng": 77.119507
        },
        {
          "lat": 28.4869846,
          "lng": 77.1176759
        },
        {
          "lat": 28.4847129,
          "lng": 77.1261276
        },
        {
          "lat": 28.4853334,
          "lng": 77.1342354
        },
        {
          "lat": 28.4812209,
          "lng": 77.1438741
        },
        {
          "lat": 28.4888466,
          "lng": 77.1456901
        },
        {
          "lat": 28.5002653,
          "lng": 77.1519107
        },
        {
          "lat": 28.4984541,
          "lng": 77.1460404
        },
        {
          "lat": 28.5051823,
          "lng": 77.1348846
        },
        {
          "lat": 28.5068907,
          "lng": 77.1294644
        },
        {
          "lat": 28.5157014,
          "lng": 77.1305189
        },
        {
          "lat": 28.5237724,
          "lng": 77.1345128
        },
        {
          "lat": 28.5234929,
          "lng": 77.1458024
        },
        {
          "lat": 28.5212871,
          "lng": 77.1561665
        },
        {
          "lat": 28.5249088,
          "lng": 77.1607767
        },
        {
          "lat": 28.5253158,
          "lng": 77.1641249
        },
        {
          "lat": 28.5320984,
          "lng": 77.1698823
        },
        {
          "lat": 28.5342222,
          "lng": 77.1743705
        },
        {
          "lat": 28.5406742,
          "lng": 77.1683513
        },
        {
          "lat": 28.5434769,
          "lng": 77.1616769
        },
        {
          "lat": 28.546125,
          "lng": 77.1693439
        },
        {
          "lat": 28.5462478,
          "lng": 77.1771299
        },
        {
          "lat": 28.5502843,
          "lng": 77.1852073
        },
        {
          "lat": 28.5580765,
          "lng": 77.1877563
        },
        {
          "lat": 28.560387,
          "lng": 77.1899213
        },
        {
          "lat": 28.5605834,
          "lng": 77.1928728
        },
        {
          "lat": 28.562947,
          "lng": 77.1940987
        },
        {
          "lat": 28.5659457,
          "lng": 77.1992329
        },
        {
          "lat": 28.5601756,
          "lng": 77.2012844
        },
        {
          "lat": 28.5598069,
          "lng": 77.2037751
        },
        {
          "lat": 28.5611793,
          "lng": 77.2049722
        },
        {
          "lat": 28.5802364,
          "lng": 77.2115422
        },
        {
          "lat": 28.5815722,
          "lng": 77.2010414
        },
        {
          "lat": 28.5895242,
          "lng": 77.1991682
        },
        {
          "lat": 28.5873103,
          "lng": 77.2034061
        },
        {
          "lat": 28.5878921,
          "lng": 77.2130084
        },
        {
          "lat": 28.5893699,
          "lng": 77.2131789
        },
        {
          "lat": 28.5930611,
          "lng": 77.2397378
        },
        {
          "lat": 28.6092849,
          "lng": 77.2399482
        },
        {
          "lat": 28.6098577,
          "lng": 77.2418898
        },
        {
          "lat": 28.6072896,
          "lng": 77.2440548
        },
        {
          "lat": 28.6097226,
          "lng": 77.2551392
        },
        {
          "lat": 28.6133241,
          "lng": 77.2542416
        },
        {
          "lat": 28.6129197,
          "lng": 77.240002
        },
        {
          "lat": 28.6258066,
          "lng": 77.2410749
        },
        {
          "lat": 28.6342655,
          "lng": 77.2242133
        },
        {
          "lat": 28.6419838,
          "lng": 77.2192189
        },
        {
          "lat": 28.6363906,
          "lng": 77.2137311
        },
        {
          "lat": 28.6456842,
          "lng": 77.1976057
        },
        {
          "lat": 28.6344131,
          "lng": 77.1896878
        },
        {
          "lat": 28.6338857,
          "lng": 77.1860587
        },
        {
          "lat": 28.6254662,
          "lng": 77.1789894
        },
        {
          "lat": 28.6302383,
          "lng": 77.1759756
        },
        {
          "lat": 28.6278835,
          "lng": 77.1654321
        },
        {
          "lat": 28.6295299,
          "lng": 77.165898
        },
        {
          "lat": 28.6328334,
          "lng": 77.1642758
        },
        {
          "lat": 28.6401578,
          "lng": 77.1549811
        },
        {
          "lat": 28.6370501,
          "lng": 77.1503756
        },
        {
          "lat": 28.6424733,
          "lng": 77.1436243
        },
        {
          "lat": 28.63814,
          "lng": 77.1385539
        },
        {
          "lat": 28.6400835,
          "lng": 77.135773
        },
        {
          "lat": 28.6394418,
          "lng": 77.1307053
        },
        {
          "lat": 28.6363676,
          "lng": 77.1260031
        },
        {
          "lat": 28.6269025,
          "lng": 77.11997
        },
        {
          "lat": 28.6274938,
          "lng": 77.1185297
        },
        {
          "lat": 28.6224866,
          "lng": 77.1162922
        },
        {
          "lat": 28.6225416,
          "lng": 77.1142658
        },
        {
          "lat": 28.620102,
          "lng": 77.1140251
        },
        {
          "lat": 28.6146018,
          "lng": 77.1083163
        },
        {
          "lat": 28.6118271,
          "lng": 77.1022631
        },
        {
          "lat": 28.606346,
          "lng": 77.1020119
        },
        {
          "lat": 28.6010856,
          "lng": 77.0980327
        },
        {
          "lat": 28.5967539,
          "lng": 77.1022274
        },
        {
          "lat": 28.571103,
          "lng": 77.0805027
        },
        {
          "lat": 28.5773781,
          "lng": 77.0693168
        },
        {
          "lat": 28.5696369,
          "lng": 77.0619289
        },
        {
          "lat": 28.5704642,
          "lng": 77.0589914
        },
        {
          "lat": 28.5587053,
          "lng": 77.0503708
        }
      ]
    ],
    "greenCoverPercent": 2.93,
    "waterCoveragePercent": 1.78,
    "solarPotentialMw": 44,
    "carbonEstimateTonnes": 488884,
    "hotspots": [
      {
        "id": "osm-245475613-hotspot-critical-1",
        "name": "Connaught Place Built-Up Stress Zone",
        "coordinates": {
          "lat": 28.629869548648653,
          "lng": 77.21970017775043
        },
        "radiusMeters": 1369,
        "averageTemperatureC": 34.3,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0.43292018071843896
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245475613-hotspot-severe-1",
        "name": "Connaught Place Green Deficit Region",
        "coordinates": {
          "lat": 28.629869548648653,
          "lng": 77.22996256428075
        },
        "radiusMeters": 1129,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.26666666666666666,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.09589522390664795
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 59,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 59,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245475613-hotspot-severe-2",
        "name": "Vasant Kunj Green Deficit Region",
        "coordinates": {
          "lat": 28.566806485585587,
          "lng": 77.14786347203813
        },
        "radiusMeters": 1101,
        "averageTemperatureC": 33,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 54,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 53,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245475613-hotspot-severe-3",
        "name": "Connaught Place High Density Corridor",
        "coordinates": {
          "lat": 28.620860539639644,
          "lng": 77.2094377912201
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8666666666666667,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.7575210386191128,
          "waterProximity": 0.6828297466552836
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 81,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 77,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Reflective Roofing",
            "score": 73,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-245475613-hotspot-severe-4",
        "name": "Vasant Kunj Green Deficit Region",
        "coordinates": {
          "lat": 28.53977945855856,
          "lng": 77.12733869897747
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 161616483.37890625,
      "vegetatedAreaSqMeters": 4739694.1484375,
      "waterAreaSqMeters": 2881098.65234375,
      "buildingAreaSqMeters": 978548.068359375,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:08:59.932Z"
  },
  {
    "id": "osm-248595211",
    "name": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "displayName": "Mumbai, Mumbai Suburban District, Maharashtra, 400051, India",
    "coordinates": {
      "lat": 19.054999,
      "lng": 72.8692035
    },
    "boundingbox": [
      "18.8949990",
      "19.2149990",
      "72.7092035",
      "73.0292035"
    ],
    "greenCoverPercent": 0.91,
    "waterCoveragePercent": 80.41,
    "solarPotentialMw": 115,
    "carbonEstimateTonnes": 1277765,
    "hotspots": [
      {
        "id": "osm-248595211-hotspot-critical-1",
        "name": "B Ward Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.95448098198198,
          "lng": 72.83437458843164
        },
        "radiusMeters": 1377,
        "averageTemperatureC": 34.4,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 85,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-critical-2",
        "name": "Cumballa Hill Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.974273774774773,
          "lng": 72.79249419263832
        },
        "radiusMeters": 1371,
        "averageTemperatureC": 34.4,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.24064781988127149,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 93,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 81,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-critical-3",
        "name": "Worli Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.994066567567565,
          "lng": 72.83437458843164
        },
        "radiusMeters": 1295,
        "averageTemperatureC": 34,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.5446286650164753,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 84,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 75,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-248595211-hotspot-critical-4",
        "name": "Colaba Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.914895396396396,
          "lng": 72.81343439053498
        },
        "radiusMeters": 1261,
        "averageTemperatureC": 33.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.3908862353427117,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 88,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 82,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 78,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-1",
        "name": "D Ward Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.95448098198198,
          "lng": 72.81343439053498
        },
        "radiusMeters": 1249,
        "averageTemperatureC": 33.7,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0.6527817743605917,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 80,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-248595211-hotspot-severe-2",
        "name": "Andheri Green Deficit Region",
        "coordinates": {
          "lat": 19.093030531531525,
          "lng": 72.85531478632831
        },
        "radiusMeters": 1223,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.7333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.5598546625756399
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 80,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 74,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 67,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-3",
        "name": "Colaba Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.914895396396396,
          "lng": 72.83437458843164
        },
        "radiusMeters": 1187,
        "averageTemperatureC": 33.4,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.6143969807684444,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 82,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 74,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
      },
      {
        "id": "osm-248595211-hotspot-severe-4",
        "name": "Worli Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.994066567567565,
          "lng": 72.81343439053498
        },
        "radiusMeters": 1173,
        "averageTemperatureC": 33.4,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.6631623042215536,
          "waterProximity": 0.9139768756910125
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 80,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-248595211-hotspot-severe-5",
        "name": "Bandra Green Deficit Region",
        "coordinates": {
          "lat": 19.073237738738733,
          "lng": 72.81343439053498
        },
        "radiusMeters": 1117,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 62,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 57,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-6",
        "name": "Vashi Green Deficit Region",
        "coordinates": {
          "lat": 19.073237738738733,
          "lng": 73.00189617160495
        },
        "radiusMeters": 1093,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0.19285300111761605
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 69,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 58,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-7",
        "name": "Juhu Green Deficit Region",
        "coordinates": {
          "lat": 19.13261611711711,
          "lng": 72.83437458843164
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-8",
        "name": "Masjid Bunder Green Deficit Region",
        "coordinates": {
          "lat": 18.95448098198198,
          "lng": 72.85531478632831
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-9",
        "name": "Dadar Green Deficit Region",
        "coordinates": {
          "lat": 18.994066567567565,
          "lng": 72.85531478632831
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-10",
        "name": "Chembur Green Deficit Region",
        "coordinates": {
          "lat": 19.073237738738733,
          "lng": 72.89719518212164
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-11",
        "name": "Powai Green Deficit Region",
        "coordinates": {
          "lat": 19.112823324324317,
          "lng": 72.9181353800183
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248595211-hotspot-severe-12",
        "name": "Airoli Green Deficit Region",
        "coordinates": {
          "lat": 19.1524089099099,
          "lng": 73.00189617160495
        },
        "radiusMeters": 1052,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.06722664518443344
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1196730055.7578125,
      "vegetatedAreaSqMeters": 10850284.270507812,
      "waterAreaSqMeters": 962281900.875,
      "buildingAreaSqMeters": 2546959.0009765625,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:09:44.170Z"
  },
  {
    "id": "osm-249224760",
    "name": "Bengaluru",
    "state": "Karnataka",
    "country": "India",
    "displayName": "Bengaluru, Bangalore North, Bengaluru Urban, Karnataka, India",
    "coordinates": {
      "lat": 12.9767936,
      "lng": 77.590082
    },
    "boundingbox": [
      "12.8334905",
      "13.1426196",
      "77.4598797",
      "77.7840639"
    ],
    "boundary": [
      [
        {
          "lat": 12.9046925,
          "lng": 77.4598797
        },
        {
          "lat": 12.898212,
          "lng": 77.4602242
        },
        {
          "lat": 12.8883158,
          "lng": 77.4684886
        },
        {
          "lat": 12.8939919,
          "lng": 77.4701154
        },
        {
          "lat": 12.8984304,
          "lng": 77.4734404
        },
        {
          "lat": 12.8964143,
          "lng": 77.4772684
        },
        {
          "lat": 12.8943435,
          "lng": 77.4755216
        },
        {
          "lat": 12.8921719,
          "lng": 77.4790702
        },
        {
          "lat": 12.88979,
          "lng": 77.4793075
        },
        {
          "lat": 12.8895559,
          "lng": 77.4818419
        },
        {
          "lat": 12.8862915,
          "lng": 77.4829667
        },
        {
          "lat": 12.8861201,
          "lng": 77.4787671
        },
        {
          "lat": 12.8844496,
          "lng": 77.4789021
        },
        {
          "lat": 12.8800484,
          "lng": 77.4748241
        },
        {
          "lat": 12.8783788,
          "lng": 77.4756686
        },
        {
          "lat": 12.8780974,
          "lng": 77.4816863
        },
        {
          "lat": 12.8742851,
          "lng": 77.4808768
        },
        {
          "lat": 12.8743755,
          "lng": 77.4831207
        },
        {
          "lat": 12.8716457,
          "lng": 77.4847352
        },
        {
          "lat": 12.8724031,
          "lng": 77.4883638
        },
        {
          "lat": 12.8708198,
          "lng": 77.491781
        },
        {
          "lat": 12.8721949,
          "lng": 77.4925224
        },
        {
          "lat": 12.8723759,
          "lng": 77.497026
        },
        {
          "lat": 12.8770092,
          "lng": 77.5045467
        },
        {
          "lat": 12.8680622,
          "lng": 77.5115925
        },
        {
          "lat": 12.8678767,
          "lng": 77.5154926
        },
        {
          "lat": 12.8721493,
          "lng": 77.5202052
        },
        {
          "lat": 12.8705789,
          "lng": 77.5230865
        },
        {
          "lat": 12.8611665,
          "lng": 77.5184087
        },
        {
          "lat": 12.8399451,
          "lng": 77.5235185
        },
        {
          "lat": 12.8397015,
          "lng": 77.5334342
        },
        {
          "lat": 12.8417374,
          "lng": 77.5375745
        },
        {
          "lat": 12.8453043,
          "lng": 77.538348
        },
        {
          "lat": 12.8433708,
          "lng": 77.5427749
        },
        {
          "lat": 12.8443686,
          "lng": 77.5443141
        },
        {
          "lat": 12.8476161,
          "lng": 77.5446833
        },
        {
          "lat": 12.8471569,
          "lng": 77.553021
        },
        {
          "lat": 12.8480283,
          "lng": 77.5544813
        },
        {
          "lat": 12.8441897,
          "lng": 77.5573468
        },
        {
          "lat": 12.841844,
          "lng": 77.5574056
        },
        {
          "lat": 12.8402747,
          "lng": 77.5626756
        },
        {
          "lat": 12.8389704,
          "lng": 77.5625571
        },
        {
          "lat": 12.839196,
          "lng": 77.5718742
        },
        {
          "lat": 12.8373387,
          "lng": 77.574328
        },
        {
          "lat": 12.8387196,
          "lng": 77.5752311
        },
        {
          "lat": 12.8382627,
          "lng": 77.5790409
        },
        {
          "lat": 12.8334905,
          "lng": 77.5870163
        },
        {
          "lat": 12.8354743,
          "lng": 77.5896662
        },
        {
          "lat": 12.8345839,
          "lng": 77.5915303
        },
        {
          "lat": 12.84036,
          "lng": 77.5939871
        },
        {
          "lat": 12.8491909,
          "lng": 77.595609
        },
        {
          "lat": 12.8481733,
          "lng": 77.6044727
        },
        {
          "lat": 12.8460657,
          "lng": 77.6092212
        },
        {
          "lat": 12.8512683,
          "lng": 77.6090996
        },
        {
          "lat": 12.8517501,
          "lng": 77.6127453
        },
        {
          "lat": 12.8575339,
          "lng": 77.6168394
        },
        {
          "lat": 12.8571232,
          "lng": 77.6292239
        },
        {
          "lat": 12.8606111,
          "lng": 77.6313954
        },
        {
          "lat": 12.8630485,
          "lng": 77.6352027
        },
        {
          "lat": 12.8634608,
          "lng": 77.6384861
        },
        {
          "lat": 12.8649982,
          "lng": 77.6390688
        },
        {
          "lat": 12.865008,
          "lng": 77.641206
        },
        {
          "lat": 12.8635927,
          "lng": 77.6418751
        },
        {
          "lat": 12.8505755,
          "lng": 77.643091
        },
        {
          "lat": 12.8530704,
          "lng": 77.6495629
        },
        {
          "lat": 12.8521501,
          "lng": 77.6500727
        },
        {
          "lat": 12.8536294,
          "lng": 77.6498706
        },
        {
          "lat": 12.8561123,
          "lng": 77.6558999
        },
        {
          "lat": 12.8585528,
          "lng": 77.6574002
        },
        {
          "lat": 12.8595913,
          "lng": 77.6623661
        },
        {
          "lat": 12.8662118,
          "lng": 77.666719
        },
        {
          "lat": 12.8682523,
          "lng": 77.6728926
        },
        {
          "lat": 12.8725787,
          "lng": 77.6753249
        },
        {
          "lat": 12.8802721,
          "lng": 77.6713821
        },
        {
          "lat": 12.8798489,
          "lng": 77.6739677
        },
        {
          "lat": 12.8841265,
          "lng": 77.6741843
        },
        {
          "lat": 12.8846669,
          "lng": 77.6722394
        },
        {
          "lat": 12.89314,
          "lng": 77.6737729
        },
        {
          "lat": 12.8942604,
          "lng": 77.6773538
        },
        {
          "lat": 12.9014142,
          "lng": 77.6825451
        },
        {
          "lat": 12.9025606,
          "lng": 77.6874698
        },
        {
          "lat": 12.9044378,
          "lng": 77.6857168
        },
        {
          "lat": 12.904728,
          "lng": 77.6873107
        },
        {
          "lat": 12.9064495,
          "lng": 77.6868479
        },
        {
          "lat": 12.9055251,
          "lng": 77.6909251
        },
        {
          "lat": 12.9039983,
          "lng": 77.6915677
        },
        {
          "lat": 12.9040881,
          "lng": 77.7028873
        },
        {
          "lat": 12.9020259,
          "lng": 77.7068705
        },
        {
          "lat": 12.9080629,
          "lng": 77.7083542
        },
        {
          "lat": 12.9073873,
          "lng": 77.7161215
        },
        {
          "lat": 12.908966,
          "lng": 77.7176396
        },
        {
          "lat": 12.9079857,
          "lng": 77.7197052
        },
        {
          "lat": 12.9088233,
          "lng": 77.7207964
        },
        {
          "lat": 12.906568,
          "lng": 77.7262755
        },
        {
          "lat": 12.9144994,
          "lng": 77.7277829
        },
        {
          "lat": 12.9140353,
          "lng": 77.7343653
        },
        {
          "lat": 12.9131966,
          "lng": 77.7344467
        },
        {
          "lat": 12.9134915,
          "lng": 77.737396
        },
        {
          "lat": 12.9148178,
          "lng": 77.7380194
        },
        {
          "lat": 12.9136334,
          "lng": 77.7446688
        },
        {
          "lat": 12.9197736,
          "lng": 77.7457856
        },
        {
          "lat": 12.922011,
          "lng": 77.7513393
        },
        {
          "lat": 12.9252985,
          "lng": 77.7522725
        },
        {
          "lat": 12.9287835,
          "lng": 77.7648351
        },
        {
          "lat": 12.9349639,
          "lng": 77.7664129
        },
        {
          "lat": 12.9594527,
          "lng": 77.7646684
        },
        {
          "lat": 12.9595269,
          "lng": 77.7672036
        },
        {
          "lat": 12.9659318,
          "lng": 77.7720859
        },
        {
          "lat": 12.9680918,
          "lng": 77.7774288
        },
        {
          "lat": 12.9668074,
          "lng": 77.7787911
        },
        {
          "lat": 12.9667302,
          "lng": 77.7840639
        },
        {
          "lat": 12.9709009,
          "lng": 77.783203
        },
        {
          "lat": 12.9705769,
          "lng": 77.7786284
        },
        {
          "lat": 12.9728138,
          "lng": 77.7787959
        },
        {
          "lat": 12.9751374,
          "lng": 77.7762017
        },
        {
          "lat": 12.9764955,
          "lng": 77.7782784
        },
        {
          "lat": 12.9779627,
          "lng": 77.7783759
        },
        {
          "lat": 12.9804588,
          "lng": 77.7746683
        },
        {
          "lat": 12.9851949,
          "lng": 77.7769134
        },
        {
          "lat": 12.9915097,
          "lng": 77.7756056
        },
        {
          "lat": 12.9918859,
          "lng": 77.7741182
        },
        {
          "lat": 13.0011158,
          "lng": 77.7747483
        },
        {
          "lat": 13.0025275,
          "lng": 77.7725595
        },
        {
          "lat": 13.0035529,
          "lng": 77.7755696
        },
        {
          "lat": 13.0058669,
          "lng": 77.7757553
        },
        {
          "lat": 13.0063984,
          "lng": 77.7733544
        },
        {
          "lat": 13.0131597,
          "lng": 77.7741444
        },
        {
          "lat": 13.0150477,
          "lng": 77.7714616
        },
        {
          "lat": 13.002653,
          "lng": 77.7685827
        },
        {
          "lat": 13.0040738,
          "lng": 77.7641211
        },
        {
          "lat": 13.0026042,
          "lng": 77.7633416
        },
        {
          "lat": 13.0050316,
          "lng": 77.7621056
        },
        {
          "lat": 13.0052549,
          "lng": 77.7602069
        },
        {
          "lat": 13.0074666,
          "lng": 77.7595697
        },
        {
          "lat": 13.010072,
          "lng": 77.7560142
        },
        {
          "lat": 13.008839,
          "lng": 77.7547417
        },
        {
          "lat": 13.0127309,
          "lng": 77.7478807
        },
        {
          "lat": 13.0068195,
          "lng": 77.7470852
        },
        {
          "lat": 13.0071435,
          "lng": 77.7411054
        },
        {
          "lat": 13.0081253,
          "lng": 77.7408784
        },
        {
          "lat": 13.0076148,
          "lng": 77.7361466
        },
        {
          "lat": 13.0107625,
          "lng": 77.7362319
        },
        {
          "lat": 13.0105449,
          "lng": 77.7280825
        },
        {
          "lat": 13.0198151,
          "lng": 77.7300945
        },
        {
          "lat": 13.0259276,
          "lng": 77.7251532
        },
        {
          "lat": 13.033571,
          "lng": 77.7239047
        },
        {
          "lat": 13.0341131,
          "lng": 77.7214455
        },
        {
          "lat": 13.0328969,
          "lng": 77.7174164
        },
        {
          "lat": 13.0315755,
          "lng": 77.7173371
        },
        {
          "lat": 13.0319464,
          "lng": 77.7149629
        },
        {
          "lat": 13.0252993,
          "lng": 77.7091528
        },
        {
          "lat": 13.0261873,
          "lng": 77.7059213
        },
        {
          "lat": 13.0249461,
          "lng": 77.7011858
        },
        {
          "lat": 13.0274368,
          "lng": 77.7016839
        },
        {
          "lat": 13.0267389,
          "lng": 77.6943795
        },
        {
          "lat": 13.0324903,
          "lng": 77.6909147
        },
        {
          "lat": 13.0332386,
          "lng": 77.6836302
        },
        {
          "lat": 13.0451095,
          "lng": 77.6850515
        },
        {
          "lat": 13.0501072,
          "lng": 77.6839669
        },
        {
          "lat": 13.0524392,
          "lng": 77.6783957
        },
        {
          "lat": 13.0556757,
          "lng": 77.67949
        },
        {
          "lat": 13.0628712,
          "lng": 77.6791335
        },
        {
          "lat": 13.0628823,
          "lng": 77.6766701
        },
        {
          "lat": 13.0650309,
          "lng": 77.6771877
        },
        {
          "lat": 13.0656462,
          "lng": 77.672406
        },
        {
          "lat": 13.0657819,
          "lng": 77.6700267
        },
        {
          "lat": 13.0638422,
          "lng": 77.6673226
        },
        {
          "lat": 13.0659046,
          "lng": 77.6670164
        },
        {
          "lat": 13.0678798,
          "lng": 77.6600883
        },
        {
          "lat": 13.0746131,
          "lng": 77.6564912
        },
        {
          "lat": 13.0819932,
          "lng": 77.6547211
        },
        {
          "lat": 13.0813629,
          "lng": 77.649586
        },
        {
          "lat": 13.0862758,
          "lng": 77.646524
        },
        {
          "lat": 13.0868863,
          "lng": 77.6426974
        },
        {
          "lat": 13.1046559,
          "lng": 77.6503199
        },
        {
          "lat": 13.1062687,
          "lng": 77.637021
        },
        {
          "lat": 13.1134229,
          "lng": 77.6386161
        },
        {
          "lat": 13.1259441,
          "lng": 77.6306029
        },
        {
          "lat": 13.1316008,
          "lng": 77.6184035
        },
        {
          "lat": 13.131168,
          "lng": 77.615531
        },
        {
          "lat": 13.1330058,
          "lng": 77.6124352
        },
        {
          "lat": 13.1342598,
          "lng": 77.6042841
        },
        {
          "lat": 13.1343074,
          "lng": 77.6018395
        },
        {
          "lat": 13.1320319,
          "lng": 77.5996186
        },
        {
          "lat": 13.1333037,
          "lng": 77.5891037
        },
        {
          "lat": 13.1326003,
          "lng": 77.585634
        },
        {
          "lat": 13.1400299,
          "lng": 77.5824806
        },
        {
          "lat": 13.1426196,
          "lng": 77.5799114
        },
        {
          "lat": 13.1415192,
          "lng": 77.5743076
        },
        {
          "lat": 13.1360438,
          "lng": 77.5734177
        },
        {
          "lat": 13.1359732,
          "lng": 77.5719113
        },
        {
          "lat": 13.1339359,
          "lng": 77.5713336
        },
        {
          "lat": 13.1250224,
          "lng": 77.5696634
        },
        {
          "lat": 13.1259629,
          "lng": 77.5655565
        },
        {
          "lat": 13.1138239,
          "lng": 77.5615912
        },
        {
          "lat": 13.1121112,
          "lng": 77.5596753
        },
        {
          "lat": 13.1072513,
          "lng": 77.5604712
        },
        {
          "lat": 13.1001436,
          "lng": 77.5560238
        },
        {
          "lat": 13.1013186,
          "lng": 77.5442294
        },
        {
          "lat": 13.0899733,
          "lng": 77.5407137
        },
        {
          "lat": 13.0901736,
          "lng": 77.5354524
        },
        {
          "lat": 13.0921371,
          "lng": 77.5343941
        },
        {
          "lat": 13.0930664,
          "lng": 77.5237785
        },
        {
          "lat": 13.0808731,
          "lng": 77.5232021
        },
        {
          "lat": 13.0791509,
          "lng": 77.5208825
        },
        {
          "lat": 13.0796652,
          "lng": 77.51898
        },
        {
          "lat": 13.0741809,
          "lng": 77.5179571
        },
        {
          "lat": 13.0757244,
          "lng": 77.5111324
        },
        {
          "lat": 13.0780067,
          "lng": 77.5071769
        },
        {
          "lat": 13.0719799,
          "lng": 77.4995046
        },
        {
          "lat": 13.0732922,
          "lng": 77.498344
        },
        {
          "lat": 13.0735286,
          "lng": 77.4929727
        },
        {
          "lat": 13.0621411,
          "lng": 77.4930338
        },
        {
          "lat": 13.0569584,
          "lng": 77.4909557
        },
        {
          "lat": 13.0515118,
          "lng": 77.4925833
        },
        {
          "lat": 13.0451031,
          "lng": 77.4909729
        },
        {
          "lat": 13.0486378,
          "lng": 77.4800592
        },
        {
          "lat": 13.0447627,
          "lng": 77.4796245
        },
        {
          "lat": 13.0407518,
          "lng": 77.4825567
        },
        {
          "lat": 13.0315219,
          "lng": 77.4768731
        },
        {
          "lat": 13.0291606,
          "lng": 77.4795354
        },
        {
          "lat": 13.018972,
          "lng": 77.4782782
        },
        {
          "lat": 13.0074114,
          "lng": 77.4728574
        },
        {
          "lat": 13.0064466,
          "lng": 77.475398
        },
        {
          "lat": 13.0025572,
          "lng": 77.4752662
        },
        {
          "lat": 12.9866974,
          "lng": 77.4684461
        },
        {
          "lat": 12.9836603,
          "lng": 77.4732776
        },
        {
          "lat": 12.9756706,
          "lng": 77.4748368
        },
        {
          "lat": 12.9701069,
          "lng": 77.4750063
        },
        {
          "lat": 12.9633951,
          "lng": 77.4731872
        },
        {
          "lat": 12.9604463,
          "lng": 77.4750405
        },
        {
          "lat": 12.9550433,
          "lng": 77.4719953
        },
        {
          "lat": 12.9522356,
          "lng": 77.4715488
        },
        {
          "lat": 12.9516005,
          "lng": 77.4725124
        },
        {
          "lat": 12.9495859,
          "lng": 77.4710589
        },
        {
          "lat": 12.9488226,
          "lng": 77.4762791
        },
        {
          "lat": 12.9403335,
          "lng": 77.4732516
        },
        {
          "lat": 12.9375623,
          "lng": 77.478357
        },
        {
          "lat": 12.9369206,
          "lng": 77.4842436
        },
        {
          "lat": 12.9338891,
          "lng": 77.4838948
        },
        {
          "lat": 12.9289551,
          "lng": 77.4823156
        },
        {
          "lat": 12.927227,
          "lng": 77.4791188
        },
        {
          "lat": 12.9259171,
          "lng": 77.4795953
        },
        {
          "lat": 12.9266394,
          "lng": 77.4733884
        },
        {
          "lat": 12.9151921,
          "lng": 77.4700802
        },
        {
          "lat": 12.9101466,
          "lng": 77.4664994
        },
        {
          "lat": 12.9068778,
          "lng": 77.4666715
        },
        {
          "lat": 12.9066307,
          "lng": 77.4600793
        },
        {
          "lat": 12.9046925,
          "lng": 77.4598797
        }
      ]
    ],
    "greenCoverPercent": 1.48,
    "waterCoveragePercent": 3.43,
    "solarPotentialMw": 142,
    "carbonEstimateTonnes": 1577762,
    "hotspots": [
      {
        "id": "osm-249224760-hotspot-critical-1",
        "name": "HSR Layout Built-Up Stress Zone",
        "coordinates": {
          "lat": 12.917229238738743,
          "lng": 77.6708070949561
        },
        "radiusMeters": 1357,
        "averageTemperatureC": 34.3,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0.5540120445559537
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-1",
        "name": "HSR Layout Built-Up Stress Zone",
        "coordinates": {
          "lat": 12.917229238738743,
          "lng": 77.65518284347787
        },
        "radiusMeters": 1250,
        "averageTemperatureC": 33.7,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0.44945261213337395,
          "waterProximity": 0.5079443175840462
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 77,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-249224760-hotspot-severe-2",
        "name": "K Narayanapura Green Deficit Region",
        "coordinates": {
          "lat": 13.054256265765778,
          "lng": 77.63955859199964
        },
        "radiusMeters": 1211,
        "averageTemperatureC": 33.6,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.26666666666666666,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 78,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 69,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-3",
        "name": "Indiranagar Green Deficit Region",
        "coordinates": {
          "lat": 12.978130139639648,
          "lng": 77.60831008904319
        },
        "radiusMeters": 1137,
        "averageTemperatureC": 33.2,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0.3382469738770535
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 64,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-4",
        "name": "Indiranagar Green Deficit Region",
        "coordinates": {
          "lat": 12.962904914414421,
          "lng": 77.63955859199964
        },
        "radiusMeters": 1131,
        "averageTemperatureC": 33.2,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 74,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 60,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-5",
        "name": "Koramangala High Density Corridor",
        "coordinates": {
          "lat": 12.947679689189195,
          "lng": 77.60831008904319
        },
        "radiusMeters": 1101,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0.8,
          "vegetationProximity": 0.287864463584913,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 91,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 72,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 64,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 61,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-6",
        "name": "Nagadevanahalli Green Deficit Region",
        "coordinates": {
          "lat": 12.93245446396397,
          "lng": 77.49894032869558
        },
        "radiusMeters": 1101,
        "averageTemperatureC": 33,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 54,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 53,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-7",
        "name": "Byrathi Green Deficit Region",
        "coordinates": {
          "lat": 13.054256265765778,
          "lng": 77.6708070949561
        },
        "radiusMeters": 1097,
        "averageTemperatureC": 33,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 61,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-8",
        "name": "Whitefield Green Deficit Region",
        "coordinates": {
          "lat": 12.978130139639648,
          "lng": 77.74892835234725
        },
        "radiusMeters": 1095,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.6,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 64,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-9",
        "name": "Peenya Green Deficit Region",
        "coordinates": {
          "lat": 13.039031040540552,
          "lng": 77.53018883165204
        },
        "radiusMeters": 1077,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-10",
        "name": "Jayanagar Green Deficit Region",
        "coordinates": {
          "lat": 12.917229238738743,
          "lng": 77.5614373346085
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249224760-hotspot-severe-11",
        "name": "Whitefield Green Deficit Region",
        "coordinates": {
          "lat": 12.962904914414421,
          "lng": 77.71767984939079
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 719087027.2363281,
      "vegetatedAreaSqMeters": 10635740.556640625,
      "waterAreaSqMeters": 24697924.247070312,
      "buildingAreaSqMeters": 3157638.30078125,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:10:43.800Z"
  },
  {
    "id": "osm-249199079",
    "name": "Hyderabad",
    "state": "Telangana",
    "country": "India",
    "displayName": "Hyderabad, Bahadurpura mandal, Hyderabad, Telangana, India",
    "coordinates": {
      "lat": 17.360589,
      "lng": 78.4740613
    },
    "boundingbox": [
      "17.2916377",
      "17.5608321",
      "78.2387067",
      "78.6223912"
    ],
    "boundary": [
      [
        {
          "lat": 17.5409742,
          "lng": 78.2387067
        },
        {
          "lat": 17.5347543,
          "lng": 78.2392646
        },
        {
          "lat": 17.5294344,
          "lng": 78.2422686
        },
        {
          "lat": 17.5294754,
          "lng": 78.2448436
        },
        {
          "lat": 17.5262425,
          "lng": 78.243599
        },
        {
          "lat": 17.5256695,
          "lng": 78.2447148
        },
        {
          "lat": 17.5271837,
          "lng": 78.245659
        },
        {
          "lat": 17.5260788,
          "lng": 78.2464744
        },
        {
          "lat": 17.5258741,
          "lng": 78.2519246
        },
        {
          "lat": 17.5213725,
          "lng": 78.2524396
        },
        {
          "lat": 17.5198993,
          "lng": 78.251195
        },
        {
          "lat": 17.518426,
          "lng": 78.2523967
        },
        {
          "lat": 17.5169527,
          "lng": 78.2508088
        },
        {
          "lat": 17.5155612,
          "lng": 78.2525683
        },
        {
          "lat": 17.5127373,
          "lng": 78.2528258
        },
        {
          "lat": 17.5111821,
          "lng": 78.2517529
        },
        {
          "lat": 17.5074168,
          "lng": 78.2573748
        },
        {
          "lat": 17.5082763,
          "lng": 78.2609797
        },
        {
          "lat": 17.5178735,
          "lng": 78.2629324
        },
        {
          "lat": 17.5233369,
          "lng": 78.2671166
        },
        {
          "lat": 17.5202267,
          "lng": 78.2715798
        },
        {
          "lat": 17.5183032,
          "lng": 78.2778884
        },
        {
          "lat": 17.5149882,
          "lng": 78.2799912
        },
        {
          "lat": 17.5140879,
          "lng": 78.2831025
        },
        {
          "lat": 17.508,
          "lng": 78.2817293
        },
        {
          "lat": 17.5069359,
          "lng": 78.2850338
        },
        {
          "lat": 17.5026999,
          "lng": 78.2850982
        },
        {
          "lat": 17.5026282,
          "lng": 78.2909132
        },
        {
          "lat": 17.5105478,
          "lng": 78.2880163
        },
        {
          "lat": 17.5112845,
          "lng": 78.2891321
        },
        {
          "lat": 17.5103841,
          "lng": 78.2913637
        },
        {
          "lat": 17.5072327,
          "lng": 78.2931447
        },
        {
          "lat": 17.5089926,
          "lng": 78.2952261
        },
        {
          "lat": 17.5081119,
          "lng": 78.3001264
        },
        {
          "lat": 17.5057388,
          "lng": 78.2988525
        },
        {
          "lat": 17.5034374,
          "lng": 78.3035086
        },
        {
          "lat": 17.5026395,
          "lng": 78.3060918
        },
        {
          "lat": 17.5051346,
          "lng": 78.3075136
        },
        {
          "lat": 17.503406,
          "lng": 78.3107615
        },
        {
          "lat": 17.4932784,
          "lng": 78.3160159
        },
        {
          "lat": 17.485724,
          "lng": 78.3128402
        },
        {
          "lat": 17.4841482,
          "lng": 78.2950652
        },
        {
          "lat": 17.4787859,
          "lng": 78.2953334
        },
        {
          "lat": 17.4780224,
          "lng": 78.2977365
        },
        {
          "lat": 17.4765846,
          "lng": 78.2950221
        },
        {
          "lat": 17.4729516,
          "lng": 78.2965134
        },
        {
          "lat": 17.463045,
          "lng": 78.2899473
        },
        {
          "lat": 17.4562084,
          "lng": 78.287072
        },
        {
          "lat": 17.4557171,
          "lng": 78.2834242
        },
        {
          "lat": 17.453752,
          "lng": 78.2832526
        },
        {
          "lat": 17.4415926,
          "lng": 78.2718371
        },
        {
          "lat": 17.4336496,
          "lng": 78.2729529
        },
        {
          "lat": 17.4237818,
          "lng": 78.2829092
        },
        {
          "lat": 17.4273032,
          "lng": 78.2893894
        },
        {
          "lat": 17.4325851,
          "lng": 78.294196
        },
        {
          "lat": 17.4187044,
          "lng": 78.3165978
        },
        {
          "lat": 17.4157153,
          "lng": 78.327627
        },
        {
          "lat": 17.4155924,
          "lng": 78.3352659
        },
        {
          "lat": 17.4120299,
          "lng": 78.3421753
        },
        {
          "lat": 17.4149372,
          "lng": 78.3436774
        },
        {
          "lat": 17.4125213,
          "lng": 78.3483337
        },
        {
          "lat": 17.4134836,
          "lng": 78.3518098
        },
        {
          "lat": 17.4164114,
          "lng": 78.3536337
        },
        {
          "lat": 17.4121835,
          "lng": 78.3657037
        },
        {
          "lat": 17.4136806,
          "lng": 78.3678494
        },
        {
          "lat": 17.4121732,
          "lng": 78.3719371
        },
        {
          "lat": 17.4156999,
          "lng": 78.3743833
        },
        {
          "lat": 17.4146097,
          "lng": 78.3763896
        },
        {
          "lat": 17.4174044,
          "lng": 78.3779882
        },
        {
          "lat": 17.4178241,
          "lng": 78.3814214
        },
        {
          "lat": 17.4136269,
          "lng": 78.3882235
        },
        {
          "lat": 17.4096958,
          "lng": 78.3882986
        },
        {
          "lat": 17.4095949,
          "lng": 78.390441
        },
        {
          "lat": 17.4078133,
          "lng": 78.3898974
        },
        {
          "lat": 17.4078952,
          "lng": 78.3869255
        },
        {
          "lat": 17.4043069,
          "lng": 78.3906323
        },
        {
          "lat": 17.401855,
          "lng": 78.3903963
        },
        {
          "lat": 17.4023054,
          "lng": 78.3916462
        },
        {
          "lat": 17.3962036,
          "lng": 78.391099
        },
        {
          "lat": 17.394197,
          "lng": 78.3923436
        },
        {
          "lat": 17.3923541,
          "lng": 78.3910346
        },
        {
          "lat": 17.3925588,
          "lng": 78.393792
        },
        {
          "lat": 17.3900709,
          "lng": 78.3929873
        },
        {
          "lat": 17.385996,
          "lng": 78.3875156
        },
        {
          "lat": 17.3854533,
          "lng": 78.3846832
        },
        {
          "lat": 17.3884635,
          "lng": 78.3828271
        },
        {
          "lat": 17.3939308,
          "lng": 78.382752
        },
        {
          "lat": 17.3874396,
          "lng": 78.381486
        },
        {
          "lat": 17.3876853,
          "lng": 78.3797479
        },
        {
          "lat": 17.3852895,
          "lng": 78.3800912
        },
        {
          "lat": 17.3835233,
          "lng": 78.3788628
        },
        {
          "lat": 17.3820233,
          "lng": 78.3796406
        },
        {
          "lat": 17.3763714,
          "lng": 78.3753491
        },
        {
          "lat": 17.3710776,
          "lng": 78.3889533
        },
        {
          "lat": 17.3711186,
          "lng": 78.3984375
        },
        {
          "lat": 17.3731869,
          "lng": 78.4014631
        },
        {
          "lat": 17.3720811,
          "lng": 78.4101534
        },
        {
          "lat": 17.3660192,
          "lng": 78.4074283
        },
        {
          "lat": 17.3629677,
          "lng": 78.4075463
        },
        {
          "lat": 17.3608275,
          "lng": 78.4100085
        },
        {
          "lat": 17.3593601,
          "lng": 78.4099027
        },
        {
          "lat": 17.3573356,
          "lng": 78.4070957
        },
        {
          "lat": 17.3573254,
          "lng": 78.401506
        },
        {
          "lat": 17.3548063,
          "lng": 78.4007442
        },
        {
          "lat": 17.354028,
          "lng": 78.3983785
        },
        {
          "lat": 17.3506104,
          "lng": 78.3979909
        },
        {
          "lat": 17.3495155,
          "lng": 78.400932
        },
        {
          "lat": 17.3321224,
          "lng": 78.3966351
        },
        {
          "lat": 17.3310982,
          "lng": 78.3950901
        },
        {
          "lat": 17.3312211,
          "lng": 78.3889961
        },
        {
          "lat": 17.3282919,
          "lng": 78.3813572
        },
        {
          "lat": 17.3279539,
          "lng": 78.3751559
        },
        {
          "lat": 17.3129899,
          "lng": 78.3759069
        },
        {
          "lat": 17.3041604,
          "lng": 78.3954334
        },
        {
          "lat": 17.3033,
          "lng": 78.3964849
        },
        {
          "lat": 17.3002884,
          "lng": 78.3963347
        },
        {
          "lat": 17.3013538,
          "lng": 78.408308
        },
        {
          "lat": 17.2916377,
          "lng": 78.4296262
        },
        {
          "lat": 17.3023525,
          "lng": 78.4331882
        },
        {
          "lat": 17.3024754,
          "lng": 78.4398615
        },
        {
          "lat": 17.3012872,
          "lng": 78.4402048
        },
        {
          "lat": 17.3006316,
          "lng": 78.4484231
        },
        {
          "lat": 17.3022091,
          "lng": 78.4511697
        },
        {
          "lat": 17.3041758,
          "lng": 78.4514057
        },
        {
          "lat": 17.3040529,
          "lng": 78.4541738
        },
        {
          "lat": 17.3022142,
          "lng": 78.4565449
        },
        {
          "lat": 17.304058,
          "lng": 78.4591627
        },
        {
          "lat": 17.3088518,
          "lng": 78.4594846
        },
        {
          "lat": 17.3084625,
          "lng": 78.4623384
        },
        {
          "lat": 17.3145314,
          "lng": 78.4615445
        },
        {
          "lat": 17.3150589,
          "lng": 78.4650421
        },
        {
          "lat": 17.3165227,
          "lng": 78.4662698
        },
        {
          "lat": 17.308483,
          "lng": 78.4709215
        },
        {
          "lat": 17.3117608,
          "lng": 78.4770155
        },
        {
          "lat": 17.3143214,
          "lng": 78.4786677
        },
        {
          "lat": 17.3125187,
          "lng": 78.4832597
        },
        {
          "lat": 17.3142805,
          "lng": 78.4897613
        },
        {
          "lat": 17.3173328,
          "lng": 78.4897722
        },
        {
          "lat": 17.3180293,
          "lng": 78.4926582
        },
        {
          "lat": 17.3174557,
          "lng": 78.4949434
        },
        {
          "lat": 17.3140142,
          "lng": 78.4962416
        },
        {
          "lat": 17.3133996,
          "lng": 78.4978295
        },
        {
          "lat": 17.3137888,
          "lng": 78.5060692
        },
        {
          "lat": 17.3162476,
          "lng": 78.5056328
        },
        {
          "lat": 17.3168309,
          "lng": 78.5090626
        },
        {
          "lat": 17.3188794,
          "lng": 78.5097814
        },
        {
          "lat": 17.3349286,
          "lng": 78.5071367
        },
        {
          "lat": 17.3364238,
          "lng": 78.5050124
        },
        {
          "lat": 17.3421999,
          "lng": 78.5047174
        },
        {
          "lat": 17.3435517,
          "lng": 78.506949
        },
        {
          "lat": 17.3413439,
          "lng": 78.5189892
        },
        {
          "lat": 17.3386053,
          "lng": 78.5216366
        },
        {
          "lat": 17.3397114,
          "lng": 78.5179996
        },
        {
          "lat": 17.3382161,
          "lng": 78.5175543
        },
        {
          "lat": 17.336936,
          "lng": 78.5193085
        },
        {
          "lat": 17.3374275,
          "lng": 78.52257
        },
        {
          "lat": 17.3396952,
          "lng": 78.523788
        },
        {
          "lat": 17.3374909,
          "lng": 78.5361209
        },
        {
          "lat": 17.3348255,
          "lng": 78.5373977
        },
        {
          "lat": 17.3343544,
          "lng": 78.5345867
        },
        {
          "lat": 17.3268267,
          "lng": 78.5350588
        },
        {
          "lat": 17.3265399,
          "lng": 78.533664
        },
        {
          "lat": 17.3245018,
          "lng": 78.5333207
        },
        {
          "lat": 17.3261712,
          "lng": 78.5365823
        },
        {
          "lat": 17.3242355,
          "lng": 78.537108
        },
        {
          "lat": 17.3143829,
          "lng": 78.5527182
        },
        {
          "lat": 17.3126007,
          "lng": 78.5579753
        },
        {
          "lat": 17.3104292,
          "lng": 78.5581899
        },
        {
          "lat": 17.3100195,
          "lng": 78.5655713
        },
        {
          "lat": 17.3042219,
          "lng": 78.5709572
        },
        {
          "lat": 17.3023576,
          "lng": 78.5756779
        },
        {
          "lat": 17.3025676,
          "lng": 78.593123
        },
        {
          "lat": 17.3042219,
          "lng": 78.6018133
        },
        {
          "lat": 17.311474,
          "lng": 78.6171985
        },
        {
          "lat": 17.3115149,
          "lng": 78.6208034
        },
        {
          "lat": 17.3156735,
          "lng": 78.6214471
        },
        {
          "lat": 17.3199139,
          "lng": 78.6199665
        },
        {
          "lat": 17.3200777,
          "lng": 78.6188078
        },
        {
          "lat": 17.3235601,
          "lng": 78.618958
        },
        {
          "lat": 17.3244614,
          "lng": 78.6166835
        },
        {
          "lat": 17.3300945,
          "lng": 78.6168551
        },
        {
          "lat": 17.3389227,
          "lng": 78.6223912
        },
        {
          "lat": 17.3385126,
          "lng": 78.6212303
        },
        {
          "lat": 17.34093,
          "lng": 78.620397
        },
        {
          "lat": 17.3465831,
          "lng": 78.6104192
        },
        {
          "lat": 17.3464192,
          "lng": 78.6025013
        },
        {
          "lat": 17.3450264,
          "lng": 78.5982741
        },
        {
          "lat": 17.3467469,
          "lng": 78.5859145
        },
        {
          "lat": 17.3567929,
          "lng": 78.585189
        },
        {
          "lat": 17.3601005,
          "lng": 78.5798836
        },
        {
          "lat": 17.3655072,
          "lng": 78.5773086
        },
        {
          "lat": 17.366695,
          "lng": 78.5808706
        },
        {
          "lat": 17.3695826,
          "lng": 78.5799909
        },
        {
          "lat": 17.3731152,
          "lng": 78.5843253
        },
        {
          "lat": 17.3762177,
          "lng": 78.5855484
        },
        {
          "lat": 17.3782041,
          "lng": 78.5811067
        },
        {
          "lat": 17.3821769,
          "lng": 78.5809565
        },
        {
          "lat": 17.3837332,
          "lng": 78.5876298
        },
        {
          "lat": 17.3867843,
          "lng": 78.5875654
        },
        {
          "lat": 17.3894447,
          "lng": 78.581939
        },
        {
          "lat": 17.3953538,
          "lng": 78.5802591
        },
        {
          "lat": 17.403923,
          "lng": 78.5819006
        },
        {
          "lat": 17.4049672,
          "lng": 78.5776842
        },
        {
          "lat": 17.4116829,
          "lng": 78.5670519
        },
        {
          "lat": 17.4163818,
          "lng": 78.5666549
        },
        {
          "lat": 17.4250933,
          "lng": 78.5619235
        },
        {
          "lat": 17.4272532,
          "lng": 78.5676312
        },
        {
          "lat": 17.4274527,
          "lng": 78.5733712
        },
        {
          "lat": 17.4299146,
          "lng": 78.5759407
        },
        {
          "lat": 17.4298275,
          "lng": 78.5773623
        },
        {
          "lat": 17.431972,
          "lng": 78.5783601
        },
        {
          "lat": 17.4331799,
          "lng": 78.5775876
        },
        {
          "lat": 17.4401812,
          "lng": 78.5840034
        },
        {
          "lat": 17.4453399,
          "lng": 78.5951507
        },
        {
          "lat": 17.4454525,
          "lng": 78.6084652
        },
        {
          "lat": 17.4488096,
          "lng": 78.6106753
        },
        {
          "lat": 17.4584713,
          "lng": 78.6121023
        },
        {
          "lat": 17.4587784,
          "lng": 78.6146557
        },
        {
          "lat": 17.4608048,
          "lng": 78.6158896
        },
        {
          "lat": 17.4629233,
          "lng": 78.6163294
        },
        {
          "lat": 17.4658248,
          "lng": 78.6148381
        },
        {
          "lat": 17.4763913,
          "lng": 78.6180031
        },
        {
          "lat": 17.4782742,
          "lng": 78.6048496
        },
        {
          "lat": 17.4761252,
          "lng": 78.6035407
        },
        {
          "lat": 17.4783254,
          "lng": 78.5984981
        },
        {
          "lat": 17.4771178,
          "lng": 78.5937345
        },
        {
          "lat": 17.4787961,
          "lng": 78.5895717
        },
        {
          "lat": 17.4865836,
          "lng": 78.5874152
        },
        {
          "lat": 17.496773,
          "lng": 78.5883727
        },
        {
          "lat": 17.5004182,
          "lng": 78.5861924
        },
        {
          "lat": 17.5055189,
          "lng": 78.5758552
        },
        {
          "lat": 17.507903,
          "lng": 78.5743371
        },
        {
          "lat": 17.5044497,
          "lng": 78.5664836
        },
        {
          "lat": 17.5052068,
          "lng": 78.5637477
        },
        {
          "lat": 17.5072123,
          "lng": 78.562353
        },
        {
          "lat": 17.5081741,
          "lng": 78.5480729
        },
        {
          "lat": 17.5152288,
          "lng": 78.5475954
        },
        {
          "lat": 17.5167226,
          "lng": 78.5447094
        },
        {
          "lat": 17.5232551,
          "lng": 78.5473591
        },
        {
          "lat": 17.526529,
          "lng": 78.5473108
        },
        {
          "lat": 17.5290867,
          "lng": 78.5497141
        },
        {
          "lat": 17.5308387,
          "lng": 78.5473564
        },
        {
          "lat": 17.5338336,
          "lng": 78.5471821
        },
        {
          "lat": 17.539051,
          "lng": 78.5522461
        },
        {
          "lat": 17.5411584,
          "lng": 78.5497785
        },
        {
          "lat": 17.5353375,
          "lng": 78.5442531
        },
        {
          "lat": 17.5380843,
          "lng": 78.5365874
        },
        {
          "lat": 17.5373631,
          "lng": 78.5330629
        },
        {
          "lat": 17.5322275,
          "lng": 78.5322797
        },
        {
          "lat": 17.5248358,
          "lng": 78.5334974
        },
        {
          "lat": 17.5230658,
          "lng": 78.5359865
        },
        {
          "lat": 17.5237053,
          "lng": 78.5381699
        },
        {
          "lat": 17.5172801,
          "lng": 78.5368609
        },
        {
          "lat": 17.5171881,
          "lng": 78.5387921
        },
        {
          "lat": 17.515592,
          "lng": 78.539747
        },
        {
          "lat": 17.5103842,
          "lng": 78.5403803
        },
        {
          "lat": 17.5119701,
          "lng": 78.5317221
        },
        {
          "lat": 17.510466,
          "lng": 78.5304239
        },
        {
          "lat": 17.5016256,
          "lng": 78.5308638
        },
        {
          "lat": 17.4982643,
          "lng": 78.5365126
        },
        {
          "lat": 17.4951076,
          "lng": 78.5359815
        },
        {
          "lat": 17.4945448,
          "lng": 78.5341361
        },
        {
          "lat": 17.4924215,
          "lng": 78.5346401
        },
        {
          "lat": 17.4865427,
          "lng": 78.5276127
        },
        {
          "lat": 17.4854478,
          "lng": 78.5276771
        },
        {
          "lat": 17.4852226,
          "lng": 78.5257888
        },
        {
          "lat": 17.4793129,
          "lng": 78.5232836
        },
        {
          "lat": 17.4766625,
          "lng": 78.5258746
        },
        {
          "lat": 17.476422,
          "lng": 78.5290074
        },
        {
          "lat": 17.4622415,
          "lng": 78.5331205
        },
        {
          "lat": 17.4551911,
          "lng": 78.5252631
        },
        {
          "lat": 17.4465118,
          "lng": 78.5215992
        },
        {
          "lat": 17.4456674,
          "lng": 78.5181713
        },
        {
          "lat": 17.4480829,
          "lng": 78.5087085
        },
        {
          "lat": 17.4510306,
          "lng": 78.505404
        },
        {
          "lat": 17.4461792,
          "lng": 78.5017347
        },
        {
          "lat": 17.4428015,
          "lng": 78.5014451
        },
        {
          "lat": 17.4440093,
          "lng": 78.4707499
        },
        {
          "lat": 17.4464197,
          "lng": 78.4699935
        },
        {
          "lat": 17.4466807,
          "lng": 78.4685773
        },
        {
          "lat": 17.4509897,
          "lng": 78.468132
        },
        {
          "lat": 17.4543263,
          "lng": 78.4659004
        },
        {
          "lat": 17.4577652,
          "lng": 78.4596348
        },
        {
          "lat": 17.4620227,
          "lng": 78.4633792
        },
        {
          "lat": 17.4801111,
          "lng": 78.4630305
        },
        {
          "lat": 17.4817024,
          "lng": 78.4649617
        },
        {
          "lat": 17.4861078,
          "lng": 78.4644306
        },
        {
          "lat": 17.485765,
          "lng": 78.4603697
        },
        {
          "lat": 17.4958239,
          "lng": 78.4702565
        },
        {
          "lat": 17.4945653,
          "lng": 78.4789146
        },
        {
          "lat": 17.5007098,
          "lng": 78.4817792
        },
        {
          "lat": 17.5047642,
          "lng": 78.4919047
        },
        {
          "lat": 17.4969544,
          "lng": 78.4935462
        },
        {
          "lat": 17.48989,
          "lng": 78.4907098
        },
        {
          "lat": 17.4861218,
          "lng": 78.4906776
        },
        {
          "lat": 17.4902085,
          "lng": 78.4843369
        },
        {
          "lat": 17.4893771,
          "lng": 78.4798425
        },
        {
          "lat": 17.4855398,
          "lng": 78.4795263
        },
        {
          "lat": 17.4860949,
          "lng": 78.4765303
        },
        {
          "lat": 17.4786451,
          "lng": 78.4751195
        },
        {
          "lat": 17.4745555,
          "lng": 78.4771392
        },
        {
          "lat": 17.4709378,
          "lng": 78.4849001
        },
        {
          "lat": 17.4696138,
          "lng": 78.4939888
        },
        {
          "lat": 17.474733,
          "lng": 78.4952563
        },
        {
          "lat": 17.4717335,
          "lng": 78.5002491
        },
        {
          "lat": 17.4766802,
          "lng": 78.4975159
        },
        {
          "lat": 17.4794951,
          "lng": 78.4981335
        },
        {
          "lat": 17.4818481,
          "lng": 78.5018504
        },
        {
          "lat": 17.4831286,
          "lng": 78.4998585
        },
        {
          "lat": 17.4854054,
          "lng": 78.5038657
        },
        {
          "lat": 17.4884306,
          "lng": 78.5048209
        },
        {
          "lat": 17.4900013,
          "lng": 78.5071014
        },
        {
          "lat": 17.4895607,
          "lng": 78.5087852
        },
        {
          "lat": 17.4916564,
          "lng": 78.5094091
        },
        {
          "lat": 17.4913214,
          "lng": 78.5126221
        },
        {
          "lat": 17.5148676,
          "lng": 78.5161925
        },
        {
          "lat": 17.5273884,
          "lng": 78.5136317
        },
        {
          "lat": 17.5267752,
          "lng": 78.5163917
        },
        {
          "lat": 17.5360386,
          "lng": 78.5221259
        },
        {
          "lat": 17.537941,
          "lng": 78.5171141
        },
        {
          "lat": 17.5406332,
          "lng": 78.5161442
        },
        {
          "lat": 17.5418787,
          "lng": 78.5178775
        },
        {
          "lat": 17.5435392,
          "lng": 78.5178083
        },
        {
          "lat": 17.544859,
          "lng": 78.515598
        },
        {
          "lat": 17.544065,
          "lng": 78.5140108
        },
        {
          "lat": 17.5462698,
          "lng": 78.5065133
        },
        {
          "lat": 17.5368337,
          "lng": 78.5064232
        },
        {
          "lat": 17.5274191,
          "lng": 78.5005492
        },
        {
          "lat": 17.5272554,
          "lng": 78.4930445
        },
        {
          "lat": 17.5316239,
          "lng": 78.4909953
        },
        {
          "lat": 17.5316137,
          "lng": 78.4888603
        },
        {
          "lat": 17.5247489,
          "lng": 78.4840967
        },
        {
          "lat": 17.5247591,
          "lng": 78.4786142
        },
        {
          "lat": 17.5292299,
          "lng": 78.4610726
        },
        {
          "lat": 17.5303348,
          "lng": 78.4585191
        },
        {
          "lat": 17.5320331,
          "lng": 78.4604074
        },
        {
          "lat": 17.5328311,
          "lng": 78.459077
        },
        {
          "lat": 17.5322377,
          "lng": 78.4565021
        },
        {
          "lat": 17.5346112,
          "lng": 78.4443356
        },
        {
          "lat": 17.552452,
          "lng": 78.4422005
        },
        {
          "lat": 17.5536846,
          "lng": 78.4337355
        },
        {
          "lat": 17.5608321,
          "lng": 78.4195359
        },
        {
          "lat": 17.5591469,
          "lng": 78.4164513
        },
        {
          "lat": 17.5503243,
          "lng": 78.4136297
        },
        {
          "lat": 17.5458846,
          "lng": 78.4083725
        },
        {
          "lat": 17.5453067,
          "lng": 78.4023215
        },
        {
          "lat": 17.5401559,
          "lng": 78.395337
        },
        {
          "lat": 17.5406789,
          "lng": 78.393619
        },
        {
          "lat": 17.5198952,
          "lng": 78.3964263
        },
        {
          "lat": 17.5195374,
          "lng": 78.3979267
        },
        {
          "lat": 17.5173377,
          "lng": 78.3986321
        },
        {
          "lat": 17.514001,
          "lng": 78.4082706
        },
        {
          "lat": 17.5133718,
          "lng": 78.4032763
        },
        {
          "lat": 17.5070384,
          "lng": 78.4002186
        },
        {
          "lat": 17.5086041,
          "lng": 78.3928971
        },
        {
          "lat": 17.5116918,
          "lng": 78.3893696
        },
        {
          "lat": 17.5116931,
          "lng": 78.3881352
        },
        {
          "lat": 17.5075461,
          "lng": 78.3855767
        },
        {
          "lat": 17.5094863,
          "lng": 78.3792259
        },
        {
          "lat": 17.507546,
          "lng": 78.3791368
        },
        {
          "lat": 17.507634,
          "lng": 78.376756
        },
        {
          "lat": 17.506575,
          "lng": 78.3764912
        },
        {
          "lat": 17.5074284,
          "lng": 78.3732636
        },
        {
          "lat": 17.5129268,
          "lng": 78.3732269
        },
        {
          "lat": 17.514691,
          "lng": 78.3709348
        },
        {
          "lat": 17.5190987,
          "lng": 78.3706672
        },
        {
          "lat": 17.5189107,
          "lng": 78.3660217
        },
        {
          "lat": 17.5211309,
          "lng": 78.3624664
        },
        {
          "lat": 17.5195419,
          "lng": 78.3602603
        },
        {
          "lat": 17.5213074,
          "lng": 78.35135
        },
        {
          "lat": 17.5208649,
          "lng": 78.3421768
        },
        {
          "lat": 17.5179963,
          "lng": 78.3415532
        },
        {
          "lat": 17.5170742,
          "lng": 78.3338727
        },
        {
          "lat": 17.515991,
          "lng": 78.3371115
        },
        {
          "lat": 17.5122463,
          "lng": 78.3341503
        },
        {
          "lat": 17.5071099,
          "lng": 78.3346438
        },
        {
          "lat": 17.5054217,
          "lng": 78.3313554
        },
        {
          "lat": 17.5079899,
          "lng": 78.3275574
        },
        {
          "lat": 17.5085015,
          "lng": 78.3241939
        },
        {
          "lat": 17.5084401,
          "lng": 78.3225846
        },
        {
          "lat": 17.5061686,
          "lng": 78.3225846
        },
        {
          "lat": 17.505923,
          "lng": 78.3208895
        },
        {
          "lat": 17.5062095,
          "lng": 78.3165979
        },
        {
          "lat": 17.5083992,
          "lng": 78.316319
        },
        {
          "lat": 17.5082764,
          "lng": 78.3066201
        },
        {
          "lat": 17.510732,
          "lng": 78.3059228
        },
        {
          "lat": 17.5104762,
          "lng": 78.3015668
        },
        {
          "lat": 17.5129829,
          "lng": 78.2996035
        },
        {
          "lat": 17.5143233,
          "lng": 78.2909131
        },
        {
          "lat": 17.5160114,
          "lng": 78.2898617
        },
        {
          "lat": 17.5177098,
          "lng": 78.290484
        },
        {
          "lat": 17.5222934,
          "lng": 78.2874584
        },
        {
          "lat": 17.5272246,
          "lng": 78.2869435
        },
        {
          "lat": 17.5303347,
          "lng": 78.2884456
        },
        {
          "lat": 17.5339359,
          "lng": 78.2854415
        },
        {
          "lat": 17.5363502,
          "lng": 78.2853127
        },
        {
          "lat": 17.5389691,
          "lng": 78.2803775
        },
        {
          "lat": 17.5487488,
          "lng": 78.2801629
        },
        {
          "lat": 17.5479304,
          "lng": 78.2804633
        },
        {
          "lat": 17.5512448,
          "lng": 78.2811499
        },
        {
          "lat": 17.5541499,
          "lng": 78.279605
        },
        {
          "lat": 17.5512857,
          "lng": 78.2685328
        },
        {
          "lat": 17.5475622,
          "lng": 78.2641555
        },
        {
          "lat": 17.5489943,
          "lng": 78.2621385
        },
        {
          "lat": 17.5523496,
          "lng": 78.2621814
        },
        {
          "lat": 17.5521041,
          "lng": 78.2587911
        },
        {
          "lat": 17.5500582,
          "lng": 78.2573319
        },
        {
          "lat": 17.5495263,
          "lng": 78.2535554
        },
        {
          "lat": 17.5514085,
          "lng": 78.2492638
        },
        {
          "lat": 17.5492807,
          "lng": 78.2490493
        },
        {
          "lat": 17.5480941,
          "lng": 78.2514525
        },
        {
          "lat": 17.5455162,
          "lng": 78.2519675
        },
        {
          "lat": 17.5394602,
          "lng": 78.2491351
        },
        {
          "lat": 17.5389691,
          "lng": 78.246646
        },
        {
          "lat": 17.5409742,
          "lng": 78.2387067
        }
      ],
      [
        {
          "lat": 17.4845165,
          "lng": 78.2807423
        },
        {
          "lat": 17.4812214,
          "lng": 78.2807852
        },
        {
          "lat": 17.4794996,
          "lng": 78.2889847
        },
        {
          "lat": 17.4838513,
          "lng": 78.2839609
        },
        {
          "lat": 17.4845165,
          "lng": 78.2807423
        }
      ],
      [
        {
          "lat": 17.3124369,
          "lng": 78.506391
        },
        {
          "lat": 17.3097942,
          "lng": 78.5064339
        },
        {
          "lat": 17.3097737,
          "lng": 78.5092448
        },
        {
          "lat": 17.3144547,
          "lng": 78.510028
        },
        {
          "lat": 17.3145571,
          "lng": 78.5090732
        },
        {
          "lat": 17.3127134,
          "lng": 78.5087835
        },
        {
          "lat": 17.3124369,
          "lng": 78.506391
        }
      ],
      [
        {
          "lat": 17.3303506,
          "lng": 78.5126673
        },
        {
          "lat": 17.3270527,
          "lng": 78.5127961
        },
        {
          "lat": 17.3267135,
          "lng": 78.5182906
        },
        {
          "lat": 17.3289475,
          "lng": 78.5148989
        },
        {
          "lat": 17.3312084,
          "lng": 78.5156365
        },
        {
          "lat": 17.3303506,
          "lng": 78.5126673
        }
      ],
      [
        {
          "lat": 17.3315796,
          "lng": 78.5170232
        },
        {
          "lat": 17.3317435,
          "lng": 78.5189544
        },
        {
          "lat": 17.3335255,
          "lng": 78.5185038
        },
        {
          "lat": 17.3337713,
          "lng": 78.5171842
        },
        {
          "lat": 17.3315796,
          "lng": 78.5170232
        }
      ],
      [
        {
          "lat": 17.3369411,
          "lng": 78.5247748
        },
        {
          "lat": 17.336598,
          "lng": 78.5272639
        },
        {
          "lat": 17.3380984,
          "lng": 78.525558
        },
        {
          "lat": 17.3369411,
          "lng": 78.5247748
        }
      ],
      [
        {
          "lat": 17.3321071,
          "lng": 78.5259979
        },
        {
          "lat": 17.3321071,
          "lng": 78.5282188
        },
        {
          "lat": 17.333418,
          "lng": 78.5283797
        },
        {
          "lat": 17.3349184,
          "lng": 78.526352
        },
        {
          "lat": 17.3321071,
          "lng": 78.5259979
        }
      ]
    ],
    "greenCoverPercent": 2.74,
    "waterCoveragePercent": 3.97,
    "solarPotentialMw": 73,
    "carbonEstimateTonnes": 811103,
    "hotspots": [
      {
        "id": "osm-249199079-hotspot-critical-1",
        "name": "Madhapur Built-Up Stress Zone",
        "coordinates": {
          "lat": 17.436277339639645,
          "lng": 78.3742978615107
        },
        "radiusMeters": 1416,
        "averageTemperatureC": 34.6,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0.14250702687851635
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249199079-hotspot-severe-1",
        "name": "Hitech City High Density Corridor",
        "coordinates": {
          "lat": 17.45150256486487,
          "lng": 78.3902497628649
        },
        "radiusMeters": 1221,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.5333333333333333,
          "landUseHeat": 1,
          "vegetationProximity": 0.1538874490279507,
          "waterProximity": 0.3099835983333441
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 95,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 83,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 77,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249199079-hotspot-severe-2",
        "name": "Jubilee Hills Green Deficit Region",
        "coordinates": {
          "lat": 17.42105211441442,
          "lng": 78.3902497628649
        },
        "radiusMeters": 1113,
        "averageTemperatureC": 33.1,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.3333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.455125419217013
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 70,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 61,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249199079-hotspot-severe-3",
        "name": "Venkatapuram Green Deficit Region",
        "coordinates": {
          "lat": 17.481953015315323,
          "lng": 78.4859611709901
        },
        "radiusMeters": 1065,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 0.8,
          "buildingDensity": 0,
          "landUseHeat": 0.6,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 96,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 64,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249199079-hotspot-severe-4",
        "name": "Ward 77 Jambagh Green Deficit Region",
        "coordinates": {
          "lat": 17.390601663963967,
          "lng": 78.4700092696359
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249199079-hotspot-severe-5",
        "name": "Gachibowli Green Deficit Region",
        "coordinates": {
          "lat": 17.436277339639645,
          "lng": 78.3423940588023
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-249199079-hotspot-severe-6",
        "name": "Secunderabad Green Deficit Region",
        "coordinates": {
          "lat": 17.42105211441442,
          "lng": 78.5019130723443
        },
        "radiusMeters": 1053,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.05670243831909494
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 610757612.1181641,
      "vegetatedAreaSqMeters": 16721381.350585938,
      "waterAreaSqMeters": 24228274.446289062,
      "buildingAreaSqMeters": 1627884.6396484375,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:11:32.602Z"
  },
  {
    "id": "osm-251414798",
    "name": "Chennai Corporation",
    "state": "Tamil Nadu",
    "country": "India",
    "displayName": "Chennai Corporation, Chennai, Tamil Nadu, India",
    "coordinates": {
      "lat": 13.0836939,
      "lng": 80.270186
    },
    "boundingbox": [
      "12.8519771",
      "13.2351580",
      "80.1401875",
      "80.3328982"
    ],
    "boundary": [
      [
        {
          "lat": 13.1057138,
          "lng": 80.1401875
        },
        {
          "lat": 13.0978875,
          "lng": 80.1403998
        },
        {
          "lat": 13.0955556,
          "lng": 80.1435871
        },
        {
          "lat": 13.0870914,
          "lng": 80.1461166
        },
        {
          "lat": 13.0863596,
          "lng": 80.1503445
        },
        {
          "lat": 13.0821881,
          "lng": 80.1541143
        },
        {
          "lat": 13.0797058,
          "lng": 80.1613459
        },
        {
          "lat": 13.0788829,
          "lng": 80.1602997
        },
        {
          "lat": 13.0734575,
          "lng": 80.1603708
        },
        {
          "lat": 13.0703548,
          "lng": 80.1630628
        },
        {
          "lat": 13.0558154,
          "lng": 80.161523
        },
        {
          "lat": 13.0474977,
          "lng": 80.1626122
        },
        {
          "lat": 13.0410704,
          "lng": 80.1609384
        },
        {
          "lat": 13.0410244,
          "lng": 80.150618
        },
        {
          "lat": 13.0397423,
          "lng": 80.1502955
        },
        {
          "lat": 13.0412981,
          "lng": 80.1486429
        },
        {
          "lat": 13.0412636,
          "lng": 80.1465133
        },
        {
          "lat": 13.034004,
          "lng": 80.1461863
        },
        {
          "lat": 13.0332207,
          "lng": 80.1478596
        },
        {
          "lat": 13.0317576,
          "lng": 80.1473532
        },
        {
          "lat": 13.0315686,
          "lng": 80.1453817
        },
        {
          "lat": 13.0215235,
          "lng": 80.144856
        },
        {
          "lat": 13.0208522,
          "lng": 80.1473803
        },
        {
          "lat": 13.0170652,
          "lng": 80.1476401
        },
        {
          "lat": 13.0169854,
          "lng": 80.1515259
        },
        {
          "lat": 13.0133347,
          "lng": 80.1548949
        },
        {
          "lat": 13.0131358,
          "lng": 80.1565441
        },
        {
          "lat": 13.0151419,
          "lng": 80.1593345
        },
        {
          "lat": 13.0142248,
          "lng": 80.1615708
        },
        {
          "lat": 13.0116016,
          "lng": 80.161421
        },
        {
          "lat": 13.0106276,
          "lng": 80.1594449
        },
        {
          "lat": 13.0074759,
          "lng": 80.1589452
        },
        {
          "lat": 13.0060631,
          "lng": 80.1635617
        },
        {
          "lat": 13.0039386,
          "lng": 80.1636485
        },
        {
          "lat": 12.9987609,
          "lng": 80.1605108
        },
        {
          "lat": 12.9840079,
          "lng": 80.1662506
        },
        {
          "lat": 12.9811678,
          "lng": 80.1654044
        },
        {
          "lat": 12.9794774,
          "lng": 80.1754649
        },
        {
          "lat": 12.9710801,
          "lng": 80.176452
        },
        {
          "lat": 12.9680062,
          "lng": 80.1819639
        },
        {
          "lat": 12.9696331,
          "lng": 80.1877215
        },
        {
          "lat": 12.9685695,
          "lng": 80.19117
        },
        {
          "lat": 12.9594201,
          "lng": 80.1893898
        },
        {
          "lat": 12.9582615,
          "lng": 80.1876867
        },
        {
          "lat": 12.9574673,
          "lng": 80.1922502
        },
        {
          "lat": 12.9544692,
          "lng": 80.1905072
        },
        {
          "lat": 12.954051,
          "lng": 80.1920521
        },
        {
          "lat": 12.9517377,
          "lng": 80.1926476
        },
        {
          "lat": 12.9535202,
          "lng": 80.1973844
        },
        {
          "lat": 12.9521349,
          "lng": 80.2017
        },
        {
          "lat": 12.9489632,
          "lng": 80.2014851
        },
        {
          "lat": 12.9479662,
          "lng": 80.1989952
        },
        {
          "lat": 12.9436505,
          "lng": 80.200386
        },
        {
          "lat": 12.9412728,
          "lng": 80.199601
        },
        {
          "lat": 12.9365863,
          "lng": 80.196119
        },
        {
          "lat": 12.936631,
          "lng": 80.194391
        },
        {
          "lat": 12.9347096,
          "lng": 80.1927592
        },
        {
          "lat": 12.9340296,
          "lng": 80.1956836
        },
        {
          "lat": 12.931569,
          "lng": 80.1956654
        },
        {
          "lat": 12.9316098,
          "lng": 80.1940856
        },
        {
          "lat": 12.9306915,
          "lng": 80.1956988
        },
        {
          "lat": 12.9257075,
          "lng": 80.1949075
        },
        {
          "lat": 12.9236907,
          "lng": 80.1975633
        },
        {
          "lat": 12.9189989,
          "lng": 80.1963129
        },
        {
          "lat": 12.9173558,
          "lng": 80.1971283
        },
        {
          "lat": 12.9098548,
          "lng": 80.1944991
        },
        {
          "lat": 12.9093375,
          "lng": 80.2140518
        },
        {
          "lat": 12.8912998,
          "lng": 80.2129381
        },
        {
          "lat": 12.8794463,
          "lng": 80.2101373
        },
        {
          "lat": 12.8753993,
          "lng": 80.2077099
        },
        {
          "lat": 12.8635829,
          "lng": 80.2119087
        },
        {
          "lat": 12.856358,
          "lng": 80.2172663
        },
        {
          "lat": 12.8539459,
          "lng": 80.2166123
        },
        {
          "lat": 12.8526021,
          "lng": 80.2181817
        },
        {
          "lat": 12.8519771,
          "lng": 80.2320854
        },
        {
          "lat": 12.8589846,
          "lng": 80.2360008
        },
        {
          "lat": 12.8567479,
          "lng": 80.2492621
        },
        {
          "lat": 12.9562721,
          "lng": 80.2625022
        },
        {
          "lat": 12.9973655,
          "lng": 80.2722072
        },
        {
          "lat": 12.997721,
          "lng": 80.2709627
        },
        {
          "lat": 13.000669,
          "lng": 80.2713275
        },
        {
          "lat": 13.0023416,
          "lng": 80.2737093
        },
        {
          "lat": 13.0126159,
          "lng": 80.2767338
        },
        {
          "lat": 13.0575709,
          "lng": 80.2824813
        },
        {
          "lat": 13.0574477,
          "lng": 80.286026
        },
        {
          "lat": 13.079541,
          "lng": 80.2946949
        },
        {
          "lat": 13.0966165,
          "lng": 80.3036964
        },
        {
          "lat": 13.0984034,
          "lng": 80.3031814
        },
        {
          "lat": 13.1010576,
          "lng": 80.2975058
        },
        {
          "lat": 13.1167211,
          "lng": 80.3020549
        },
        {
          "lat": 13.122971,
          "lng": 80.2992657
        },
        {
          "lat": 13.1244113,
          "lng": 80.2968406
        },
        {
          "lat": 13.1293639,
          "lng": 80.2985143
        },
        {
          "lat": 13.1316098,
          "lng": 80.2975346
        },
        {
          "lat": 13.1430664,
          "lng": 80.3002128
        },
        {
          "lat": 13.1422012,
          "lng": 80.304561
        },
        {
          "lat": 13.1490849,
          "lng": 80.3074293
        },
        {
          "lat": 13.1742525,
          "lng": 80.3156926
        },
        {
          "lat": 13.2046579,
          "lng": 80.3227333
        },
        {
          "lat": 13.234746,
          "lng": 80.3328982
        },
        {
          "lat": 13.235158,
          "lng": 80.327074
        },
        {
          "lat": 13.2325513,
          "lng": 80.323534
        },
        {
          "lat": 13.2311942,
          "lng": 80.3175622
        },
        {
          "lat": 13.2201535,
          "lng": 80.3130385
        },
        {
          "lat": 13.2114576,
          "lng": 80.3062915
        },
        {
          "lat": 13.2110432,
          "lng": 80.3044397
        },
        {
          "lat": 13.2110661,
          "lng": 80.3008018
        },
        {
          "lat": 13.2138243,
          "lng": 80.2982694
        },
        {
          "lat": 13.2171982,
          "lng": 80.2977204
        },
        {
          "lat": 13.2203456,
          "lng": 80.2936796
        },
        {
          "lat": 13.221111,
          "lng": 80.2890123
        },
        {
          "lat": 13.2274435,
          "lng": 80.2839435
        },
        {
          "lat": 13.2267235,
          "lng": 80.2735376
        },
        {
          "lat": 13.2247391,
          "lng": 80.2686023
        },
        {
          "lat": 13.2228382,
          "lng": 80.2671432
        },
        {
          "lat": 13.2204108,
          "lng": 80.2703853
        },
        {
          "lat": 13.2157819,
          "lng": 80.272353
        },
        {
          "lat": 13.2035781,
          "lng": 80.2698936
        },
        {
          "lat": 13.2060804,
          "lng": 80.2498599
        },
        {
          "lat": 13.1986751,
          "lng": 80.2495116
        },
        {
          "lat": 13.1991321,
          "lng": 80.2391711
        },
        {
          "lat": 13.1961792,
          "lng": 80.2386656
        },
        {
          "lat": 13.1973707,
          "lng": 80.2283692
        },
        {
          "lat": 13.1895479,
          "lng": 80.2316417
        },
        {
          "lat": 13.1849212,
          "lng": 80.2314829
        },
        {
          "lat": 13.184256,
          "lng": 80.2299595
        },
        {
          "lat": 13.1860294,
          "lng": 80.2219534
        },
        {
          "lat": 13.1819144,
          "lng": 80.2198871
        },
        {
          "lat": 13.18087,
          "lng": 80.2200416
        },
        {
          "lat": 13.1802742,
          "lng": 80.2234471
        },
        {
          "lat": 13.1770878,
          "lng": 80.2231811
        },
        {
          "lat": 13.1786681,
          "lng": 80.2175939
        },
        {
          "lat": 13.177321,
          "lng": 80.214481
        },
        {
          "lat": 13.1778179,
          "lng": 80.2134377
        },
        {
          "lat": 13.1803778,
          "lng": 80.2135232
        },
        {
          "lat": 13.1799498,
          "lng": 80.2109241
        },
        {
          "lat": 13.1751862,
          "lng": 80.2104521
        },
        {
          "lat": 13.17472,
          "lng": 80.2088188
        },
        {
          "lat": 13.1762171,
          "lng": 80.2025373
        },
        {
          "lat": 13.1794066,
          "lng": 80.2006996
        },
        {
          "lat": 13.1739414,
          "lng": 80.19808
        },
        {
          "lat": 13.1757837,
          "lng": 80.19438
        },
        {
          "lat": 13.175396,
          "lng": 80.1917143
        },
        {
          "lat": 13.1678282,
          "lng": 80.1903015
        },
        {
          "lat": 13.1648935,
          "lng": 80.1935233
        },
        {
          "lat": 13.1639827,
          "lng": 80.1920163
        },
        {
          "lat": 13.159024,
          "lng": 80.1918604
        },
        {
          "lat": 13.158518,
          "lng": 80.1943547
        },
        {
          "lat": 13.1562916,
          "lng": 80.1948224
        },
        {
          "lat": 13.1466329,
          "lng": 80.1832947
        },
        {
          "lat": 13.1488134,
          "lng": 80.1768397
        },
        {
          "lat": 13.1392203,
          "lng": 80.1785795
        },
        {
          "lat": 13.1377254,
          "lng": 80.1769625
        },
        {
          "lat": 13.1423663,
          "lng": 80.1703993
        },
        {
          "lat": 13.1421417,
          "lng": 80.1688866
        },
        {
          "lat": 13.1346785,
          "lng": 80.165107
        },
        {
          "lat": 13.135036,
          "lng": 80.1636012
        },
        {
          "lat": 13.1401661,
          "lng": 80.1612067
        },
        {
          "lat": 13.1413018,
          "lng": 80.1560963
        },
        {
          "lat": 13.1408734,
          "lng": 80.1520945
        },
        {
          "lat": 13.137921,
          "lng": 80.1495123
        },
        {
          "lat": 13.1385853,
          "lng": 80.1454426
        },
        {
          "lat": 13.1276334,
          "lng": 80.1477348
        },
        {
          "lat": 13.1240717,
          "lng": 80.1433647
        },
        {
          "lat": 13.1057138,
          "lng": 80.1401875
        }
      ]
    ],
    "greenCoverPercent": 1.43,
    "waterCoveragePercent": 8.81,
    "solarPotentialMw": 92,
    "carbonEstimateTonnes": 1022212,
    "hotspots": [
      {
        "id": "osm-251414798-hotspot-severe-1",
        "name": "Zone 5 Royapuram Green Deficit Region",
        "coordinates": {
          "lat": 13.08035547837838,
          "lng": 80.29048556939513
        },
        "radiusMeters": 1211,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.6666666666666666,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.2994173716114077
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 78,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 69,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 61,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-251414798-hotspot-severe-2",
        "name": "Mylapore Green Deficit Region",
        "coordinates": {
          "lat": 13.056932054954956,
          "lng": 80.27846172384352
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 438808229.83691406,
      "vegetatedAreaSqMeters": 6264383.25,
      "waterAreaSqMeters": 38675431.9296875,
      "buildingAreaSqMeters": 2043517.0712890625,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:12:29.130Z"
  },
  {
    "id": "osm-247539402",
    "name": "Jaipur",
    "state": "Rajasthan",
    "country": "India",
    "displayName": "Jaipur, Jaipur Municipal Corporation, Jaipur Tehsil, Jaipur, Rajasthan, 302001, India",
    "coordinates": {
      "lat": 26.9154576,
      "lng": 75.8189817
    },
    "boundingbox": [
      "26.7554576",
      "27.0754576",
      "75.6589817",
      "75.9789817"
    ],
    "greenCoverPercent": 13.4,
    "waterCoveragePercent": 0.16,
    "solarPotentialMw": 40,
    "carbonEstimateTonnes": 444440,
    "hotspots": [
      {
        "id": "osm-247539402-hotspot-critical-1",
        "name": "Amer Chak No. 1 Built-Up Stress Zone",
        "coordinates": {
          "lat": 26.98917381621622,
          "lng": 75.8719685203321
        },
        "radiusMeters": 1296,
        "averageTemperatureC": 34,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 0.7,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 95,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-1",
        "name": "Raja Park Built-Up Stress Zone",
        "coordinates": {
          "lat": 26.910119762162164,
          "lng": 75.85226676917179
        },
        "radiusMeters": 1249,
        "averageTemperatureC": 33.7,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.36820989798154347,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 89,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 79,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-2",
        "name": "Raja Park High Density Corridor",
        "coordinates": {
          "lat": 26.91890354594595,
          "lng": 75.83256501801148
        },
        "radiusMeters": 1238,
        "averageTemperatureC": 33.7,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.7333333333333333,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.16460876477699604,
          "waterProximity": 0.17768355855406703
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 95,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 76,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 76,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-3",
        "name": "Amer Chak No. 1 Built-Up Stress Zone",
        "coordinates": {
          "lat": 26.980390032432435,
          "lng": 75.8719685203321
        },
        "radiusMeters": 1236,
        "averageTemperatureC": 33.7,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 0.3,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-4",
        "name": "Bani Park High Density Corridor",
        "coordinates": {
          "lat": 26.91890354594595,
          "lng": 75.7833106401107
        },
        "radiusMeters": 1191,
        "averageTemperatureC": 33.5,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.41916348457418384,
          "waterProximity": 0.02509931092974771
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 76,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 68,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-5",
        "name": "Bani Park Built-Up Stress Zone",
        "coordinates": {
          "lat": 26.936471113513516,
          "lng": 75.80301239127101
        },
        "radiusMeters": 1165,
        "averageTemperatureC": 33.3,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.7025421678879894,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 79,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-247539402-hotspot-severe-6",
        "name": "C-Scheme Built-Up Stress Zone",
        "coordinates": {
          "lat": 26.91890354594595,
          "lng": 75.80301239127101
        },
        "radiusMeters": 1120,
        "averageTemperatureC": 33.1,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.6423241649869569,
          "waterProximity": 0.5998223244242373
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 81,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
      },
      {
        "id": "osm-247539402-hotspot-severe-7",
        "name": "Amber Built-Up Stress Zone",
        "coordinates": {
          "lat": 26.980390032432435,
          "lng": 75.85226676917179
        },
        "radiusMeters": 1100,
        "averageTemperatureC": 33,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.7198215516634671,
          "waterProximity": 0.6115843837336987
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 78,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-247539402-hotspot-severe-8",
        "name": "C-Scheme High Density Corridor",
        "coordinates": {
          "lat": 26.892552194594597,
          "lng": 75.81286326685117
        },
        "radiusMeters": 1080,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.5333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0.3335395427330351,
          "waterProximity": 0.3705702484175095
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 90,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 65,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 59,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-9",
        "name": "Vaishali Nagar Green Deficit Region",
        "coordinates": {
          "lat": 26.91890354594595,
          "lng": 75.74390713779007
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-10",
        "name": "C-Scheme High Density Corridor",
        "coordinates": {
          "lat": 26.892552194594597,
          "lng": 75.79316151569085
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.6,
          "landUseHeat": 0,
          "vegetationProximity": 0.37692761777382966,
          "waterProximity": 0.6704609406464681
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 89,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 69,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 67,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247539402-hotspot-severe-11",
        "name": "Vaishali Nagar High Density Corridor",
        "coordinates": {
          "lat": 26.90133597837838,
          "lng": 75.76360888895039
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0.005659384987558025,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 63,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1128955191.6601562,
      "vegetatedAreaSqMeters": 151319578.92773438,
      "waterAreaSqMeters": 1770591.052734375,
      "buildingAreaSqMeters": 891816.66015625,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:12:43.762Z"
  },
  {
    "id": "osm-419675109",
    "name": "Pune",
    "state": "Maharashtra",
    "country": "India",
    "displayName": "Pune, Pune City Subdistrict, Pune, Maharashtra, 411001, India",
    "coordinates": {
      "lat": 18.5213738,
      "lng": 73.8545071
    },
    "boundingbox": [
      "18.3613738",
      "18.6813738",
      "73.6945071",
      "74.0145071"
    ],
    "greenCoverPercent": 21.09,
    "waterCoveragePercent": 26.3,
    "solarPotentialMw": 111,
    "carbonEstimateTonnes": 1233321,
    "hotspots": [
      {
        "id": "osm-419675109-hotspot-critical-1",
        "name": "Viman Nagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.54989632252252,
          "lng": 73.91305239217503
        },
        "radiusMeters": 1421,
        "averageTemperatureC": 34.6,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.038641855566582284,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 99,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 85,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-critical-2",
        "name": "Koregaon Park Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.54989632252252,
          "lng": 73.88895755875329
        },
        "radiusMeters": 1392,
        "averageTemperatureC": 34.5,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.04685005986962287,
          "waterProximity": 0.26664642931473737
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 99,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 85,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-critical-3",
        "name": "Shivajinagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.538472899099098,
          "lng": 73.85281530862068
        },
        "radiusMeters": 1335,
        "averageTemperatureC": 34.2,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.23999586790362337
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 82,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-critical-4",
        "name": "Mukund Nagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.492779205405405,
          "lng": 73.87691014204242
        },
        "radiusMeters": 1326,
        "averageTemperatureC": 34.1,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.32685725743754046
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 82,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-critical-5",
        "name": "Aundh High Density Corridor",
        "coordinates": {
          "lat": 18.54989632252252,
          "lng": 73.81667305848806
        },
        "radiusMeters": 1264,
        "averageTemperatureC": 33.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8,
          "landUseHeat": 0.6,
          "vegetationProximity": 0.2838042802484694,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 91,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 81,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 77,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 76,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-1",
        "name": "Koregaon Park High Density Corridor",
        "coordinates": {
          "lat": 18.54989632252252,
          "lng": 73.87691014204242
        },
        "radiusMeters": 1238,
        "averageTemperatureC": 33.7,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.10463603269009125,
          "waterProximity": 0.5414585498833542
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 97,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 81,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 78,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 69,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-2",
        "name": "Koregaon Park Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.50420262882883,
          "lng": 73.88895755875329
        },
        "radiusMeters": 1229,
        "averageTemperatureC": 33.6,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.49689184843774625,
          "waterProximity": 0.7741170655052908
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 85,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 76,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-419675109-hotspot-severe-3",
        "name": "Shivajinagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.51562605225225,
          "lng": 73.86486272533155
        },
        "radiusMeters": 1218,
        "averageTemperatureC": 33.6,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.2505728858108932,
          "waterProximity": 0.7765635759855513
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 92,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 82,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 81,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-4",
        "name": "Viman Nagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.561319745945944,
          "lng": 73.90100497546416
        },
        "radiusMeters": 1201,
        "averageTemperatureC": 33.5,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.7013362127598659,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 85,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 79,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-419675109-hotspot-severe-5",
        "name": "Koregaon Park Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.538472899099098,
          "lng": 73.90100497546416
        },
        "radiusMeters": 1200,
        "averageTemperatureC": 33.5,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.7238625973310795,
          "waterProximity": 0.49349552278173014
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 78,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-419675109-hotspot-severe-6",
        "name": "Aundh Green Deficit Region",
        "coordinates": {
          "lat": 18.561319745945944,
          "lng": 73.82872047519893
        },
        "radiusMeters": 1181,
        "averageTemperatureC": 33.4,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 63,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 57,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-7",
        "name": "Viman Nagar High Density Corridor",
        "coordinates": {
          "lat": 18.561319745945944,
          "lng": 73.9250998088859
        },
        "radiusMeters": 1180,
        "averageTemperatureC": 33.4,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4,
          "landUseHeat": 1,
          "vegetationProximity": 0.28181082461389706,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 92,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 80,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 73,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 66,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-8",
        "name": "Hadapsar High Density Corridor",
        "coordinates": {
          "lat": 18.51562605225225,
          "lng": 73.91305239217503
        },
        "radiusMeters": 1162,
        "averageTemperatureC": 33.3,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4,
          "landUseHeat": 1,
          "vegetationProximity": 0.14445012139192437,
          "waterProximity": 0.5292886393462346
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 96,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 80,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 73,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 69,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-9",
        "name": "Kothrud Green Deficit Region",
        "coordinates": {
          "lat": 18.50420262882883,
          "lng": 73.79257822506632
        },
        "radiusMeters": 1131,
        "averageTemperatureC": 33.2,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 74,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 60,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-10",
        "name": "Koregaon Park Green Deficit Region",
        "coordinates": {
          "lat": 18.538472899099098,
          "lng": 73.9250998088859
        },
        "radiusMeters": 1119,
        "averageTemperatureC": 33.1,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 58,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 57,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-11",
        "name": "Shivajinagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 18.527049475675675,
          "lng": 73.8407678919098
        },
        "radiusMeters": 1103,
        "averageTemperatureC": 33,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.5971170526090752,
          "waterProximity": 0.880656460955492
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 82,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 74,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
      },
      {
        "id": "osm-419675109-hotspot-severe-12",
        "name": "Dhayari Green Deficit Region",
        "coordinates": {
          "lat": 18.447085511711713,
          "lng": 73.8407678919098
        },
        "radiusMeters": 1099,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 57,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-13",
        "name": "Hadapsar Green Deficit Region",
        "coordinates": {
          "lat": 18.481355781981982,
          "lng": 73.90100497546416
        },
        "radiusMeters": 1083,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.16012768574290015
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 57,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-14",
        "name": "Shivajinagar Green Deficit Region",
        "coordinates": {
          "lat": 18.561319745945944,
          "lng": 73.85281530862068
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-419675109-hotspot-severe-15",
        "name": "Aundh Green Deficit Region",
        "coordinates": {
          "lat": 18.572743169369367,
          "lng": 73.80462564177719
        },
        "radiusMeters": 1077,
        "averageTemperatureC": 32.9,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1200527863.5507812,
      "vegetatedAreaSqMeters": 253229808.7158203,
      "waterAreaSqMeters": 315733441.5214844,
      "buildingAreaSqMeters": 2474964.2275390625,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:13:25.104Z"
  },
  {
    "id": "osm-243766815",
    "name": "Varanasi",
    "state": "Uttar Pradesh",
    "country": "India",
    "displayName": "Varanasi, Sadar, Varanasi, Uttar Pradesh, 221001, India",
    "coordinates": {
      "lat": 25.3356491,
      "lng": 83.0076292
    },
    "boundingbox": [
      "25.1756491",
      "25.4956491",
      "82.8476292",
      "83.1676292"
    ],
    "greenCoverPercent": 0.26,
    "waterCoveragePercent": 146.85,
    "solarPotentialMw": 57,
    "carbonEstimateTonnes": 633327,
    "hotspots": [
      {
        "id": "osm-243766815-hotspot-critical-1",
        "name": "Sarnath Green Deficit Region",
        "coordinates": {
          "lat": 25.364703154054055,
          "lng": 82.99326387594819
        },
        "radiusMeters": 1276,
        "averageTemperatureC": 33.9,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.9333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.4463480813729419
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 84,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 78,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 65,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-critical-2",
        "name": "Cantonment Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.323712163063064,
          "lng": 82.96734774798587
        },
        "radiusMeters": 1271,
        "averageTemperatureC": 33.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.6979980774562102
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-critical-3",
        "name": "Varanasi Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.382270721621623,
          "lng": 82.97382677997645
        },
        "radiusMeters": 1256,
        "averageTemperatureC": 33.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.845631373985736
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-critical-4",
        "name": "Sigra Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.323712163063064,
          "lng": 82.98030581196703
        },
        "radiusMeters": 1250,
        "averageTemperatureC": 33.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.6,
          "vegetationProximity": 0.32392886800121734,
          "waterProximity": 0.6353868944635703
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 90,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 87,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 80,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 80,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-1",
        "name": "Cantonment Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.352991442342343,
          "lng": 82.99974290793877
        },
        "radiusMeters": 1241,
        "averageTemperatureC": 33.7,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.9999881397751926
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-2",
        "name": "Sigra Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.306144595495496,
          "lng": 82.98678484395761
        },
        "radiusMeters": 1226,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.21009800743408502,
          "waterProximity": 0.6200404956824059
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 94,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 82,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-3",
        "name": "Lahurabir Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.32956801891892,
          "lng": 82.98678484395761
        },
        "radiusMeters": 1220,
        "averageTemperatureC": 33.6,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0.439447798478501,
          "waterProximity": 0.8321314758235938
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 77,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-243766815-hotspot-severe-4",
        "name": "Sigra Green Deficit Region",
        "coordinates": {
          "lat": 25.294432883783784,
          "lng": 82.96734774798587
        },
        "radiusMeters": 1189,
        "averageTemperatureC": 33.4,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.7333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.8919442446034447
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 80,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 74,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 67,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-5",
        "name": "Cantonment High Density Corridor",
        "coordinates": {
          "lat": 25.32956801891892,
          "lng": 82.96734774798587
        },
        "radiusMeters": 1186,
        "averageTemperatureC": 33.4,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8,
          "landUseHeat": 0,
          "vegetationProximity": 0.23164498715917547,
          "waterProximity": 0.36599729889318044
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 93,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 77,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 74,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 63,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-6",
        "name": "Cantonment Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.3588472981982,
          "lng": 82.97382677997645
        },
        "radiusMeters": 1184,
        "averageTemperatureC": 33.4,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.36285354772010314,
          "waterProximity": 0.6560545817632645
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 89,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 79,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-7",
        "name": "Cantonment Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.3588472981982,
          "lng": 82.98678484395761
        },
        "radiusMeters": 1164,
        "averageTemperatureC": 33.3,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.41524703351145,
          "waterProximity": 0.7317238865139297
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 88,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 78,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-8",
        "name": "Sarnath Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.352991442342343,
          "lng": 83.0191800039105
        },
        "radiusMeters": 1154,
        "averageTemperatureC": 33.3,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 0.8,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.3301061295460537,
          "waterProximity": 0.7419904469920526
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 86,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 79,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-9",
        "name": "Sarnath Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.382270721621623,
          "lng": 83.0191800039105
        },
        "radiusMeters": 1150,
        "averageTemperatureC": 33.2,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.7829225161146294,
          "waterProximity": 0.8543216506590368
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 77,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 70,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-243766815-hotspot-severe-10",
        "name": "Sarnath Green Deficit Region",
        "coordinates": {
          "lat": 25.376414865765767,
          "lng": 82.98030581196703
        },
        "radiusMeters": 1112,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 0.6,
          "buildingDensity": 0.6666666666666666,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.6898088553469115
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 93,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 78,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 69,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 61,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-11",
        "name": "Sigra Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.317856307207208,
          "lng": 82.98678484395761
        },
        "radiusMeters": 1066,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.8692398822519303,
          "waterProximity": 0.5720760968177191
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 74,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 69,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-243766815-hotspot-severe-12",
        "name": "Sarnath Green Deficit Region",
        "coordinates": {
          "lat": 25.364703154054055,
          "lng": 83.04509613187282
        },
        "radiusMeters": 1062,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0.5088623160057827
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 69,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 58,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-13",
        "name": "Sigra High Density Corridor",
        "coordinates": {
          "lat": 25.317856307207208,
          "lng": 82.96734774798587
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.5333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0.16725797312642565,
          "waterProximity": 0.9749128152638764
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 95,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 71,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 65,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 59,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243766815-hotspot-severe-14",
        "name": "Lahurabir High Density Corridor",
        "coordinates": {
          "lat": 25.323712163063064,
          "lng": 82.99974290793877
        },
        "radiusMeters": 1055,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0.6698679211167671,
          "waterProximity": 0.7817653265115595
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 80,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Solar Deployment",
            "score": 76,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 69,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 64,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
      },
      {
        "id": "osm-243766815-hotspot-severe-15",
        "name": "Varanasi Green Deficit Region",
        "coordinates": {
          "lat": 25.382270721621623,
          "lng": 82.96734774798587
        },
        "radiusMeters": 1054,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 0.7,
          "buildingDensity": 0.4,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.6148267024132336
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 95,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 61,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1144327027.53125,
      "vegetatedAreaSqMeters": 2957919.779296875,
      "waterAreaSqMeters": 1680398735.9746094,
      "buildingAreaSqMeters": 1276170.857421875,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:13:43.388Z"
  },
  {
    "id": "osm-248656140",
    "name": "Ahmedabad",
    "state": "Gujarat",
    "country": "India",
    "displayName": "Ahmedabad, Gujarat, 380001, India",
    "coordinates": {
      "lat": 23.0215374,
      "lng": 72.5800568
    },
    "boundingbox": [
      "22.8615374",
      "23.1815374",
      "72.4200568",
      "72.7400568"
    ],
    "greenCoverPercent": 0.12,
    "waterCoveragePercent": 68.14,
    "solarPotentialMw": 48,
    "carbonEstimateTonnes": 533328,
    "hotspots": [
      {
        "id": "osm-248656140-hotspot-critical-1",
        "name": "Maninagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 23.00436622882883,
          "lng": 72.58073438335151
        },
        "radiusMeters": 1292,
        "averageTemperatureC": 34,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.19500741508476938,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 94,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 82,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248656140-hotspot-severe-1",
        "name": "Maninagar Built-Up Stress Zone",
        "coordinates": {
          "lat": 23.00436622882883,
          "lng": 72.56832244745128
        },
        "radiusMeters": 1223,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.5429859783147938,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 84,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Solar Deployment",
            "score": 82,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 75,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
      },
      {
        "id": "osm-248656140-hotspot-severe-2",
        "name": "Ashram Road High Density Corridor",
        "coordinates": {
          "lat": 23.061483345945945,
          "lng": 72.59314631925174
        },
        "radiusMeters": 1187,
        "averageTemperatureC": 33.4,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.6666666666666666,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.2871262284584951,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 91,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 72,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 65,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248656140-hotspot-severe-3",
        "name": "Maninagar High Density Corridor",
        "coordinates": {
          "lat": 23.015789652252252,
          "lng": 72.59314631925174
        },
        "radiusMeters": 1135,
        "averageTemperatureC": 33.2,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0.04918725473774754,
          "waterProximity": 0.33726659455273555
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 99,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 63,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 57,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248656140-hotspot-severe-4",
        "name": "Satellite Green Deficit Region",
        "coordinates": {
          "lat": 23.015789652252252,
          "lng": 72.50626276795012
        },
        "radiusMeters": 1121,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.26666666666666666,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 57,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 54,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248656140-hotspot-severe-5",
        "name": "Meghaninagar Green Deficit Region",
        "coordinates": {
          "lat": 23.072906769369368,
          "lng": 72.61797019105221
        },
        "radiusMeters": 1081,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 52,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 52,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248656140-hotspot-severe-6",
        "name": "Naroda Green Deficit Region",
        "coordinates": {
          "lat": 23.072906769369368,
          "lng": 72.6552059987529
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1165270233.546875,
      "vegetatedAreaSqMeters": 1377703.833984375,
      "waterAreaSqMeters": 794030547.859375,
      "buildingAreaSqMeters": 1065097.857421875,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:14:20.233Z"
  },
  {
    "id": "osm-250769156",
    "name": "Kolkata",
    "state": "West Bengal",
    "country": "India",
    "displayName": "Kolkata, Kolkata Metropolitan Area, Kolkata, West Bengal, India",
    "coordinates": {
      "lat": 22.5726459,
      "lng": 88.3638953
    },
    "boundingbox": [
      "22.4520292",
      "22.6188255",
      "88.2336280",
      "88.4610776"
    ],
    "boundary": [
      [
        {
          "lat": 22.5491642,
          "lng": 88.233628
        },
        {
          "lat": 22.549246,
          "lng": 88.2400273
        },
        {
          "lat": 22.5451596,
          "lng": 88.2499983
        },
        {
          "lat": 22.5474679,
          "lng": 88.2535292
        },
        {
          "lat": 22.5469242,
          "lng": 88.2544358
        },
        {
          "lat": 22.5430778,
          "lng": 88.2551302
        },
        {
          "lat": 22.539803,
          "lng": 88.2585641
        },
        {
          "lat": 22.5362777,
          "lng": 88.2556765
        },
        {
          "lat": 22.5365463,
          "lng": 88.2574411
        },
        {
          "lat": 22.5327959,
          "lng": 88.2602932
        },
        {
          "lat": 22.5346406,
          "lng": 88.2610875
        },
        {
          "lat": 22.5346158,
          "lng": 88.264247
        },
        {
          "lat": 22.5375959,
          "lng": 88.2659754
        },
        {
          "lat": 22.5379252,
          "lng": 88.2707787
        },
        {
          "lat": 22.5429779,
          "lng": 88.2775652
        },
        {
          "lat": 22.5385259,
          "lng": 88.2916114
        },
        {
          "lat": 22.5298706,
          "lng": 88.291163
        },
        {
          "lat": 22.527401,
          "lng": 88.2891958
        },
        {
          "lat": 22.5250312,
          "lng": 88.2908439
        },
        {
          "lat": 22.5206882,
          "lng": 88.2900441
        },
        {
          "lat": 22.5170885,
          "lng": 88.2916511
        },
        {
          "lat": 22.5162254,
          "lng": 88.3006344
        },
        {
          "lat": 22.5110596,
          "lng": 88.3023732
        },
        {
          "lat": 22.5080159,
          "lng": 88.3053214
        },
        {
          "lat": 22.499994,
          "lng": 88.3071712
        },
        {
          "lat": 22.4980127,
          "lng": 88.3110925
        },
        {
          "lat": 22.4926206,
          "lng": 88.3114599
        },
        {
          "lat": 22.4908875,
          "lng": 88.3105615
        },
        {
          "lat": 22.4902659,
          "lng": 88.3035551
        },
        {
          "lat": 22.4842267,
          "lng": 88.298476
        },
        {
          "lat": 22.4820707,
          "lng": 88.2942308
        },
        {
          "lat": 22.4855132,
          "lng": 88.2812071
        },
        {
          "lat": 22.4878177,
          "lng": 88.2784905
        },
        {
          "lat": 22.4892786,
          "lng": 88.2733332
        },
        {
          "lat": 22.4918351,
          "lng": 88.2720506
        },
        {
          "lat": 22.4902399,
          "lng": 88.2693255
        },
        {
          "lat": 22.4877708,
          "lng": 88.2703619
        },
        {
          "lat": 22.4830747,
          "lng": 88.2758145
        },
        {
          "lat": 22.4755765,
          "lng": 88.2759923
        },
        {
          "lat": 22.4719849,
          "lng": 88.283837
        },
        {
          "lat": 22.4662358,
          "lng": 88.2886165
        },
        {
          "lat": 22.4604836,
          "lng": 88.2885299
        },
        {
          "lat": 22.4539007,
          "lng": 88.286296
        },
        {
          "lat": 22.4530713,
          "lng": 88.2896247
        },
        {
          "lat": 22.4547853,
          "lng": 88.2894538
        },
        {
          "lat": 22.4556232,
          "lng": 88.290846
        },
        {
          "lat": 22.4555979,
          "lng": 88.3036656
        },
        {
          "lat": 22.459039,
          "lng": 88.3047131
        },
        {
          "lat": 22.4589729,
          "lng": 88.3085363
        },
        {
          "lat": 22.4564679,
          "lng": 88.3109761
        },
        {
          "lat": 22.4575185,
          "lng": 88.3189327
        },
        {
          "lat": 22.4656287,
          "lng": 88.3210766
        },
        {
          "lat": 22.467377,
          "lng": 88.3236702
        },
        {
          "lat": 22.4680378,
          "lng": 88.3289604
        },
        {
          "lat": 22.4671135,
          "lng": 88.3337752
        },
        {
          "lat": 22.4644128,
          "lng": 88.3316822
        },
        {
          "lat": 22.4622683,
          "lng": 88.3324408
        },
        {
          "lat": 22.4615644,
          "lng": 88.3341705
        },
        {
          "lat": 22.4632186,
          "lng": 88.3410052
        },
        {
          "lat": 22.4616165,
          "lng": 88.3444062
        },
        {
          "lat": 22.4585731,
          "lng": 88.3443
        },
        {
          "lat": 22.4567267,
          "lng": 88.3458744
        },
        {
          "lat": 22.4569216,
          "lng": 88.350562
        },
        {
          "lat": 22.4610853,
          "lng": 88.3542728
        },
        {
          "lat": 22.4628875,
          "lng": 88.3597474
        },
        {
          "lat": 22.4608421,
          "lng": 88.3596165
        },
        {
          "lat": 22.4587473,
          "lng": 88.3621817
        },
        {
          "lat": 22.4567785,
          "lng": 88.3611618
        },
        {
          "lat": 22.4552931,
          "lng": 88.3619732
        },
        {
          "lat": 22.4541465,
          "lng": 88.3653008
        },
        {
          "lat": 22.4569733,
          "lng": 88.3693569
        },
        {
          "lat": 22.4563864,
          "lng": 88.3701681
        },
        {
          "lat": 22.4528824,
          "lng": 88.3689101
        },
        {
          "lat": 22.4520292,
          "lng": 88.3720288
        },
        {
          "lat": 22.4569734,
          "lng": 88.3748559
        },
        {
          "lat": 22.4555015,
          "lng": 88.3765949
        },
        {
          "lat": 22.4560704,
          "lng": 88.3799371
        },
        {
          "lat": 22.4585041,
          "lng": 88.3805396
        },
        {
          "lat": 22.4594296,
          "lng": 88.382711
        },
        {
          "lat": 22.4655118,
          "lng": 88.37779
        },
        {
          "lat": 22.4651729,
          "lng": 88.3842027
        },
        {
          "lat": 22.4675563,
          "lng": 88.3934722
        },
        {
          "lat": 22.4717642,
          "lng": 88.3969075
        },
        {
          "lat": 22.4727125,
          "lng": 88.3954405
        },
        {
          "lat": 22.4735658,
          "lng": 88.3959118
        },
        {
          "lat": 22.4719085,
          "lng": 88.3981367
        },
        {
          "lat": 22.4738814,
          "lng": 88.4001581
        },
        {
          "lat": 22.4744089,
          "lng": 88.4047737
        },
        {
          "lat": 22.4787206,
          "lng": 88.4068831
        },
        {
          "lat": 22.4777933,
          "lng": 88.4144769
        },
        {
          "lat": 22.4820737,
          "lng": 88.4150756
        },
        {
          "lat": 22.4845114,
          "lng": 88.417049
        },
        {
          "lat": 22.488625,
          "lng": 88.4160249
        },
        {
          "lat": 22.4912267,
          "lng": 88.4120996
        },
        {
          "lat": 22.4899138,
          "lng": 88.407148
        },
        {
          "lat": 22.4908667,
          "lng": 88.4063124
        },
        {
          "lat": 22.4933678,
          "lng": 88.4079651
        },
        {
          "lat": 22.4948296,
          "lng": 88.4132278
        },
        {
          "lat": 22.4976516,
          "lng": 88.4132042
        },
        {
          "lat": 22.4982346,
          "lng": 88.4108185
        },
        {
          "lat": 22.5017484,
          "lng": 88.4102769
        },
        {
          "lat": 22.5055405,
          "lng": 88.4158051
        },
        {
          "lat": 22.5141983,
          "lng": 88.4163368
        },
        {
          "lat": 22.5174114,
          "lng": 88.4201074
        },
        {
          "lat": 22.5238389,
          "lng": 88.420547
        },
        {
          "lat": 22.518566,
          "lng": 88.4271441
        },
        {
          "lat": 22.5171484,
          "lng": 88.4350751
        },
        {
          "lat": 22.5094907,
          "lng": 88.4397361
        },
        {
          "lat": 22.5117535,
          "lng": 88.4442462
        },
        {
          "lat": 22.5085279,
          "lng": 88.4484314
        },
        {
          "lat": 22.5091635,
          "lng": 88.454289
        },
        {
          "lat": 22.5150664,
          "lng": 88.4558905
        },
        {
          "lat": 22.5173602,
          "lng": 88.4584761
        },
        {
          "lat": 22.5188531,
          "lng": 88.4557103
        },
        {
          "lat": 22.5191441,
          "lng": 88.4595693
        },
        {
          "lat": 22.5225633,
          "lng": 88.4610776
        },
        {
          "lat": 22.5276532,
          "lng": 88.4413281
        },
        {
          "lat": 22.5371042,
          "lng": 88.4338522
        },
        {
          "lat": 22.5553295,
          "lng": 88.4128297
        },
        {
          "lat": 22.5716871,
          "lng": 88.4037617
        },
        {
          "lat": 22.5805874,
          "lng": 88.401296
        },
        {
          "lat": 22.5900821,
          "lng": 88.3967194
        },
        {
          "lat": 22.5952061,
          "lng": 88.3922617
        },
        {
          "lat": 22.6135735,
          "lng": 88.3931763
        },
        {
          "lat": 22.6181571,
          "lng": 88.3923193
        },
        {
          "lat": 22.618694,
          "lng": 88.3911891
        },
        {
          "lat": 22.6183916,
          "lng": 88.3651207
        },
        {
          "lat": 22.6090536,
          "lng": 88.3611672
        },
        {
          "lat": 22.596534,
          "lng": 88.3505242
        },
        {
          "lat": 22.585158,
          "lng": 88.3479111
        },
        {
          "lat": 22.57219,
          "lng": 88.3411814
        },
        {
          "lat": 22.5546535,
          "lng": 88.3240807
        },
        {
          "lat": 22.5508312,
          "lng": 88.318675
        },
        {
          "lat": 22.549504,
          "lng": 88.3047417
        },
        {
          "lat": 22.5521475,
          "lng": 88.295692
        },
        {
          "lat": 22.5548121,
          "lng": 88.2763481
        },
        {
          "lat": 22.5617047,
          "lng": 88.2442942
        },
        {
          "lat": 22.5609749,
          "lng": 88.2404709
        },
        {
          "lat": 22.5577448,
          "lng": 88.2369952
        },
        {
          "lat": 22.5491642,
          "lng": 88.233628
        }
      ]
    ],
    "greenCoverPercent": 1.83,
    "waterCoveragePercent": 19.54,
    "solarPotentialMw": 64,
    "carbonEstimateTonnes": 711104,
    "hotspots": [
      {
        "id": "osm-250769156-hotspot-severe-1",
        "name": "Narkeldanga High Density Corridor",
        "coordinates": {
          "lat": 22.573650821621623,
          "lng": 88.38485239920355
        },
        "radiusMeters": 1062,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0.6,
          "vegetationProximity": 0.1412564325785708,
          "waterProximity": 0.37263110309304825
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 96,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 67,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 59,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 184483265.68554688,
      "vegetatedAreaSqMeters": 3384048.0078125,
      "waterAreaSqMeters": 36056191.876953125,
      "buildingAreaSqMeters": 1411560.83203125,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:14:43.800Z"
  },
  {
    "id": "osm-248117143",
    "name": "Surat",
    "state": "Gujarat",
    "country": "India",
    "displayName": "Surat, Katargam Taluka, Surat, Gujarat, 395008, India",
    "coordinates": {
      "lat": 21.2094892,
      "lng": 72.8317058
    },
    "boundingbox": [
      "21.0494892",
      "21.3694892",
      "72.6717058",
      "72.9917058"
    ],
    "greenCoverPercent": 0.07,
    "waterCoveragePercent": 36.03,
    "solarPotentialMw": 38,
    "carbonEstimateTonnes": 422218,
    "hotspots": [
      {
        "id": "osm-248117143-hotspot-critical-1",
        "name": "Adajan Built-Up Stress Zone",
        "coordinates": {
          "lat": 21.203741452252252,
          "lng": 72.79459277879639
        },
        "radiusMeters": 1335,
        "averageTemperatureC": 34.2,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.059484743351404634
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248117143-hotspot-critical-2",
        "name": "Piplod Built-Up Stress Zone",
        "coordinates": {
          "lat": 21.180894605405406,
          "lng": 72.78233935628313
        },
        "radiusMeters": 1329,
        "averageTemperatureC": 34.1,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.11929056290753925
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248117143-hotspot-severe-1",
        "name": "Adajan Green Deficit Region",
        "coordinates": {
          "lat": 21.203741452252252,
          "lng": 72.83135304633615
        },
        "radiusMeters": 1213,
        "averageTemperatureC": 33.6,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4666666666666667,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0.4007777932120895
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 77,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 73,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248117143-hotspot-severe-2",
        "name": "Piplod Built-Up Stress Zone",
        "coordinates": {
          "lat": 21.169471181981983,
          "lng": 72.78233935628313
        },
        "radiusMeters": 1146,
        "averageTemperatureC": 33.2,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.632963252479019,
          "waterProximity": 0.7211148185863177
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 85,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 81,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-248117143-hotspot-severe-3",
        "name": "Adajan Green Deficit Region",
        "coordinates": {
          "lat": 21.2265882990991,
          "lng": 72.8190996238229
        },
        "radiusMeters": 1126,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0.10461553882156771
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 63,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 59,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248117143-hotspot-severe-4",
        "name": "Vesu Green Deficit Region",
        "coordinates": {
          "lat": 21.146624335135137,
          "lng": 72.75783251125662
        },
        "radiusMeters": 1124,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.26666666666666666,
          "landUseHeat": 0.6,
          "vegetationProximity": 0,
          "waterProximity": 0.5069859920319665
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 69,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 64,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248117143-hotspot-severe-5",
        "name": "Adajan High Density Corridor",
        "coordinates": {
          "lat": 21.19231802882883,
          "lng": 72.80684620130964
        },
        "radiusMeters": 1098,
        "averageTemperatureC": 33,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.5333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.4834526400442536,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 85,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Solar Deployment",
            "score": 67,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 63,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1180344465.3554688,
      "vegetatedAreaSqMeters": 834382.29296875,
      "waterAreaSqMeters": 425310800.3027344,
      "buildingAreaSqMeters": 839899.29296875,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:15:01.245Z"
  },
  {
    "id": "osm-244266981",
    "name": "Noida",
    "state": "Uttar Pradesh",
    "country": "India",
    "displayName": "Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, India",
    "coordinates": {
      "lat": 28.5706333,
      "lng": 77.3272147
    },
    "boundingbox": [
      "28.4006672",
      "28.6354703",
      "77.2928863",
      "77.5065172"
    ],
    "boundary": [
      [
        {
          "lat": 28.5761741,
          "lng": 77.2928863
        },
        {
          "lat": 28.5695146,
          "lng": 77.2960797
        },
        {
          "lat": 28.5599651,
          "lng": 77.297364
        },
        {
          "lat": 28.5563488,
          "lng": 77.2998047
        },
        {
          "lat": 28.5516557,
          "lng": 77.3040962
        },
        {
          "lat": 28.5397619,
          "lng": 77.3214394
        },
        {
          "lat": 28.5165895,
          "lng": 77.3452524
        },
        {
          "lat": 28.5040744,
          "lng": 77.3477634
        },
        {
          "lat": 28.5020564,
          "lng": 77.3495226
        },
        {
          "lat": 28.499013,
          "lng": 77.3546435
        },
        {
          "lat": 28.5012728,
          "lng": 77.3579512
        },
        {
          "lat": 28.4987116,
          "lng": 77.3622292
        },
        {
          "lat": 28.4984754,
          "lng": 77.3645756
        },
        {
          "lat": 28.5005256,
          "lng": 77.3671361
        },
        {
          "lat": 28.4981747,
          "lng": 77.3717558
        },
        {
          "lat": 28.4925435,
          "lng": 77.3700975
        },
        {
          "lat": 28.4884978,
          "lng": 77.3709904
        },
        {
          "lat": 28.4852171,
          "lng": 77.3702254
        },
        {
          "lat": 28.4762315,
          "lng": 77.3745123
        },
        {
          "lat": 28.4705022,
          "lng": 77.3798847
        },
        {
          "lat": 28.4679448,
          "lng": 77.387302
        },
        {
          "lat": 28.4721626,
          "lng": 77.3915128
        },
        {
          "lat": 28.4647772,
          "lng": 77.4070533
        },
        {
          "lat": 28.4620001,
          "lng": 77.4034838
        },
        {
          "lat": 28.4559149,
          "lng": 77.4001863
        },
        {
          "lat": 28.452411,
          "lng": 77.4137813
        },
        {
          "lat": 28.4532525,
          "lng": 77.4154388
        },
        {
          "lat": 28.452232,
          "lng": 77.4202499
        },
        {
          "lat": 28.4548548,
          "lng": 77.4335303
        },
        {
          "lat": 28.4387462,
          "lng": 77.4382917
        },
        {
          "lat": 28.4380173,
          "lng": 77.4361413
        },
        {
          "lat": 28.4349192,
          "lng": 77.4378907
        },
        {
          "lat": 28.431679,
          "lng": 77.4360796
        },
        {
          "lat": 28.4307459,
          "lng": 77.4421005
        },
        {
          "lat": 28.4296889,
          "lng": 77.4405879
        },
        {
          "lat": 28.4285043,
          "lng": 77.441736
        },
        {
          "lat": 28.4267893,
          "lng": 77.4522464
        },
        {
          "lat": 28.4246955,
          "lng": 77.4516681
        },
        {
          "lat": 28.4243918,
          "lng": 77.4623768
        },
        {
          "lat": 28.417567,
          "lng": 77.4611381
        },
        {
          "lat": 28.4151188,
          "lng": 77.4635137
        },
        {
          "lat": 28.417333,
          "lng": 77.4701473
        },
        {
          "lat": 28.4169139,
          "lng": 77.4726986
        },
        {
          "lat": 28.4192705,
          "lng": 77.4752626
        },
        {
          "lat": 28.4179709,
          "lng": 77.4778196
        },
        {
          "lat": 28.4089254,
          "lng": 77.483881
        },
        {
          "lat": 28.4062346,
          "lng": 77.4832594
        },
        {
          "lat": 28.4049042,
          "lng": 77.4811819
        },
        {
          "lat": 28.4006672,
          "lng": 77.481437
        },
        {
          "lat": 28.4026126,
          "lng": 77.4840188
        },
        {
          "lat": 28.4088222,
          "lng": 77.4867654
        },
        {
          "lat": 28.4118042,
          "lng": 77.493782
        },
        {
          "lat": 28.4140042,
          "lng": 77.4953747
        },
        {
          "lat": 28.415352,
          "lng": 77.5056367
        },
        {
          "lat": 28.4193246,
          "lng": 77.5065172
        },
        {
          "lat": 28.4210273,
          "lng": 77.505741
        },
        {
          "lat": 28.4266189,
          "lng": 77.4951853
        },
        {
          "lat": 28.4293077,
          "lng": 77.4946347
        },
        {
          "lat": 28.4311749,
          "lng": 77.496277
        },
        {
          "lat": 28.433225,
          "lng": 77.4924444
        },
        {
          "lat": 28.4335317,
          "lng": 77.4954481
        },
        {
          "lat": 28.4349709,
          "lng": 77.4968451
        },
        {
          "lat": 28.4411024,
          "lng": 77.4995546
        },
        {
          "lat": 28.4442471,
          "lng": 77.4990165
        },
        {
          "lat": 28.4466141,
          "lng": 77.4951665
        },
        {
          "lat": 28.4461014,
          "lng": 77.4917255
        },
        {
          "lat": 28.4472723,
          "lng": 77.4897297
        },
        {
          "lat": 28.4500174,
          "lng": 77.4881129
        },
        {
          "lat": 28.4553767,
          "lng": 77.488876
        },
        {
          "lat": 28.4573747,
          "lng": 77.4877604
        },
        {
          "lat": 28.4599162,
          "lng": 77.4831008
        },
        {
          "lat": 28.4590631,
          "lng": 77.4798466
        },
        {
          "lat": 28.459922,
          "lng": 77.4768536
        },
        {
          "lat": 28.4627597,
          "lng": 77.4803788
        },
        {
          "lat": 28.4666087,
          "lng": 77.4788166
        },
        {
          "lat": 28.4671517,
          "lng": 77.475826
        },
        {
          "lat": 28.4649532,
          "lng": 77.4697268
        },
        {
          "lat": 28.4685293,
          "lng": 77.4653395
        },
        {
          "lat": 28.4708449,
          "lng": 77.4654312
        },
        {
          "lat": 28.4777268,
          "lng": 77.4731762
        },
        {
          "lat": 28.4801033,
          "lng": 77.4741324
        },
        {
          "lat": 28.4833403,
          "lng": 77.472559
        },
        {
          "lat": 28.4840304,
          "lng": 77.4660279
        },
        {
          "lat": 28.485702,
          "lng": 77.465891
        },
        {
          "lat": 28.4866648,
          "lng": 77.4697707
        },
        {
          "lat": 28.4894349,
          "lng": 77.4701962
        },
        {
          "lat": 28.4904567,
          "lng": 77.4716068
        },
        {
          "lat": 28.4887978,
          "lng": 77.4749879
        },
        {
          "lat": 28.4896614,
          "lng": 77.4778803
        },
        {
          "lat": 28.4924194,
          "lng": 77.4788392
        },
        {
          "lat": 28.4919708,
          "lng": 77.4645887
        },
        {
          "lat": 28.4928967,
          "lng": 77.4632515
        },
        {
          "lat": 28.4980037,
          "lng": 77.4629354
        },
        {
          "lat": 28.5005393,
          "lng": 77.4602122
        },
        {
          "lat": 28.5018783,
          "lng": 77.4538826
        },
        {
          "lat": 28.5004468,
          "lng": 77.4488415
        },
        {
          "lat": 28.5036162,
          "lng": 77.4477069
        },
        {
          "lat": 28.5057528,
          "lng": 77.4496115
        },
        {
          "lat": 28.5068282,
          "lng": 77.4489793
        },
        {
          "lat": 28.5062941,
          "lng": 77.4470585
        },
        {
          "lat": 28.503082,
          "lng": 77.4444407
        },
        {
          "lat": 28.5011519,
          "lng": 77.4392862
        },
        {
          "lat": 28.5021775,
          "lng": 77.4345856
        },
        {
          "lat": 28.5092624,
          "lng": 77.4381053
        },
        {
          "lat": 28.5116877,
          "lng": 77.4374666
        },
        {
          "lat": 28.5152128,
          "lng": 77.4337547
        },
        {
          "lat": 28.5260794,
          "lng": 77.4328786
        },
        {
          "lat": 28.5362344,
          "lng": 77.4342872
        },
        {
          "lat": 28.5392863,
          "lng": 77.4249278
        },
        {
          "lat": 28.5443532,
          "lng": 77.4214778
        },
        {
          "lat": 28.5519554,
          "lng": 77.418942
        },
        {
          "lat": 28.5532639,
          "lng": 77.4218039
        },
        {
          "lat": 28.550732,
          "lng": 77.42722
        },
        {
          "lat": 28.5536732,
          "lng": 77.4278835
        },
        {
          "lat": 28.5592048,
          "lng": 77.4251558
        },
        {
          "lat": 28.564244,
          "lng": 77.416116
        },
        {
          "lat": 28.5684447,
          "lng": 77.4221756
        },
        {
          "lat": 28.5725369,
          "lng": 77.4229001
        },
        {
          "lat": 28.5786468,
          "lng": 77.4150049
        },
        {
          "lat": 28.5823046,
          "lng": 77.4123413
        },
        {
          "lat": 28.5853043,
          "lng": 77.414631
        },
        {
          "lat": 28.592912,
          "lng": 77.4172531
        },
        {
          "lat": 28.5972787,
          "lng": 77.4235127
        },
        {
          "lat": 28.6048342,
          "lng": 77.4240773
        },
        {
          "lat": 28.609657,
          "lng": 77.4146874
        },
        {
          "lat": 28.6060855,
          "lng": 77.4106071
        },
        {
          "lat": 28.6083266,
          "lng": 77.4046841
        },
        {
          "lat": 28.6177877,
          "lng": 77.4054498
        },
        {
          "lat": 28.623589,
          "lng": 77.4091993
        },
        {
          "lat": 28.6259508,
          "lng": 77.4083208
        },
        {
          "lat": 28.6288133,
          "lng": 77.4015198
        },
        {
          "lat": 28.6354703,
          "lng": 77.3943573
        },
        {
          "lat": 28.6323333,
          "lng": 77.3817511
        },
        {
          "lat": 28.63248,
          "lng": 77.3341678
        },
        {
          "lat": 28.6315684,
          "lng": 77.3304796
        },
        {
          "lat": 28.6236487,
          "lng": 77.3404229
        },
        {
          "lat": 28.6187598,
          "lng": 77.342008
        },
        {
          "lat": 28.6051404,
          "lng": 77.3412222
        },
        {
          "lat": 28.6018012,
          "lng": 77.3367463
        },
        {
          "lat": 28.6011371,
          "lng": 77.3316769
        },
        {
          "lat": 28.5981814,
          "lng": 77.3258952
        },
        {
          "lat": 28.5965248,
          "lng": 77.313382
        },
        {
          "lat": 28.5893282,
          "lng": 77.3088577
        },
        {
          "lat": 28.5838592,
          "lng": 77.3010198
        },
        {
          "lat": 28.5815446,
          "lng": 77.2948372
        },
        {
          "lat": 28.5761741,
          "lng": 77.2928863
        }
      ]
    ],
    "greenCoverPercent": 1.76,
    "waterCoveragePercent": 18.49,
    "solarPotentialMw": 14,
    "carbonEstimateTonnes": 155554,
    "hotspots": [
      {
        "id": "osm-244266981-hotspot-severe-1",
        "name": "Sector 50 Green Deficit Region",
        "coordinates": {
          "lat": 28.545599632432435,
          "lng": 77.39790425378686
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-244266981-hotspot-severe-2",
        "name": "Kakrala Green Deficit Region",
        "coordinates": {
          "lat": 28.545599632432435,
          "lng": 77.41790767355579
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 210598403.33203125,
      "vegetatedAreaSqMeters": 3700758.150390625,
      "waterAreaSqMeters": 38929437.783203125,
      "buildingAreaSqMeters": 308625.955078125,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:15:29.473Z"
  },
  {
    "id": "osm-245335521",
    "name": "Gurugram",
    "state": "Haryana",
    "country": "India",
    "displayName": "Gurugram, Haryana, India",
    "coordinates": {
      "lat": 28.4646148,
      "lng": 77.0299194
    },
    "boundingbox": [
      "28.2005681",
      "28.5409048",
      "76.6510198",
      "77.2418683"
    ],
    "boundary": [
      [
        {
          "lat": 28.3070693,
          "lng": 76.6510198
        },
        {
          "lat": 28.3025006,
          "lng": 76.6671118
        },
        {
          "lat": 28.3166679,
          "lng": 76.6737362
        },
        {
          "lat": 28.3162062,
          "lng": 76.6800295
        },
        {
          "lat": 28.3137519,
          "lng": 76.6857155
        },
        {
          "lat": 28.3004591,
          "lng": 76.681796
        },
        {
          "lat": 28.2990982,
          "lng": 76.6835625
        },
        {
          "lat": 28.2944319,
          "lng": 76.681106
        },
        {
          "lat": 28.2932653,
          "lng": 76.6832865
        },
        {
          "lat": 28.2889876,
          "lng": 76.6792014
        },
        {
          "lat": 28.2755702,
          "lng": 76.6764688
        },
        {
          "lat": 28.269347,
          "lng": 76.673819
        },
        {
          "lat": 28.2686421,
          "lng": 76.6778765
        },
        {
          "lat": 28.2630749,
          "lng": 76.678401
        },
        {
          "lat": 28.261446,
          "lng": 76.6838938
        },
        {
          "lat": 28.2652872,
          "lng": 76.6885585
        },
        {
          "lat": 28.258869,
          "lng": 76.6981088
        },
        {
          "lat": 28.2612272,
          "lng": 76.706831
        },
        {
          "lat": 28.264485,
          "lng": 76.7115509
        },
        {
          "lat": 28.263391,
          "lng": 76.7147803
        },
        {
          "lat": 28.2519154,
          "lng": 76.7384076
        },
        {
          "lat": 28.2469067,
          "lng": 76.7570665
        },
        {
          "lat": 28.2415329,
          "lng": 76.7640222
        },
        {
          "lat": 28.2400982,
          "lng": 76.7689906
        },
        {
          "lat": 28.237934,
          "lng": 76.7700946
        },
        {
          "lat": 28.2341162,
          "lng": 76.769791
        },
        {
          "lat": 28.2303955,
          "lng": 76.771806
        },
        {
          "lat": 28.2245831,
          "lng": 76.7785408
        },
        {
          "lat": 28.2237076,
          "lng": 76.781301
        },
        {
          "lat": 28.2357455,
          "lng": 76.789968
        },
        {
          "lat": 28.2483655,
          "lng": 76.7951572
        },
        {
          "lat": 28.2496542,
          "lng": 76.7973654
        },
        {
          "lat": 28.2547966,
          "lng": 76.7961371
        },
        {
          "lat": 28.2555503,
          "lng": 76.7976276
        },
        {
          "lat": 28.2532405,
          "lng": 76.8019611
        },
        {
          "lat": 28.2558907,
          "lng": 76.8058668
        },
        {
          "lat": 28.2536417,
          "lng": 76.8114424
        },
        {
          "lat": 28.252584,
          "lng": 76.8120358
        },
        {
          "lat": 28.2466027,
          "lng": 76.8084614
        },
        {
          "lat": 28.2439523,
          "lng": 76.8120082
        },
        {
          "lat": 28.2418733,
          "lng": 76.8107247
        },
        {
          "lat": 28.2406332,
          "lng": 76.8125464
        },
        {
          "lat": 28.2444873,
          "lng": 76.8162865
        },
        {
          "lat": 28.2442198,
          "lng": 76.8255608
        },
        {
          "lat": 28.2387851,
          "lng": 76.841142
        },
        {
          "lat": 28.2393311,
          "lng": 76.8477186
        },
        {
          "lat": 28.234414,
          "lng": 76.8577349
        },
        {
          "lat": 28.2428487,
          "lng": 76.8617434
        },
        {
          "lat": 28.249048,
          "lng": 76.8680321
        },
        {
          "lat": 28.2544447,
          "lng": 76.8688432
        },
        {
          "lat": 28.2543018,
          "lng": 76.8712014
        },
        {
          "lat": 28.2623469,
          "lng": 76.8763422
        },
        {
          "lat": 28.2605335,
          "lng": 76.881221
        },
        {
          "lat": 28.2520377,
          "lng": 76.8935613
        },
        {
          "lat": 28.2522685,
          "lng": 76.8991013
        },
        {
          "lat": 28.2629404,
          "lng": 76.9081476
        },
        {
          "lat": 28.2631931,
          "lng": 76.9138998
        },
        {
          "lat": 28.2766551,
          "lng": 76.9180174
        },
        {
          "lat": 28.2864235,
          "lng": 76.9107554
        },
        {
          "lat": 28.2904889,
          "lng": 76.9048785
        },
        {
          "lat": 28.2947079,
          "lng": 76.9070745
        },
        {
          "lat": 28.2963339,
          "lng": 76.9055647
        },
        {
          "lat": 28.3006186,
          "lng": 76.9049783
        },
        {
          "lat": 28.2984763,
          "lng": 76.9100567
        },
        {
          "lat": 28.3003879,
          "lng": 76.9122278
        },
        {
          "lat": 28.2993332,
          "lng": 76.9164452
        },
        {
          "lat": 28.3242912,
          "lng": 76.933215
        },
        {
          "lat": 28.318228,
          "lng": 76.9356606
        },
        {
          "lat": 28.3178326,
          "lng": 76.9382061
        },
        {
          "lat": 28.3157016,
          "lng": 76.9406267
        },
        {
          "lat": 28.3175909,
          "lng": 76.944395
        },
        {
          "lat": 28.3158773,
          "lng": 76.9479885
        },
        {
          "lat": 28.3172614,
          "lng": 76.9495607
        },
        {
          "lat": 28.3126698,
          "lng": 76.9515571
        },
        {
          "lat": 28.3140538,
          "lng": 76.9532541
        },
        {
          "lat": 28.3181181,
          "lng": 76.952705
        },
        {
          "lat": 28.3192825,
          "lng": 76.9551257
        },
        {
          "lat": 28.3220065,
          "lng": 76.9558993
        },
        {
          "lat": 28.3223141,
          "lng": 76.9583699
        },
        {
          "lat": 28.3269492,
          "lng": 76.96109
        },
        {
          "lat": 28.3256751,
          "lng": 76.9640846
        },
        {
          "lat": 28.3266856,
          "lng": 76.9693002
        },
        {
          "lat": 28.3256312,
          "lng": 76.9711719
        },
        {
          "lat": 28.3298927,
          "lng": 76.9734178
        },
        {
          "lat": 28.3308373,
          "lng": 76.9769615
        },
        {
          "lat": 28.3346154,
          "lng": 76.9785836
        },
        {
          "lat": 28.3291239,
          "lng": 76.9800559
        },
        {
          "lat": 28.3305078,
          "lng": 76.9818776
        },
        {
          "lat": 28.3307933,
          "lng": 76.9857207
        },
        {
          "lat": 28.3300396,
          "lng": 76.9867395
        },
        {
          "lat": 28.3273226,
          "lng": 76.9863446
        },
        {
          "lat": 28.325763,
          "lng": 76.9883161
        },
        {
          "lat": 28.3271469,
          "lng": 76.9941057
        },
        {
          "lat": 28.325719,
          "lng": 76.9995459
        },
        {
          "lat": 28.3190629,
          "lng": 76.9996956
        },
        {
          "lat": 28.3153915,
          "lng": 77.0031377
        },
        {
          "lat": 28.3114175,
          "lng": 77.0039879
        },
        {
          "lat": 28.3076386,
          "lng": 77.0096278
        },
        {
          "lat": 28.3052217,
          "lng": 77.0110253
        },
        {
          "lat": 28.2885222,
          "lng": 77.0132712
        },
        {
          "lat": 28.278655,
          "lng": 77.0197097
        },
        {
          "lat": 28.2661934,
          "lng": 77.0202337
        },
        {
          "lat": 28.2602807,
          "lng": 77.0216811
        },
        {
          "lat": 28.2481247,
          "lng": 77.0215314
        },
        {
          "lat": 28.2469816,
          "lng": 77.0238772
        },
        {
          "lat": 28.2475312,
          "lng": 77.0317381
        },
        {
          "lat": 28.2455966,
          "lng": 77.0330108
        },
        {
          "lat": 28.2452229,
          "lng": 77.0351569
        },
        {
          "lat": 28.2441237,
          "lng": 77.056294
        },
        {
          "lat": 28.2402984,
          "lng": 77.0588893
        },
        {
          "lat": 28.2378361,
          "lng": 77.0573671
        },
        {
          "lat": 28.2289537,
          "lng": 77.0574419
        },
        {
          "lat": 28.222951,
          "lng": 77.0547717
        },
        {
          "lat": 28.219081,
          "lng": 77.0606362
        },
        {
          "lat": 28.2164643,
          "lng": 77.0621335
        },
        {
          "lat": 28.2174098,
          "lng": 77.0658269
        },
        {
          "lat": 28.2146831,
          "lng": 77.0712421
        },
        {
          "lat": 28.2175857,
          "lng": 77.0737876
        },
        {
          "lat": 28.2245782,
          "lng": 77.075784
        },
        {
          "lat": 28.2299871,
          "lng": 77.0815736
        },
        {
          "lat": 28.2261173,
          "lng": 77.0866894
        },
        {
          "lat": 28.2250839,
          "lng": 77.0862152
        },
        {
          "lat": 28.2241384,
          "lng": 77.0875379
        },
        {
          "lat": 28.2229071,
          "lng": 77.0929531
        },
        {
          "lat": 28.2193009,
          "lng": 77.0941759
        },
        {
          "lat": 28.2260953,
          "lng": 77.0990422
        },
        {
          "lat": 28.2258315,
          "lng": 77.1015377
        },
        {
          "lat": 28.2273486,
          "lng": 77.1026857
        },
        {
          "lat": 28.2252818,
          "lng": 77.1064539
        },
        {
          "lat": 28.2234788,
          "lng": 77.1055805
        },
        {
          "lat": 28.2190151,
          "lng": 77.1142898
        },
        {
          "lat": 28.2200925,
          "lng": 77.1156124
        },
        {
          "lat": 28.2178936,
          "lng": 77.1209778
        },
        {
          "lat": 28.2213239,
          "lng": 77.1235482
        },
        {
          "lat": 28.2206422,
          "lng": 77.1250704
        },
        {
          "lat": 28.2231929,
          "lng": 77.1269171
        },
        {
          "lat": 28.2265791,
          "lng": 77.1339046
        },
        {
          "lat": 28.2252378,
          "lng": 77.1386211
        },
        {
          "lat": 28.2167721,
          "lng": 77.1488278
        },
        {
          "lat": 28.2173658,
          "lng": 77.1518973
        },
        {
          "lat": 28.2130008,
          "lng": 77.1621538
        },
        {
          "lat": 28.210219,
          "lng": 77.165111
        },
        {
          "lat": 28.2044792,
          "lng": 77.1660843
        },
        {
          "lat": 28.2005681,
          "lng": 77.1715479
        },
        {
          "lat": 28.2086665,
          "lng": 77.1892903
        },
        {
          "lat": 28.2091634,
          "lng": 77.1958433
        },
        {
          "lat": 28.2117804,
          "lng": 77.2023067
        },
        {
          "lat": 28.2162004,
          "lng": 77.2019823
        },
        {
          "lat": 28.2192569,
          "lng": 77.203804
        },
        {
          "lat": 28.2226652,
          "lng": 77.1973656
        },
        {
          "lat": 28.2293495,
          "lng": 77.2014832
        },
        {
          "lat": 28.2352638,
          "lng": 77.1911268
        },
        {
          "lat": 28.2373085,
          "lng": 77.1936223
        },
        {
          "lat": 28.2432883,
          "lng": 77.1962676
        },
        {
          "lat": 28.245179,
          "lng": 77.1953193
        },
        {
          "lat": 28.2511584,
          "lng": 77.2042283
        },
        {
          "lat": 28.2493558,
          "lng": 77.2092692
        },
        {
          "lat": 28.2569176,
          "lng": 77.2130374
        },
        {
          "lat": 28.2616216,
          "lng": 77.2135865
        },
        {
          "lat": 28.2639514,
          "lng": 77.2187023
        },
        {
          "lat": 28.2635118,
          "lng": 77.2202994
        },
        {
          "lat": 28.2663033,
          "lng": 77.2233439
        },
        {
          "lat": 28.2700559,
          "lng": 77.2372327
        },
        {
          "lat": 28.2793423,
          "lng": 77.2418683
        },
        {
          "lat": 28.2895493,
          "lng": 77.2283244
        },
        {
          "lat": 28.2875911,
          "lng": 77.223747
        },
        {
          "lat": 28.2989078,
          "lng": 77.2081731
        },
        {
          "lat": 28.2894134,
          "lng": 77.2008159
        },
        {
          "lat": 28.3035629,
          "lng": 77.1820431
        },
        {
          "lat": 28.3086821,
          "lng": 77.1661467
        },
        {
          "lat": 28.3112856,
          "lng": 77.1664836
        },
        {
          "lat": 28.3130872,
          "lng": 77.1620041
        },
        {
          "lat": 28.31535,
          "lng": 77.1623784
        },
        {
          "lat": 28.3162288,
          "lng": 77.1580612
        },
        {
          "lat": 28.3177007,
          "lng": 77.1566887
        },
        {
          "lat": 28.3439283,
          "lng": 77.1506245
        },
        {
          "lat": 28.3501218,
          "lng": 77.1505746
        },
        {
          "lat": 28.3557,
          "lng": 77.1524213
        },
        {
          "lat": 28.3629469,
          "lng": 77.1511735
        },
        {
          "lat": 28.3640888,
          "lng": 77.1492769
        },
        {
          "lat": 28.3799421,
          "lng": 77.1531699
        },
        {
          "lat": 28.3803812,
          "lng": 77.1507743
        },
        {
          "lat": 28.3838063,
          "lng": 77.1513732
        },
        {
          "lat": 28.3919733,
          "lng": 77.1550665
        },
        {
          "lat": 28.394915,
          "lng": 77.1622037
        },
        {
          "lat": 28.3953541,
          "lng": 77.1697402
        },
        {
          "lat": 28.4046285,
          "lng": 77.1740891
        },
        {
          "lat": 28.4065603,
          "lng": 77.1713873
        },
        {
          "lat": 28.4110496,
          "lng": 77.1703554
        },
        {
          "lat": 28.4132313,
          "lng": 77.1682289
        },
        {
          "lat": 28.4148374,
          "lng": 77.1641326
        },
        {
          "lat": 28.4293069,
          "lng": 77.1615457
        },
        {
          "lat": 28.4314326,
          "lng": 77.1563478
        },
        {
          "lat": 28.4365575,
          "lng": 77.1493
        },
        {
          "lat": 28.4389245,
          "lng": 77.1322839
        },
        {
          "lat": 28.4428335,
          "lng": 77.1277292
        },
        {
          "lat": 28.4510201,
          "lng": 77.1242593
        },
        {
          "lat": 28.4597104,
          "lng": 77.1234764
        },
        {
          "lat": 28.4731841,
          "lng": 77.1124725
        },
        {
          "lat": 28.4735236,
          "lng": 77.1141826
        },
        {
          "lat": 28.4815648,
          "lng": 77.1150614
        },
        {
          "lat": 28.495139,
          "lng": 77.119507
        },
        {
          "lat": 28.5048552,
          "lng": 77.0976518
        },
        {
          "lat": 28.5070803,
          "lng": 77.0957528
        },
        {
          "lat": 28.5114068,
          "lng": 77.0986588
        },
        {
          "lat": 28.5180224,
          "lng": 77.0804111
        },
        {
          "lat": 28.5202589,
          "lng": 77.0723002
        },
        {
          "lat": 28.5119289,
          "lng": 77.0671624
        },
        {
          "lat": 28.5128211,
          "lng": 77.0575428
        },
        {
          "lat": 28.5166427,
          "lng": 77.0462065
        },
        {
          "lat": 28.52092,
          "lng": 77.0485082
        },
        {
          "lat": 28.5230838,
          "lng": 77.0446105
        },
        {
          "lat": 28.5251547,
          "lng": 77.0433583
        },
        {
          "lat": 28.5310788,
          "lng": 77.0321199
        },
        {
          "lat": 28.5327132,
          "lng": 77.0245904
        },
        {
          "lat": 28.5405156,
          "lng": 77.0134571
        },
        {
          "lat": 28.539869,
          "lng": 77.0096859
        },
        {
          "lat": 28.5409048,
          "lng": 77.007818
        },
        {
          "lat": 28.5388005,
          "lng": 77.0045632
        },
        {
          "lat": 28.530984,
          "lng": 77.0013356
        },
        {
          "lat": 28.5243485,
          "lng": 77.0146291
        },
        {
          "lat": 28.5210774,
          "lng": 77.0169637
        },
        {
          "lat": 28.5147255,
          "lng": 77.0100507
        },
        {
          "lat": 28.5197112,
          "lng": 76.9968081
        },
        {
          "lat": 28.5135677,
          "lng": 76.9909463
        },
        {
          "lat": 28.5170355,
          "lng": 76.9832794
        },
        {
          "lat": 28.5212528,
          "lng": 76.9783615
        },
        {
          "lat": 28.5053165,
          "lng": 76.9527581
        },
        {
          "lat": 28.5053127,
          "lng": 76.9433253
        },
        {
          "lat": 28.5110191,
          "lng": 76.9349626
        },
        {
          "lat": 28.5104953,
          "lng": 76.9275524
        },
        {
          "lat": 28.5069098,
          "lng": 76.9209019
        },
        {
          "lat": 28.5107953,
          "lng": 76.9159189
        },
        {
          "lat": 28.5137629,
          "lng": 76.9069036
        },
        {
          "lat": 28.5089253,
          "lng": 76.902943
        },
        {
          "lat": 28.5090503,
          "lng": 76.8983531
        },
        {
          "lat": 28.5008314,
          "lng": 76.8919497
        },
        {
          "lat": 28.5013759,
          "lng": 76.8854384
        },
        {
          "lat": 28.5025813,
          "lng": 76.8858949
        },
        {
          "lat": 28.5047475,
          "lng": 76.8818812
        },
        {
          "lat": 28.4978371,
          "lng": 76.8742818
        },
        {
          "lat": 28.5006977,
          "lng": 76.8641624
        },
        {
          "lat": 28.5012993,
          "lng": 76.8540494
        },
        {
          "lat": 28.5000258,
          "lng": 76.8455896
        },
        {
          "lat": 28.5040867,
          "lng": 76.8248204
        },
        {
          "lat": 28.4987129,
          "lng": 76.8253864
        },
        {
          "lat": 28.4892097,
          "lng": 76.8185571
        },
        {
          "lat": 28.4853331,
          "lng": 76.8140042
        },
        {
          "lat": 28.4787677,
          "lng": 76.8137197
        },
        {
          "lat": 28.4750582,
          "lng": 76.8109107
        },
        {
          "lat": 28.4754809,
          "lng": 76.8065389
        },
        {
          "lat": 28.4722018,
          "lng": 76.8028
        },
        {
          "lat": 28.4699818,
          "lng": 76.7971801
        },
        {
          "lat": 28.4647287,
          "lng": 76.7937654
        },
        {
          "lat": 28.4642284,
          "lng": 76.7913467
        },
        {
          "lat": 28.4773553,
          "lng": 76.7716917
        },
        {
          "lat": 28.4771106,
          "lng": 76.7689737
        },
        {
          "lat": 28.4595066,
          "lng": 76.7601526
        },
        {
          "lat": 28.4611952,
          "lng": 76.7507268
        },
        {
          "lat": 28.4700359,
          "lng": 76.7349497
        },
        {
          "lat": 28.4787364,
          "lng": 76.7351475
        },
        {
          "lat": 28.4863335,
          "lng": 76.7259706
        },
        {
          "lat": 28.4914761,
          "lng": 76.7177542
        },
        {
          "lat": 28.490382,
          "lng": 76.7124899
        },
        {
          "lat": 28.4923983,
          "lng": 76.7095555
        },
        {
          "lat": 28.4928723,
          "lng": 76.7050338
        },
        {
          "lat": 28.4877091,
          "lng": 76.7041667
        },
        {
          "lat": 28.4704195,
          "lng": 76.708933
        },
        {
          "lat": 28.4647912,
          "lng": 76.7093598
        },
        {
          "lat": 28.4576151,
          "lng": 76.7070996
        },
        {
          "lat": 28.4557853,
          "lng": 76.7117074
        },
        {
          "lat": 28.4490616,
          "lng": 76.7105692
        },
        {
          "lat": 28.4385531,
          "lng": 76.7143395
        },
        {
          "lat": 28.4356756,
          "lng": 76.7174696
        },
        {
          "lat": 28.4103688,
          "lng": 76.7076169
        },
        {
          "lat": 28.4000694,
          "lng": 76.7083485
        },
        {
          "lat": 28.3934734,
          "lng": 76.7147663
        },
        {
          "lat": 28.3938176,
          "lng": 76.7169716
        },
        {
          "lat": 28.3884981,
          "lng": 76.7279981
        },
        {
          "lat": 28.3808627,
          "lng": 76.7309147
        },
        {
          "lat": 28.3748326,
          "lng": 76.7352693
        },
        {
          "lat": 28.3690955,
          "lng": 76.7326932
        },
        {
          "lat": 28.3649382,
          "lng": 76.7291735
        },
        {
          "lat": 28.3603005,
          "lng": 76.7293853
        },
        {
          "lat": 28.3564505,
          "lng": 76.7265042
        },
        {
          "lat": 28.3541029,
          "lng": 76.7157267
        },
        {
          "lat": 28.3578926,
          "lng": 76.7051339
        },
        {
          "lat": 28.3570766,
          "lng": 76.7022104
        },
        {
          "lat": 28.3597058,
          "lng": 76.6963415
        },
        {
          "lat": 28.3649954,
          "lng": 76.6976576
        },
        {
          "lat": 28.3750771,
          "lng": 76.6830694
        },
        {
          "lat": 28.3776706,
          "lng": 76.670625
        },
        {
          "lat": 28.3790496,
          "lng": 76.6692647
        },
        {
          "lat": 28.3710596,
          "lng": 76.6642411
        },
        {
          "lat": 28.3689224,
          "lng": 76.665014
        },
        {
          "lat": 28.3536204,
          "lng": 76.6578375
        },
        {
          "lat": 28.3474504,
          "lng": 76.6626954
        },
        {
          "lat": 28.3411828,
          "lng": 76.6603217
        },
        {
          "lat": 28.339628,
          "lng": 76.6641307
        },
        {
          "lat": 28.3322911,
          "lng": 76.6586103
        },
        {
          "lat": 28.3260226,
          "lng": 76.6557949
        },
        {
          "lat": 28.3070693,
          "lng": 76.6510198
        }
      ]
    ],
    "greenCoverPercent": 4.27,
    "waterCoveragePercent": 1.35,
    "solarPotentialMw": 114,
    "carbonEstimateTonnes": 1266654,
    "hotspots": [
      {
        "id": "osm-245335521-hotspot-critical-1",
        "name": "Golf Course Road Built-Up Stress Zone",
        "coordinates": {
          "lat": 28.4610816135135,
          "lng": 77.10101338430158
        },
        "radiusMeters": 1431,
        "averageTemperatureC": 34.7,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-critical-2",
        "name": "Sector 72 Built-Up Stress Zone",
        "coordinates": {
          "lat": 28.40318972162161,
          "lng": 77.03516066464769
        },
        "radiusMeters": 1413,
        "averageTemperatureC": 34.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-critical-3",
        "name": "Sector 29 Built-Up Stress Zone",
        "coordinates": {
          "lat": 28.4610816135135,
          "lng": 77.05711157119899
        },
        "radiusMeters": 1304,
        "averageTemperatureC": 34,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.5072684332992862,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 85,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 76,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-245335521-hotspot-severe-1",
        "name": "Sector 29 Built-Up Stress Zone",
        "coordinates": {
          "lat": 28.480378910810796,
          "lng": 77.05711157119899
        },
        "radiusMeters": 1237,
        "averageTemperatureC": 33.7,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 1,
          "vegetationProximity": 0.77479498267407,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 92,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 90,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 77,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 71,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-245335521-hotspot-severe-2",
        "name": "Ninex City Green Deficit Region",
        "coordinates": {
          "lat": 28.383892424324316,
          "lng": 76.9912588515451
        },
        "radiusMeters": 1235,
        "averageTemperatureC": 33.7,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4666666666666667,
          "landUseHeat": 0.6,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 72,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 70,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-severe-3",
        "name": "Sector 45 High Density Corridor",
        "coordinates": {
          "lat": 28.441784316216204,
          "lng": 77.05711157119899
        },
        "radiusMeters": 1229,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Extreme land surface temperature combined with dense construction and high surface exposure.",
        "recommendedAction": "Reflective Roofing (Estimated 0.6°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.8,
          "landUseHeat": 1,
          "vegetationProximity": 0.566837203913392,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Reflective Roofing",
            "score": 87,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 86,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 83,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 70,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
      },
      {
        "id": "osm-245335521-hotspot-severe-4",
        "name": "DLF Phase 3 Built-Up Stress Zone",
        "coordinates": {
          "lat": 28.49967620810809,
          "lng": 77.10101338430158
        },
        "radiusMeters": 1227,
        "averageTemperatureC": 33.6,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.5992724033507013,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 85,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 82,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Green Roofs",
            "score": 74,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-245335521-hotspot-severe-5",
        "name": "Sector 7 Green Deficit Region",
        "coordinates": {
          "lat": 28.4610816135135,
          "lng": 77.0132097580964
        },
        "radiusMeters": 1191,
        "averageTemperatureC": 33.5,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 77,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 66,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-severe-6",
        "name": "Sohna Green Deficit Region",
        "coordinates": {
          "lat": 28.40318972162161,
          "lng": 77.16686610395547
        },
        "radiusMeters": 1123,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 0.8,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 96,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 62,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-severe-7",
        "name": "Sector 56 Green Deficit Region",
        "coordinates": {
          "lat": 28.422487018918908,
          "lng": 77.12296429085288
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-severe-8",
        "name": "Sector 70A Green Deficit Region",
        "coordinates": {
          "lat": 28.36459512702702,
          "lng": 77.03516066464769
        },
        "radiusMeters": 1077,
        "averageTemperatureC": 32.9,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-severe-9",
        "name": "Sohna Green Deficit Region",
        "coordinates": {
          "lat": 28.30670323513513,
          "lng": 77.0132097580964
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-245335521-hotspot-severe-10",
        "name": "Sector 34 Green Deficit Region",
        "coordinates": {
          "lat": 28.422487018918908,
          "lng": 77.0132097580964
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1254136144.1523438,
      "vegetatedAreaSqMeters": 53611449.876953125,
      "waterAreaSqMeters": 16869578.359375,
      "buildingAreaSqMeters": 2526514.171875,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:15:52.500Z"
  },
  {
    "id": "osm-244638722",
    "name": "Chandigarh",
    "state": "Chandigarh",
    "country": "India",
    "displayName": "Chandigarh, 160018, India",
    "coordinates": {
      "lat": 30.7334421,
      "lng": 76.7797143
    },
    "boundingbox": [
      "30.5734421",
      "30.8934421",
      "76.6197143",
      "76.9397143"
    ],
    "greenCoverPercent": 1.03,
    "waterCoveragePercent": 49.66,
    "solarPotentialMw": 61,
    "carbonEstimateTonnes": 677771,
    "hotspots": [
      {
        "id": "osm-244638722-hotspot-critical-1",
        "name": "Sector 35 Built-Up Stress Zone",
        "coordinates": {
          "lat": 30.701752910810814,
          "lng": 76.74569980045572
        },
        "radiusMeters": 1280,
        "averageTemperatureC": 33.9,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.3852535454729018,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 88,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 85,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 78,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-244638722-hotspot-severe-1",
        "name": "Sector 22 Built-Up Stress Zone",
        "coordinates": {
          "lat": 30.73688804594595,
          "lng": 76.76613780065827
        },
        "radiusMeters": 1223,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 0,
          "buildingDensity": 1,
          "landUseHeat": 0.4,
          "vegetationProximity": 0,
          "waterProximity": 0.03377154117150438
        },
        "recommendations": [
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 85,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 82,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Green roofs are most useful where building density is high and ground-level planting space is limited."
      },
      {
        "id": "osm-244638722-hotspot-severe-2",
        "name": "Sector 35 Built-Up Stress Zone",
        "coordinates": {
          "lat": 30.710536694594598,
          "lng": 76.74569980045572
        },
        "radiusMeters": 1194,
        "averageTemperatureC": 33.5,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.6,
          "vegetationProximity": 0.7958763154215036,
          "waterProximity": 0.019923678078630935
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 87,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 80,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 76,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 70,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-244638722-hotspot-severe-3",
        "name": "Sector 35 Built-Up Stress Zone",
        "coordinates": {
          "lat": 30.73688804594595,
          "lng": 76.73548080035445
        },
        "radiusMeters": 1125,
        "averageTemperatureC": 33.1,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.6,
          "vegetationProximity": 0.9009165819216898,
          "waterProximity": 0.4432006174773486
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 87,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 80,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Tree Plantation",
            "score": 73,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      },
      {
        "id": "osm-244638722-hotspot-severe-4",
        "name": "Sector 8 Green Deficit Region",
        "coordinates": {
          "lat": 30.772023181081085,
          "lng": 76.79679480096209
        },
        "radiusMeters": 1101,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 54,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 53,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-244638722-hotspot-severe-5",
        "name": "Kambala Green Deficit Region",
        "coordinates": {
          "lat": 30.66661777567568,
          "lng": 76.73548080035445
        },
        "radiusMeters": 1095,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.6,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 64,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1088286233.328125,
      "vegetatedAreaSqMeters": 11157089.82421875,
      "waterAreaSqMeters": 540471444.3535156,
      "buildingAreaSqMeters": 1349501.341796875,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:16:17.153Z"
  },
  {
    "id": "osm-416344738",
    "name": "Patna",
    "state": "Bihar",
    "country": "India",
    "displayName": "Patna, Patna Rural, Patna, Bihar, India",
    "coordinates": {
      "lat": 25.6093239,
      "lng": 85.1235252
    },
    "boundingbox": [
      "25.5389546",
      "25.6510479",
      "85.0118412",
      "85.2641902"
    ],
    "boundary": [
      [
        {
          "lat": 25.6353061,
          "lng": 85.0118412
        },
        {
          "lat": 25.6349731,
          "lng": 85.0179795
        },
        {
          "lat": 25.6320191,
          "lng": 85.0178537
        },
        {
          "lat": 25.6325873,
          "lng": 85.020376
        },
        {
          "lat": 25.6304571,
          "lng": 85.022151
        },
        {
          "lat": 25.6268227,
          "lng": 85.0205239
        },
        {
          "lat": 25.6258396,
          "lng": 85.025364
        },
        {
          "lat": 25.6269629,
          "lng": 85.0251666
        },
        {
          "lat": 25.6276137,
          "lng": 85.0226925
        },
        {
          "lat": 25.629013,
          "lng": 85.0231309
        },
        {
          "lat": 25.6295636,
          "lng": 85.0261522
        },
        {
          "lat": 25.6243617,
          "lng": 85.0261946
        },
        {
          "lat": 25.6223239,
          "lng": 85.0326056
        },
        {
          "lat": 25.6169794,
          "lng": 85.0264447
        },
        {
          "lat": 25.6137323,
          "lng": 85.0248766
        },
        {
          "lat": 25.6151107,
          "lng": 85.0214586
        },
        {
          "lat": 25.6129982,
          "lng": 85.0209762
        },
        {
          "lat": 25.6122927,
          "lng": 85.0226327
        },
        {
          "lat": 25.6090354,
          "lng": 85.0199486
        },
        {
          "lat": 25.6092015,
          "lng": 85.0226163
        },
        {
          "lat": 25.6078129,
          "lng": 85.0230148
        },
        {
          "lat": 25.6101271,
          "lng": 85.0221685
        },
        {
          "lat": 25.6113127,
          "lng": 85.0244355
        },
        {
          "lat": 25.613305,
          "lng": 85.0252206
        },
        {
          "lat": 25.6104696,
          "lng": 85.029441
        },
        {
          "lat": 25.6128583,
          "lng": 85.0303257
        },
        {
          "lat": 25.6124464,
          "lng": 85.0278752
        },
        {
          "lat": 25.6138555,
          "lng": 85.027258
        },
        {
          "lat": 25.6151987,
          "lng": 85.0289993
        },
        {
          "lat": 25.6153709,
          "lng": 85.0326212
        },
        {
          "lat": 25.6167922,
          "lng": 85.0326974
        },
        {
          "lat": 25.6166855,
          "lng": 85.0348794
        },
        {
          "lat": 25.6160083,
          "lng": 85.0366213
        },
        {
          "lat": 25.6143112,
          "lng": 85.0346054
        },
        {
          "lat": 25.6094312,
          "lng": 85.0350279
        },
        {
          "lat": 25.6110185,
          "lng": 85.0396092
        },
        {
          "lat": 25.6086847,
          "lng": 85.037729
        },
        {
          "lat": 25.607688,
          "lng": 85.0386747
        },
        {
          "lat": 25.6094753,
          "lng": 85.041711
        },
        {
          "lat": 25.6084094,
          "lng": 85.0464079
        },
        {
          "lat": 25.6059439,
          "lng": 85.0463645
        },
        {
          "lat": 25.6056614,
          "lng": 85.0487557
        },
        {
          "lat": 25.6075316,
          "lng": 85.0505941
        },
        {
          "lat": 25.6073837,
          "lng": 85.0531713
        },
        {
          "lat": 25.6059744,
          "lng": 85.051202
        },
        {
          "lat": 25.6047123,
          "lng": 85.0515646
        },
        {
          "lat": 25.604893,
          "lng": 85.0528176
        },
        {
          "lat": 25.603196,
          "lng": 85.0519511
        },
        {
          "lat": 25.6020748,
          "lng": 85.0529938
        },
        {
          "lat": 25.6046364,
          "lng": 85.0573222
        },
        {
          "lat": 25.6041599,
          "lng": 85.0584883
        },
        {
          "lat": 25.6015474,
          "lng": 85.0578337
        },
        {
          "lat": 25.6017306,
          "lng": 85.0560568
        },
        {
          "lat": 25.598098,
          "lng": 85.0549049
        },
        {
          "lat": 25.5987274,
          "lng": 85.051076
        },
        {
          "lat": 25.5939055,
          "lng": 85.0550669
        },
        {
          "lat": 25.5924761,
          "lng": 85.0545617
        },
        {
          "lat": 25.5966413,
          "lng": 85.0501272
        },
        {
          "lat": 25.5949652,
          "lng": 85.0510237
        },
        {
          "lat": 25.588288,
          "lng": 85.0489043
        },
        {
          "lat": 25.5899147,
          "lng": 85.0512562
        },
        {
          "lat": 25.5887803,
          "lng": 85.0513162
        },
        {
          "lat": 25.5887371,
          "lng": 85.0534108
        },
        {
          "lat": 25.5874007,
          "lng": 85.0533256
        },
        {
          "lat": 25.5870095,
          "lng": 85.0482059
        },
        {
          "lat": 25.5892821,
          "lng": 85.048631
        },
        {
          "lat": 25.5896097,
          "lng": 85.0471118
        },
        {
          "lat": 25.5946362,
          "lng": 85.0467008
        },
        {
          "lat": 25.5969281,
          "lng": 85.0434592
        },
        {
          "lat": 25.5948192,
          "lng": 85.040972
        },
        {
          "lat": 25.591492,
          "lng": 85.0415814
        },
        {
          "lat": 25.5884195,
          "lng": 85.0403042
        },
        {
          "lat": 25.5884211,
          "lng": 85.0385699
        },
        {
          "lat": 25.5871566,
          "lng": 85.0381845
        },
        {
          "lat": 25.5879386,
          "lng": 85.0344712
        },
        {
          "lat": 25.5942079,
          "lng": 85.0358752
        },
        {
          "lat": 25.5948047,
          "lng": 85.0334519
        },
        {
          "lat": 25.5933562,
          "lng": 85.0322471
        },
        {
          "lat": 25.5911675,
          "lng": 85.0326751
        },
        {
          "lat": 25.5886929,
          "lng": 85.0283237
        },
        {
          "lat": 25.5809629,
          "lng": 85.027816
        },
        {
          "lat": 25.5810864,
          "lng": 85.0337361
        },
        {
          "lat": 25.5773802,
          "lng": 85.0332525
        },
        {
          "lat": 25.5767681,
          "lng": 85.0372447
        },
        {
          "lat": 25.5725128,
          "lng": 85.0339552
        },
        {
          "lat": 25.5709862,
          "lng": 85.0370387
        },
        {
          "lat": 25.5698263,
          "lng": 85.0356035
        },
        {
          "lat": 25.5710076,
          "lng": 85.0379723
        },
        {
          "lat": 25.5750106,
          "lng": 85.0386274
        },
        {
          "lat": 25.5760223,
          "lng": 85.0412327
        },
        {
          "lat": 25.5746102,
          "lng": 85.0425991
        },
        {
          "lat": 25.5747968,
          "lng": 85.0407743
        },
        {
          "lat": 25.5737772,
          "lng": 85.0407393
        },
        {
          "lat": 25.5752137,
          "lng": 85.0398138
        },
        {
          "lat": 25.5736326,
          "lng": 85.038483
        },
        {
          "lat": 25.5731006,
          "lng": 85.0394073
        },
        {
          "lat": 25.5730495,
          "lng": 85.0383686
        },
        {
          "lat": 25.571942,
          "lng": 85.0399504
        },
        {
          "lat": 25.5707427,
          "lng": 85.0380929
        },
        {
          "lat": 25.5696541,
          "lng": 85.0392257
        },
        {
          "lat": 25.5705541,
          "lng": 85.0384619
        },
        {
          "lat": 25.5693967,
          "lng": 85.038588
        },
        {
          "lat": 25.5685238,
          "lng": 85.0359629
        },
        {
          "lat": 25.569317,
          "lng": 85.0379633
        },
        {
          "lat": 25.5682416,
          "lng": 85.0399908
        },
        {
          "lat": 25.5673035,
          "lng": 85.0400328
        },
        {
          "lat": 25.5683767,
          "lng": 85.038599
        },
        {
          "lat": 25.5667181,
          "lng": 85.0362559
        },
        {
          "lat": 25.5666836,
          "lng": 85.0379767
        },
        {
          "lat": 25.5651859,
          "lng": 85.0371805
        },
        {
          "lat": 25.5638855,
          "lng": 85.0381997
        },
        {
          "lat": 25.5646794,
          "lng": 85.0366786
        },
        {
          "lat": 25.5615535,
          "lng": 85.0339745
        },
        {
          "lat": 25.5622176,
          "lng": 85.0328476
        },
        {
          "lat": 25.5636754,
          "lng": 85.0338096
        },
        {
          "lat": 25.5634647,
          "lng": 85.0324989
        },
        {
          "lat": 25.5615527,
          "lng": 85.0320526
        },
        {
          "lat": 25.5610136,
          "lng": 85.0343805
        },
        {
          "lat": 25.5596836,
          "lng": 85.0329941
        },
        {
          "lat": 25.5590861,
          "lng": 85.0339304
        },
        {
          "lat": 25.5729837,
          "lng": 85.0456649
        },
        {
          "lat": 25.5742684,
          "lng": 85.0445104
        },
        {
          "lat": 25.5772688,
          "lng": 85.0466875
        },
        {
          "lat": 25.5763128,
          "lng": 85.049583
        },
        {
          "lat": 25.5750607,
          "lng": 85.0493754
        },
        {
          "lat": 25.5704401,
          "lng": 85.0445359
        },
        {
          "lat": 25.5643298,
          "lng": 85.0408256
        },
        {
          "lat": 25.5622677,
          "lng": 85.0445031
        },
        {
          "lat": 25.5605804,
          "lng": 85.0445468
        },
        {
          "lat": 25.5605994,
          "lng": 85.0473943
        },
        {
          "lat": 25.5625473,
          "lng": 85.0487375
        },
        {
          "lat": 25.5607737,
          "lng": 85.0486826
        },
        {
          "lat": 25.560431,
          "lng": 85.0498745
        },
        {
          "lat": 25.5601304,
          "lng": 85.0488308
        },
        {
          "lat": 25.5594573,
          "lng": 85.0506949
        },
        {
          "lat": 25.5625917,
          "lng": 85.0519308
        },
        {
          "lat": 25.5632443,
          "lng": 85.0506497
        },
        {
          "lat": 25.5621986,
          "lng": 85.0489605
        },
        {
          "lat": 25.5643953,
          "lng": 85.0510807
        },
        {
          "lat": 25.5653846,
          "lng": 85.0502628
        },
        {
          "lat": 25.5645292,
          "lng": 85.0486773
        },
        {
          "lat": 25.5624203,
          "lng": 85.0474267
        },
        {
          "lat": 25.564139,
          "lng": 85.047315
        },
        {
          "lat": 25.566103,
          "lng": 85.0490024
        },
        {
          "lat": 25.5674652,
          "lng": 85.0529641
        },
        {
          "lat": 25.5687031,
          "lng": 85.0518788
        },
        {
          "lat": 25.5673132,
          "lng": 85.0518249
        },
        {
          "lat": 25.5673779,
          "lng": 85.0503206
        },
        {
          "lat": 25.5693856,
          "lng": 85.0527254
        },
        {
          "lat": 25.5683621,
          "lng": 85.0529879
        },
        {
          "lat": 25.5685901,
          "lng": 85.0544504
        },
        {
          "lat": 25.566346,
          "lng": 85.0523348
        },
        {
          "lat": 25.5654634,
          "lng": 85.0549816
        },
        {
          "lat": 25.5635533,
          "lng": 85.0548387
        },
        {
          "lat": 25.564687,
          "lng": 85.0554715
        },
        {
          "lat": 25.5631547,
          "lng": 85.055922
        },
        {
          "lat": 25.5642167,
          "lng": 85.0564502
        },
        {
          "lat": 25.5634654,
          "lng": 85.0569198
        },
        {
          "lat": 25.5661129,
          "lng": 85.0572349
        },
        {
          "lat": 25.5660798,
          "lng": 85.0595304
        },
        {
          "lat": 25.5677075,
          "lng": 85.0596743
        },
        {
          "lat": 25.5673078,
          "lng": 85.0614355
        },
        {
          "lat": 25.5666836,
          "lng": 85.0603001
        },
        {
          "lat": 25.5655737,
          "lng": 85.0619848
        },
        {
          "lat": 25.5647728,
          "lng": 85.0605372
        },
        {
          "lat": 25.5644112,
          "lng": 85.0622976
        },
        {
          "lat": 25.5653558,
          "lng": 85.0631202
        },
        {
          "lat": 25.5658504,
          "lng": 85.062201
        },
        {
          "lat": 25.5660729,
          "lng": 85.0633913
        },
        {
          "lat": 25.5658315,
          "lng": 85.0646164
        },
        {
          "lat": 25.565212,
          "lng": 85.0637226
        },
        {
          "lat": 25.564223,
          "lng": 85.0647809
        },
        {
          "lat": 25.5657235,
          "lng": 85.065125
        },
        {
          "lat": 25.5656131,
          "lng": 85.0664051
        },
        {
          "lat": 25.5645089,
          "lng": 85.0651853
        },
        {
          "lat": 25.5636612,
          "lng": 85.0672194
        },
        {
          "lat": 25.5619799,
          "lng": 85.0670682
        },
        {
          "lat": 25.5626513,
          "lng": 85.0680573
        },
        {
          "lat": 25.565666,
          "lng": 85.0670866
        },
        {
          "lat": 25.5663405,
          "lng": 85.0707595
        },
        {
          "lat": 25.5646194,
          "lng": 85.0719813
        },
        {
          "lat": 25.5662457,
          "lng": 85.0737301
        },
        {
          "lat": 25.5670072,
          "lng": 85.0698906
        },
        {
          "lat": 25.5682756,
          "lng": 85.070974
        },
        {
          "lat": 25.5673425,
          "lng": 85.0721015
        },
        {
          "lat": 25.5682381,
          "lng": 85.0737794
        },
        {
          "lat": 25.5672462,
          "lng": 85.074178
        },
        {
          "lat": 25.5681631,
          "lng": 85.0760551
        },
        {
          "lat": 25.567271,
          "lng": 85.0774662
        },
        {
          "lat": 25.5660785,
          "lng": 85.0765085
        },
        {
          "lat": 25.566577,
          "lng": 85.0786944
        },
        {
          "lat": 25.5655048,
          "lng": 85.0779296
        },
        {
          "lat": 25.5655574,
          "lng": 85.0796887
        },
        {
          "lat": 25.5613304,
          "lng": 85.0760542
        },
        {
          "lat": 25.5611226,
          "lng": 85.0795743
        },
        {
          "lat": 25.5588505,
          "lng": 85.0803622
        },
        {
          "lat": 25.5588902,
          "lng": 85.086687
        },
        {
          "lat": 25.5603942,
          "lng": 85.0881558
        },
        {
          "lat": 25.5631863,
          "lng": 85.0832089
        },
        {
          "lat": 25.5640899,
          "lng": 85.0859906
        },
        {
          "lat": 25.5649738,
          "lng": 85.0863212
        },
        {
          "lat": 25.5649099,
          "lng": 85.0844988
        },
        {
          "lat": 25.5653372,
          "lng": 85.0860747
        },
        {
          "lat": 25.5660244,
          "lng": 85.0848675
        },
        {
          "lat": 25.5656225,
          "lng": 85.0864396
        },
        {
          "lat": 25.5665087,
          "lng": 85.0849633
        },
        {
          "lat": 25.5669103,
          "lng": 85.0868059
        },
        {
          "lat": 25.567822,
          "lng": 85.0863752
        },
        {
          "lat": 25.5654598,
          "lng": 85.0890706
        },
        {
          "lat": 25.5680072,
          "lng": 85.0909175
        },
        {
          "lat": 25.5670271,
          "lng": 85.0941323
        },
        {
          "lat": 25.566514,
          "lng": 85.0953994
        },
        {
          "lat": 25.5651954,
          "lng": 85.0949729
        },
        {
          "lat": 25.5630649,
          "lng": 85.0988496
        },
        {
          "lat": 25.5638186,
          "lng": 85.1005664
        },
        {
          "lat": 25.5657294,
          "lng": 85.1000054
        },
        {
          "lat": 25.5644976,
          "lng": 85.1031319
        },
        {
          "lat": 25.5632204,
          "lng": 85.1020672
        },
        {
          "lat": 25.5650523,
          "lng": 85.1054461
        },
        {
          "lat": 25.5703398,
          "lng": 85.1066842
        },
        {
          "lat": 25.5712241,
          "lng": 85.1058832
        },
        {
          "lat": 25.5700394,
          "lng": 85.1105195
        },
        {
          "lat": 25.5719591,
          "lng": 85.1114438
        },
        {
          "lat": 25.5718418,
          "lng": 85.1086265
        },
        {
          "lat": 25.5738623,
          "lng": 85.1116319
        },
        {
          "lat": 25.5720293,
          "lng": 85.112363
        },
        {
          "lat": 25.574995,
          "lng": 85.1133391
        },
        {
          "lat": 25.5737371,
          "lng": 85.1145899
        },
        {
          "lat": 25.5729387,
          "lng": 85.1133078
        },
        {
          "lat": 25.570054,
          "lng": 85.1144429
        },
        {
          "lat": 25.5711654,
          "lng": 85.11488
        },
        {
          "lat": 25.5713115,
          "lng": 85.1175818
        },
        {
          "lat": 25.5736461,
          "lng": 85.1172751
        },
        {
          "lat": 25.571393,
          "lng": 85.1210113
        },
        {
          "lat": 25.5719936,
          "lng": 85.1235321
        },
        {
          "lat": 25.5694885,
          "lng": 85.1233698
        },
        {
          "lat": 25.5699299,
          "lng": 85.1211649
        },
        {
          "lat": 25.5683504,
          "lng": 85.120879
        },
        {
          "lat": 25.5646316,
          "lng": 85.1229427
        },
        {
          "lat": 25.5642357,
          "lng": 85.1180444
        },
        {
          "lat": 25.5651041,
          "lng": 85.1180019
        },
        {
          "lat": 25.5636738,
          "lng": 85.1165721
        },
        {
          "lat": 25.5616687,
          "lng": 85.1198989
        },
        {
          "lat": 25.5605193,
          "lng": 85.1175631
        },
        {
          "lat": 25.5582333,
          "lng": 85.1195733
        },
        {
          "lat": 25.5496647,
          "lng": 85.1162324
        },
        {
          "lat": 25.5500106,
          "lng": 85.1150394
        },
        {
          "lat": 25.5427404,
          "lng": 85.1160908
        },
        {
          "lat": 25.5409138,
          "lng": 85.1135426
        },
        {
          "lat": 25.5389546,
          "lng": 85.1228896
        },
        {
          "lat": 25.5404556,
          "lng": 85.1227981
        },
        {
          "lat": 25.5412734,
          "lng": 85.1190257
        },
        {
          "lat": 25.543775,
          "lng": 85.119545
        },
        {
          "lat": 25.5442349,
          "lng": 85.1184266
        },
        {
          "lat": 25.5488461,
          "lng": 85.1212016
        },
        {
          "lat": 25.548861,
          "lng": 85.126279
        },
        {
          "lat": 25.5522049,
          "lng": 85.1251679
        },
        {
          "lat": 25.5530735,
          "lng": 85.1222773
        },
        {
          "lat": 25.557216,
          "lng": 85.1241243
        },
        {
          "lat": 25.5568319,
          "lng": 85.1219258
        },
        {
          "lat": 25.559232,
          "lng": 85.1226435
        },
        {
          "lat": 25.5577977,
          "lng": 85.122476
        },
        {
          "lat": 25.5590923,
          "lng": 85.1238087
        },
        {
          "lat": 25.5583556,
          "lng": 85.1246173
        },
        {
          "lat": 25.5522813,
          "lng": 85.1255926
        },
        {
          "lat": 25.5543881,
          "lng": 85.1285361
        },
        {
          "lat": 25.5578118,
          "lng": 85.1288744
        },
        {
          "lat": 25.5561643,
          "lng": 85.1293274
        },
        {
          "lat": 25.5562111,
          "lng": 85.130998
        },
        {
          "lat": 25.5549642,
          "lng": 85.1300282
        },
        {
          "lat": 25.5557379,
          "lng": 85.1315237
        },
        {
          "lat": 25.5531456,
          "lng": 85.1348816
        },
        {
          "lat": 25.5535407,
          "lng": 85.1362946
        },
        {
          "lat": 25.5554393,
          "lng": 85.1363438
        },
        {
          "lat": 25.5569335,
          "lng": 85.1336129
        },
        {
          "lat": 25.5576501,
          "lng": 85.1350091
        },
        {
          "lat": 25.5591783,
          "lng": 85.1307997
        },
        {
          "lat": 25.5614995,
          "lng": 85.1318156
        },
        {
          "lat": 25.5603148,
          "lng": 85.1331384
        },
        {
          "lat": 25.5632887,
          "lng": 85.1326862
        },
        {
          "lat": 25.5612709,
          "lng": 85.1301051
        },
        {
          "lat": 25.5617057,
          "lng": 85.1282851
        },
        {
          "lat": 25.5625419,
          "lng": 85.1299869
        },
        {
          "lat": 25.5648106,
          "lng": 85.1307248
        },
        {
          "lat": 25.5657655,
          "lng": 85.1292045
        },
        {
          "lat": 25.5634942,
          "lng": 85.1292374
        },
        {
          "lat": 25.5632584,
          "lng": 85.1281992
        },
        {
          "lat": 25.5668066,
          "lng": 85.1277179
        },
        {
          "lat": 25.5665071,
          "lng": 85.1303777
        },
        {
          "lat": 25.5677153,
          "lng": 85.1294343
        },
        {
          "lat": 25.5681266,
          "lng": 85.1304008
        },
        {
          "lat": 25.5672606,
          "lng": 85.1346485
        },
        {
          "lat": 25.5689922,
          "lng": 85.1352662
        },
        {
          "lat": 25.5640855,
          "lng": 85.1353893
        },
        {
          "lat": 25.5653923,
          "lng": 85.1409916
        },
        {
          "lat": 25.5644553,
          "lng": 85.1428655
        },
        {
          "lat": 25.5717621,
          "lng": 85.1448901
        },
        {
          "lat": 25.573137,
          "lng": 85.1497618
        },
        {
          "lat": 25.5632126,
          "lng": 85.1512724
        },
        {
          "lat": 25.5611352,
          "lng": 85.1530732
        },
        {
          "lat": 25.56331,
          "lng": 85.1627271
        },
        {
          "lat": 25.5642753,
          "lng": 85.1628835
        },
        {
          "lat": 25.5635127,
          "lng": 85.1640083
        },
        {
          "lat": 25.5687779,
          "lng": 85.1627376
        },
        {
          "lat": 25.5683179,
          "lng": 85.1642957
        },
        {
          "lat": 25.56986,
          "lng": 85.1643374
        },
        {
          "lat": 25.5705064,
          "lng": 85.1625345
        },
        {
          "lat": 25.5701405,
          "lng": 85.1643526
        },
        {
          "lat": 25.572038,
          "lng": 85.1650183
        },
        {
          "lat": 25.5713614,
          "lng": 85.1661483
        },
        {
          "lat": 25.5724444,
          "lng": 85.1668034
        },
        {
          "lat": 25.5729553,
          "lng": 85.1653068
        },
        {
          "lat": 25.5728272,
          "lng": 85.17344
        },
        {
          "lat": 25.5759173,
          "lng": 85.1690361
        },
        {
          "lat": 25.5781783,
          "lng": 85.1697941
        },
        {
          "lat": 25.5772986,
          "lng": 85.1717312
        },
        {
          "lat": 25.5783622,
          "lng": 85.1717917
        },
        {
          "lat": 25.5785502,
          "lng": 85.1685692
        },
        {
          "lat": 25.5798404,
          "lng": 85.1695628
        },
        {
          "lat": 25.580974,
          "lng": 85.166706
        },
        {
          "lat": 25.5808729,
          "lng": 85.1689322
        },
        {
          "lat": 25.5822131,
          "lng": 85.169267
        },
        {
          "lat": 25.582107,
          "lng": 85.1711572
        },
        {
          "lat": 25.5792405,
          "lng": 85.17035
        },
        {
          "lat": 25.5791338,
          "lng": 85.1713794
        },
        {
          "lat": 25.5828155,
          "lng": 85.1734127
        },
        {
          "lat": 25.578747,
          "lng": 85.1724581
        },
        {
          "lat": 25.5783097,
          "lng": 85.1744207
        },
        {
          "lat": 25.5787819,
          "lng": 85.1733469
        },
        {
          "lat": 25.5811359,
          "lng": 85.1737931
        },
        {
          "lat": 25.5781844,
          "lng": 85.1763941
        },
        {
          "lat": 25.5768079,
          "lng": 85.1760141
        },
        {
          "lat": 25.5762252,
          "lng": 85.1786264
        },
        {
          "lat": 25.5757173,
          "lng": 85.1770992
        },
        {
          "lat": 25.575394,
          "lng": 85.1786459
        },
        {
          "lat": 25.5734176,
          "lng": 85.1778732
        },
        {
          "lat": 25.5748362,
          "lng": 85.1745469
        },
        {
          "lat": 25.5731294,
          "lng": 85.1745551
        },
        {
          "lat": 25.5722032,
          "lng": 85.1797134
        },
        {
          "lat": 25.5741252,
          "lng": 85.1795834
        },
        {
          "lat": 25.5732666,
          "lng": 85.1839977
        },
        {
          "lat": 25.5742766,
          "lng": 85.1828966
        },
        {
          "lat": 25.5741452,
          "lng": 85.1842792
        },
        {
          "lat": 25.5770158,
          "lng": 85.1839619
        },
        {
          "lat": 25.5761059,
          "lng": 85.184653
        },
        {
          "lat": 25.577514,
          "lng": 85.1853517
        },
        {
          "lat": 25.57651,
          "lng": 85.1896164
        },
        {
          "lat": 25.5807509,
          "lng": 85.1914734
        },
        {
          "lat": 25.5786769,
          "lng": 85.191908
        },
        {
          "lat": 25.579077,
          "lng": 85.1965046
        },
        {
          "lat": 25.5804383,
          "lng": 85.1965432
        },
        {
          "lat": 25.5809236,
          "lng": 85.1918892
        },
        {
          "lat": 25.5821603,
          "lng": 85.1948924
        },
        {
          "lat": 25.5836473,
          "lng": 85.1937429
        },
        {
          "lat": 25.5832228,
          "lng": 85.1967867
        },
        {
          "lat": 25.5843999,
          "lng": 85.1950297
        },
        {
          "lat": 25.5834028,
          "lng": 85.2049511
        },
        {
          "lat": 25.5817409,
          "lng": 85.2055624
        },
        {
          "lat": 25.5811291,
          "lng": 85.2137124
        },
        {
          "lat": 25.5765677,
          "lng": 85.2276237
        },
        {
          "lat": 25.5791775,
          "lng": 85.228945
        },
        {
          "lat": 25.5783497,
          "lng": 85.2306715
        },
        {
          "lat": 25.5794571,
          "lng": 85.2318059
        },
        {
          "lat": 25.5766639,
          "lng": 85.2310339
        },
        {
          "lat": 25.5761662,
          "lng": 85.2280751
        },
        {
          "lat": 25.5751242,
          "lng": 85.2306024
        },
        {
          "lat": 25.5728895,
          "lng": 85.2298703
        },
        {
          "lat": 25.5725994,
          "lng": 85.2309069
        },
        {
          "lat": 25.5739705,
          "lng": 85.2314987
        },
        {
          "lat": 25.5723485,
          "lng": 85.2336824
        },
        {
          "lat": 25.5756692,
          "lng": 85.234133
        },
        {
          "lat": 25.5766905,
          "lng": 85.2356863
        },
        {
          "lat": 25.5781107,
          "lng": 85.2323731
        },
        {
          "lat": 25.5812683,
          "lng": 85.2342583
        },
        {
          "lat": 25.5774818,
          "lng": 85.240298
        },
        {
          "lat": 25.5789938,
          "lng": 85.242446
        },
        {
          "lat": 25.5718285,
          "lng": 85.2556238
        },
        {
          "lat": 25.5673341,
          "lng": 85.2601769
        },
        {
          "lat": 25.5698946,
          "lng": 85.2641902
        },
        {
          "lat": 25.5826186,
          "lng": 85.2524665
        },
        {
          "lat": 25.5938843,
          "lng": 85.2394176
        },
        {
          "lat": 25.5941683,
          "lng": 85.2419018
        },
        {
          "lat": 25.6005922,
          "lng": 85.232374
        },
        {
          "lat": 25.6017574,
          "lng": 85.2280834
        },
        {
          "lat": 25.6008442,
          "lng": 85.2266306
        },
        {
          "lat": 25.6026192,
          "lng": 85.2254502
        },
        {
          "lat": 25.6024818,
          "lng": 85.2231957
        },
        {
          "lat": 25.603639,
          "lng": 85.2238087
        },
        {
          "lat": 25.6138407,
          "lng": 85.2024602
        },
        {
          "lat": 25.6192323,
          "lng": 85.18578
        },
        {
          "lat": 25.6218168,
          "lng": 85.1721271
        },
        {
          "lat": 25.6227852,
          "lng": 85.1478303
        },
        {
          "lat": 25.6219381,
          "lng": 85.1355228
        },
        {
          "lat": 25.6304267,
          "lng": 85.1195475
        },
        {
          "lat": 25.6340639,
          "lng": 85.1155574
        },
        {
          "lat": 25.6354153,
          "lng": 85.1167472
        },
        {
          "lat": 25.6393561,
          "lng": 85.112273
        },
        {
          "lat": 25.6384017,
          "lng": 85.1110713
        },
        {
          "lat": 25.6497146,
          "lng": 85.096017
        },
        {
          "lat": 25.6496409,
          "lng": 85.0946069
        },
        {
          "lat": 25.6457741,
          "lng": 85.0942701
        },
        {
          "lat": 25.6461305,
          "lng": 85.0921004
        },
        {
          "lat": 25.6510479,
          "lng": 85.0896839
        },
        {
          "lat": 25.6501894,
          "lng": 85.0746874
        },
        {
          "lat": 25.6480672,
          "lng": 85.0662692
        },
        {
          "lat": 25.6406566,
          "lng": 85.0485337
        },
        {
          "lat": 25.6375963,
          "lng": 85.0242693
        },
        {
          "lat": 25.6386178,
          "lng": 85.0123083
        },
        {
          "lat": 25.6353061,
          "lng": 85.0118412
        }
      ]
    ],
    "greenCoverPercent": 0.82,
    "waterCoveragePercent": 17.16,
    "solarPotentialMw": 47,
    "carbonEstimateTonnes": 522217,
    "hotspots": [
      {
        "id": "osm-416344738-hotspot-critical-1",
        "name": "Khagaul Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.582873518918927,
          "lng": 85.04555896440256
        },
        "radiusMeters": 1301,
        "averageTemperatureC": 34,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.8,
          "vegetationProximity": 0.11022981557307132,
          "waterProximity": 0.8362938937292355
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 97,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 90,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 85,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 84,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-critical-2",
        "name": "Patliputra Colony Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.630170816216232,
          "lng": 85.11299449320765
        },
        "radiusMeters": 1301,
        "averageTemperatureC": 34,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.39572320312549236
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-critical-3",
        "name": "Boring Road Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.616657302702716,
          "lng": 85.11299449320765
        },
        "radiusMeters": 1283,
        "averageTemperatureC": 33.9,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.5807777952406333
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 86,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-1",
        "name": "Bailey Road Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.616657302702716,
          "lng": 85.09800882013985
        },
        "radiusMeters": 1236,
        "averageTemperatureC": 33.7,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.4196412129657928,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 78,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-2",
        "name": "Boring Road Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.623414059459474,
          "lng": 85.12048732974155
        },
        "radiusMeters": 1216,
        "averageTemperatureC": 33.6,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.14257065629318388,
          "waterProximity": 0.8947830356757737
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 96,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 83,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-3",
        "name": "Patliputra Colony Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.630170816216232,
          "lng": 85.10550165667375
        },
        "radiusMeters": 1204,
        "averageTemperatureC": 33.5,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.44221094242502235,
          "waterProximity": 0.44046774577127046
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 82,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 77,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 71,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-4",
        "name": "Khagaul Green Deficit Region",
        "coordinates": {
          "lat": 25.589630275675685,
          "lng": 85.04555896440256
        },
        "radiusMeters": 1177,
        "averageTemperatureC": 33.4,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0.7345089056187109
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 80,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Solar Deployment",
            "score": 73,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-5",
        "name": "Kankarbagh High Density Corridor",
        "coordinates": {
          "lat": 25.616657302702716,
          "lng": 85.16544434894494
        },
        "radiusMeters": 1175,
        "averageTemperatureC": 33.4,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.7333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0.19823264399147011,
          "waterProximity": 0.3642713582059868
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 94,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 76,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 71,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 62,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-6",
        "name": "Khagaul Green Deficit Region",
        "coordinates": {
          "lat": 25.57611676216217,
          "lng": 85.04555896440256
        },
        "radiusMeters": 1097,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.834980162629411
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 73,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 63,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 57,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-7",
        "name": "Patliputra Colony Green Deficit Region",
        "coordinates": {
          "lat": 25.643684329729748,
          "lng": 85.08302314707205
        },
        "radiusMeters": 1082,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 0.9,
          "buildingDensity": 0.2,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.035944431995623916
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 98,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 54,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 53,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-416344738-hotspot-severe-8",
        "name": "Kankarbagh Built-Up Stress Zone",
        "coordinates": {
          "lat": 25.6031437891892,
          "lng": 85.13547300280935
        },
        "radiusMeters": 1058,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 1,
          "landUseHeat": 0,
          "vegetationProximity": 0.8350566508764442,
          "waterProximity": 0.7415303342881474
        },
        "recommendations": [
          {
            "name": "Solar Deployment",
            "score": 80,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Tree Plantation",
            "score": 75,
            "rationale": "Tree planting can reinforce existing canopy and reduce pedestrian heat exposure."
          },
          {
            "name": "Green Roofs",
            "score": 69,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 66,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Dense building footprints indicate stronger rooftop solar deployment potential."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 136302107.15429688,
      "vegetatedAreaSqMeters": 1112075.763671875,
      "waterAreaSqMeters": 23383082.080078125,
      "buildingAreaSqMeters": 1055520.87109375,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:16:55.144Z"
  },
  {
    "id": "osm-247080700",
    "name": "Bhopal",
    "state": "Madhya Pradesh",
    "country": "India",
    "displayName": "Bhopal, Huzur Tahsil, Bhopal, Madhya Pradesh, 462001, India",
    "coordinates": {
      "lat": 23.2584857,
      "lng": 77.401989
    },
    "boundingbox": [
      "23.0984857",
      "23.4184857",
      "77.2419890",
      "77.5619890"
    ],
    "greenCoverPercent": 0.72,
    "waterCoveragePercent": 9.5,
    "solarPotentialMw": 52,
    "carbonEstimateTonnes": 577772,
    "hotspots": [
      {
        "id": "osm-247080700-hotspot-severe-1",
        "name": "Ibrahimpura Green Deficit Region",
        "coordinates": {
          "lat": 23.287008222522523,
          "lng": 77.40280929653309
        },
        "radiusMeters": 1096,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.3333333333333333,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.6285436552766541
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 70,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 61,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247080700-hotspot-severe-2",
        "name": "TT Nagar Green Deficit Region",
        "coordinates": {
          "lat": 23.218467681981984,
          "lng": 77.37794151298445
        },
        "radiusMeters": 1093,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0.8578932137355251
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 63,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 61,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247080700-hotspot-severe-3",
        "name": "TT Nagar Green Deficit Region",
        "coordinates": {
          "lat": 23.24131452882883,
          "lng": 77.37794151298445
        },
        "radiusMeters": 1081,
        "averageTemperatureC": 32.9,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 52,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 52,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247080700-hotspot-severe-4",
        "name": "Bairagarh Green Deficit Region",
        "coordinates": {
          "lat": 23.298431645945946,
          "lng": 77.34063983766148
        },
        "radiusMeters": 1079,
        "averageTemperatureC": 32.9,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 56,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247080700-hotspot-severe-5",
        "name": "MP Nagar Green Deficit Region",
        "coordinates": {
          "lat": 23.24131452882883,
          "lng": 77.42767708008174
        },
        "radiusMeters": 1074,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.26666666666666666,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0.4711414745904545
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 68,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 57,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 54,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-247080700-hotspot-severe-6",
        "name": "MP Nagar High Density Corridor",
        "coordinates": {
          "lat": 23.218467681981984,
          "lng": 77.41524318830741
        },
        "radiusMeters": 1073,
        "averageTemperatureC": 32.9,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "General heat mitigation and canopy restoration.",
        "recommendedAction": "Tree Plantation (Estimated 0.3°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.6666666666666666,
          "landUseHeat": 0,
          "vegetationProximity": 0.4376545361457127,
          "waterProximity": 0.5798538876425603
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 87,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 69,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Green Roofs",
            "score": 69,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 61,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1163212589.2421875,
      "vegetatedAreaSqMeters": 8406958.7421875,
      "waterAreaSqMeters": 110525307.67382812,
      "buildingAreaSqMeters": 1162150.7109375,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:17:50.987Z"
  },
  {
    "id": "osm-248799208",
    "name": "Indore",
    "state": "Madhya Pradesh",
    "country": "India",
    "displayName": "Indore, Juni Indore Tahsil, Indore, Madhya Pradesh, 452001, India",
    "coordinates": {
      "lat": 22.7203616,
      "lng": 75.8681996
    },
    "boundingbox": [
      "22.5603616",
      "22.8803616",
      "75.7081996",
      "76.0281996"
    ],
    "greenCoverPercent": 50.63,
    "waterCoveragePercent": 17.51,
    "solarPotentialMw": 42,
    "carbonEstimateTonnes": 466662,
    "hotspots": [
      {
        "id": "osm-248799208-hotspot-severe-1",
        "name": "Palasia Green Deficit Region",
        "coordinates": {
          "lat": 22.714613852252253,
          "lng": 75.86869849492811
        },
        "radiusMeters": 1151,
        "averageTemperatureC": 33.3,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0.1965284100437763
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 64,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248799208-hotspot-severe-2",
        "name": "Palasia Green Deficit Region",
        "coordinates": {
          "lat": 22.7374606990991,
          "lng": 75.85631404955456
        },
        "radiusMeters": 1095,
        "averageTemperatureC": 33,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.6,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 64,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 55,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248799208-hotspot-severe-3",
        "name": "Vijay Nagar Green Deficit Region",
        "coordinates": {
          "lat": 22.760307545945945,
          "lng": 75.85631404955456
        },
        "radiusMeters": 1094,
        "averageTemperatureC": 33,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 1,
          "vegetationProximity": 0,
          "waterProximity": 0.3631151882418667
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 74,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 60,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248799208-hotspot-severe-4",
        "name": "Vijay Nagar High Density Corridor",
        "coordinates": {
          "lat": 22.748884122522522,
          "lng": 75.90585183104878
        },
        "radiusMeters": 1086,
        "averageTemperatureC": 32.9,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.26666666666666666,
          "landUseHeat": 0.2,
          "vegetationProximity": 0.15336922387214602,
          "waterProximity": 0.14171039254168738
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 95,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 59,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 59,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248799208-hotspot-severe-5",
        "name": "Vijay Nagar High Density Corridor",
        "coordinates": {
          "lat": 22.78315439279279,
          "lng": 75.88108294030167
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.4,
          "vegetationProximity": 0.0616205134063772,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 98,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 61,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 60,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 53,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248799208-hotspot-severe-6",
        "name": "Palasia Green Deficit Region",
        "coordinates": {
          "lat": 22.691767005405406,
          "lng": 75.88108294030167
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-248799208-hotspot-severe-7",
        "name": "Indore City Green Deficit Region",
        "coordinates": {
          "lat": 22.78315439279279,
          "lng": 75.843929604181
        },
        "radiusMeters": 1059,
        "averageTemperatureC": 32.8,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 62,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 55,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1167856856.640625,
      "vegetatedAreaSqMeters": 591305561.078125,
      "waterAreaSqMeters": 204434966.89453125,
      "buildingAreaSqMeters": 927619.4921875,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:18:26.141Z"
  },
  {
    "id": "osm-243120132",
    "name": "Lucknow",
    "state": "Uttar Pradesh",
    "country": "India",
    "displayName": "Lucknow, Uttar Pradesh, 226027, India",
    "coordinates": {
      "lat": 26.8381,
      "lng": 80.9346001
    },
    "boundingbox": [
      "26.6781000",
      "26.9981000",
      "80.7746001",
      "81.0946001"
    ],
    "greenCoverPercent": 2.81,
    "waterCoveragePercent": 33.47,
    "solarPotentialMw": 67,
    "carbonEstimateTonnes": 744437,
    "hotspots": [
      {
        "id": "osm-243120132-hotspot-severe-1",
        "name": "Aminabad Green Deficit Region",
        "coordinates": {
          "lat": 26.82397837837838,
          "lng": 80.90874285421907
        },
        "radiusMeters": 1208,
        "averageTemperatureC": 33.5,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.4,
          "landUseHeat": 0.8,
          "vegetationProximity": 0,
          "waterProximity": 0.24876357934441662
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Reflective Roofing",
            "score": 76,
            "rationale": "Commercial, industrial, or dense residential land use favors cool-roof retrofits."
          },
          {
            "name": "Green Roofs",
            "score": 72,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 70,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243120132-hotspot-severe-2",
        "name": "Aminabad Green Deficit Region",
        "coordinates": {
          "lat": 26.832762162162165,
          "lng": 80.92843112848055
        },
        "radiusMeters": 1119,
        "averageTemperatureC": 33.1,
        "riskCategory": "Severe",
        "severity": "Severe",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.2,
          "landUseHeat": 0.2,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 67,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 58,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 57,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243120132-hotspot-severe-3",
        "name": "Aminabad Green Deficit Region",
        "coordinates": {
          "lat": 26.859113513513517,
          "lng": 80.91858699134981
        },
        "radiusMeters": 1113,
        "averageTemperatureC": 33.1,
        "riskCategory": "High",
        "severity": "High",
        "reason": "Dense urban area with limited ground space for traditional planting.",
        "recommendedAction": "Green Roofs (Improved thermal insulation and local micro-cooling)",
        "signals": {
          "roadDensity": 0,
          "buildingDensity": 0.8666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0.05372098934859293,
          "waterProximity": 0.23988107414395987
        },
        "recommendations": [
          {
            "name": "Green Roofs",
            "score": 82,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Tree Plantation",
            "score": 80,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Solar Deployment",
            "score": 76,
            "rationale": "Dense building footprints indicate stronger rooftop solar deployment potential."
          },
          {
            "name": "Reflective Roofing",
            "score": 64,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Green roofs are most useful where building density is high and ground-level planting space is limited."
      },
      {
        "id": "osm-243120132-hotspot-severe-4",
        "name": "Vikram Nagar Green Deficit Region",
        "coordinates": {
          "lat": 26.762491891891894,
          "lng": 80.88905457995759
        },
        "radiusMeters": 1081,
        "averageTemperatureC": 32.9,
        "riskCategory": "Moderate",
        "severity": "Moderate",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.13333333333333333,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 65,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Solar Deployment",
            "score": 52,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          },
          {
            "name": "Reflective Roofing",
            "score": 52,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      },
      {
        "id": "osm-243120132-hotspot-severe-5",
        "name": "Aminabad Green Deficit Region",
        "coordinates": {
          "lat": 26.82397837837838,
          "lng": 80.88905457995759
        },
        "radiusMeters": 1061,
        "averageTemperatureC": 32.8,
        "riskCategory": "Severe",
        "severity": "Critical",
        "reason": "Available ground space combined with low existing vegetation proximity necessitates targeted greening.",
        "recommendedAction": "Tree Plantation & Urban Canopy (Estimated 0.8°C local temperature reduction)",
        "signals": {
          "roadDensity": 1,
          "buildingDensity": 0.06666666666666667,
          "landUseHeat": 0,
          "vegetationProximity": 0,
          "waterProximity": 0
        },
        "recommendations": [
          {
            "name": "Tree Plantation",
            "score": 100,
            "rationale": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
          },
          {
            "name": "Green Roofs",
            "score": 64,
            "rationale": "Green roofs are most useful where building density is high and ground-level planting space is limited."
          },
          {
            "name": "Reflective Roofing",
            "score": 51,
            "rationale": "Reflective roofing offers a fast heat-risk reduction path for exposed roof surfaces."
          },
          {
            "name": "Solar Deployment",
            "score": 50,
            "rationale": "Solar deployment should start with civic, commercial, and large roof assets."
          }
        ],
        "suggestedAction": "Low nearby vegetation and road exposure make shade-tree corridors a high-value intervention."
      }
    ],
    "areaMetrics": {
      "totalAreaSqMeters": 1129727977.2617188,
      "vegetatedAreaSqMeters": 31798995.794921875,
      "waterAreaSqMeters": 378143771.7421875,
      "buildingAreaSqMeters": 1486355.70703125,
      "isAvailable": true
    },
    "sourceMetadata": {
      "boundarySource": "OpenStreetMap Administrative Boundary via Nominatim",
      "greenCoverSource": "OpenStreetMap Land Cover Polygons",
      "waterSource": "OpenStreetMap Hydrological Polygons",
      "solarSource": "OpenStreetMap Building Area Model",
      "carbonSource": "ClimateLens Built-Up Area Operation Model"
    },
    "lastVerifiedTimestamp": "2026-06-22T11:18:41.266Z"
  }
];
