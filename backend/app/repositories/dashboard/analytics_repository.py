from sqlalchemy import func

from app.models.complaint import Complaint
from app.models.complaint_category import ComplaintCategory
from app.models.department import Department


class AnalyticsRepository:

    def __init__(self, db):
        self.db = db

    def complaints_today(self):

        return (
            self.db.query(
                func.count(Complaint.id)
            )
            .filter(
                func.date(
                    Complaint.created_at
                ) == func.current_date()
            )
            .scalar()
        )
    
    def complaints_this_month(self):

        return (
            self.db.query(
                func.count(
                    Complaint.id
                )
            )
            .filter(
                func.month(
                    Complaint.created_at
                ) == func.month(
                    func.current_date()
                ),
                func.year(
                    Complaint.created_at
                ) == func.year(
                    func.current_date()
                ),
            )
            .scalar()
        )