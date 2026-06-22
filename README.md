# ClimateLens AI

ClimateLens AI is a production-oriented MVP for city climate intelligence and intervention simulation. It combines a professional urban-planning interface, map layers, KPI cards, hotspot analysis, and evidence-based impact estimates.

## Stack

- Frontend: Next.js App Router, TypeScript, Tailwind CSS, Zustand, Recharts, Leaflet
- Backend: FastAPI, Python service layers
- Future database target: PostgreSQL + PostGIS

## Run locally

```bash
npm install
npm run dev
```

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -e backend
npm run backend
```

The frontend expects `NEXT_PUBLIC_API_BASE_URL` when connected to the API. Without it, the app uses the same typed repository contract with bundled provider data for a working MVP experience.

## Project structure

- `frontend/app`: Next.js routes and global styling
- `frontend/components`: Product UI, map, simulator, analytics
- `frontend/lib`: Typed domain models, repositories, impact model
- `frontend/store`: Zustand city and layer state
- `backend/app/services`: Replaceable integrations for weather, satellite, OSM, environmental datasets

