class SatelliteImageryService:
    def get_green_cover_index(self, city_id: str) -> dict[str, float | str]:
        return {"cityId": city_id, "ndviMean": 0.38}

