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
)
from app.services.complaint import ComplaintService
from app.schemas.complaint import ComplaintUpdate

router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"],
)

@router.post(
    "",
    response_model=ComplaintResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_complaint(
    complaint: ComplaintCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    return service.create_complaint(
        data=complaint,
        citizen_id=current_user.id,
    )

@router.get(
    "/me",
    response_model=list[ComplaintResponse],
)
def my_complaints(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    return service.citizen_complaints(
        current_user.id
    )

@router.get(
    "/number/{complaint_number}",
    response_model=ComplaintResponse,
)
def get_complaint_by_number(
    complaint_number: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    return service.get_by_number(
        complaint_number
    )

@router.get(
    "/{complaint_id}",
    response_model=ComplaintResponse,
)
def get_complaint(
    complaint_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    return service.get_complaint(
        complaint_id
    )



@router.get(
    "",
    response_model=list[ComplaintResponse],
)
def list_complaints(
    page: int = Query(1, ge=1),
    page_size: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    return service.list_complaints(
        page=page,
        page_size=page_size,
    )

@router.patch(
    "/{complaint_id}",
    response_model=ComplaintResponse,
)
def update_complaint(
    complaint_id: int,
    complaint: ComplaintUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = ComplaintService(db)

    return service.update_complaint(
        complaint_id=complaint_id,
        data=complaint,
        citizen_id=current_user.id,
    )

