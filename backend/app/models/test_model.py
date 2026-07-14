from sqlalchemy import Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class TestModel(Base):
    __tablename__ = "test_table"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)