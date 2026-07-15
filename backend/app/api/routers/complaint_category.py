from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.auth import get_current_user
from app.dependencies.rbac import require_role

from app.models.user import User
from app.schemas.complaint_category import (
    ComplaintCategoryCreate,
    ComplaintCategoryUpdate,
    ComplaintCategoryResponse,
)
from app.services.complaint_category_service import (
    ComplaintCategoryService,
)
from app.shared.enums import UserRole

router = APIRouter(
    prefix="/complaint-categories",
    tags=["Complaint Categories"],
)


@router.post(
    "",
    response_model=ComplaintCategoryResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_category(
    category_data: ComplaintCategoryCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = ComplaintCategoryService(db)

    return service.create_category(category_data)


@router.get(
    "",
    response_model=list[ComplaintCategoryResponse],
)
def get_categories(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintCategoryService(db)

    return service.get_categories()


@router.get(
    "/{category_id}",
    response_model=ComplaintCategoryResponse,
)
def get_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintCategoryService(db)

    return service.get_category(category_id)


@router.put(
    "/{category_id}",
    response_model=ComplaintCategoryResponse,
)
def update_category(
    category_id: int,
    category_data: ComplaintCategoryUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = ComplaintCategoryService(db)

    return service.update_category(
        category_id,
        category_data,
    )


@router.patch(
    "/{category_id}/activate",
    response_model=ComplaintCategoryResponse,
)
def activate_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = ComplaintCategoryService(db)

    return service.activate_category(category_id)


@router.patch(
    "/{category_id}/deactivate",
    response_model=ComplaintCategoryResponse,
)
def deactivate_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = ComplaintCategoryService(db)

    return service.deactivate_category(category_id)