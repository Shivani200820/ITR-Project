from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin

from app.services.dashboard.citizen_analytics_service import (
    CitizenAnalyticsService,
)

router = APIRouter(
    prefix="/admin",
    tags=["Citizen Analytics"],
)


@router.get("/citizen-analytics")
def citizen_analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    return CitizenAnalyticsService(db).get_citizen_analytics()