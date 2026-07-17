from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin
from app.services.dashboard.recent_activity_service import (
    RecentActivityService,
)

router = APIRouter(
    prefix="/admin",
    tags=["Recent Activities"],
)


@router.get("/dashboard/recent-activities")
def recent_activities(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    return RecentActivityService(
        db
    ).get_recent_activity()