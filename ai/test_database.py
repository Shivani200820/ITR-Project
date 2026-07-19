from ai.ai_database import get_pending_complaints

complaints = get_pending_complaints()

print(f"Total Pending Complaints: {len(complaints)}")

for complaint in complaints:
    print(complaint.complaint_id, complaint.title)