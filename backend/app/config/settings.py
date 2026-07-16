from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    APP_NAME: str
    APP_VERSION: str

    DEBUG: bool

    HOST: str
    PORT: int

    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    DATABASE_URL: str

    GROQ_API_KEY: str

    storage_driver: str = "local"

    upload_directory: str = "uploads"

    max_image_size: int = 5242880

    allowed_image_extensions: str = "jpg,jpeg,png,webp"

    cloudinary_cloud_name: str = ""

    cloudinary_api_key: str = ""

    cloudinary_api_secret: str = ""

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


@lru_cache
def get_settings():
    return Settings()


settings = get_settings()

