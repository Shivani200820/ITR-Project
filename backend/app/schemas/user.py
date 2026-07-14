from datetime import datetime

from pydantic import BaseModel, EmailStr, Field

from app.shared.enums import UserRole
from app.shared.constants import (
    MAX_NAME_LENGTH,
    MAX_PHONE_LENGTH
)


# -----------------------------
# Base User Schema
# -----------------------------

class UserBase(BaseModel):

    full_name: str = Field(
        ...,
        max_length=MAX_NAME_LENGTH
    )

    email: EmailStr

    phone: str = Field(
        ...,
        max_length=MAX_PHONE_LENGTH
    )

    language: str = "English"



# -----------------------------
# Create User Schema
# -----------------------------

class UserCreate(UserBase):

    password: str = Field(
        ...,
        min_length=8
    )



# -----------------------------
# Update User Schema
# -----------------------------

class UserUpdate(BaseModel):

    full_name: str | None = None

    phone: str | None = None

    language: str | None = None



# -----------------------------
# User Response Schema
# -----------------------------

class UserResponse(UserBase):

    id: int

    role: UserRole

    is_active: bool

    created_at: datetime

    updated_at: datetime


    class Config:

        from_attributes = True