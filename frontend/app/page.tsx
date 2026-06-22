"use client";

import { Dashboard } from "@/components/dashboard";
import { HomeHero } from "@/components/home-hero";
import { useClimateStore } from "@/store/climate-store";

export default function Page() {
  const selectedCity = useClimateStore((state) => state.selectedCity);

  return selectedCity ? <Dashboard /> : <HomeHero />;
}

