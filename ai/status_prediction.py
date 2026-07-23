import json

from database.database import SessionLocal
from database.crud import (
    get_latest_complaint,
    update_status_prediction
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

Predict what should happen next for this complaint.

Complaint Title:
{complaint.title}

Complaint Description:
{complaint.description}

Category:
{complaint.ai_category}

Priority:
{complaint.ai_priority}

Recommended Action:
{complaint.recommended_action}

Return ONLY JSON.

{{
    "next_status": "",
    "expected_progress": "",
    "risk_level": ""
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

        prediction = json.loads(ai_result)

        update_status_prediction(db, complaint, prediction)

        print("Status prediction saved successfully!")

        print(prediction)

finally:
    db.close()