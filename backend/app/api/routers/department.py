from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.auth import get_current_user
from app.dependencies.rbac import require_role

from app.models.user import User
from app.schemas.department import (
    DepartmentCreate,
    DepartmentUpdate,
    DepartmentResponse,
)
from app.services.department_service import DepartmentService
from app.shared.enums import UserRole
from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/departments",
    tags=["Departments"],
)


@router.post(
    "",
    response_model=ApiResponse[DepartmentResponse],

    status_code=status.HTTP_201_CREATED,
)
def create_department(
    department_data: DepartmentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)

    department = service.create_department(department_data)

    return success_response(
        message="Department created successfully.",
        data=department,
    )

@router.get(
    "",
    response_model=ApiResponse[list[DepartmentResponse]]
)
def get_departments(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DepartmentService(db)

    departments = service.get_departments()

    return success_response(
        message="Departments fetched successfully.",
        data=departments,
    )


@router.get(
    "/{department_id}",
    response_model=ApiResponse[DepartmentResponse]
)
def get_department(
    department_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DepartmentService(db)

    department = service.get_department(department_id)

    return success_response(
        message="Department fetched successfully.",
        data=department,
    )

@router.put(
    "/{department_id}",
    response_model=ApiResponse[DepartmentResponse])

def update_department(
    department_id: int,
    department_data: DepartmentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)
    department = service.update_department(
        department_id,
        department_data,
    )

    return success_response(
        message="Department updated successfully.",
        data=department,
    )


@router.patch(
    "/{department_id}/activate",
    response_model=ApiResponse[DepartmentResponse])
def activate_department(
    department_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)

    department = service.activate_department(department_id)

    return success_response(
        message="Department activated successfully.",
        data=department,
    )

@router.patch(
    "/{department_id}/deactivate",
    response_model=ApiResponse[DepartmentResponse])
def deactivate_department(
    department_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)

    department = service.deactivate_department(department_id)

    return success_response(
        message="Department deactivated successfully.",
        data=department,
    )