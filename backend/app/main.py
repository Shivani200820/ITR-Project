from fastapi import FastAPI

from app.config.settings import settings
from app.api.routers import health

# Create FastAPI application
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="AI Powered Smart Civic Complaint & Resolution Platform",
)

# Root Endpoint
@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Welcome to CivicAI Backend"
    }

# Include Routers
app.include_router(health.router)

