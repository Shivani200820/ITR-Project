from database.database import SessionLocal
from database.models import Complaint

db = SessionLocal()

try:
    complaint = Complaint(
        user_id=1,
        department_id=1,
        title="Garbage Dump",
        description="A large pile of garbage has been lying near the public park for over a week. The smell is unbearable.",
        category="Garbage",
        priority="High",
        status="Pending",
        latitude="18.5204",
        longitude="73.8567",
        address="Near City Park"
    )

    db.add(complaint)
    db.commit()

    print("Sample complaint inserted successfully!")

finally:
    db.close()