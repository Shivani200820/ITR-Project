from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin
from app.services.dashboard.analytics_service import AnalyticsService
from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/admin",
    tags=["Admin Analytics"],
)


@router.get(
    "/analytics",
    response_model=ApiResponse[dict]
)
def analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    service = AnalyticsService(db)

    analytics_data = service.get_analytics()

    return success_response(
        message="Analytics fetched successfully.",
        data=analytics_data,
    )