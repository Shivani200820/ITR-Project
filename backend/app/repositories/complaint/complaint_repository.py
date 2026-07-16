from sqlalchemy.orm import Session

from app.models.complaint import Complaint

class ComplaintRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(
        self,
        complaint: Complaint,
    ) -> Complaint:

        self.db.add(complaint)

        self.db.commit()

        self.db.refresh(complaint)

        return complaint
    
    def get_by_id(
        self,
        complaint_id: int,
    ) -> Complaint | None:

        return (
            self.db.query(Complaint)
            .filter(
                Complaint.id == complaint_id
            )
            .first()
        )
    
    def get_by_number(
        self,
        complaint_number: str,
    ) -> Complaint | None:

        return (
            self.db.query(Complaint)
            .filter(
                Complaint.complaint_number == complaint_number
            )
            .first()
        )
    
    def list(
        self,
        page: int = 1,
        page_size: int = 10,
    ) -> list[Complaint]:

        return (
            self.db.query(Complaint)
            .offset((page - 1) * page_size)
            .limit(page_size)
            .all()
        )
    
    def get_by_citizen(
        self,
        citizen_id: int,
    ) -> list[Complaint]:

        return (
            self.db.query(Complaint)
            .filter(
                Complaint.citizen_id == citizen_id
            )
            .all()
        )


