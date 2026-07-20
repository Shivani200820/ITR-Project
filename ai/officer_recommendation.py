import json

from database.database import SessionLocal
from database.crud import get_latest_complaint, update_officer_recommendation
from ai.groq_client import client

db = SessionLocal()

try:
    complaint = get_latest_complaint(db)

    if complaint is None:
        print("No complaints found.")
    else:
        print(f"Analyzing Complaint ID: {complaint.complaint_id}")
        prompt = f"""
You are an AI assistant helping government officers resolve civic complaints.

Analyze this complaint and return ONLY valid JSON.

Format:

{{
  "recommended_action": "",
  "estimated_resolution_time": "",
  "required_team": "",
  "severity": ""
}}

Complaint Title:
{complaint.title}

Complaint Description:
{complaint.description}

Return only JSON.
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

        # Remove Markdown code fences if present
        ai_result = ai_result.replace("```json", "")
        ai_result = ai_result.replace("```", "")
        ai_result = ai_result.strip()

        recommendation = json.loads(ai_result)
        update_officer_recommendation(db, complaint, recommendation)

        print("Officer recommendation saved successfully!")

        print(recommendation)  



finally:
    db.close()