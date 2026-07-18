from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin

from app.services.dashboard.department_analytics_service import (
    DepartmentAnalyticsService,
)

from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/admin",
    tags=["Department Analytics"],
)


@router.get(
    "/department-analytics",
    response_model=ApiResponse[dict]
)
def department_analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):

    service = DepartmentAnalyticsService(db)

    department_data = service.get_department_analytics()

    return success_response(
        message="Department analytics fetched successfully.",
        data=department_data,
    )