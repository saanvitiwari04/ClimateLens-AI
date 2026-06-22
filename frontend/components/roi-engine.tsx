"use client";

import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { Target, TrendingUp, AlertCircle, Coins, ShieldCheck, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CityClimateProfile } from "@/lib/types";
import { generateCityROI } from "@/lib/roi-engine";
import { indianFormatter } from "@/lib/formatters";

export function ROIEngineSummaryPanel({ city }: { city: CityClimateProfile }) {
  const result = useMemo(() => generateCityROI(city), [city]);

  return (
    <div className="space-y-6">
      <Card className="p-6 border-isro-100 shadow-panel">
        <h2 className="text-lg font-heading font-bold text-isro-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-isro-500" /> Executive Strategy
        </h2>
        <p className="text-sm leading-relaxed text-climate-ink mb-6 p-4 bg-slate-50 border border-climate-line rounded-lg">
          {result.executiveSummary}
        </p>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-climate-muted">Key Strategic Outcomes</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-success-50 rounded-lg border border-success-100">
              <div className="text-xs text-success-700 font-bold mb-1">Carbon Reduction</div>
              <div className="text-lg font-mono font-black text-success-900">
                {indianFormatter.format(Math.round(result.projection.currentCarbonOutput - result.projection.projectedCarbonOutput))} t
              </div>
            </div>
            <div className="p-3 bg-saffron-50 rounded-lg border border-saffron-100">
              <div className="text-xs text-saffron-700 font-bold mb-1">Score Improvement</div>
              <div className="text-lg font-mono font-black text-saffron-900">
                +{result.projection.projectedClimateScore - result.projection.currentClimateScore} pts
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function ROIEngineCharts({ city }: { city: CityClimateProfile }) {
  const result = useMemo(() => generateCityROI(city), [city]);

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-panel">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-heading font-bold text-climate-ink flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success-600" /> Implementation Strategy Board
          </h2>
          <span className="px-3 py-1 bg-isro-50 text-isro-700 font-semibold text-xs rounded-full border border-isro-100">
            {result.interventions.length} Interventions Ranked
          </span>
        </div>
        
        <div className="space-y-4">
          {result.interventions.map((intervention, index) => {
            const isPriority = index === 0;
            const costLevel = intervention.impactScore > 85 ? "$$$" : intervention.impactScore > 70 ? "$$" : "$";
            const difficulty = intervention.impactScore > 85 ? "High" : intervention.impactScore > 70 ? "Medium" : "Low";
            
            return (
              <div key={intervention.name} className={`relative overflow-hidden rounded-xl border p-5 transition-all ${isPriority ? 'bg-isro-50/50 border-isro-200 shadow-md' : 'bg-white border-climate-line hover:shadow-sm'}`}>
                {isPriority && (
                  <div className="absolute top-0 right-0 bg-saffron-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                    Top Priority
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-heading font-bold text-climate-ink">{intervention.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-climate-line shrink-0">
                    <div className="text-center">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-climate-muted mb-1">Impact Score</div>
                      <div className={`text-2xl font-mono font-black ${isPriority ? 'text-isro-600' : 'text-climate-ink'}`}>
                        {intervention.impactScore}
                      </div>
                    </div>
                    <div className="w-px h-10 bg-climate-line"></div>
                    <div className="text-center">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-climate-muted mb-1">Score Gain</div>
                      <div className="text-xl font-mono font-bold text-success-600">
                        +{intervention.climateScoreImprovement}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-climate-line/50">
                  <div className="flex items-center gap-2 text-sm text-climate-ink">
                    <Coins className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold">Cost:</span> {costLevel}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-climate-ink">
                    <AlertCircle className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold">Difficulty:</span> {difficulty}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-climate-ink">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold">Timeline:</span> 12-24 mo
                  </div>
                  <div className="flex items-center gap-2 text-sm text-climate-ink">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold">Confidence:</span> {intervention.confidence}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
