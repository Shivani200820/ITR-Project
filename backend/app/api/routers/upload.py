from fastapi import APIRouter, File, UploadFile

from app.services.upload_service import UploadService

router = APIRouter(
    prefix="/uploads",
    tags=["Uploads"],
)


@router.post("")
async def upload_image(
    file: UploadFile = File(...),
):

    service = UploadService()

    path = await service.upload_image(file)

    return {
    "message": "Upload successful",
    "image_url": path,
}