from fastapi import APIRouter, Depends

from app.dependencies.rbac import require_role
from app.models.user import User
from app.shared.enums import UserRole

router = APIRouter(
    prefix="/citizen",
    tags=["Citizen"],
)


@router.get("/dashboard")
def citizen_dashboard(
    current_user: User = Depends(
        require_role(UserRole.CITIZEN)
    ),
):
    return {
        "message": f"Welcome {current_user.full_name}"
    }