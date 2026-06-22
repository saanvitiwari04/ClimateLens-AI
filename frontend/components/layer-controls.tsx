"use client";

import type { ElementType } from "react";
import { useEffect, useState } from "react";
import { CloudSun, Droplets, Flame, Leaf, SunMedium } from "lucide-react";
import type { CityClimateProfile, ClimateLayer } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { SwitchRow } from "@/components/switch-row";
import { useClimateStore } from "@/store/climate-store";

const layerMeta: Array<{ id: ClimateLayer; label: string; icon: ElementType }> = [
  { id: "heat", label: "Heatmap Layer", icon: Flame },
  { id: "treeCover", label: "Tree Cover Layer", icon: Leaf },
  { id: "solar", label: "Solar Potential Layer", icon: SunMedium },
  { id: "airQuality", label: "Air Quality Layer", icon: CloudSun },
  { id: "water", label: "Water Bodies Layer", icon: Droplets }
];

export function LayerControls({ city }: { city: CityClimateProfile }) {
  const activeLayers = useClimateStore((state) => state.activeLayers);
  const toggleLayer = useClimateStore((state) => state.toggleLayer);
  const [osmFailed, setOsmFailed] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Reset state when city changes
    setOsmFailed({});
    
    const handleOsmFallback = (e: any) => {
      if (e.detail && e.detail.type) {
        setOsmFailed(prev => ({ ...prev, [e.detail.type]: true }));
      }
    };
    window.addEventListener('osm-fallback', handleOsmFallback);
    return () => window.removeEventListener('osm-fallback', handleOsmFallback);
  }, [city.id]);

  const getDataSourceInfo = (layerId: ClimateLayer, profileType: string) => {
    if (layerId === "heat") return `Data Source: ClimateLens Simulation | Confidence: ${profileType === "enhanced" ? "High" : "Estimated"}`;
    if (layerId === "treeCover" || layerId === "water") {
      if (osmFailed[layerId]) {
        return "Source: Estimated Spatial Model | Confidence: Estimated";
      }
      return "Data Source: OpenStreetMap | Confidence: High";
    }
    if (layerId === "solar" || layerId === "airQuality") return "Data Source: Estimated Climate Model | Confidence: Estimated";
    return "";
  };

  return (
    <Card className="p-4">
      <h2 className="text-sm font-semibold text-climate-ink">Map Layers</h2>
      <div className="mt-4 space-y-2">
        {layerMeta.map((layer) => (
          <SwitchRow
            key={layer.id}
            checked={activeLayers[layer.id]}
            icon={layer.icon}
            label={layer.label}
            onChange={() => toggleLayer(layer.id)}
          />
        ))}
      </div>
      <div className="mt-5 border-t border-climate-line pt-4">
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-climate-muted">Layer insight</div>
        <div className="mt-3 space-y-3 text-sm leading-6 text-climate-muted">
          {layerMeta
            .filter((layer) => activeLayers[layer.id])
            .map((layer) => (
              <div key={layer.id} className="pb-2 border-b border-gray-100 last:border-0">
                <p>{city.layerSummaries[layer.id]}</p>
                <div className={`mt-1 text-[11px] font-mono font-medium inline-block px-1.5 py-0.5 rounded ${osmFailed[layer.id] ? 'bg-amber-100 text-amber-800' : 'bg-slate-50 text-slate-500'}`}>
                  {getDataSourceInfo(layer.id, city.profileType || "estimated")}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Card>
  );
}
