from fastapi import UploadFile

from app.config.settings import settings
from app.utils.file_upload import FileUploadUtility
from app.utils.cloudinary_upload import CloudinaryUploadUtility


class UploadService:
    """
    Storage driver service.
    """

    async def upload_image(
        self,
        file: UploadFile,
    ) -> str:

        if settings.STORAGE_DRIVER == "cloudinary":
            return await CloudinaryUploadUtility.upload_image(file)

        return await FileUploadUtility.save_image(file)