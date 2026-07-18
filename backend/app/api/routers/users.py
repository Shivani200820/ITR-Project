from fastapi import APIRouter, Depends

from app.models.user import User
from app.dependencies.auth import get_current_user

from app.schemas.user import UserResponse
from app.schemas.common import ApiResponse   # ✅ हे add कर
from app.utils.response import success_response
from app.core.jwt import create_access_token
from app.schemas import user

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.get(
    "/profile",
    response_model=ApiResponse[UserResponse]
)
def get_profile(
    current_user: User = Depends(get_current_user)
):

    return success_response(
        message="Profile fetched successfully.",
        data=UserResponse.model_validate(current_user),
    )