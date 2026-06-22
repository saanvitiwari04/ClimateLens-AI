import { geocodeLocation } from "./lib/geocoding/nominatim";
import { getRealTimeWeather, getRealTimeAQI } from "./lib/services/open-meteo";
import { fetchCityAreaMetrics, parseGeoJsonToBoundary } from "./lib/geospatial/overpass";
import { generateGeospatialHotspots } from "./lib/geospatial/hotspot-engine";
import type { Coordinates } from "./lib/types";

const targetCities = [
  "Delhi, India",
  "Mumbai, India",
  "Bengaluru, India",
  "Hyderabad, India",
  "Chennai, India",
  "Jaipur, India",
  "Pune, India",
  "Varanasi, India",
  "Ahmedabad, India",
  "Indore, India",
  "Bhopal, India",
  "Surat, India",
  "Noida, India",
  "Gurugram, India",
  "Patna, India",
  "Chandigarh, India",
  "Prayagraj, India"
];

async function run() {
  console.log("Starting full validation run for 17 cities...");
  
  for (const query of targetCities) {
    console.log(`\n==================================================`);
    console.log(`Processing: ${query}`);
    try {
      const location = await geocodeLocation(query);
      if (!location) {
        console.error(`Could not geocode city: ${query}`);
        continue;
      }
      
      console.log(`Geocoded to: ${location.displayName}`);
      console.log(`Coordinates: Lat ${location.coordinates.lat}, Lng ${location.coordinates.lng}`);
      console.log(`Bounding Box: ${JSON.stringify(location.boundingbox)}`);
      
      const boundary = location.geojson ? parseGeoJsonToBoundary(location.geojson) : [];
      console.log(`Municipal Boundary Ring Count: ${boundary.length}`);
      
      // Get weather & AQI
      const weather = await getRealTimeWeather(location.coordinates.lat, location.coordinates.lng);
      const aqi = await getRealTimeAQI(location.coordinates.lat, location.coordinates.lng);
      
      // Run municipal boundary metrics
      const areaMetrics = await fetchCityAreaMetrics(location.boundingbox || [], boundary);
      
      // Generate hotspots
      const hotspots = await generateGeospatialHotspots(location, weather.temperature, aqi.aqi || 50);
      
      const greenCoverPercent = areaMetrics.totalAreaSqMeters > 0 
        ? (areaMetrics.vegetatedAreaSqMeters / areaMetrics.totalAreaSqMeters) * 100 
        : 0;
      const waterCoveragePercent = areaMetrics.totalAreaSqMeters > 0 
        ? (areaMetrics.waterAreaSqMeters / areaMetrics.totalAreaSqMeters) * 100 
        : 0;
      
      const solarPotentialMw = areaMetrics.buildingAreaSqMeters > 0 
        ? Math.round((areaMetrics.buildingAreaSqMeters * 0.30 * 0.15) / 1000) 
        : 0;
      
      const estimatedBuildingAreaSqM = solarPotentialMw * 22222;
      const carbonEstimate = solarPotentialMw > 0 
        ? Math.round(estimatedBuildingAreaSqM * 0.5) 
        : 0;
        
      console.log(`\nResults for ${location.name}:`);
      console.log(JSON.stringify({
        city: location.name,
        AQI: aqi.isAvailable ? aqi.aqi : null,
        PM25: aqi.isAvailable ? aqi.pm25 : null,
        Temperature: weather.isAvailable ? weather.temperature : null,
        GreenCoverPercent: greenCoverPercent.toFixed(2) + "%",
        WaterCoveragePercent: waterCoveragePercent.toFixed(2) + "%",
        SolarPotentialMw: solarPotentialMw,
        CarbonEstimateTonnes: carbonEstimate,
        HotspotCount: hotspots.length,
        HotspotNames: hotspots.map(h => h.name)
      }, null, 2));
      
      // Delay to avoid Nominatim rate limit
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console.error(`Error processing ${query}:`, e);
    }
  }
}

run().catch(e => console.error(e));
