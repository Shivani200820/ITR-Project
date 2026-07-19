from database.database import SessionLocal
from database.models import Complaint


def get_pending_complaints():
    db = SessionLocal()
    try:
        complaints = (
            db.query(Complaint)
            .filter(Complaint.status == "Pending")
            .all()
        )
        return complaints
    finally:
        db.close()


def get_complaint_by_id(complaint_id):
    db = SessionLocal()
    try:
        complaint = (
            db.query(Complaint)
            .filter(Complaint.complaint_id == complaint_id)
            .first()
        )
        return complaint
    finally:
        db.close()