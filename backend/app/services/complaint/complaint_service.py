from sqlalchemy.orm import Session

from app.models.complaint import Complaint
from app.repositories.complaint.complaint_repository import ComplaintRepository
from app.schemas.complaint import ComplaintCreate
from app.utils.complaint_number import generate_complaint_number


class ComplaintService:

    def __init__(self, db: Session):
        self.db = db
        self.repository = ComplaintRepository(db)

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