import { cityProfiles } from "@/lib/data/cities";
import { createFallbackClimateProfile } from "@/lib/fallback-profile";
import { geocodeLocation } from "@/lib/geocoding/nominatim";
import type { CityClimateProfile } from "@/lib/types";

export interface ClimateRepository {
  searchCities(query: string): Promise<CityClimateProfile[]>;
  getCityProfile(cityId: string): Promise<CityClimateProfile | null>;
}

class ApiClimateRepository implements ClimateRepository {
  constructor(private readonly baseUrl: string) {}

  async searchCities(query: string) {
    const response = await fetch(`${this.baseUrl}/cities/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Unable to search climate cities");
    return response.json() as Promise<CityClimateProfile[]>;
  }

  async getCityProfile(cityId: string) {
    const response = await fetch(`${this.baseUrl}/cities/${cityId}`);
    if (response.status === 404) return null;
    if (!response.ok) throw new Error("Unable to load city climate profile");
    return response.json() as Promise<CityClimateProfile>;
  }
}

class LocalClimateRepository implements ClimateRepository {
  async searchCities(query: string) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return cityProfiles;
    const enhancedMatches = cityProfiles.filter((city) =>
      [city.name, city.state, city.country].some((value) => value.toLowerCase().includes(normalized))
    );
    if (enhancedMatches.length > 0) return enhancedMatches;

    const location = await geocodeLocation(query);
    return location ? [await createFallbackClimateProfile(location)] : [];
  }

  async getCityProfile(cityId: string) {
    return cityProfiles.find((city) => city.id === cityId) ?? null;
  }
}

export function createClimateRepository(): ClimateRepository {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  return baseUrl ? new ApiClimateRepository(baseUrl) : new LocalClimateRepository();
}
