from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.services.complaint.complaint_service import ComplaintService
from app.schemas.complaint.response import ComplaintResponse
from app.models.user import User
from app.dependencies.rbac import require_officer

router = APIRouter(
    prefix="/officer/complaints",
    tags=["Officer"],
)


@router.patch(
    "/{complaint_id}/accept",
    response_model=ComplaintResponse,
)
def accept_complaint(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_officer),
):

    service = ComplaintService(db)

    return service.accept_complaint(
        complaint_id,
        current_user,
    )