from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin
from app.services.dashboard.dashboard_service import DashboardService
from app.utils.response import success_response
from app.schemas.common import ApiResponse

router = APIRouter(
    prefix="/admin",
    tags=["Admin Dashboard"],
)


@router.get(
    "/dashboard",
    response_model=ApiResponse[dict]
)
def dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    service = DashboardService(db)

    return success_response(
        message="Dashboard fetched successfully.",
        data=service.get_complete_dashboard(),
    )