from backend.app.models import CityClimateProfile


class EnvironmentalDatasetService:
    def __init__(self) -> None:
        self._profiles = [
            CityClimateProfile(
                id="prayagraj-in",
                name="Prayagraj",
                state="Uttar Pradesh",
                country="India",
                profileType="enhanced",
                dataNotice="Enhanced example dataset with curated climate metrics and hotspot analysis.",
                coordinates={"lat": 25.4358, "lng": 81.8463},
                climateScore=64,
                greenCoverPercent=14.8,
                heatRiskIndex=78,
                solarPotentialMw=1180,
                airQualityIndex=146,
                metrics=[
                    {"label": "Climate Score", "value": "64 / 100", "trend": "+4 possible with priority actions", "status": "watch"},
                    {"label": "Heat Risk", "value": "High", "trend": "Urban surface temperature elevated", "status": "risk"},
                    {"label": "Green Cover", "value": "14.8%", "trend": "Below resilient-city target", "status": "risk"},
                    {"label": "Solar Potential", "value": "1,180 MW", "trend": "Strong rooftop opportunity", "status": "strong"},
                    {"label": "Air Quality", "value": "AQI 146", "trend": "Sensitive groups affected", "status": "watch"},
                ],
                hotspots=[
                    {
                        "id": "civil-lines",
                        "name": "Civil Lines Commercial Core",
                        "coordinates": {"lat": 25.4521, "lng": 81.8343},
                        "averageTemperatureC": 41.2,
                        "riskCategory": "Severe",
                        "confidenceScore": "High",
                        "suggestedAction": "Prioritize reflective roofs, shade corridors, and roadside tree plantation.",
                    },
                    {
                        "id": "naini-industrial",
                        "name": "Naini Industrial Area",
                        "coordinates": {"lat": 25.3791, "lng": 81.8562},
                        "averageTemperatureC": 40.4,
                        "riskCategory": "High",
                        "confidenceScore": "High",
                        "suggestedAction": "Deploy cool-roof retrofits and solar installations on large industrial rooftops.",
                    },
                ],
                layerSummaries={
                    "heat": "Heat concentration is highest across dense commercial and industrial surfaces.",
                    "treeCover": "Canopy gaps are visible in dense residential and market corridors.",
                    "solar": "Large rooftops in institutional and industrial areas show high solar suitability.",
                    "airQuality": "AQI pressure follows traffic corridors and mixed industrial activity.",
                    "water": "The Ganga-Yamuna confluence moderates nearby microclimates but needs buffer protection.",
                },
            )
            ,
            CityClimateProfile(
                id="indore-in",
                name="Indore",
                state="Madhya Pradesh",
                country="India",
                profileType="enhanced",
                dataNotice="Enhanced example dataset with curated climate metrics and hotspot analysis.",
                coordinates={"lat": 22.7196, "lng": 75.8577},
                climateScore=71,
                greenCoverPercent=19.6,
                heatRiskIndex=66,
                solarPotentialMw=940,
                airQualityIndex=112,
                metrics=[
                    {"label": "Climate Score", "value": "71 / 100", "trend": "Stable with targeted upgrades", "status": "strong"},
                    {"label": "Heat Risk", "value": "Moderate", "trend": "Hotspots near dense roads", "status": "watch"},
                    {"label": "Green Cover", "value": "19.6%", "trend": "Approaching urban target", "status": "watch"},
                    {"label": "Solar Potential", "value": "940 MW", "trend": "Strong civic-building opportunity", "status": "strong"},
                    {"label": "Air Quality", "value": "AQI 112", "trend": "Moderate pollution burden", "status": "watch"},
                ],
                hotspots=[
                    {
                        "id": "palasia",
                        "name": "Palasia Traffic Corridor",
                        "coordinates": {"lat": 22.7244, "lng": 75.8839},
                        "averageTemperatureC": 38.1,
                        "riskCategory": "High",
                        "confidenceScore": "High",
                        "suggestedAction": "Add shade trees, bus-stop canopies, and reflective pavement pilots.",
                    }
                ],
                layerSummaries={
                    "heat": "Heat risk is clustered around high-traffic commercial corridors.",
                    "treeCover": "Green cover is stronger than peer cities but uneven across wards.",
                    "solar": "Municipal, institutional, and warehouse roofs show scalable solar opportunity.",
                    "airQuality": "Traffic emissions are the dominant localized air-quality pressure.",
                    "water": "Urban lakes provide local cooling benefits where buffers remain intact.",
                },
            )
        ]

    def list_city_profiles(self) -> list[CityClimateProfile]:
        return self._profiles

    def get_city_profile(self, city_id: str) -> CityClimateProfile | None:
        return next((profile for profile in self._profiles if profile.id == city_id), None)
