import { geocodeLocation } from "./lib/geocoding/nominatim";
import { createFallbackClimateProfile } from "./lib/fallback-profile";

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
  "Lucknow, India"
];

async function run() {
  console.log("Starting fast loading validation run for 17 target cities...");
  console.log("Goal: sub-2-second city profile generation using hybrid cached architecture.");
  
  let successCount = 0;
  
  for (const query of targetCities) {
    console.log(`\n==================================================`);
    console.log(`Processing: ${query}`);
    try {
      const geoStart = Date.now();
      const location = await geocodeLocation(query);
      const geoDuration = Date.now() - geoStart;
      
      if (!location) {
        console.error(`[-] Could not geocode city: ${query}`);
        continue;
      }
      
      const profileStart = Date.now();
      const profile = await createFallbackClimateProfile(location);
      const profileDuration = Date.now() - profileStart;
      const totalDuration = Date.now() - geoStart;
      
      console.log(`[+] Geocoded name: ${location.displayName}`);
      console.log(`[+] Resolved profile name: ${profile.name}`);
      console.log(`[+] Profile Type: ${profile.profileType}`);
      console.log(`[+] Data Notice: ${profile.dataNotice}`);
      console.log(`[+] Climate Score: ${profile.climateScore}`);
      console.log(`[+] Hotspots Count: ${profile.hotspots.length}`);
      console.log(`[+] Geocoding Latency: ${geoDuration}ms`);
      console.log(`[+] Profile Generation Latency: ${profileDuration}ms`);
      console.log(`[+] Total Latency: ${totalDuration}ms`);
      
      if (profileDuration < 2000) {
        console.log(`[✓] SUCCESS: Profile generated under 2.0s (${(profileDuration / 1000).toFixed(2)}s)`);
        successCount++;
      } else {
        console.warn(`[!] WARNING: Profile generated in ${(profileDuration / 1000).toFixed(2)}s (Target: <2.0s)`);
      }
      
      // Short delay to respect Nominatim geocoding rate limits
      await new Promise(r => setTimeout(r, 1000));
    } catch (e: any) {
      console.error(`[-] Error processing ${query}:`, e.message || e);
    }
  }
  
  console.log(`\n==================================================`);
  console.log(`Validation Complete: ${successCount} / ${targetCities.length} cities met the sub-2-second threshold.`);
}

run().catch(e => console.error(e));
