from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.jwt import create_access_token



from app.database.session import get_db

from app.schemas.user import (
    UserCreate,
    UserResponse
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
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def register(
    user_data: UserCreate,
    db: Session = Depends(get_db)
):

    auth_service = AuthService(db)


    try:

        user = (
            auth_service
            .register_user(user_data)
        )


        return user


    except ValueError as error:

        raise HTTPException(
            status_code=400,
            detail=str(error)
        )
@router.post(
    "/login"
)
def login(
    email: str,
    password: str,
    db: Session = Depends(get_db)
):

    auth_service = AuthService(db)


    user = (
        auth_service
        .authenticate_user(
            email,
            password
        )
    )


    if not user:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )


    token = (
        auth_service
        .create_user_token(user)
    )


    return {

        "access_token": token,

        "token_type": "bearer"
    }