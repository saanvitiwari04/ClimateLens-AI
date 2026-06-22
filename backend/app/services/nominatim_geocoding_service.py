from typing import Any
from urllib.parse import urlencode
from urllib.request import Request, urlopen
import json

from backend.app.models import GeocodedLocation


class NominatimGeocodingService:
    def search(self, query: str) -> GeocodedLocation | None:
        normalized = query.strip()
        if not normalized:
            return None

        params = urlencode(
            {
                "q": normalized,
                "format": "jsonv2",
                "addressdetails": "1",
                "limit": "1",
            }
        )
        request = Request(
            f"https://nominatim.openstreetmap.org/search?{params}",
            headers={
                "Accept": "application/json",
                "User-Agent": "ClimateLensAI-MVP/0.1",
            },
        )

        try:
            with urlopen(request, timeout=8) as response:
                payload: list[dict[str, Any]] = json.loads(response.read().decode("utf-8"))
        except Exception:
            return None

        if not payload:
            return None

        result = payload[0]
        address = result.get("address") or {}
        lat = float(result["lat"])
        lng = float(result["lon"])
        name = (
            address.get("city")
            or address.get("town")
            or address.get("village")
            or address.get("municipality")
            or normalized
        )

        return GeocodedLocation(
            id=f"osm-{result['place_id']}",
            name=name,
            state=address.get("state") or address.get("county") or "Unspecified region",
            country=address.get("country") or "Unknown country",
            displayName=result.get("display_name") or normalized,
            coordinates={"lat": lat, "lng": lng},
        )

