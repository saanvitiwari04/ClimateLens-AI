class WeatherService:
    def get_current_conditions(self, lat: float, lng: float) -> dict[str, float]:
        return {"lat": lat, "lng": lng, "temperatureC": 39.1, "humidityPercent": 34.0}

