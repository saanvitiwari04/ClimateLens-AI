import type { ElementType } from "react";

export function SwitchRow({
  checked,
  icon: Icon,
  label,
  onChange
}: {
  checked: boolean;
  icon: ElementType;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left text-sm transition-all duration-200 ${
        checked 
          ? "border-success-500 bg-success-50 shadow-sm" 
          : "border-climate-line bg-white hover:bg-slate-50"
      }`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <Icon className={`h-5 w-5 shrink-0 ${checked ? "text-success-600" : "text-climate-muted"}`} />
        <span className={`truncate font-medium ${checked ? "text-success-900" : "text-climate-ink"}`}>{label}</span>
      </span>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-bold tracking-widest uppercase ${checked ? "text-success-600" : "text-climate-muted/50"}`}>
          {checked ? "ON" : "OFF"}
        </span>
        <span
          className={`h-6 w-11 rounded-full p-1 transition-colors ${checked ? "bg-success-500" : "bg-climate-line"}`}
          aria-hidden="true"
        >
          <span
            className={`block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`}
          />
        </span>
      </div>
    </button>
  );
}

