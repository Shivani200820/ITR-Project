from enum import IntEnum


class ComplaintStatusCode(IntEnum):
    PENDING = 1
    ACCEPTED = 2
    IN_PROGRESS = 3
    RESOLVED = 4
    CLOSED = 5
    REOPENED = 6
    REJECTED = 7


ALLOWED_STATUS_TRANSITIONS = {
    ComplaintStatusCode.PENDING: [
        ComplaintStatusCode.ACCEPTED,
        ComplaintStatusCode.REJECTED,
    ],

    ComplaintStatusCode.ACCEPTED: [
        ComplaintStatusCode.IN_PROGRESS,
    ],

    ComplaintStatusCode.IN_PROGRESS: [
        ComplaintStatusCode.RESOLVED,
    ],

    ComplaintStatusCode.RESOLVED: [
        ComplaintStatusCode.CLOSED,
        ComplaintStatusCode.REOPENED,
    ],

    ComplaintStatusCode.REOPENED: [
        ComplaintStatusCode.IN_PROGRESS,
    ],
}


def is_valid_transition(
    current_status: ComplaintStatusCode,
    new_status: ComplaintStatusCode,
) -> bool:

    return new_status in ALLOWED_STATUS_TRANSITIONS.get(
        current_status,
        [],
    )