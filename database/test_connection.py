from sqlalchemy import text
from database.database import engine

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT DATABASE();"))
        print("✅ Database connected successfully!")
        print("Current Database:", result.scalar())
except Exception as e:
    print("❌ Connection failed!")
    print(e)