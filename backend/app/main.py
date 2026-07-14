from fastapi import FastAPI
from app.api.routers import database
from app.config.settings import settings
from app.api.routers import health
from app.api.routers import auth
from app.api.routers import users

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
app.include_router(database.router)
app.include_router(
    auth.router,
    prefix="/api/v1"
)

app.include_router(
    users.router,
    prefix="/api/v1"
)