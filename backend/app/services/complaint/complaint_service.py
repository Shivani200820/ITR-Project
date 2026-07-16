from sqlalchemy.orm import Session

from app.models.complaint import Complaint
from app.repositories.complaint.complaint_repository import ComplaintRepository
from app.schemas.complaint import ComplaintCreate
from app.utils.complaint_number import generate_complaint_number
from fastapi import HTTPException, status

from app.repositories.complaint.complaint_query import (
    ComplaintQueryRepository,
)

class ComplaintService:

    def __init__(self, db: Session):
        self.db = db
        self.repository = ComplaintRepository(db)
        self.query_repository = ComplaintQueryRepository(db)

    def create_complaint(
        self,
        data: ComplaintCreate,
        citizen_id: int,
    ) -> Complaint:

        complaint = Complaint(
            complaint_number=generate_complaint_number(),
            citizen_id=citizen_id,
            title=data.title,
            description=data.description,
            latitude=data.latitude,
            longitude=data.longitude,
            voice_note_url=data.voice_note_url,

            # Temporary defaults
            department_id=1,
            category_id=1,
            priority_id=1,
            status_id=1,
        )

        return self.repository.create(complaint)
    
    def get_complaint(
        self,
        complaint_id: int,
    ):

        complaint = self.repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found.",
            )

        return complaint

    def get_by_number(
        self,
        complaint_number: str,
    ):

        complaint = self.repository.get_by_number(
            complaint_number
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found.",
            )

        return complaint

    def list_complaints(
        self,
        page: int = 1,
        page_size: int = 10,
    ):

        query = self.query_repository.get_query()

        query = self.query_repository.sort(query)

        return self.query_repository.paginate(
            query,
            page,
            page_size,
        )

    def complaints_by_status(
        self,
        status_id: int,
    ):

        return (
            self.query_repository
            .filter_by_status(
                status_id
            )
            .all()
        )

    def complaints_by_department(
        self,
        department_id: int,
    ):

        return (
            self.query_repository
            .filter_by_department(
                department_id
            )
            .all()
        )

    def citizen_complaints(
        self,
        citizen_id: int,
    ):

        return (
            self.query_repository
            .filter_by_citizen(
                citizen_id
            )
            .all()
        )