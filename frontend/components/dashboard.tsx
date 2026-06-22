"use client";

import { 
  ArrowLeft, LayoutDashboard, Map as MapIcon, BarChart2, 
  FileText, Zap, ChevronLeft, ChevronRight 
} from "lucide-react";
import { useState } from "react";
import { ClimateReport } from "@/components/climate-report";
import { ClimateMap } from "@/components/climate-map";
import { ClimateScoreMethodology } from "@/components/climate-score-methodology";
import { ComparisonMode } from "@/components/comparison-mode";
import { HotspotPanel } from "@/components/hotspot-panel";
import { KpiCards } from "@/components/kpi-cards";
import { LayerControls } from "@/components/layer-controls";
import { ROIEngineSummaryPanel, ROIEngineCharts } from "@/components/roi-engine";
import { ActionSimulator } from "@/components/action-simulator";
import { Button } from "@/components/ui/button";
import { useClimateStore } from "@/store/climate-store";

type Tab = "overview" | "map" | "compare" | "reports" | "action-plan";

export function Dashboard() {
  const selectedCity = useClimateStore((state) => state.selectedCity);
  const selectedHotspot = useClimateStore((state) => state.selectedHotspot);
  const setSelectedCity = useClimateStore((state) => state.setSelectedCity);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!selectedCity) return null;

  return (
    <div className="flex h-screen w-full bg-climate-bg overflow-hidden font-sans selection:bg-isro-100">
      {/* Sidebar Navigation */}
      <aside 
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white border-r border-climate-line flex flex-col transition-all duration-300 z-20 shadow-panel`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-climate-line">
          {isSidebarOpen ? (
            <div className="font-heading font-bold text-isro-900 text-lg truncate">ClimateLens AI</div>
          ) : (
            <div className="font-heading font-bold text-isro-900 text-lg mx-auto">CL</div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-climate-muted hover:text-isro-500"
          >
            {isSidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        </div>

        <div className="p-3">
          <Button 
            variant="ghost" 
            className={`w-full justify-start text-climate-muted hover:bg-climate-bg mb-6 ${!isSidebarOpen && "px-2 justify-center"}`}
            onClick={() => setSelectedCity(null)}
          >
            <ArrowLeft className={`h-4 w-4 ${isSidebarOpen && "mr-2"}`} />
            {isSidebarOpen && <span>Back to Search</span>}
          </Button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <NavItem id="overview" icon={<LayoutDashboard />} label="Overview" activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />
          <NavItem id="map" icon={<MapIcon />} label="Climate Map" activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />
          <NavItem id="compare" icon={<BarChart2 />} label="Compare Cities" activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />
          <NavItem id="reports" icon={<FileText />} label="Reports" activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />
          <NavItem id="action-plan" icon={<Zap />} label="Action Plan" activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />
        </nav>

        <div className="p-4 border-t border-climate-line">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && "justify-center"}`}>
            <div className="w-8 h-8 rounded-full bg-isro-100 text-isro-700 flex items-center justify-center font-bold text-xs">
              {selectedCity.name.charAt(0)}
            </div>
            {isSidebarOpen && (
              <div className="overflow-hidden">
                <div className="text-sm font-semibold text-climate-ink truncate">{selectedCity.name}</div>
                <div className="text-xs text-climate-muted truncate">{selectedCity.state}</div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-climate-line flex items-center justify-between px-6 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-heading font-semibold text-isro-900">
              {activeTab === "overview" && "Executive Overview"}
              {activeTab === "map" && "Interactive Climate Map"}
              {activeTab === "compare" && "City Comparison"}
              {activeTab === "reports" && "Reporting Center"}
              {activeTab === "action-plan" && "Intervention Action Plan"}
            </h1>
            <span className="rounded-full bg-isro-50 px-3 py-1 text-xs font-medium text-isro-700 border border-isro-100">
              {selectedCity.name}
            </span>
          </div>
          <div className="text-sm font-medium text-climate-muted flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse"></div>
            Live Session Active
          </div>
        </header>

        {/* Data source notice — only shown when Overpass timed out for non-cached cities */}
        {selectedCity.dataNotice && selectedCity.dataNotice.includes("timed out") && (
          <div className="bg-blue-50 border-b border-blue-200 px-6 py-2 flex items-center gap-2 text-blue-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
            {selectedCity.dataNotice}
          </div>
        )}

        {/* Tab Content */}
        <div className="flex-1 overflow-auto bg-climate-bg p-6">
          <div className="mx-auto max-w-7xl h-full">
            {activeTab === "overview" && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 rounded-xl border border-climate-line shadow-panel">
                  <h2 className="text-lg font-heading font-bold text-climate-ink mb-4">Climate Score & Key Metrics</h2>
                  <KpiCards metrics={selectedCity.metrics} />
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-climate-line shadow-panel">
                    <h2 className="text-lg font-heading font-bold text-climate-ink mb-4">Executive Summary</h2>
                    <p className="text-climate-muted leading-relaxed mb-4">
                      {selectedHotspot ? (
                        <>
                          Focusing on <strong>{selectedHotspot.name}</strong>, which is classified as <strong className="text-red-700">{selectedHotspot.riskCategory}</strong> risk with temperatures averaging <strong>{selectedHotspot.averageTemperatureC}°C</strong>. 
                          Immediate interventions such as {selectedHotspot.suggestedAction.toLowerCase()} are recommended to mitigate up to 30% of localized heat stress in this specific region.
                        </>
                      ) : (
                        <>
                          {selectedCity.name} is currently facing significant climate challenges, particularly in the areas of urban heat and rapid development. The data indicates that immediate interventions could mitigate up to 30% of localized heat stress across the metropolitan footprint.
                        </>
                      )}
                    </p>
                    <ClimateScoreMethodology city={selectedCity} />
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-climate-line shadow-panel">
                    <h2 className="text-lg font-heading font-bold text-climate-ink mb-4">Top Recommendations</h2>
                    <HotspotPanel />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "map" && (
              <div className="h-full flex flex-col bg-white rounded-xl border border-climate-line shadow-panel overflow-hidden animate-fade-in">
                <div className="flex flex-1 h-[calc(100vh-160px)]">
                  <div className="w-80 border-r border-climate-line overflow-y-auto p-4 bg-slate-50">
                    <LayerControls city={selectedCity} />
                  </div>
                  <div className="flex-1 relative bg-[#e8ebe3]">
                     <ClimateMap city={selectedCity} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "compare" && (
              <div className="space-y-6 animate-fade-in">
                <ComparisonMode city={selectedCity} />
              </div>
            )}

            {activeTab === "reports" && (
              <div className="space-y-6 animate-fade-in">
                <ClimateReport city={selectedCity} />
              </div>
            )}

            {activeTab === "action-plan" && (
              <div className="space-y-6 animate-fade-in">
                <ActionSimulator city={selectedCity} />
                <div className="grid lg:grid-cols-3 gap-6 mt-6">
                  <div className="lg:col-span-1">
                    <ROIEngineSummaryPanel city={selectedCity} />
                  </div>
                  <div className="lg:col-span-2">
                    <ROIEngineCharts city={selectedCity} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ 
  id, 
  icon, 
  label, 
  activeTab, 
  setActiveTab,
  isOpen
}: { 
  id: Tab, 
  icon: React.ReactNode, 
  label: string, 
  activeTab: Tab, 
  setActiveTab: (tab: Tab) => void,
  isOpen: boolean
}) {
  const isActive = activeTab === id;
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center ${isOpen ? 'justify-start px-3' : 'justify-center'} py-3 rounded-lg transition-all duration-200 group ${
        isActive 
          ? "bg-isro-50 text-isro-700 font-medium" 
          : "text-climate-muted hover:bg-slate-50 hover:text-climate-ink"
      }`}
      title={!isOpen ? label : undefined}
    >
      <div className={`${isActive ? "text-isro-600" : "text-climate-muted group-hover:text-climate-ink"} ${isOpen ? 'mr-3' : ''}`}>
        {icon}
      </div>
      {isOpen && <span>{label}</span>}
    </button>
  );
}
