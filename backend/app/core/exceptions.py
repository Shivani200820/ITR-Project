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

class DepartmentAlreadyExistsException(CivicAIException):
    def __init__(self):
        super().__init__(
            message="Department already exists.",
            status_code=400
        )


class DepartmentNotFoundException(CivicAIException):
    def __init__(self):
        super().__init__(
            message="Department not found.",
            status_code=404
        )