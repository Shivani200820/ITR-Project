from app.config.settings import settings

print("Storage Driver:", settings.storage_driver)
print("Upload Directory:", settings.upload_directory)
print("Max Image Size:", settings.max_image_size)
print("Allowed Extensions:", settings.allowed_image_extensions)