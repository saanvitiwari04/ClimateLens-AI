"use client";

import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useClimateStore } from "@/store/climate-store";
import { getHotspotRecommendation } from "@/lib/roi-engine";

export function HotspotPanel() {
  const hotspot = useClimateStore((state) => state.selectedHotspot);
  const city = useClimateStore((state) => state.selectedCity);

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-saffron-700" />
        <h2 className="text-sm font-semibold text-climate-ink">Heat Hotspot Analysis</h2>
      </div>
      {hotspot && city ? (
        <div className="mt-4 space-y-4">
          <div>
            <div className="text-xs uppercase tracking-[0.12em] text-climate-muted">Location</div>
            <div className="mt-1 text-lg font-semibold text-climate-ink">{hotspot.name}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md border border-climate-line p-3">
              <div className="text-xs text-climate-muted">Average Temperature</div>
              <div className="mt-1 text-xl font-semibold text-climate-ink">{hotspot.averageTemperatureC}C</div>
            </div>
            <div className="rounded-md border border-climate-line p-3">
              <div className="text-xs text-climate-muted">Risk Category</div>
              <div className="mt-1 text-xl font-semibold text-red-700">{hotspot.riskCategory}</div>
            </div>
          </div>

          {hotspot.signals ? (
            <div>
              <div className="text-xs uppercase tracking-[0.12em] text-climate-muted">Local Risk Signals</div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <Signal label="Road density" value={hotspot.signals.roadDensity} />
                <Signal label="Buildings" value={hotspot.signals.buildingDensity} />
                <Signal label="Heat land use" value={hotspot.signals.landUseHeat} />
                <Signal label="Vegetation" value={hotspot.signals.vegetationProximity} />
                <Signal label="Water" value={hotspot.signals.waterProximity} />
              </div>
            </div>
          ) : null}

          {(() => {
            const rec = getHotspotRecommendation(hotspot, city);
            return (
              <div className="rounded-md border border-forest-200 bg-forest-50 p-4">
                <div className="text-xs uppercase tracking-[0.12em] text-forest-800 font-semibold mb-1">Recommended Action</div>
                <div className="text-sm font-bold text-forest-900 mb-3">{rec.action}</div>
                
                <div className="text-xs uppercase tracking-[0.12em] text-forest-800 font-semibold mb-1">Expected Benefit</div>
                <div className="text-sm text-forest-900 mb-3">{rec.expectedBenefit}</div>

                <div className="text-xs uppercase tracking-[0.12em] text-forest-800 font-semibold mb-1">Reasoning</div>
                <div className="text-sm text-forest-900">{rec.reasoning}</div>
              </div>
            );
          })()}

        </div>
      ) : (
        <p className="mt-4 text-sm text-climate-muted">Select a hotspot on the map.</p>
      )}
    </Card>
  );
}

function Signal({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-climate-line px-2 py-2">
      <div className="text-climate-muted">{label}</div>
      <div className="mt-1 font-semibold text-climate-ink">{Math.round(value * 100)}%</div>
    </div>
  );
}
