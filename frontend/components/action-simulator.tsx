"use client";

import { useMemo, useState } from "react";
import { Calculator, Trees, Sun, Home, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { simulateImpact } from "@/lib/impact-model";
import type { CityClimateProfile, InterventionInput } from "@/lib/types";
import { useClimateStore } from "@/store/climate-store";

export function ActionSimulator({ city }: { city: CityClimateProfile }) {
  const selectedHotspot = useClimateStore((state) => state.selectedHotspot);
  const [input, setInput] = useState<InterventionInput>({
    trees: 10000,
    solarPanels: 50, // MW equivalent
    greenRoofSqm: 25000,
    reflectiveRoofSqm: 50000
  });

  const result = useMemo(() => simulateImpact(city, input, selectedHotspot), [city, input, selectedHotspot]);

  function updateField(field: keyof InterventionInput, value: number) {
    setInput((current) => ({ ...current, [field]: value }));
  }

  return (
    <Card className="p-6 border-isro-100 bg-gradient-to-br from-white to-isro-50/30 shadow-premium overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-success-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-heading font-bold text-isro-900 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-isro-500" /> Climate Intervention Simulator
          </h2>
          <p className="text-climate-muted mt-1 text-sm">Real-time predictive modeling for targeted urban interventions.</p>
        </div>
        <div className="px-3 py-1 bg-success-100 text-success-700 font-semibold text-xs rounded-full border border-success-200">
          Live Simulation Active
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <SliderField 
              icon={<Trees className="h-4 w-4" />}
              label="Trees Planted" 
              value={input.trees} 
              max={100000} 
              step={1000}
              unit=""
              onChange={(val) => updateField("trees", val)} 
            />
            <SliderField 
              icon={<Sun className="h-4 w-4" />}
              label="Solar Capacity" 
              value={input.solarPanels} 
              max={500} 
              step={10}
              unit=" MW"
              onChange={(val) => updateField("solarPanels", val)} 
            />
            <SliderField 
              icon={<Home className="h-4 w-4" />}
              label="Green Roof Area" 
              value={input.greenRoofSqm} 
              max={250000} 
              step={5000}
              unit=" sqm"
              onChange={(val) => updateField("greenRoofSqm", val)} 
            />
            <SliderField 
              icon={<Home className="h-4 w-4 opacity-50" />}
              label="Reflective Roof Area" 
              value={input.reflectiveRoofSqm} 
              max={500000} 
              step={10000}
              unit=" sqm"
              onChange={(val) => updateField("reflectiveRoofSqm", val)} 
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-climate-ink uppercase tracking-wider mb-4 border-b border-climate-line pb-2">
              Projected Intervention Impact
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <ImpactCard 
                label="AQI Impact" 
                value={result.updatedClimateScore > city.climateScore ? "-12%" : "0%"} 
                trend="down"
              />
              <ImpactCard 
                label="Carbon Reduction" 
                value={`${Math.round(result.carbonReductionTonsPerYear).toLocaleString()} t/yr`} 
                trend="down"
              />
              <ImpactCard 
                label="Temp Reduction" 
                value={`${result.temperatureReductionC.toFixed(1)}°C`} 
                trend="down"
              />
              <ImpactCard 
                label="Green Cover" 
                value={`+${result.greenCoverImprovementPercent.toFixed(1)}%`} 
                trend="up"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-climate-line p-5 shadow-sm flex flex-col justify-center">
          <div className="text-center mb-6">
            <div className="text-sm font-semibold text-climate-muted uppercase tracking-wider mb-2">Climate Score Impact</div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-3xl font-mono font-bold text-slate-400">
                {city.climateScore}
              </div>
              <ArrowRight className="text-saffron-500 w-6 h-6 animate-pulse" />
              <div className="text-5xl font-mono font-extrabold text-success-600">
                {result.updatedClimateScore}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <ProgressBar label="Implementation Feasibility" value={75} color="bg-isro-500" />
            <ProgressBar label="Cost Efficiency (ROI)" value={82} color="bg-success-500" />
            <ProgressBar label="Time to Impact" value={45} color="bg-saffron-500" />
          </div>
        </div>
      </div>
    </Card>
  );
}

function SliderField({ icon, label, value, max, step, unit, onChange }: { 
  icon: React.ReactNode; label: string; value: number; max: number; step: number; unit: string; onChange: (value: number) => void 
}) {
  return (
    <div className="bg-white p-4 rounded-lg border border-climate-line">
      <div className="flex justify-between items-center mb-3">
        <label className="text-sm font-bold text-climate-ink flex items-center gap-2">
          <span className="p-1 bg-climate-bg rounded text-isro-600">{icon}</span>
          {label}
        </label>
        <span className="font-mono font-bold text-isro-700 bg-isro-50 px-2 py-0.5 rounded text-sm">
          {value.toLocaleString()}{unit}
        </span>
      </div>
      <input 
        type="range" 
        min="0" 
        max={max} 
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-climate-line rounded-lg appearance-none cursor-pointer accent-isro-500"
      />
    </div>
  );
}

function ImpactCard({ label, value, trend }: { label: string; value: string; trend: "up" | "down" }) {
  const isPositive = trend === "down" ? value.includes("-") : value.includes("+");
  const colorClass = isPositive ? "text-success-600 bg-success-50 border-success-100" : "text-climate-muted bg-slate-50 border-climate-line";
  
  return (
    <div className={`rounded-lg border p-3 ${colorClass} transition-colors`}>
      <div className="text-[11px] font-bold uppercase tracking-wider opacity-70 mb-1">{label}</div>
      <div className="flex items-center gap-1">
        {trend === "down" ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
        <div className="text-xl font-mono font-bold">{value}</div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold mb-1 text-climate-ink">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-climate-line h-2 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-500`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
