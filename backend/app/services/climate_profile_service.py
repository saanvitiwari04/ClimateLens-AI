from backend.app.models import CityClimateProfile
from backend.app.services.environmental_dataset_service import EnvironmentalDatasetService
from backend.app.services.fallback_climate_profile_service import FallbackClimateProfileService
from backend.app.services.nominatim_geocoding_service import NominatimGeocodingService
from backend.app.services.openstreetmap_service import OpenStreetMapService
from backend.app.services.satellite_imagery_service import SatelliteImageryService
from backend.app.services.weather_service import WeatherService


class ClimateProfileService:
    def __init__(self) -> None:
        self.weather = WeatherService()
        self.satellite = SatelliteImageryService()
        self.osm = OpenStreetMapService()
        self.environment = EnvironmentalDatasetService()
        self.geocoding = NominatimGeocodingService()
        self.fallback = FallbackClimateProfileService()

    def search(self, query: str) -> list[CityClimateProfile]:
        profiles = self.environment.list_city_profiles()
        normalized = query.strip().lower()
        if not normalized:
            return profiles
        matches = [
            profile
            for profile in profiles
            if normalized in profile.name.lower()
            or normalized in profile.state.lower()
            or normalized in profile.country.lower()
        ]
        if matches:
            return matches

        location = self.geocoding.search(query)
        if location is None:
            return []
        return [self.fallback.create_profile(location)]

    def get_profile(self, city_id: str) -> CityClimateProfile | None:
        profile = self.environment.get_city_profile(city_id)
        if profile is None:
            return None

        # Service calls are intentionally isolated so real providers can replace fixture data.
        self.weather.get_current_conditions(profile.coordinates.lat, profile.coordinates.lng)
        self.satellite.get_green_cover_index(profile.id)
        self.osm.get_city_boundary(profile.id)
        return profile
