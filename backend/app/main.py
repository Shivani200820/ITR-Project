from fastapi import FastAPI
from app.api.routers import database
from app.config.settings import settings
from app.api.routers import health
from app.api.routers import (
    admin,
    auth,
    citizen,
    officer,
    users,
)
from app.core.handlers import (
    register_exception_handlers
)
from app.api.routers import department
from app.api.routers import complaint_category
from app.api.routers import complaint_priority
from app.api.routers import complaint_status
from contextlib import asynccontextmanager

from app.database.session import SessionLocal
from app.database.seed import run_seeders
from app.api.routers import upload
from fastapi.staticfiles import StaticFiles
import app.core.cloudinary
from app.api.complaint.complaint_router import router as complaint_router
from app.api.complaint.officer_router import (
    router as officer_router,
)
from app.api.admin.dashboard_router import router as dashboard_router
from app.api.admin.analytics_router import (
    router as analytics_router,
)
from app.api.admin.department_analytics_router import (
    router as department_analytics_router,
)
from app.api.admin.officer_analytics_router import (
    router as officer_analytics_router,
)
from app.api.admin.citizen_analytics_router import (
    router as citizen_analytics_router,
)
from app.api.admin.chart_router import (
    router as chart_router,
)

@asynccontextmanager
async def lifespan(app):
    """
    Runs once when the application starts.
    """

    db = SessionLocal()

    try:
        run_seeders(db)
        print("✅ Master data initialized.")
    finally:
        db.close()

    yield


# Create FastAPI application
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="AI Powered Smart Civic Complaint & Resolution Platform",
    lifespan=lifespan,

)
register_exception_handlers(app)
# Root Endpoint
@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Welcome to CivicAI Backend"
    }

# Include Routers
app.include_router(health.router)
app.include_router(database.router)

app.include_router(auth.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1")
app.include_router(admin.router, prefix="/api/v1")
app.include_router(officer.router, prefix="/api/v1")
app.include_router(citizen.router, prefix="/api/v1")
app.include_router(
    department.router,
    prefix="/api/v1",
)
app.include_router(
    complaint_category.router,
    prefix="/api/v1",
)
app.include_router(
    complaint_priority.router,
    prefix="/api/v1",
)
app.include_router(
    complaint_status.router,
    prefix="/api/v1",
)

app.include_router(
    upload.router,
    prefix="/api/v1",
)

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)

app.include_router(complaint_router)

app.include_router(
    officer_router
)
app.include_router(
    dashboard_router,
    prefix="/api/v1",
)

app.include_router(
    analytics_router
)

app.include_router(
    department_analytics_router
)

app.include_router(
    officer_analytics_router
)

app.include_router(
    citizen_analytics_router
)

app.include_router(chart_router)