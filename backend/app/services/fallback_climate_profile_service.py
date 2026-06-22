import math
from backend.app.models import CityClimateProfile, GeocodedLocation, Coordinates


class FallbackClimateProfileService:
    def _get_coordinate_hash(self, lat: float, lng: float) -> int:
        return sum(ord(c) for c in f"{round(lat, 1)},{round(lng, 1)}")

    def _get_city_scale(self, name: str) -> str:
        n = name.lower()
        if any(m in n for m in ["tokyo", "delhi", "mumbai", "london", "new york", "sao paulo", "shanghai", "beijing", "dhaka", "mexico city"]): return "Mega"
        if any(l in n for l in ["hyderabad", "bengaluru", "chennai", "kolkata", "chicago", "los angeles", "paris"]): return "Large"
        if any(m in n for m in ["prayagraj", "noida", "indore", "bhopal", "pune", "ahmedabad", "surat"]): return "Medium"
        return "Small"

    def create_profile(self, location: GeocodedLocation) -> CityClimateProfile:
        latitude_abs = abs(location.coordinates.lat)
        coord_hash = self._get_coordinate_hash(location.coordinates.lat, location.coordinates.lng)
        scale = self._get_city_scale(location.name)
        
        climate_band = self._climate_band(latitude_abs)
        heat_risk_index = self._clamp(round(84 - latitude_abs * 0.85), 28, 86)
        green_cover_percent = self._clamp(round(12 + latitude_abs * 0.18 + (coord_hash % 10) * 0.5, 1), 9, 34)
        
        base_solar = 420 + (90 - latitude_abs) * 8
        scale_mult = {"Mega": 20, "Large": 8, "Medium": 2, "Small": 1}[scale]
        solar_potential_mw = self._clamp(round(base_solar * scale_mult), 260, 20000)
        
        air_quality_index = self._clamp(round(68 + heat_risk_index * 0.55 - green_cover_percent * 0.45 + (coord_hash % 20)), 42, 186)
        climate_score = self._clamp(round(82 - heat_risk_index * 0.22 + green_cover_percent * 0.48 - air_quality_index * 0.08), 48, 82)

        return CityClimateProfile(
            id=location.id,
            name=location.name,
            state=location.state,
            country=location.country,
            displayName=location.displayName,
            profileType="estimated",
            dataNotice="City found through OpenStreetMap Nominatim. Climate indicators are generated from a geographic fallback model until dedicated datasets are connected.",
            coordinates=location.coordinates,
            climateScore=climate_score,
            greenCoverPercent=green_cover_percent,
            heatRiskIndex=heat_risk_index,
            solarPotentialMw=solar_potential_mw,
            airQualityIndex=air_quality_index,
            metrics=[
                {
                    "label": "Climate Score",
                    "value": f"{climate_score} / 100",
                    "trend": "Estimated from geographic fallback model",
                    "status": "strong" if climate_score >= 72 else "watch" if climate_score >= 60 else "risk",
                },
                {
                    "label": "Heat Risk",
                    "value": "High" if heat_risk_index >= 72 else "Moderate" if heat_risk_index >= 52 else "Lower",
                    "trend": f"{climate_band} latitude band estimate",
                    "status": "risk" if heat_risk_index >= 72 else "watch",
                },
                {
                    "label": "Green Cover",
                    "value": f"{green_cover_percent}%",
                    "trend": "Baseline estimate pending canopy data",
                    "status": "strong" if green_cover_percent >= 24 else "watch" if green_cover_percent >= 16 else "risk",
                },
                {
                    "label": "Solar Potential",
                    "value": f"{solar_potential_mw:,} MW",
                    "trend": "Estimated from latitude and urban suitability",
                    "status": "strong",
                },
                {
                    "label": "Air Quality",
                    "value": f"AQI {air_quality_index}",
                    "trend": "Estimated until local AQI feed is connected",
                    "status": "risk" if air_quality_index >= 130 else "watch" if air_quality_index >= 80 else "strong",
                },
            ],
            hotspots=self._generate_hotspots(location, heat_risk_index),
            layerSummaries={
                "heat": f"Estimated heat pressure is based on {climate_band.lower()} climate exposure and dense-surface assumptions.",
                "treeCover": "Tree-cover estimates use a generic urban baseline until satellite canopy data is connected.",
                "solar": "Solar opportunity is estimated from latitude and typical rooftop deployment suitability.",
                "airQuality": "Air-quality pressure is estimated until an environmental dataset provider is available.",
                "water": "Water-body context will improve when OpenStreetMap hydrology and local boundary layers are connected.",
            },
        )

    def _climate_band(self, latitude_abs: float) -> str:
        if latitude_abs < 23.5:
            return "Tropical"
        if latitude_abs < 45:
            return "Subtropical"
        if latitude_abs < 60:
            return "Temperate"
        return "High-latitude"

    def _clamp(self, value: float, minimum: float, maximum: float):
        return min(maximum, max(minimum, value))

    def _signals(self, location: GeocodedLocation, index: int) -> dict[str, float]:
        seed = self._get_coordinate_hash(location.coordinates.lat, location.coordinates.lng) + index * 37
        return {
            "roadDensity": self._clamp(0.42 + ((seed % 30) - 10) / 100, 0, 1),
            "buildingDensity": self._clamp(0.48 + ((seed % 36) - 12) / 100, 0, 1),
            "landUseHeat": self._clamp(0.44 + ((seed % 32) - 10) / 100, 0, 1),
            "vegetationProximity": self._clamp(0.50 + ((seed % 34) - 16) / 100, 0, 1),
            "waterProximity": self._clamp(0.40 + ((seed % 28) - 12) / 100, 0, 1),
        }

    def _recommendations(self, signals: dict[str, float]) -> list[dict[str, str | int]]:
        recommendations = [
            {
                "name": "Tree Plantation",
                "score": round(52 + signals["roadDensity"] * 18 + (1 - signals["vegetationProximity"]) * 30),
                "rationale": "Prioritize shade-tree corridors where road exposure is high and nearby vegetation is limited.",
            },
            {
                "name": "Solar Deployment",
                "score": round(48 + signals["buildingDensity"] * 32 + signals["landUseHeat"] * 12),
                "rationale": "Building density and heat-oriented land use indicate rooftop solar deployment potential.",
            },
            {
                "name": "Green Roofs",
                "score": round(42 + signals["buildingDensity"] * 24 + (1 - signals["vegetationProximity"]) * 20),
                "rationale": "Green roofs are useful where building density is high and ground planting space is limited.",
            },
            {
                "name": "Reflective Roofing",
                "score": round(50 + signals["landUseHeat"] * 24 + signals["buildingDensity"] * 16),
                "rationale": "Cool-roof retrofits reduce surface heat in dense commercial, residential, or industrial areas.",
            },
        ]
        return sorted(recommendations, key=lambda item: item["score"], reverse=True)

    def _generate_hotspots(self, location: GeocodedLocation, heat_risk_index: int) -> list[dict]:
        candidates = []
        scale = self._get_city_scale(location.name)
        num_candidates = {"Mega": 12, "Large": 10, "Medium": 8, "Small": 6}[scale]
        base_seed = self._get_coordinate_hash(location.coordinates.lat, location.coordinates.lng)
        
        names_by_bearing = {
            "N": "North Urban Cluster",
            "NE": "North-East Development Belt",
            "E": "Eastern Commercial Zone",
            "SE": "South-East Heat Corridor",
            "S": "South Industrial Region",
            "SW": "South-West Built Surface",
            "W": "Western Commercial Zone",
            "NW": "North-West Logistics Hub",
        }
        
        directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"]

        for i in range(num_candidates):
            seed = base_seed + i * 137
            angle_deg = (seed % 360)
            angle_rad = math.radians(angle_deg)
            
            # Spread out more for larger cities
            spread_mult = {"Mega": 2.5, "Large": 1.5, "Medium": 1.0, "Small": 0.5}[scale]
            distance_deg = (0.02 + ((seed % 60) / 1000.0)) * spread_mult

            
            lat_offset = distance_deg * math.cos(angle_rad)
            lng_offset = distance_deg * math.sin(angle_rad)
            
            cand_lat = location.coordinates.lat + lat_offset
            cand_lng = location.coordinates.lng + lng_offset
            
            bearing_idx = round(angle_deg / 45.0)
            direction_key = directions[bearing_idx]
            name = names_by_bearing[direction_key]
            
            while any(c["name"] == name for c in candidates):
                name = name + " Secondary"
                
            signals = self._signals(location, i)
            
            risk_score = (signals["buildingDensity"] * 0.3 + 
                          signals["roadDensity"] * 0.2 + 
                          signals["landUseHeat"] * 0.2 + 
                          (1 - signals["vegetationProximity"]) * 0.2 + 
                          (1 - signals["waterProximity"]) * 0.1)
                          
            avg_temp = round(25 + heat_risk_index * 0.15 + risk_score * 5, 1)
            
            risk_cat = "Severe" if risk_score > 0.7 else "High" if risk_score > 0.5 else "Moderate"
            radius = 300 + (seed % 200) # 300 to 499
            
            cand = {
                "id": f"{location.id}-hotspot-{i}",
                "name": name,
                "coordinates": Coordinates(lat=cand_lat, lng=cand_lng),
                "radiusMeters": radius,
                "averageTemperatureC": avg_temp,
                "riskCategory": risk_cat,
                "confidenceScore": "Estimated",
                "suggestedAction": "Prioritize shade corridors, cool roofs, and targeted tree planting in dense built-up areas.",
                "signals": signals,
                "recommendations": self._recommendations(signals),
                "_risk_score": risk_score
            }
            candidates.append(cand)
            
        accepted = []
        min_spacing_deg = 0.015
        
        candidates.sort(key=lambda x: x["_risk_score"], reverse=True)
        
        for cand in candidates:
            too_close = False
            for acc in accepted:
                dist = math.sqrt((cand["coordinates"].lat - acc["coordinates"].lat)**2 + 
                                 (cand["coordinates"].lng - acc["coordinates"].lng)**2)
                if dist < min_spacing_deg:
                    too_close = True
                    break
            if not too_close:
                accepted.append(cand)
                max_spots = {"Mega": 8, "Large": 6, "Medium": 5, "Small": 3}[scale]
                if len(accepted) >= max_spots:
                    break
                    
        for acc in accepted:
            del acc["_risk_score"]
            
        return accepted
