import json
from database.database import SessionLocal
from database.crud import get_latest_complaint, update_ai_analysis
from database.crud import get_complaint_by_id, update_ai_analysis
from ai.groq_client import client

db = SessionLocal()

try:
    complaint_id = 5
    complaint = get_complaint_by_id(db, complaint_id)

    if complaint is None:
        print("No complaints found.")
    else:
        prompt = f"""
You are an AI assistant for a civic complaint system.

Analyze the complaint and return ONLY valid JSON.

Format:

{{
  "category": "",
  "priority": "",
  "department": "",
  "summary": ""
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

        analysis = json.loads(ai_result)

        update_ai_analysis(db, complaint, analysis)

        print("AI analysis saved successfully!")

        print(analysis)

finally:
    db.close()