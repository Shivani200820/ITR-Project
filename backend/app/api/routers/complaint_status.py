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


router = APIRouter(
    prefix="/complaint-statuses",
    tags=["Complaint Statuses"],
)



@router.post(
    "",
    response_model=ComplaintStatusResponse,
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

    return service.create_status(
        status_data
    )



@router.get(
    "",
    response_model=list[ComplaintStatusResponse],
)
def get_statuses(
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    ),
):

    service = ComplaintStatusService(db)

    return service.get_statuses()



@router.get(
    "/{status_id}",
    response_model=ComplaintStatusResponse,
)
def get_status(
    status_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        get_current_user
    ),
):

    service = ComplaintStatusService(db)

    return service.get_status(
        status_id
    )



@router.put(
    "/{status_id}",
    response_model=ComplaintStatusResponse,
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

    return service.update_status(
        status_id,
        status_data,
    )



@router.patch(
    "/{status_id}/activate",
    response_model=ComplaintStatusResponse,
)
def activate_status(
    status_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintStatusService(db)

    return service.activate_status(
        status_id
    )



@router.patch(
    "/{status_id}/deactivate",
    response_model=ComplaintStatusResponse,
)
def deactivate_status(
    status_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_role(UserRole.ADMIN)
    ),
):

    service = ComplaintStatusService(db)

    return service.deactivate_status(
        status_id
    )