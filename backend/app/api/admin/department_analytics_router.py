from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin

from app.services.dashboard.department_analytics_service import (
    DepartmentAnalyticsService,
)

router = APIRouter(
    prefix="/admin",
    tags=["Department Analytics"],
)


@router.get(
    "/department-analytics",
)
def department_analytics(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):

    service = DepartmentAnalyticsService(db)

    return service.get_department_analytics()