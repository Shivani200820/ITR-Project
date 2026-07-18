from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin

from app.services.dashboard.citizen_analytics_service import (
    CitizenAnalyticsService,
)

from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/admin",
    tags=["Citizen Analytics"],
)


@router.get(
    "/citizen-analytics",
    response_model=ApiResponse[dict]
)
def citizen_analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    analytics = CitizenAnalyticsService(db).get_citizen_analytics()

    return success_response(
        message="Citizen analytics fetched successfully.",
        data=analytics,
    )