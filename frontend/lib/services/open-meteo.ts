export interface WeatherData {
  temperature: number;
  humidity: number;
  apparentTemperature: number;
  isAvailable: boolean;
  timestamp: string;
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
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature&timezone=auto`, { 
      next: { revalidate: 3600 },
      signal: controller.signal
    });
    clearTimeout(id);
    if (!res.ok) throw new Error("Weather fetch failed");
    const data = await res.json();
    return {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      apparentTemperature: data.current.apparent_temperature,
      isAvailable: true,
      timestamp: data.current.time,
    };
  } catch (err) {
    return { temperature: 0, humidity: 0, apparentTemperature: 0, isAvailable: false, timestamp: new Date().toISOString() };
  }
}

export async function getRealTimeAQI(lat: number, lng: number): Promise<AQIData> {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=european_aqi,pm10,pm2_5&timezone=auto`, { 
      next: { revalidate: 3600 },
      signal: controller.signal
    });
    clearTimeout(id);
    if (!res.ok) throw new Error("AQI fetch failed");
    const data = await res.json();
    
    // Open-Meteo European AQI goes 0-100, we can map it approximately or just use it.
    // For standard India AQI, we can approximate from PM2.5 or just use european_aqi * 1.5 as a rough visual scale if needed,
    // but the prompt says to use real values. Let's just return the raw European AQI or compute AQI from PM2.5.
    // Actually, European AQI is a decent proxy. We'll return it as is.
    return {
      aqi: data.current.european_aqi,
      pm10: data.current.pm10,
      pm25: data.current.pm2_5,
      isAvailable: true,
      timestamp: data.current.time,
    };
  } catch (err) {
    return { aqi: 0, pm10: 0, pm25: 0, isAvailable: false, timestamp: new Date().toISOString() };
  }
}
