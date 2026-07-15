from fastapi import UploadFile

from app.utils.file_upload import FileUploadUtility


class UploadService:
    """
    Upload service.

    Currently uses local storage.
    Later we'll switch to Cloudinary automatically.
    """

    async def upload_image(
        self,
        file: UploadFile,
    ) -> str:

        return await FileUploadUtility.save_image(file)