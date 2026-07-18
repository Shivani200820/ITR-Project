from typing import Optional

from fastapi import (
    APIRouter,
    Depends,
    status,
    Query,
)

from sqlalchemy.orm import Session

from app.database.session import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User
from app.schemas.complaint import (
    ComplaintCreate,
    ComplaintResponse,
    CitizenConfirmationRequest,
)
from app.schemas.complaint import ComplaintUpdate
from app.schemas.complaint import ComplaintSupportResponse
from app.services.complaint.complaint_service import ComplaintService
from app.repositories.complaint.complaint_history_repository import (
    ComplaintHistoryRepository,
)
from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"],
)

@router.post(
    "",
    response_model=ApiResponse[ComplaintResponse],
    status_code=status.HTTP_201_CREATED,
)
def create_complaint(
    complaint: ComplaintCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaint_data = service.create_complaint(
        data=complaint,
        citizen_id=current_user.id,
    )

    return success_response(
        message="Complaint created successfully.",
        data=complaint_data,
    )

@router.get(
    "/me",
    response_model=ApiResponse[list[ComplaintResponse]]
    )
def my_complaints(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaints = service.citizen_complaints(
        current_user.id
    )

    return success_response(
        message="Complaints fetched successfully.",
        data=complaints,
    )

@router.get(
    "/number/{complaint_number}",
    response_model=ApiResponse[ComplaintResponse]
)
def get_complaint_by_number(
    complaint_number: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaint = service.get_by_number(
        complaint_number
    )

    return success_response(
        message="Complaint fetched successfully.",
        data=complaint,
    )

@router.get(
    "/{complaint_id}",
    response_model=ApiResponse[ComplaintResponse]
)
def get_complaint(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaint = service.get_complaint(
        complaint_id
    )

    return success_response(
        message="Complaint fetched successfully.",
        data=complaint,
    )



@router.get(
    "",
    response_model=ApiResponse[list[ComplaintResponse]]
)
def list_complaints(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaints = service.list_complaints(
        page=page,
        page_size=page_size,
    )

    return success_response(
        message="Complaints fetched successfully.",
        data=complaints,
    )

@router.patch(
    "/{complaint_id}",
    response_model=ApiResponse[ComplaintResponse]
)
def update_complaint(
    complaint_id: int,
    complaint: ComplaintUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaint = service.update_complaint(
        complaint_id=complaint_id,
        data=complaint,
        citizen_id=current_user.id,
    )

    return success_response(
        message="Complaint updated successfully.",
        data=complaint,
    )

@router.delete(
    "/{complaint_id}",
    response_model=ApiResponse[None],
    status_code=status.HTTP_200_OK,
)
def delete_complaint(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    service.delete_complaint(
        complaint_id,
        current_user.id,
    )

    return success_response(
        message="Complaint deleted successfully."
    )

@router.post(
    "/{complaint_id}/support",
    response_model=ApiResponse[ComplaintSupportResponse]
)
def support_complaint(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    support = service.support_complaint(
        complaint_id=complaint_id,
        citizen_id=current_user.id,
    )

    return success_response(
        message="Complaint supported successfully.",
        data=support,
    )

@router.patch(
    "/{complaint_id}/confirm",
    response_model=ApiResponse[ComplaintResponse]
)
def citizen_confirmation(
    complaint_id: int,
    request: CitizenConfirmationRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    complaint = service.citizen_confirmation(
        complaint_id=complaint_id,
        citizen=current_user,
        request=request,
    )

    return success_response(
        message="Citizen confirmation updated successfully.",
        data=complaint,
    )

@router.get(
    "/{complaint_id}/timeline",
    response_model=ApiResponse[list]

)
def complaint_timeline(
    complaint_id: int,
    db: Session = Depends(get_db),
):
    history_repo = ComplaintHistoryRepository(db)

    history = history_repo.get_history(
        complaint_id
    )

    return success_response(
        message="Complaint timeline fetched successfully.",
        data=history,
    )