import cloudinary.uploader

from fastapi import HTTPException, UploadFile, status


class CloudinaryUploadUtility:

    @staticmethod
    async def upload_image(file: UploadFile) -> str:

        try:

            contents = await file.read()

            result = cloudinary.uploader.upload(
                contents,
                folder="civicai",
            )

            return result["secure_url"]

        except Exception as e:

            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=str(e),
            )