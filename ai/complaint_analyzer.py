from ai.groq_client import client

complaint = """
Title: Garbage Dump

Description:
A large pile of garbage has been lying near the public park for over a week.
The smell is unbearable and stray animals are spreading the waste.
"""

prompt = f"""
You are an AI assistant for a civic complaint system.

Analyze the following complaint and provide:

1. Category
2. Priority (Low/Medium/High)
3. Responsible Department
4. Short Summary

Complaint:
{complaint}
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

print(response.choices[0].message.content)