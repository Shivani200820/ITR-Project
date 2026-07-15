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

router = APIRouter(
    prefix="/departments",
    tags=["Departments"],
)


@router.post(
    "",
    response_model=DepartmentResponse,
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

    return service.create_department(department_data)


@router.get(
    "",
    response_model=list[DepartmentResponse],
)
def get_departments(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DepartmentService(db)

    return service.get_departments()


@router.get(
    "/{department_id}",
    response_model=DepartmentResponse,
)
def get_department(
    department_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = DepartmentService(db)

    return service.get_department(department_id)


@router.put(
    "/{department_id}",
    response_model=DepartmentResponse,
)
def update_department(
    department_id: int,
    department_data: DepartmentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)

    return service.update_department(
        department_id,
        department_data,
    )


@router.patch(
    "/{department_id}/activate",
    response_model=DepartmentResponse,
)
def activate_department(
    department_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)

    return service.activate_department(department_id)


@router.patch(
    "/{department_id}/deactivate",
    response_model=DepartmentResponse,
)
def deactivate_department(
    department_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):
    service = DepartmentService(db)

    return service.deactivate_department(department_id)