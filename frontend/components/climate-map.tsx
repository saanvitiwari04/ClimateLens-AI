"use client";

import dynamic from "next/dynamic";
import type { CityClimateProfile } from "@/lib/types";
import { Card } from "@/components/ui/card";

const LeafletMap = dynamic(() => import("@/components/leaflet-map").then((mod) => mod.LeafletMap), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center text-sm text-climate-muted">Initialising map…</div>
});

export function ClimateMap({ city }: { city: CityClimateProfile }) {
  return (
    <Card className="overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-climate-line px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-climate-ink">Interactive Climate Map</h2>
          <p className="text-xs text-climate-muted">Click hotspots for localised action guidance</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <div className="rounded-md bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700">Leaflet + OSM</div>
        </div>
      </div>

      <div className="h-[620px] relative z-0">
        <LeafletMap city={city} />
      </div>
    </Card>
  );
}
