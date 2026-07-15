class CivicAIException(Exception):
    """
    Base exception for the application.
    """

    def __init__(
        self,
        message: str,
        status_code: int = 400
    ):
        self.message = message
        self.status_code = status_code


class UserAlreadyExistsException(
    CivicAIException
):
    pass


class InvalidCredentialsException(
    CivicAIException
):
    pass


class UserNotFoundException(
    CivicAIException
):
    pass


class PermissionDeniedException(
    CivicAIException
):
    pass