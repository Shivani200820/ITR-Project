from fastapi import APIRouter, Depends

from app.dependencies.rbac import require_role
from app.models.user import User
from app.shared.enums import UserRole

router = APIRouter(
    prefix="/officer",
    tags=["Officer"],
)


@router.get("/dashboard")
def officer_dashboard(
    current_user: User = Depends(
        require_role(
            UserRole.OFFICER,
            UserRole.ADMIN,
        )
    ),
):
    return {
        "message": f"Welcome Officer {current_user.full_name}"
    }