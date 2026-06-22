class OpenStreetMapService:
    def get_city_boundary(self, city_id: str) -> dict[str, str]:
        return {"cityId": city_id, "source": "openstreetmap"}

