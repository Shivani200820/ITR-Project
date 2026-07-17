from pydantic import BaseModel, Field


class ComplaintResolveRequest(BaseModel):
    resolution_remarks: str = Field(
        ...,
        min_length=10,
        max_length=1000,
    )

    resolution_image_url: str | None = None