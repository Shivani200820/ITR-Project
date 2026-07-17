from pydantic import BaseModel, Field


class ComplaintRejectRequest(BaseModel):

    reason: str = Field(
        ...,
        min_length=10,
        max_length=500,
    )