from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.rbac import require_admin

from app.services.dashboard.chart_service import (
    ChartService,
)

router = APIRouter(
    prefix="/admin",
    tags=["Dashboard Charts"],
)


@router.get("/dashboard/charts")
def dashboard_charts(
    db: Session = Depends(get_db),
    current_user=Depends(require_admin),
):
    return ChartService(db).dashboard_charts()