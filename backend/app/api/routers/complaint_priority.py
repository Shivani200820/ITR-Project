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
from app.schemas.common import ApiResponse
from app.utils.response import success_response


router = APIRouter(
    prefix="/complaint-priorities",
    tags=["Complaint Priorities"],
)


@router.post(
    "",

    response_model=ApiResponse[ComplaintPriorityResponse],
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

    priority = service.create_priority(priority_data)

    return success_response(
        message="Complaint priority created successfully.",
        data=priority,
    )


@router.get(
    "",
    response_model=ApiResponse[list[ComplaintPriorityResponse]]
)
def get_priorities(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    service = ComplaintPriorityService(db)

    priorities = service.get_priorities()

    return success_response(
        message="Complaint priorities fetched successfully.",
        data=priorities,
    )


@router.get(
    "/{priority_id}",
    response_model=ApiResponse[ComplaintPriorityResponse]
)
def get_priority(
    priority_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    service = ComplaintPriorityService(db)

    priority = service.get_priority(priority_id)

    return success_response(
        message="Complaint priority fetched successfully.",
        data=priority,
    )


@router.put(
    "/{priority_id}",
    response_model=ApiResponse[ComplaintPriorityResponse]
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

    priority = service.update_priority(
        priority_id,
        priority_data,
    )

    return success_response(
        message="Complaint priority updated successfully.",
        data=priority,
    )


@router.patch(
    "/{priority_id}/activate",
    response_model=ApiResponse[ComplaintPriorityResponse]
)
def activate_priority(
    priority_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintPriorityService(db)

    priority = service.activate_priority(priority_id)

    return success_response(
        message="Complaint priority activated successfully.",
        data=priority,
    )


@router.patch(
    "/{priority_id}/deactivate",
    response_model=ApiResponse[ComplaintPriorityResponse]
)
def deactivate_priority(
    priority_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintPriorityService(db)

    priority = service.deactivate_priority(priority_id)

    return success_response(
        message="Complaint priority deactivated successfully.",
        data=priority,
    )