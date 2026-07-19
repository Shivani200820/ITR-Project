from fastapi import APIRouter, File, UploadFile, Depends

from app.models.user import User
from app.dependencies.auth import get_current_user
from app.schemas.upload import UploadResponse
from app.services.upload_service import UploadService
from fastapi import Depends
from app.dependencies.auth import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/uploads",
    tags=["Uploads"],
)


@router.post(
    "",
    summary="Upload Image",
    description="Uploads an image to the configured storage (Local or Cloudinary).",
    response_model=UploadResponse,
    responses={
        200: {"description": "Image uploaded successfully"},
        400: {"description": "Invalid image or file size"},
        401: {"description": "Unauthorized"},
        422: {"description": "Validation error"},
    },
)
async def upload_image(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
):

    service = UploadService()

    path = await service.upload_image(file)

    return UploadResponse(
        message="Upload successful",
        image_url=path,
    )