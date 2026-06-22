"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Search, Trophy, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClimateRepository } from "@/lib/repositories/climate-repository";
import type { CityClimateProfile } from "@/lib/types";
import { indianFormatter } from "@/lib/formatters";

const comparisonMetrics = [
  { key: "climateScore", label: "Climate Score" },
  { key: "heatRiskIndex", label: "Heat Risk" },
  { key: "greenCoverPercent", label: "Green Cover" },
  { key: "solarPotentialMw", label: "Solar Potential" },
  { key: "airQualityIndex", label: "Air Quality" }
] as const;

export function ComparisonMode({ city }: { city: CityClimateProfile }) {
  const repository = useMemo(() => createClimateRepository(), []);
  const [query, setQuery] = useState("Bengaluru");
  const [comparisonCity, setComparisonCity] = useState<CityClimateProfile | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "not_found" | "error">("idle");

  async function compare(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setStatus("loading");
    try {
      const [result] = await repository.searchCities(query);
      setComparisonCity(result ?? null);
      setStatus(result ? "idle" : "not_found");
    } catch {
      setComparisonCity(null);
      setStatus("error");
    }
  }

  const chartData = comparisonMetrics.map((metric) => ({
    metric: metric.label,
    [city.name]: normalizeMetric(city, metric.key),
    [comparisonCity?.name ?? "Comparison"]: comparisonCity ? normalizeMetric(comparisonCity, metric.key) : 0
  }));

  const radarData = comparisonMetrics.map((metric) => ({
    subject: metric.label,
    A: normalizeMetric(city, metric.key),
    B: comparisonCity ? normalizeMetric(comparisonCity, metric.key) : 0,
    fullMark: 100
  }));

  const generateInsights = () => {
    if (!comparisonCity) return [];
    const insights = [];
    
    if (city.solarPotentialMw > comparisonCity.solarPotentialMw) {
      const diff = Math.round(((city.solarPotentialMw - comparisonCity.solarPotentialMw) / comparisonCity.solarPotentialMw) * 100);
      insights.push(`${city.name} has ${diff}% higher solar potential than ${comparisonCity.name}.`);
    } else if (comparisonCity.solarPotentialMw > city.solarPotentialMw) {
      const diff = Math.round(((comparisonCity.solarPotentialMw - city.solarPotentialMw) / city.solarPotentialMw) * 100);
      insights.push(`${comparisonCity.name} has ${diff}% higher solar potential than ${city.name}.`);
    }

    if (city.airQualityIndex < comparisonCity.airQualityIndex && city.greenCoverPercent > comparisonCity.greenCoverPercent) {
      insights.push(`${city.name} maintains better AQI and green cover overall.`);
    } else if (comparisonCity.airQualityIndex < city.airQualityIndex && comparisonCity.greenCoverPercent > city.greenCoverPercent) {
      insights.push(`${comparisonCity.name} maintains better AQI and green cover overall.`);
    }

    if (city.climateScore < comparisonCity.climateScore) {
      insights.push(`${city.name} offers stronger intervention ROI due to current vulnerabilities.`);
    } else {
      insights.push(`${comparisonCity.name} offers stronger intervention ROI due to current vulnerabilities.`);
    }

    return insights;
  };

  const getWinner = (key: (typeof comparisonMetrics)[number]["key"]) => {
    if (!comparisonCity) return null;
    const isHigherBetter = key !== "heatRiskIndex" && key !== "airQualityIndex";
    const valA = city[key as keyof CityClimateProfile] as number;
    const valB = comparisonCity[key as keyof CityClimateProfile] as number;
    
    if (valA === valB) return "tie";
    return isHigherBetter ? (valA > valB ? "A" : "B") : (valA < valB ? "A" : "B");
  };

  const scoreA = city.climateScore;
  const scoreB = comparisonCity?.climateScore ?? 0;
  const rankA = scoreA >= scoreB ? 1 : 2;
  const rankB = scoreB > scoreA ? 1 : 2;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-climate-line shadow-panel">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-isro-900 flex items-center gap-2">
              City Comparison Command Center
            </h2>
            <p className="text-climate-muted mt-1 text-sm">Analyze relative strengths and vulnerabilities across major municipalities.</p>
          </div>
          <form onSubmit={compare} className="flex gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-climate-muted" />
              <Input 
                value={query} 
                onChange={(event) => setQuery(event.target.value)} 
                className="pl-9 bg-climate-bg border-climate-line h-10 focus-visible:ring-isro-500" 
                placeholder="Search comparison city..."
              />
            </div>
            <Button type="submit" disabled={status === "loading"} className="bg-isro-600 hover:bg-isro-700">
              Compare
            </Button>
          </form>
        </div>

        {status === "not_found" && <p className="text-sm text-saffron-700 mb-4 bg-saffron-50 p-3 rounded-lg">Comparison city not found.</p>}
        {status === "error" && <p className="text-sm text-red-700 mb-4 bg-red-50 p-3 rounded-lg">Comparison search is temporarily unavailable.</p>}

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-start">
          {/* City A Column */}
          <div className="space-y-4">
            <div className="bg-slate-50 border border-climate-line rounded-xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-isro-500"></div>
              {comparisonCity && (
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rankA === 1 ? "bg-saffron-500 text-white" : "bg-slate-200 text-slate-600"}`}>
                  #{rankA}
                </div>
              )}
              <h3 className="text-2xl font-heading font-bold text-climate-ink">{city.name}</h3>
              <p className="text-climate-muted text-sm uppercase tracking-widest">{city.state}</p>
              
              <div className="mt-6 space-y-3">
                {comparisonMetrics.map(m => {
                  const winner = getWinner(m.key);
                  const isWinner = winner === "A";
                  const isLoser = winner === "B";
                  return (
                    <div key={m.key} className={`flex justify-between items-center p-3 rounded-lg border ${isWinner ? 'bg-success-50 border-success-200' : isLoser ? 'bg-red-50 border-red-100' : 'bg-white border-climate-line'}`}>
                      <span className="text-sm text-climate-muted font-medium">{m.label}</span>
                      <span className={`font-bold font-mono ${isWinner ? 'text-success-700' : isLoser ? 'text-red-700' : 'text-climate-ink'}`}>
                        {m.key === 'greenCoverPercent' ? `${city[m.key]}%` : 
                         m.key === 'solarPotentialMw' ? `${indianFormatter.format(city[m.key] as number)} MW` : 
                         city[m.key as keyof CityClimateProfile] as string | number}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center h-full text-climate-muted opacity-50">
            <div className="w-[1px] h-32 bg-climate-line"></div>
            <div className="my-4 font-heading font-bold tracking-widest uppercase">VS</div>
            <div className="w-[1px] h-32 bg-climate-line"></div>
          </div>

          {/* City B Column */}
          <div className="space-y-4">
            {comparisonCity ? (
              <div className="bg-slate-50 border border-climate-line rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-saffron-500"></div>
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rankB === 1 ? "bg-saffron-500 text-white" : "bg-slate-200 text-slate-600"}`}>
                  #{rankB}
                </div>
                <h3 className="text-2xl font-heading font-bold text-climate-ink">{comparisonCity.name}</h3>
                <p className="text-climate-muted text-sm uppercase tracking-widest">{comparisonCity.state}</p>
                
                <div className="mt-6 space-y-3">
                  {comparisonMetrics.map(m => {
                    const winner = getWinner(m.key);
                    const isWinner = winner === "B";
                    const isLoser = winner === "A";
                    return (
                      <div key={m.key} className={`flex justify-between items-center p-3 rounded-lg border ${isWinner ? 'bg-success-50 border-success-200' : isLoser ? 'bg-red-50 border-red-100' : 'bg-white border-climate-line'}`}>
                        <span className="text-sm text-climate-muted font-medium">{m.label}</span>
                        <span className={`font-bold font-mono ${isWinner ? 'text-success-700' : isLoser ? 'text-red-700' : 'text-climate-ink'}`}>
                          {m.key === 'greenCoverPercent' ? `${comparisonCity[m.key as keyof CityClimateProfile]}%` : 
                           m.key === 'solarPotentialMw' ? `${indianFormatter.format(comparisonCity[m.key as keyof CityClimateProfile] as number)} MW` : 
                           comparisonCity[m.key as keyof CityClimateProfile] as string | number}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-climate-bg border border-dashed border-climate-line rounded-xl p-5 h-full flex items-center justify-center text-climate-muted">
                Search for a city to compare.
              </div>
            )}
          </div>
        </div>
      </div>

      {comparisonCity && (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-climate-line shadow-panel">
            <h3 className="text-lg font-heading font-bold text-climate-ink mb-6">Normalized Multi-Metric Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="metric" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey={city.name} fill="#0b3d91" radius={[4, 4, 0, 0]} maxBarSize={50} />
                  <Bar dataKey={comparisonCity.name} fill="#ff9933" radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-climate-line shadow-panel flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-heading font-bold text-climate-ink mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-isro-500" /> Automated Insights
              </h3>
              <ul className="space-y-4">
                {generateInsights().map((insight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-climate-ink leading-relaxed bg-slate-50 p-3 rounded-lg border border-climate-line">
                    <span className="w-1.5 h-1.5 rounded-full bg-isro-500 mt-2 shrink-0"></span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-climate-line pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-climate-muted mb-3">Recommended City Strategy</h3>
              <p className="text-sm text-climate-ink leading-relaxed">
                <strong className="text-isro-700">{rankA === 1 ? city.name : comparisonCity.name}</strong> demonstrates stronger overall resilience. However, <strong className="text-saffron-700">{rankA === 2 ? city.name : comparisonCity.name}</strong> exhibits critical climate risks that require prioritized intervention funding, particularly to address localized heat islands and rapid urbanization impacts.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function normalizeMetric(city: CityClimateProfile, key: (typeof comparisonMetrics)[number]["key"]) {
  if (key === "greenCoverPercent") return Math.round(city.greenCoverPercent * 3);
  if (key === "solarPotentialMw") return Math.min(100, Math.round(city.solarPotentialMw / 12));
  if (key === "airQualityIndex") return Math.max(0, Math.round(100 - city.airQualityIndex * 0.45));
  if (key === "heatRiskIndex") return Math.max(0, 100 - city.heatRiskIndex * 10);
  return city.climateScore;
}
