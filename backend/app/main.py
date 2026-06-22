from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.app.routes import cities

app = FastAPI(title="ClimateLens AI API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cities.router, prefix="/cities", tags=["cities"])


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

