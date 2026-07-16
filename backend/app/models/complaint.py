from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Float,
    ForeignKey,
)

from sqlalchemy.orm import relationship

from app.database.base import Base
from app.shared.mixins import TimestampMixin

class Complaint(Base, TimestampMixin):
    __tablename__ = "complaints"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    complaint_number = Column(
        String(30),
        unique=True,
        nullable=False,
        index=True,
    )

    citizen_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    department_id = Column(
        Integer,
        ForeignKey("departments.id"),
        nullable=False,
    )

    category_id = Column(
        Integer,
        ForeignKey("complaint_categories.id"),
        nullable=False,
    )

    priority_id = Column(
        Integer,
        ForeignKey("complaint_priorities.id"),
        nullable=False,
    )

    status_id = Column(
        Integer,
        ForeignKey("complaint_statuses.id"),
        nullable=False,
    )

    title = Column(
        String(255),
        nullable=False,
    )

    description = Column(
        Text,
        nullable=False,
    )

    latitude = Column(
        Float,
        nullable=False,
    )

    longitude = Column(
        Float,
        nullable=False,
    )

    voice_note_url = Column(
        String(500),
        nullable=True,
    )

    ai_category = Column(
        String(100),
        nullable=True,
    )

    ai_department = Column(
        String(100),
        nullable=True,
    )

    ai_priority = Column(
        String(100),
        nullable=True,
    )

    ai_description = Column(
        Text,
        nullable=True,
    )

    citizen = relationship(
        "User",
        back_populates="complaints",
    )

    department = relationship(
        "Department",
        back_populates="complaints",
    )

    category = relationship(
        "ComplaintCategory",
        back_populates="complaints",
    )

    priority = relationship(
        "ComplaintPriority",
        back_populates="complaints",
    )

    status = relationship(
        "ComplaintStatus",
        back_populates="complaints",
    )

    images = relationship(
        "ComplaintImage",
        back_populates="complaint",
        cascade="all, delete-orphan",
    )

    history = relationship(
    "ComplaintHistory",
    back_populates="complaint",
    cascade="all, delete-orphan",
)