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