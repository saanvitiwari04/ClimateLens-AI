export interface WeatherData {
  temperature: number;
  humidity: number;
  apparentTemperature: number;
  isAvailable: boolean;
  timestamp: string;
  missingFields?: string[];
}

export interface AQIData {
  aqi: number;
  pm10: number;
  pm25: number;
  isAvailable: boolean;
  timestamp: string;
}

export async function getRealTimeWeather(lat: number, lng: number): Promise<WeatherData> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature&timezone=auto`,
      { next: { revalidate: 3600 }, signal: controller.signal }
    );
    clearTimeout(id);
    if (!res.ok) throw new Error("Weather fetch failed");
    const data = await res.json();

    const missingFields: string[] = [];
    const temp = data.current?.temperature_2m;
    const humidity = data.current?.relative_humidity_2m;
    const apparent = data.current?.apparent_temperature;

    if (temp == null) { missingFields.push("temperature_2m"); console.warn("[ClimateLens] Weather field missing: temperature_2m"); }
    if (humidity == null) { missingFields.push("relative_humidity_2m"); console.warn("[ClimateLens] Weather field missing: relative_humidity_2m"); }
    if (apparent == null) { missingFields.push("apparent_temperature"); console.warn("[ClimateLens] Weather field missing: apparent_temperature"); }

    const hasCore = temp != null && apparent != null;
    if (!hasCore) throw new Error(`Missing core weather fields: ${missingFields.join(", ")}`);

    return {
      temperature: temp,
      humidity: humidity ?? 0,
      apparentTemperature: apparent,
      isAvailable: true,
      timestamp: data.current?.time ?? new Date().toISOString(),
      missingFields: missingFields.length > 0 ? missingFields : undefined,
    };
  } catch (err) {
    console.warn("[ClimateLens] Weather unavailable:", (err as Error).message);
    return { temperature: 0, humidity: 0, apparentTemperature: 0, isAvailable: false, timestamp: new Date().toISOString() };
  }
}

export async function getRealTimeAQI(lat: number, lng: number): Promise<AQIData> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=european_aqi,pm10,pm2_5&timezone=auto`,
      { next: { revalidate: 3600 }, signal: controller.signal }
    );
    clearTimeout(id);
    if (!res.ok) throw new Error("AQI fetch failed");
    const data = await res.json();
    return {
      aqi: data.current.european_aqi,
      pm10: data.current.pm10,
      pm25: data.current.pm2_5,
      isAvailable: true,
      timestamp: data.current.time,
    };
  } catch (err) {
    console.warn("[ClimateLens] AQI unavailable:", (err as Error).message);
    return { aqi: 0, pm10: 0, pm25: 0, isAvailable: false, timestamp: new Date().toISOString() };
  }
}

/** CPCB-style AQI color for map overlays */
export function getAqiColor(aqi: number): string {
  if (aqi <= 50) return "#22c55e";   // Good – Green
  if (aqi <= 100) return "#84cc16";  // Satisfactory – Light Green
  if (aqi <= 200) return "#eab308";  // Moderate – Yellow
  if (aqi <= 300) return "#f97316";  // Poor – Orange
  if (aqi <= 400) return "#ef4444";  // Very Poor – Red
  return "#991b1b";                   // Severe – Dark Red
}

/** Derive heat risk category purely from temperature (used when weather API partially fails) */
export function deriveHeatRiskFromTemp(tempC: number): "Severe" | "High" | "Moderate" | "Low" {
  if (tempC > 40) return "Severe";
  if (tempC >= 35) return "High";
  if (tempC >= 30) return "Moderate";
  return "Low";
}
