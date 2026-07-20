import os
from dotenv import load_dotenv
from groq import Groq

# Load environment variables
load_dotenv()

# Read API key from .env
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Create Groq client
client = Groq(api_key=GROQ_API_KEY)