import type { GeocodedLocation } from "@/lib/types";

interface NominatimAddress {
  city?: string;
  town?: string;
  village?: string;
  municipality?: string;
  county?: string;
  state?: string;
  country?: string;
}

interface NominatimResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: NominatimAddress;
  boundingbox?: string[];
  type?: string;
  addresstype?: string;
  osm_type?: string;
  osm_id?: number;
  geojson?: {
    type: string;
    coordinates: any;
  };
}

export async function geocodeLocation(query: string): Promise<GeocodedLocation | null> {
  const normalized = query.trim();
  if (!normalized) return null;

  const params = new URLSearchParams({
    q: normalized,
    format: "jsonv2",
    addressdetails: "1",
    limit: "1",
    polygon_geojson: "1"
  });

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 2000);

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "ClimateLens-Geospatial-Upgrade-MVP (amitosh@climatelens.ai)"
      },
      signal: controller.signal
    });
    clearTimeout(id);

    if (!response.ok) {
      throw new Error("Unable to resolve location");
    }

    const [result] = (await response.json()) as NominatimResult[];
    if (!result) return null;

    const address = result.address ?? {};
    const name = address.city ?? address.town ?? address.village ?? address.municipality ?? normalized;
    const state = address.state ?? address.county ?? "Unspecified region";
    const country = address.country ?? "Unknown country";
    const lat = Number(result.lat);
    const lng = Number(result.lon);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

    return {
      id: `osm-${result.place_id}`,
      name,
      state,
      country,
      displayName: result.display_name,
      coordinates: { lat, lng },
      boundingbox: result.boundingbox,
      type: result.addresstype ?? result.type,
      geojson: result.geojson
    };
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function reverseGeocode(lat: number, lng: number): Promise<string | null> {
  const params = new URLSearchParams({
    lat: lat.toString(),
    lon: lng.toString(),
    format: "jsonv2",
    zoom: "14" // neighborhood/suburb level
  });

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 2000);
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params.toString()}`, {
      headers: {
        "User-Agent": "ClimateLens-Geospatial-Upgrade-MVP (amitosh@climatelens.ai)"
      },
      signal: controller.signal
    });
    clearTimeout(id);
    if (!response.ok) return null;
    const data = await response.json();
    if (!data || !data.address) return null;
    
    return data.address.suburb ?? data.address.neighbourhood ?? data.address.city_district ?? data.name ?? null;
  } catch {
    return null;
  }
}

