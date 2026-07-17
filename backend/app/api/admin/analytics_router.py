from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin
from app.services.dashboard.analytics_service import AnalyticsService

router = APIRouter(
    prefix="/admin",
    tags=["Admin Analytics"],
)


@router.get("/analytics")
def analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    service = AnalyticsService(db)

    return service.get_analytics()