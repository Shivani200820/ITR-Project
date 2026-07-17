from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class ComplaintResponse(BaseModel):
    id: int
    complaint_number: str

    title: str
    description: str

    latitude: float
    longitude: float

    citizen_id: int

    department_id: int

    category_id: int

    priority_id: int

    status_id: int

    voice_note_url: Optional[str] = None

    created_at: datetime
  
    rejection_reason: str | None = None

    started_at: datetime | None = None

    resolution_remarks: str | None = None

    resolution_image_url: str | None = None

    resolved_at: datetime | None = None
    
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )

class ComplaintListResponse(BaseModel):
    complaints: list[ComplaintResponse]

    total: int

    page: int

    page_size: int