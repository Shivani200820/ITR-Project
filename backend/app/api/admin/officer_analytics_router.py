from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin

from app.services.dashboard.officer_analytics_service import (
    OfficerAnalyticsService,
)

router = APIRouter(
    prefix="/admin",
    tags=["Officer Analytics"],
)


@router.get("/officer-analytics")
def officer_analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    return OfficerAnalyticsService(
        db
    ).get_officer_analytics()