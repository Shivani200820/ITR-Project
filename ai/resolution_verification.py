import json

from database.database import SessionLocal
from database.crud import (
    get_latest_complaint,
    update_resolution_verification
)

from ai.groq_client import client

db = SessionLocal()

try:
    complaint = get_latest_complaint(db)

    if complaint is None:
        print("No complaints found.")

    else:

        prompt = f"""
You are an AI assistant for a Smart Civic Complaint System.

A government officer has completed the following work.

Complaint Title:
{complaint.title}

Complaint Description:
{complaint.description}

Recommended Action:
{complaint.recommended_action}

Predicted Status:
{complaint.predicted_status}

Determine whether the complaint is resolved.

Return ONLY JSON.

{{
    "resolution_status": "",
    "verification_remark": "",
    "confidence_score": ""
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

        ai_result = ai_result.replace("```json", "")
        ai_result = ai_result.replace("```", "")
        ai_result = ai_result.strip()

        verification = json.loads(ai_result)

        update_resolution_verification(db, complaint, verification)

        print("Resolution verification saved successfully!")

        print(verification)

finally:
    db.close()