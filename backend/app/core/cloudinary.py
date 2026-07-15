import cloudinary

from app.config.settings import settings

print("Cloud Name:", settings.cloudinary_cloud_name)
print("API Key:", settings.cloudinary_api_key)
print("API Secret:", settings.cloudinary_api_secret)

cloudinary.config(
    cloud_name=settings.cloudinary_cloud_name,
    api_key=settings.cloudinary_api_key,
    api_secret=settings.cloudinary_api_secret,
    secure=True,
)