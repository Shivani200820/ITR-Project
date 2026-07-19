from sqlalchemy import Column, Integer, String, Boolean, Enum, TIMESTAMP, Text
from database.database import Base


class User(Base):
    __tablename__ = "Users"

    user_id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    phone = Column(String(15))
    role = Column(Enum("Citizen", "Officer", "Admin"))
    is_active = Column(Boolean, default=True)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)


class Complaint(Base):
    __tablename__ = "Complaints"

    complaint_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    department_id = Column(Integer)
    title = Column(String(200))
    description = Column(Text)
    category = Column(String(100))
    priority = Column(String(20))
    status = Column(String(20))
    latitude = Column(String(20))
    longitude = Column(String(20))
    address = Column(Text)
    created_at = Column(TIMESTAMP)
    updated_at = Column(TIMESTAMP)