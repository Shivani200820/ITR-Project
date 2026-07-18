from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.complaint.complaint_service import ComplaintService
from app.schemas.complaint.response import ComplaintResponse
from app.models.user import User
from app.dependencies.rbac import require_officer
from app.schemas.complaint.reject import ComplaintRejectRequest
from app.schemas.complaint import ComplaintResolveRequest
from app.schemas.common import ApiResponse
from app.utils.response import success_response

router = APIRouter(
    prefix="/officer/complaints",
    tags=["Officer"],
)


@router.patch(
    "/{complaint_id}/accept",
    response_model=ApiResponse[ComplaintResponse],
)
def accept_complaint(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_officer),
):


    service = ComplaintService(db)

    complaint = service.accept_complaint(
        complaint_id,
        current_user,
    )

    return success_response(
        message="Complaint accepted successfully.",
        data=complaint,
    )    

@router.patch(
    "/{complaint_id}/reject",
    response_model=ApiResponse[ComplaintResponse],
)
def reject_complaint(
    complaint_id: int,
    request: ComplaintRejectRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_officer),
):

    service = ComplaintService(db)

    complaint = service.reject_complaint(
        complaint_id=complaint_id,
        officer=current_user,
        reason=request.reason,
    )

    return success_response(
        message="Complaint rejected successfully.",
        data=complaint,
    )

@router.patch(
    "/{complaint_id}/start-work",
    response_model=ApiResponse[ComplaintResponse],
)
def start_work(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_officer),
):
    service = ComplaintService(db)

    complaint = service.start_work(
        complaint_id,
        current_user,
    )

    return success_response(
        message="Work started successfully.",
        data=complaint,
    )

@router.patch(
    "/{complaint_id}/resolve",
    response_model=ApiResponse[ComplaintResponse],
)
def resolve_complaint(
    complaint_id: int,
    request: ComplaintResolveRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_officer),
):
    service = ComplaintService(db)

    complaint = service.resolve_complaint(
        complaint_id=complaint_id,
        officer=current_user,
        request=request,
    )

    return success_response(
        message="Complaint resolved successfully.",
        data=complaint,
    )


@router.patch(
    "/{complaint_id}/restart-work",
    response_model=ApiResponse[ComplaintResponse],
)
def restart_work(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_officer),
):

    service = ComplaintService(db)

    complaint = service.restart_work(
        complaint_id=complaint_id,
        officer=current_user,
    )

    return success_response(
        message="Work restarted successfully.",
        data=complaint,
    )