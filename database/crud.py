from sqlalchemy.orm import Session
from database.models import User, Complaint

def create_user(db: Session, user: User):
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def create_complaint(db: Session, complaint: Complaint):
    db.add(complaint)
    db.commit()
    db.refresh(complaint)
    return complaint

def get_all_complaints(db: Session):
    return db.query(Complaint).all()

def get_complaint_by_id(db: Session, complaint_id: int):
    return (
        db.query(Complaint)
        .filter(Complaint.complaint_id == complaint_id)
        .first()
    )

def update_complaint_status(db: Session, complaint_id: int, new_status: str):
    complaint = (
        db.query(Complaint)
        .filter(Complaint.complaint_id == complaint_id)
        .first()
    )

    if complaint:
        complaint.status = new_status
        db.commit()
        db.refresh(complaint)

    return complaint


def delete_complaint(db: Session, complaint_id: int):
    complaint = (
        db.query(Complaint)
        .filter(Complaint.complaint_id == complaint_id)
        .first()
    )

    if complaint:
        db.delete(complaint)
        db.commit()
        return True

    return False
from database.models import Complaint

def get_latest_complaint(db):
    return (
        db.query(Complaint)
        .order_by(Complaint.complaint_id.desc())
        .first()
    )
def update_ai_analysis(db, complaint, analysis):
    complaint.ai_category = analysis["category"]
    complaint.ai_priority = analysis["priority"]
    complaint.ai_department = analysis["department"]
    complaint.ai_summary = analysis["summary"]

    db.commit()
    db.refresh(complaint)

    return complaint



def update_duplicate_info(db, complaint, result):
    complaint.is_duplicate = result["duplicate"].lower() == "true"
    complaint.duplicate_of = int(result["matched_complaint_id"])
    complaint.duplicate_reason = result["reason"]

    db.commit()
    db.refresh(complaint)

    return complaint

def update_officer_recommendation(db, complaint, recommendation):
    complaint.recommended_action = recommendation["recommended_action"]
    complaint.estimated_resolution_time = recommendation["estimated_resolution_time"]
    complaint.required_team = recommendation["required_team"]
    complaint.severity = recommendation["severity"]

    db.commit()
    db.refresh(complaint)

    return complaint