from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin
from app.services.dashboard.dashboard_service import DashboardService

router = APIRouter(
    prefix="/admin",
    tags=["Admin Dashboard"],
)

@router.get("/dashboard")
def dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    return DashboardService(db).get_complete_dashboard()