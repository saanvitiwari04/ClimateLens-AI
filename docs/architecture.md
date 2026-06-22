# ClimateLens AI Architecture

## MVP contract

The frontend talks to a `ClimateRepository` interface. Today it can use bundled provider data, or call the FastAPI backend when `NEXT_PUBLIC_API_BASE_URL` is set.

## Backend service boundaries

- `WeatherService`: current and historical temperature, humidity, heat-index feeds
- `SatelliteImageryService`: NDVI, surface temperature, impervious surface, tree canopy
- `OpenStreetMapService`: city boundaries, roads, water bodies, building footprints
- `EnvironmentalDatasetService`: AQI, emissions, municipal and public climate datasets
- `NominatimGeocodingService`: OpenStreetMap Nominatim location resolution for city, state, country, latitude, and longitude
- `FallbackClimateProfileService`: coordinate-based estimated climate profiles when no enhanced dataset exists
- `PostGisRepository`: future spatial storage, geometry queries, layer tileset metadata

## Dynamic search flow

1. Search enhanced city datasets first.
2. If no enhanced dataset matches, resolve the location through OpenStreetMap Nominatim.
3. If Nominatim finds a location, generate a fallback climate profile from latitude, longitude, and location metadata.
4. If no location is found, return an empty result so the UI can show a clear "City Not Found" state.

## Geospatial hotspot engine

The frontend estimated-profile path now requests OpenStreetMap urban signals through Overpass. Candidate heat regions are scored from:

- building density
- road density
- heat-oriented land use, such as commercial, industrial, retail, and residential areas
- vegetation proximity, such as parks, gardens, forests, grassland, and woodland
- water proximity, such as water bodies and waterways

If Overpass is unavailable or rate-limited, the app keeps the dashboard usable with deterministic coordinate-based fallback hotspots. This fallback is visibly estimated and should be replaced by server-side cached OSM, NASA, weather, satellite, and PostGIS-derived layers in production.

## Product workflows

- `ClimateScoreMethodology` explains score weights and component contributions.
- `ComparisonMode` resolves a second city through the same repository contract and compares normalized metrics.
- `ClimateReport` exports a PDF-ready HTML report. Production PDF export should render this server-side with persisted simulation results and map tile snapshots.

## Future production path

1. Move fixture city profiles into PostgreSQL.
2. Store geometry and raster-derived summaries in PostGIS-aware tables.
3. Add async ingestion jobs for satellite and weather refreshes.
4. Generate vector tiles or signed tile URLs for high-volume map layers.
5. Version the impact model assumptions by geography and data source.
