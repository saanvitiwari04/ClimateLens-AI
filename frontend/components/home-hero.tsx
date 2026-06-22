"use client";

import { Search, ShieldCheck, ArrowRight, Activity, Users, MapPin, Zap, TrendingUp, Droplet, Sun } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClimateRepository } from "@/lib/repositories/climate-repository";
import type { CityClimateProfile } from "@/lib/types";
import { useClimateStore } from "@/store/climate-store";
import { indianFormatter } from "@/lib/formatters";

const loadingSteps = [
  "Fetching Satellite Layers...",
  "Evaluating Green Cover...",
  "Detecting Urban Heat Islands...",
  "Calculating Solar Potential...",
  "Generating Climate Intelligence..."
];

export function HomeHero() {
  const repository = useMemo(() => createClimateRepository(), []);
  const setSelectedCity = useClimateStore((state) => state.setSelectedCity);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<CityClimateProfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [searchState, setSearchState] = useState<"idle" | "found" | "not_found" | "error">("idle");
  const [simulatorValue, setSimulatorValue] = useState(50); // 0 to 100 representing 0 to 1 Million Trees

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
      }, 600); // 5 steps * 600ms = 3000ms (3 seconds)
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  async function handleSearch(event?: React.FormEvent, directCity?: string) {
    if (event) event.preventDefault();
    const searchQuery = directCity || query;
    if (!searchQuery) return;
    
    setIsLoading(true);
    setSearchState("idle");
    setLoadingStep(0);
    
    try {
      const cities = await repository.searchCities(searchQuery);
      setResults(cities);
      
      if (cities[0]) {
        setSearchState("found");
        setSelectedCity(cities[0]);
      } else {
        setSearchState("not_found");
      }
    } catch {
      setResults([]);
      setSearchState("error");
    } finally {
      setIsLoading(false);
    }
  }

  const impactMultiplier = simulatorValue / 100;

  return (
    <main className="min-h-screen bg-climate-bg font-sans selection:bg-isro-100">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-climate-ink/95 backdrop-blur-sm transition-all duration-300">
          <div className="flex flex-col items-center max-w-md w-full px-6">
            <div className="relative w-32 h-32 mb-8">
              <div className="absolute inset-0 rounded-full border-t-2 border-isro-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-r-2 border-saffron-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              <div className="absolute inset-4 rounded-full border-b-2 border-success-500 animate-spin" style={{ animationDuration: '2s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2 text-center h-8">
              {loadingSteps[loadingStep]}
            </h3>
            <div className="w-full bg-climate-muted/30 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-isro-500 via-saffron-500 to-success-500 transition-all duration-500 ease-out"
                style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-climate-ink">
        {/* Background Visuals */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_relief_location_map.jpg')] bg-cover bg-center mix-blend-overlay grayscale contrast-150"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-climate-ink via-climate-ink/80 to-transparent"></div>
          {/* Animated Particles & Heatmaps */}
          <div className="absolute top-[30%] left-[40%] w-64 h-64 bg-saffron-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[20%] right-[30%] w-96 h-96 bg-isro-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[40%] right-[40%] w-48 h-48 bg-success-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-isro-900/50 border border-isro-500/30 text-isro-100 text-sm font-medium mb-8 animate-fade-in backdrop-blur-md">
            <ShieldCheck className="h-4 w-4" />
            <span>Smart Cities Mission Ready</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-white tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            ClimateLens AI
          </h1>
          <h2 className="text-2xl md:text-4xl font-heading font-semibold text-saffron-500 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            India's Climate Intelligence Platform
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-climate-line mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Transforming satellite and environmental intelligence into actionable urban climate solutions. Built for urban planners, municipal corporations, and policy makers.
          </p>

          <form onSubmit={(e) => handleSearch(e)} className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-climate-muted" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-14 pl-12 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-isro-500 backdrop-blur-sm"
                placeholder="Search your city (e.g., Delhi, Mumbai)"
              />
            </div>
            <Button 
              className="h-14 px-8 bg-isro-500 hover:bg-isro-700 text-white font-semibold text-lg transition-all duration-300 shadow-premium" 
              type="submit" 
              disabled={isLoading || !query}
            >
              Analyze Your City <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <SearchStatus state={searchState} />
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="border-b border-climate-line bg-white relative z-20 -mt-10 mx-6 md:mx-auto max-w-6xl rounded-2xl shadow-premium overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-climate-line">
          <StatCard icon={<MapPin className="text-isro-500" />} value="100+" label="Cities Supported" />
          <StatCard icon={<Users className="text-saffron-500" />} value="350M+" label="Citizens Impacted" />
          <StatCard icon={<Activity className="text-success-500" />} value="12,450" label="Hotspots Identified" />
          <StatCard icon={<Zap className="text-isro-500" />} value="5,200+" label="Interventions" />
        </div>
      </section>

      {/* Featured Cities Section */}
      <section className="py-24 px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-climate-ink mb-4">Analyze Major Indian Cities</h2>
          <p className="text-climate-muted text-lg">One-click intelligence for India's rapidly growing urban centers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CityCard name="Delhi" tag="AQI Stress" color="bg-red-50 text-red-700 border-red-200" onClick={() => handleSearch(undefined, "Delhi")} />
          <CityCard name="Mumbai" tag="Urban Heat Risk" color="bg-orange-50 text-orange-700 border-orange-200" onClick={() => handleSearch(undefined, "Mumbai")} />
          <CityCard name="Bengaluru" tag="Green Cover Challenge" color="bg-success-50 text-success-700 border-success-200" onClick={() => handleSearch(undefined, "Bengaluru")} />
          <CityCard name="Hyderabad" tag="Rapid Urban Expansion" color="bg-purple-50 text-purple-700 border-purple-200" onClick={() => handleSearch(undefined, "Hyderabad")} />
          <CityCard name="Chennai" tag="Coastal Climate Exposure" color="bg-blue-50 text-blue-700 border-blue-200" onClick={() => handleSearch(undefined, "Chennai")} />
          <CityCard name="Pune" tag="Solar Opportunity" color="bg-saffron-50 text-saffron-700 border-saffron-200" onClick={() => handleSearch(undefined, "Pune")} />
        </div>
      </section>

      {/* Climate Impact Simulator */}
      <section className="py-24 px-6 bg-climate-ink text-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success-500/20 text-success-400 text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" /> Interactive Simulation
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">What if we plant 1 Million Trees in Delhi?</h2>
              <p className="text-climate-line/80 text-lg mb-8">
                Move the slider to simulate the environmental impact of large-scale afforestation on the city's microclimate.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-mono text-climate-line/60">
                  <span>0 Trees</span>
                  <span>1M Trees</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={simulatorValue}
                  onChange={(e) => setSimulatorValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-success-500"
                />
                <div className="text-right text-success-400 font-mono font-bold text-xl">
                  {indianFormatter.format(Math.round(simulatorValue * 10000))} Trees Planted
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                <div className="text-climate-line/60 text-sm mb-2">AQI Reduction</div>
                <div className="text-3xl font-mono font-bold text-success-400">-{Math.round(impactMultiplier * 45)} pts</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                <div className="text-climate-line/60 text-sm mb-2">Temp Decrease</div>
                <div className="text-3xl font-mono font-bold text-isro-400">-{Math.round(impactMultiplier * 2.5 * 10) / 10}°C</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                <div className="text-climate-line/60 text-sm mb-2">Green Cover</div>
                <div className="text-3xl font-mono font-bold text-success-500">+{Math.round(impactMultiplier * 8.4 * 10) / 10}%</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                <div className="text-climate-line/60 text-sm mb-2">Climate Score</div>
                <div className="text-3xl font-mono font-bold text-saffron-400">+{Math.round(impactMultiplier * 15)} pts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why India Needs Climate Intelligence */}
      <section className="py-24 px-6 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-climate-ink mb-4">Why India Needs Climate Intelligence</h2>
          <p className="text-climate-muted text-lg">Data-driven resilience for the world's fastest-growing urban population.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Sun className="h-8 w-8 text-red-500" />}
            title="Heatwaves Increasing"
            desc="Urban heat island effects are intensifying, making targeted cooling interventions critical."
          />
          <FeatureCard 
            icon={<Users className="h-8 w-8 text-isro-500" />}
            title="Urbanization Accelerating"
            desc="Rapid expansion requires proactive infrastructure planning to maintain livability."
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-saffron-500" />}
            title="Energy Demand Rising"
            desc="Identifying solar potential on a massive scale is necessary for sustainable growth."
          />
          <FeatureCard 
            icon={<Droplet className="h-8 w-8 text-success-500" />}
            title="Green Cover Shrinking"
            desc="Monitoring and simulating afforestation impacts is vital for restoring ecological balance."
          />
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="p-8 text-center flex flex-col items-center justify-center bg-white hover:bg-slate-50 transition-colors">
      <div className="mb-4 p-3 bg-climate-bg rounded-full">{icon}</div>
      <div className="text-3xl font-mono font-bold text-climate-ink mb-1">{value}</div>
      <div className="text-sm font-medium text-climate-muted uppercase tracking-wider">{label}</div>
    </div>
  );
}

function CityCard({ name, tag, color, onClick }: { name: string, tag: string, color: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl border border-climate-line bg-white p-6 text-left shadow-sm transition-all hover:shadow-premium hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-heading font-bold text-climate-ink group-hover:text-isro-500 transition-colors">{name}</h3>
        <ArrowRight className="h-5 w-5 text-climate-line group-hover:text-isro-500 transition-colors" />
      </div>
      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${color}`}>
        {tag}
      </span>
    </button>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-climate-line bg-white hover:shadow-panel transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-heading font-bold text-climate-ink mb-2">{title}</h3>
      <p className="text-climate-muted text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function SearchStatus({ state }: { state: "idle" | "found" | "not_found" | "error" }) {
  if (state === "idle" || state === "found") return null;

  if (state === "not_found") {
    return (
      <div className="mt-6 w-full max-w-2xl rounded-lg border border-saffron-100 bg-saffron-50 px-4 py-3 text-sm text-saffron-700 font-medium">
        City Not Found. Try a more specific city, district, or state name in India.
      </div>
    );
  }

  return (
    <div className="mt-6 w-full max-w-2xl rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700 font-medium">
      City search is temporarily unavailable. Please try again.
    </div>
  );
}
