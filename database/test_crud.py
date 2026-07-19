from database.database import SessionLocal
from database.crud import get_all_complaints

db = SessionLocal()

try:
    complaints = get_all_complaints(db)

    print(f"Total Complaints: {len(complaints)}")

    for complaint in complaints:
        print(
            f"ID: {complaint.complaint_id}, "
            f"Title: {complaint.title}, "
            f"Status: {complaint.status}"
        )

finally:
    db.close()