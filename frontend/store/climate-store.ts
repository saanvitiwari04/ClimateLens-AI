import { create } from "zustand";
import type { CityClimateProfile, ClimateLayer, Hotspot } from "@/lib/types";

interface ClimateState {
  selectedCity: CityClimateProfile | null;
  activeLayers: Record<ClimateLayer, boolean>;
  layerLoading: Record<ClimateLayer, boolean>;
  selectedHotspot: Hotspot | null;
  setSelectedCity: (city: CityClimateProfile | null) => void;
  toggleLayer: (layer: ClimateLayer) => void;
  setLayerLoading: (layer: ClimateLayer, isLoading: boolean) => void;
  setSelectedHotspot: (hotspot: Hotspot | null) => void;
}

export const useClimateStore = create<ClimateState>((set) => ({
  selectedCity: null,
  activeLayers: {
    heat: true,
    treeCover: false,
    solar: false,
    airQuality: false,
    water: false
  },
  layerLoading: {
    heat: false,
    treeCover: false,
    solar: false,
    airQuality: false,
    water: false
  },
  selectedHotspot: null,
  setSelectedCity: (city) => set({ selectedCity: city, selectedHotspot: city?.hotspots[0] ?? null }),
  toggleLayer: (layer) =>
    set((state) => ({ activeLayers: { ...state.activeLayers, [layer]: !state.activeLayers[layer] } })),
  setLayerLoading: (layer, isLoading) => 
    set((state) => ({ layerLoading: { ...state.layerLoading, [layer]: isLoading } })),
  setSelectedHotspot: (hotspot) => set({ selectedHotspot: hotspot })
}));

