from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.auth import get_current_user
from app.dependencies.rbac import require_role

from app.models.user import User

from app.schemas.complaint_priority import (
    ComplaintPriorityCreate,
    ComplaintPriorityUpdate,
    ComplaintPriorityResponse,
)

from app.services.complaint_priority_service import (
    ComplaintPriorityService,
)

from app.shared.enums import UserRole


router = APIRouter(
    prefix="/complaint-priorities",
    tags=["Complaint Priorities"],
)


@router.post(
    "",
    response_model=ComplaintPriorityResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_priority(
    priority_data: ComplaintPriorityCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintPriorityService(db)

    return service.create_priority(priority_data)



@router.get(
    "",
    response_model=list[ComplaintPriorityResponse],
)
def get_priorities(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    service = ComplaintPriorityService(db)

    return service.get_priorities()



@router.get(
    "/{priority_id}",
    response_model=ComplaintPriorityResponse,
)
def get_priority(
    priority_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    service = ComplaintPriorityService(db)

    return service.get_priority(priority_id)



@router.put(
    "/{priority_id}",
    response_model=ComplaintPriorityResponse,
)
def update_priority(
    priority_id: int,
    priority_data: ComplaintPriorityUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintPriorityService(db)

    return service.update_priority(
        priority_id,
        priority_data,
    )



@router.patch(
    "/{priority_id}/activate",
    response_model=ComplaintPriorityResponse,
)
def activate_priority(
    priority_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintPriorityService(db)

    return service.activate_priority(priority_id)



@router.patch(
    "/{priority_id}/deactivate",
    response_model=ComplaintPriorityResponse,
)
def deactivate_priority(
    priority_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintPriorityService(db)

    return service.deactivate_priority(priority_id)