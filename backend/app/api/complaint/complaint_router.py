from fastapi import (
    APIRouter,
    Depends,
    status,
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