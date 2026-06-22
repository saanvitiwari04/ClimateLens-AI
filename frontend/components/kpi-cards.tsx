import type { ClimateMetric } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiCards({ metrics }: { metrics: ClimateMetric[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric) => (
        <Card key={metric.label} className="p-4 flex flex-col justify-between">
          <div>
            <div className="text-sm text-climate-muted">{metric.label}</div>
            <div className="mt-2 text-2xl font-semibold text-climate-ink">{metric.value}</div>
            <div
              className={cn(
                "mt-3 rounded-md px-2 py-1 text-xs",
                metric.status === "strong" && "bg-forest-50 text-forest-700",
                metric.status === "watch" && "bg-saffron-100 text-saffron-700",
                metric.status === "risk" && "bg-red-50 text-red-700"
              )}
            >
              {metric.trend}
            </div>
          </div>
          {metric.metricType && (
            <div className="mt-4 flex items-center justify-between text-[10px] text-climate-muted border-t border-slate-100 pt-2">
              <span className="truncate max-w-[100px]" title={metric.source}>
                {metric.source || "System"}
              </span>
              <span className={cn(
                "px-1.5 py-0.5 rounded font-bold uppercase tracking-wider text-[9px] shrink-0",
                metric.metricType === "Real" && "bg-emerald-50 text-emerald-600 border border-emerald-200",
                (metric.metricType === "Derived" || metric.metricType === "Estimated" || metric.metricType === "Unavailable") && "bg-blue-50 text-blue-600 border border-blue-200"
              )}>
                {metric.metricType === "Real" ? "Real" : "Data Derived"}
              </span>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
