import json

from database.database import SessionLocal
from database.crud import get_all_complaints, update_duplicate_info
from ai.groq_client import client

db = SessionLocal()

try:
    complaints = get_all_complaints(db)
    if len(complaints) < 2:
        print("Need at least 2 complaints to compare.")
    else:
        latest = complaints[-1]

        previous = complaints[:-1]

        previous_text = ""

        for complaint in previous:
            previous_text += f"""
        Complaint ID: {complaint.complaint_id}
        Title: {complaint.title}
        Description: {complaint.description}

       """

        prompt = f"""
     You are an AI assistant.

     Compare the NEW complaint with the previous complaints.

    Previous Complaints:

      {previous_text}

     New Complaint:

    Title:
    {latest.title}

    Description:
    {latest.description}

    Return ONLY JSON.

   {{
    "duplicate": "",
    "similarity": "",
    "matched_complaint_id": "",
    "reason": ""
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

    print("AI Response:")
    print(ai_result)

        # Remove Markdown code fences if present
    ai_result = ai_result.replace("```json", "")
    ai_result = ai_result.replace("```", "")
    ai_result = ai_result.strip()
    result = json.loads(ai_result)
    update_duplicate_info(db, latest, result)

    print("Duplicate detection saved successfully!")

    print(result)

    print(result)

finally:
    db.close()