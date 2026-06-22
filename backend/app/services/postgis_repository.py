class PostGisRepository:
    """Persistence boundary for future PostgreSQL + PostGIS integration."""

    def get_city_geometry(self, city_id: str) -> dict[str, str]:
        return {"cityId": city_id, "status": "not_connected"}

    def get_layer_tileset(self, city_id: str, layer: str) -> dict[str, str]:
        return {"cityId": city_id, "layer": layer, "status": "not_connected"}

