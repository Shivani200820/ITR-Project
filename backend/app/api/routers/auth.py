from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.jwt import create_access_token
from fastapi.security import OAuth2PasswordRequestForm



from app.database.session import get_db

from app.schemas import user
from app.schemas.user import (
    UserCreate,
    UserResponse,
    UserRegisterResponse,
)

from app.services.auth_service import (
    AuthService
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)



@router.post(
    "/register",
    response_model=UserRegisterResponse,
    status_code=status.HTTP_201_CREATED
)
def register(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):

    auth_service = AuthService(db)

    user = auth_service.register_user(user_data)

    return UserRegisterResponse(
        success=True,
        message="User registered successfully",
        data=UserResponse.model_validate(user),
        errors=None
    )


@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    auth_service = AuthService(db)

    user = auth_service.authenticate_user(
        form_data.username,
        form_data.password
    )

    token = auth_service.create_user_token(user)

    return {
    "access_token": token,
    "token_type": "bearer"
}