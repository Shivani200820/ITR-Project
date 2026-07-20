from collections import Counter
import json

from database.database import SessionLocal
from database.crud import get_all_complaints
from ai.groq_client import client

db = SessionLocal()

try:
    complaints = get_all_complaints(db)

    print(f"Total Complaints: {len(complaints)}")

    category_counter = Counter()
    priority_counter = Counter()
    duplicate_counter = Counter()
    department_counter = Counter()

    for complaint in complaints:
        category = complaint.ai_category if complaint.ai_category else "Unknown"
        priority = complaint.ai_priority if complaint.ai_priority else "Unknown"
        duplicate = "Duplicate" if complaint.is_duplicate else "Original"
        department = complaint.ai_department if complaint.ai_department else "Unknown"

        category_counter[category] += 1
        priority_counter[priority] += 1
        duplicate_counter[duplicate] += 1
        department_counter[department] += 1

    print("\nCategory-wise Report")
    for category, count in category_counter.items():
        print(f"{category}: {count}")

    print("\nPriority-wise Report")
    for priority, count in priority_counter.items():
        print(f"{priority}: {count}")

    print("\nDuplicate Complaint Report")
    for status, count in duplicate_counter.items():
        print(f"{status}: {count}")

    print("\nDepartment-wise Report")
    for department, count in department_counter.items():
        print(f"{department}: {count}")

    # ---------------- AI Admin Summary ---------------- #

    prompt = f"""
You are an AI assistant for an Admin Dashboard.

Generate a short management summary using the following statistics.

Total Complaints: {len(complaints)}

Categories:
{dict(category_counter)}

Priorities:
{dict(priority_counter)}

Duplicate Complaints:
{dict(duplicate_counter)}

Departments:
{dict(department_counter)}

Return ONLY valid JSON.

{{
    "summary": "",
    "recommendation": ""
}}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    ai_result = response.choices[0].message.content

    # Remove markdown if AI returns it
    ai_result = ai_result.replace("```json", "")
    ai_result = ai_result.replace("```", "")
    ai_result = ai_result.strip()

    report = json.loads(ai_result)

    print("\n==============================")
    print("AI ADMIN SUMMARY")
    print("==============================")

    print("\nSummary:")
    print(report["summary"])

    print("\nRecommendation:")
    print(report["recommendation"])

finally:
    db.close()