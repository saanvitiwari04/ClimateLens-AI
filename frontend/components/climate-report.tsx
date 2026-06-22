"use client";

import { FileDown, Printer, FileText, BarChart3, AlertTriangle, Lightbulb } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { simulateImpact } from "@/lib/impact-model";
import type { CityClimateProfile } from "@/lib/types";
import { useClimateStore } from "@/store/climate-store";
import { indianFormatter } from "@/lib/formatters";

export function ClimateReport({ city }: { city: CityClimateProfile }) {
  const selectedHotspot = useClimateStore((state) => state.selectedHotspot);
  const simulation = useMemo(
    () =>
      simulateImpact(
        city,
        {
          trees: 10000,
          solarPanels: 50,
          greenRoofSqm: 25000,
          reflectiveRoofSqm: 50000
        },
        selectedHotspot
      ),
    [city, selectedHotspot]
  );

  function exportReport() {
    alert("Exporting professional PDF document...");
  }

  const [currentDate, setCurrentDate] = useState<string>("");
  const [isoDate, setIsoDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }));
    setIsoDate(new Date().toISOString());
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold text-climate-ink">Municipal Assessment Report</h2>
          <p className="text-climate-muted text-sm mt-1">Preview of the printable executive document.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="bg-white" onClick={exportReport}>
            <FileText className="w-4 h-4 mr-2" /> Download Summary
          </Button>
          <Button className="bg-isro-600 hover:bg-isro-700 text-black" onClick={exportReport}>
            <FileDown className="w-4 h-4 mr-2" /> Download PDF
          </Button>
          <Button className="bg-success-600 hover:bg-success-700 text-black" onClick={exportReport}>
            <Printer className="w-4 h-4 mr-2" /> Generate Detailed Report
          </Button>
        </div>
      </div>

      {/* A4 Report Paper Preview */}
      <div className="bg-white border border-climate-line shadow-premium rounded-sm p-12 lg:p-16 text-climate-ink relative overflow-hidden">
        {/* Print-style header */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-isro-600 via-saffron-500 to-success-600"></div>
        
        <div className="border-b-2 border-climate-ink pb-8 mb-8 flex justify-between items-end">
          <div>
            <div className="text-sm font-bold tracking-widest uppercase text-isro-700 mb-2">ClimateLens AI Official Report</div>
            <h1 className="text-4xl font-heading font-black text-climate-ink">{city.name}</h1>
            <p className="text-xl text-climate-muted mt-1">{city.state}, {city.country}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-climate-muted mb-1">Report Date</div>
            <div className="text-lg font-bold">{currentDate}</div>
            <div className="mt-4 px-4 py-2 bg-slate-50 border border-slate-200 rounded text-center">
              <div className="text-xs uppercase tracking-wider text-climate-muted font-bold">Climate Score</div>
              <div className="text-3xl font-mono font-black text-isro-700">{city.climateScore}</div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-heading font-bold text-isro-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-isro-600" /> Executive Summary
            </h2>
            <p className="text-base leading-relaxed text-climate-ink mb-4 text-justify">
              This automated assessment provides a comprehensive evaluation of the climate resilience and environmental vulnerabilities for the municipal limits of {city.name}. Drawing upon high-fidelity satellite imagery, meteorological data, and urbanization indices, ClimateLens AI has identified structural weaknesses in urban heat management and air quality mitigation. The city currently ranks in the {city.climateScore < 50 ? 'lower' : 'upper'} quartile for baseline resilience, necessitating immediate policy intervention.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-isro-900 mb-4">Climate Indicators Assessment</h2>
            <div className="overflow-hidden border border-climate-line rounded-lg">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-climate-line text-xs uppercase tracking-wider text-climate-muted font-bold">
                  <tr>
                    <th className="p-4 w-1/3">Indicator</th>
                    <th className="p-4 w-1/4">Measured Value</th>
                    <th className="p-4 w-1/4">Risk / Status</th>
                    <th className="p-4">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-climate-line">
                  <tr>
                    <td className="p-4 font-semibold">Urban Heat Risk Index</td>
                    <td className="p-4 font-mono">{city.heatRiskIndex} / 10</td>
                    <td className="p-4"><span className={`px-2 py-1 text-xs rounded-full font-bold ${city.heatRiskIndex > 7 ? 'bg-red-100 text-red-700' : 'bg-saffron-100 text-saffron-700'}`}>{city.heatRiskIndex > 7 ? 'Critical' : 'Elevated'}</span></td>
                    <td className="p-4 text-red-600 font-bold">Worsening</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold">Air Quality Index (AQI)</td>
                    <td className="p-4 font-mono">{city.airQualityIndex}</td>
                    <td className="p-4"><span className={`px-2 py-1 text-xs rounded-full font-bold ${city.airQualityIndex > 150 ? 'bg-red-100 text-red-700' : 'bg-saffron-100 text-saffron-700'}`}>{city.airQualityIndex > 150 ? 'Unhealthy' : 'Moderate'}</span></td>
                    <td className="p-4 text-red-600 font-bold">Worsening</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Vegetative Green Cover</td>
                    <td className="p-4 font-mono">{city.greenCoverPercent}%</td>
                    <td className="p-4"><span className={`px-2 py-1 text-xs rounded-full font-bold ${city.greenCoverPercent < 15 ? 'bg-red-100 text-red-700' : 'bg-success-100 text-success-700'}`}>{city.greenCoverPercent < 15 ? 'Deficient' : 'Optimal'}</span></td>
                    <td className="p-4 text-saffron-600 font-bold">Stagnant</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold">Solar Rooftop Potential</td>
                    <td className="p-4 font-mono">{indianFormatter.format(city.solarPotentialMw)} MW</td>
                    <td className="p-4"><span className="px-2 py-1 text-xs rounded-full font-bold bg-success-100 text-success-700">Untapped</span></td>
                    <td className="p-4 text-success-600 font-bold">Improving</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-isro-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-saffron-600" /> Priority Hotspots
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {city.hotspots.slice(0, 4).map((hotspot) => (
                <div key={hotspot.name} className="border border-climate-line p-4 rounded bg-white">
                  <div className="font-bold text-climate-ink mb-1">{hotspot.name}</div>
                  <div className="text-xs text-climate-muted mb-2">Category: <span className="font-semibold text-red-600">{hotspot.riskCategory}</span></div>
                  <div className="text-sm leading-relaxed">{hotspot.suggestedAction}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-isro-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-success-600" /> Recommended Actions & Projected Outcomes
            </h2>
            <p className="text-sm mb-6 text-climate-muted">Based on simulated interventions (10k trees, 50MW solar, 75k sqm engineered roofs).</p>
            
            <div className="bg-slate-50 border border-climate-line p-6 rounded text-sm">
              <div className="font-bold text-base mb-4 text-climate-ink">Implementation Roadmap:</div>
              <ul className="list-decimal pl-5 space-y-3 mb-6">
                {simulation.recommendations.map((rec, i) => (
                  <li key={i}>
                    <strong>{rec.name}:</strong> {rec.rationale}
                  </li>
                ))}
              </ul>

              <div className="font-bold text-base mb-4 text-climate-ink pt-4 border-t border-climate-line">Simulated Impact Assessment:</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-3 border border-success-200 rounded text-center">
                  <div className="text-xs text-climate-muted mb-1 font-bold uppercase">Temperature</div>
                  <div className="text-xl font-mono font-black text-isro-600">-{simulation.temperatureReductionC.toFixed(1)}°C</div>
                </div>
                <div className="bg-white p-3 border border-success-200 rounded text-center">
                  <div className="text-xs text-climate-muted mb-1 font-bold uppercase">Carbon Offset</div>
                  <div className="text-xl font-mono font-black text-isro-600">{indianFormatter.format(Math.round(simulation.carbonReductionTonsPerYear))} t</div>
                </div>
                <div className="bg-white p-3 border border-success-200 rounded text-center">
                  <div className="text-xs text-climate-muted mb-1 font-bold uppercase">Green Cover</div>
                  <div className="text-xl font-mono font-black text-success-600">+{simulation.greenCoverImprovementPercent.toFixed(1)}%</div>
                </div>
                <div className="bg-white p-3 border border-success-200 rounded text-center">
                  <div className="text-xs text-climate-muted mb-1 font-bold uppercase">New Score</div>
                  <div className="text-xl font-mono font-black text-saffron-600">{simulation.updatedClimateScore}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t-2 border-climate-ink text-center">
            <h2 className="text-lg font-heading font-bold text-climate-ink mb-2">Final Recommendation</h2>
            <p className="text-base text-climate-ink max-w-2xl mx-auto italic">
              "To secure long-term municipal resilience, {city.name} must immediately direct capital expenditure towards localized cooling infrastructure and targeted afforestation in identified High-Risk Hotspots."
            </p>
            <div className="mt-8 text-xs text-climate-muted font-mono">
              GENERATED BY CLIMATELENS AI INTELLIGENCE ENGINE • {isoDate}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
