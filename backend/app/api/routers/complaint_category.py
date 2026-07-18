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
from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/complaint-categories",
    tags=["Complaint Categories"],
)


@router.post(
    "",
    response_model=ApiResponse[ComplaintCategoryResponse],
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

    category = service.create_category(category_data)

    return success_response(
        message="Category created successfully.",
        data=category,
    )

@router.get(
    "",
    response_model=ApiResponse[list[ComplaintCategoryResponse]],
)
def get_categories(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintCategoryService(db)

    categories = service.get_categories()

    return success_response(
        message="Categories fetched successfully.",
        data=categories,
    )

@router.get(
    "/{category_id}",
    response_model=ApiResponse[ComplaintCategoryResponse]
)
def get_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintCategoryService(db)

    category = service.get_category(category_id)

    return success_response(
        message="Category fetched successfully.",
        data=category,
    )

@router.put(
    "/{category_id}",
    response_model=ApiResponse[ComplaintCategoryResponse],
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

    category = service.update_category(
        category_id,
        category_data,
    )

    return success_response(
        message="Category updated successfully.",
        data=category,
    )


@router.patch(
    "/{category_id}/activate",
    response_model=ApiResponse[ComplaintCategoryResponse]
)
def activate_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = ComplaintCategoryService(db)

    category = service.activate_category(category_id)

    return success_response(
        message="Category activated successfully.",
        data=category,
    )

@router.patch(
    "/{category_id}/deactivate",
    
    response_model=ApiResponse[ComplaintCategoryResponse],
)
def deactivate_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = ComplaintCategoryService(db)

    category = service.deactivate_category(category_id)

    return success_response(
        message="Category deactivated successfully.",
        data=category,
    )