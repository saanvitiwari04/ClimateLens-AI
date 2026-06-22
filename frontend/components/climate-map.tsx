"use client";

import dynamic from "next/dynamic";
import type { CityClimateProfile } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { useClimateStore } from "@/store/climate-store";

const LeafletMap = dynamic(() => import("@/components/leaflet-map").then((mod) => mod.LeafletMap), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center text-sm text-climate-muted">Loading map</div>
});

export function ClimateMap({ city }: { city: CityClimateProfile }) {
  const layerLoading = useClimateStore(state => state.layerLoading);
  
  const loadingMessages = [];
  if (layerLoading.treeCover) loadingMessages.push("Loading Tree Cover...");
  if (layerLoading.water) loadingMessages.push("Loading Water Bodies...");
  if (layerLoading.airQuality) loadingMessages.push("Loading AQI Layer...");
  if (layerLoading.solar) loadingMessages.push("Loading Solar Layer...");

  return (
    <Card className="overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-climate-line px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-climate-ink">Interactive Climate Map</h2>
          <p className="text-xs text-climate-muted">Click hotspots for localized action guidance</p>
        </div>
        <div className="rounded-md bg-saffron-100 px-3 py-1 text-xs font-medium text-saffron-700">Leaflet + OSM</div>
      </div>
      
      {loadingMessages.length > 0 && (
        <div className="absolute top-[60px] right-4 z-[400] flex flex-col gap-2">
          {loadingMessages.map((msg, idx) => (
            <div key={idx} className="bg-white/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md rounded-md border border-slate-200 flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2"></span>
              {msg}
            </div>
          ))}
        </div>
      )}

      <div className="h-[620px] relative z-0">
        <LeafletMap city={city} />
      </div>
    </Card>
  );
}

