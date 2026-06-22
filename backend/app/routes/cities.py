from fastapi import APIRouter, HTTPException, Query

from backend.app.models import CityClimateProfile
from backend.app.services.climate_profile_service import ClimateProfileService

router = APIRouter()
service = ClimateProfileService()


@router.get("/search", response_model=list[CityClimateProfile])
def search_cities(q: str = Query(default="")):
    return service.search(q)


@router.get("/{city_id}", response_model=CityClimateProfile)
def get_city(city_id: str):
    profile = service.get_profile(city_id)
    if profile is None:
        raise HTTPException(status_code=404, detail="City not found")
    return profile

