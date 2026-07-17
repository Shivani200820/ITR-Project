from typing import Literal

from pydantic import BaseModel, Field


class CitizenConfirmationRequest(BaseModel):
    decision: Literal["close", "reopen"]

    feedback: str | None = Field(
        default=None,
        max_length=500,
    )

    rating: int | None = Field(
        default=None,
        ge=1,
        le=5,
    )