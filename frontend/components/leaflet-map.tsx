"use client";

import { Circle, MapContainer, Marker, Popup, TileLayer, useMap, FeatureGroup, Polygon } from "react-leaflet";
import L from "leaflet";
import type { CityClimateProfile } from "@/lib/types";
import { useClimateStore } from "@/store/climate-store";
import { OsmLayer } from "./osm-layer";
import { SyntheticSolarLayer, SyntheticAqiLayer } from "./synthetic-layers";
import { getHotspotRecommendation } from "@/lib/roi-engine";

function MapSync({ city }: { city: CityClimateProfile }) {
  const map = useMap();
  map.setView([city.coordinates.lat, city.coordinates.lng], 12);
  return null;
}

const getHotspotColor = (riskCategory: string) => {
  switch (riskCategory) {
    case "Severe": return "#dc2626";  // Red
    case "High":   return "#ea580c";  // Orange
    case "Moderate": return "#ca8a04"; // Amber
    default:       return "#16a34a";  // Green
  }
};

export function LeafletMap({ city }: { city: CityClimateProfile }) {
  const activeLayers = useClimateStore((state) => state.activeLayers);
  const setSelectedHotspot = useClimateStore((state) => state.setSelectedHotspot);

  return (
    <MapContainer center={[city.coordinates.lat, city.coordinates.lng]} zoom={12} scrollWheelZoom className="h-full">
      <MapSync city={city} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Municipal boundary outline */}
      {city.boundary && city.boundary.map((ring, idx) => (
        <Polygon
          key={idx}
          positions={ring.map(pt => [pt.lat, pt.lng])}
          pathOptions={{ color: "#3b82f6", fillColor: "#3b82f6", fillOpacity: 0.04, weight: 2, dashArray: "6, 4" }}
        />
      ))}

      {activeLayers.water     && <OsmLayer city={city} type="water" />}
      {activeLayers.treeCover && <OsmLayer city={city} type="treeCover" />}
      {activeLayers.solar     && <SyntheticSolarLayer city={city} />}
      {activeLayers.airQuality && <SyntheticAqiLayer city={city} />}

      {activeLayers.heat && city.hotspots.map((hotspot) => {
        const color = getHotspotColor(hotspot.riskCategory);
        const icon = new L.DivIcon({
          className: "",
          html: `<div style="height:18px;width:18px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 10px rgba(0,0,0,.35)"></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9]
        });

        return (
          <FeatureGroup key={hotspot.id}>
            <Circle
              center={[hotspot.coordinates.lat, hotspot.coordinates.lng]}
              radius={hotspot.radiusMeters ?? 500}
              pathOptions={{ color, fillColor: color, fillOpacity: 0.18, weight: 2 }}
            />
            <Marker
              position={[hotspot.coordinates.lat, hotspot.coordinates.lng]}
              icon={icon}
              eventHandlers={{ click: () => setSelectedHotspot(hotspot) }}
            >
              <Popup className="min-w-[220px]">
                <div className="flex flex-col gap-1">
                  <strong className="text-sm border-b pb-1 mb-1">{hotspot.name}</strong>
                  <div className="text-xs">
                    <span className="font-semibold">Severity:</span> {hotspot.riskCategory}
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold">Temperature:</span> {hotspot.averageTemperatureC}°C
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold">Intelligence:</span>{" "}
                    {hotspot.confidenceScore === "High" ? "High" : hotspot.confidenceScore === "Medium" ? "Medium" : "Data Derived"}
                  </div>
                  {hotspot.signals && (
                    <>
                      <div className="text-xs mt-1 pt-1 border-t">
                        <span className="font-semibold">Building Density:</span> {(hotspot.signals.buildingDensity * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold">Road Density:</span> {(hotspot.signals.roadDensity * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold">Vegetation:</span> {(hotspot.signals.vegetationProximity * 100).toFixed(0)}%
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold">Water Proximity:</span> {(hotspot.signals.waterProximity * 100).toFixed(0)}%
                      </div>
                    </>
                  )}
                  {(() => {
                    const rec = getHotspotRecommendation(hotspot, city);
                    return (
                      <div className="mt-2 pt-2 border-t">
                        <div className="text-xs">
                          <span className="font-semibold text-green-700">Recommended:</span> {rec.action}
                        </div>
                        <div className="text-xs mt-1">
                          <span className="font-semibold text-green-700">Benefit:</span> {rec.expectedBenefit}
                        </div>
                        <div className="text-xs mt-1 italic text-gray-600">{rec.reasoning}</div>
                      </div>
                    );
                  })()}
                </div>
              </Popup>
            </Marker>
          </FeatureGroup>
        );
      })}
    </MapContainer>
  );
}
