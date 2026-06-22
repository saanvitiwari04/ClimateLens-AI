"use client";

import { Card } from "@/components/ui/card";
import { createScoreMethodology, scoreComponents } from "@/lib/climate-score";
import type { CityClimateProfile } from "@/lib/types";

export function ClimateScoreMethodology({ city }: { city: CityClimateProfile }) {
  const methodology = city.scoreMethodology ?? createScoreMethodology(city);
  const components = scoreComponents(city);

  return (
    <Card className="p-4">
      <h2 className="text-sm font-semibold text-climate-ink">Climate Score Methodology</h2>
      <p className="mt-2 text-sm leading-6 text-climate-muted">{methodology.formula}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {components.map((component) => (
          <div key={component.label} className="rounded-md border border-climate-line p-3">
            <div className="text-xs text-climate-muted">{component.label} Weight</div>
            <div className="mt-1 text-lg font-semibold text-climate-ink">{Math.round(component.weight * 100)}%</div>
            <div className="mt-2 text-xs text-climate-muted">Contribution: {component.contribution} pts</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <InputReadout label="Heat Risk Index" value={methodology.inputs.heatRiskIndex} />
        <InputReadout label="Green Cover" value={`${methodology.inputs.greenCoverPercent}%`} />
        <InputReadout label="Solar Potential" value={`${methodology.inputs.solarPotentialMw.toLocaleString()} MW`} />
        <InputReadout label="Air Quality" value={`AQI ${methodology.inputs.airQualityIndex}`} />
      </div>
    </Card>
  );
}

function InputReadout({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-md bg-forest-50 px-3 py-2">
      <div className="text-xs text-climate-muted">{label}</div>
      <div className="mt-1 text-sm font-semibold text-forest-900">{value}</div>
    </div>
  );
}
