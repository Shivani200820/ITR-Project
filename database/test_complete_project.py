from database.database import SessionLocal
from database.crud import get_all_complaints

db = SessionLocal()

try:
    complaints = get_all_complaints(db)

    print("=" * 60)
    print("SMART CIVIC AI PROJECT TEST")
    print("=" * 60)

    for complaint in complaints:

        print(f"\nComplaint ID: {complaint.complaint_id}")
        print(f"Title: {complaint.title}")

        print("\nAI Analysis")
        print(f"Category: {complaint.ai_category}")
        print(f"Priority: {complaint.ai_priority}")
        print(f"Department: {complaint.ai_department}")

        print("\nDuplicate Detection")
        print(f"Duplicate: {complaint.is_duplicate}")
        print(f"Duplicate Of: {complaint.duplicate_of}")

        print("\nOfficer Recommendation")
        print(f"Action: {complaint.recommended_action}")
        print(f"Team: {complaint.required_team}")
        print(f"Severity: {complaint.severity}")

        print("\nStatus Prediction")
        print(f"Predicted Status: {complaint.predicted_status}")
        print(f"Risk: {complaint.risk_level}")

        print("\nResolution Verification")
        print(f"Resolution: {complaint.resolution_status}")
        print(f"Confidence: {complaint.confidence_score}")

        print("-" * 60)

finally:
    db.close()