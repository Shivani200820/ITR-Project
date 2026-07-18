from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.session import get_db

from app.dependencies.auth import get_current_user
from app.dependencies.rbac import require_role

from app.models.user import User

from app.schemas.complaint_status import (
    ComplaintStatusCreate,
    ComplaintStatusUpdate,
    ComplaintStatusResponse,
)

from app.services.complaint_status_service import (
    ComplaintStatusService,
)

from app.shared.enums import UserRole
from app.schemas.common import ApiResponse
from app.utils.response import success_response


router = APIRouter(
    prefix="/complaint-statuses",
    tags=["Complaint Statuses"],
)



@router.post(
    "",
    response_model=ApiResponse[ComplaintStatusResponse],
    status_code=status.HTTP_201_CREATED,
)
def create_status(
    status_data: ComplaintStatusCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):


    service = ComplaintStatusService(db)

    complaint_status = service.create_status(status_data)

    return success_response(
        message="Complaint status created successfully.",
        data=complaint_status,
    )



@router.get(
    "",
    response_model=ApiResponse[list[ComplaintStatusResponse]]
)
def get_statuses(
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    ),
):

    service = ComplaintStatusService(db)

    statuses = service.get_statuses()

    return success_response(
        message="Complaint statuses fetched successfully.",
        data=statuses,
    )


@router.get(
    "/{status_id}",
    response_model=ApiResponse[ComplaintStatusResponse]
)
def get_status(
    status_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    ),
):

    service = ComplaintStatusService(db)

    complaint_status = service.get_status(status_id)

    return success_response(
        message="Complaint status fetched successfully.",
        data=complaint_status,
    )


@router.put(
    "/{status_id}",
    response_model=ApiResponse[ComplaintStatusResponse]
)
def update_status(
    status_id: int,
    status_data: ComplaintStatusUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintStatusService(db)

    complaint_status = service.update_status(
    status_id,
    status_data,
    )

    return success_response(
        message="Complaint status updated successfully.",
        data=complaint_status,
    )



@router.patch(
    "/{status_id}/activate",
    response_model=ApiResponse[ComplaintStatusResponse]
)
def activate_status(
    status_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintStatusService(db)

    complaint_status = service.activate_status(status_id)

    return success_response(
        message="Complaint status activated successfully.",
        data=complaint_status,
    )



@router.patch(
    "/{status_id}/deactivate",
    response_model=ApiResponse[ComplaintStatusResponse]
)
def deactivate_status(
    status_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintStatusService(db)

    complaint_status = service.deactivate_status(status_id)

    return success_response(
        message="Complaint status deactivated successfully.",
        data=complaint_status,
    )