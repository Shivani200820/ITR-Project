from typing import Optional

from pydantic import BaseModel, Field, ConfigDict


class ComplaintCreate(BaseModel):
    title: str = Field(
        ...,
        min_length=5,
        max_length=255,
        description="Complaint title",
    )

    description: str = Field(
        ...,
        min_length=10,
        max_length=5000,
        description="Complaint description",
    )

    latitude: float = Field(
        ...,
        ge=-90,
        le=90,
        description="Latitude",
    )

    longitude: float = Field(
        ...,
        ge=-180,
        le=180,
        description="Longitude",
    )

    voice_note_url: Optional[str] = Field(
        default=None,
        max_length=500,
    )

    model_config = ConfigDict(
        from_attributes=True
    )