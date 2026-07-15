from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.core.exceptions import CivicAIException


def register_exception_handlers(
    app: FastAPI
):

    @app.exception_handler(CivicAIException)
    async def civic_exception_handler(
        request: Request,
        exc: CivicAIException
    ):

        return JSONResponse(
            status_code=exc.status_code,
            content={
                "success": False,
                "message": exc.message,
                "data": None,
                "errors": None
            }
        )


    @app.exception_handler(Exception)
    async def general_exception_handler(
        request: Request,
        exc: Exception
    ):

        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "Internal Server Error",
                "data": None,
                "errors": str(exc)
            }
        )