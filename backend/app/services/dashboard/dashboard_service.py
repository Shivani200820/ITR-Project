from app.repositories.dashboard.dashboard_repository import DashboardRepository

from app.constants.complaint_status import ComplaintStatus

class DashboardService:

    def __init__(self, db):
        self.repo = DashboardRepository(db)

    def dashboard(self):

        return {

            "total_users":
                self.repo.total_users(),

            "total_departments":
                self.repo.total_departments(),

            "total_complaints":
                self.repo.total_complaints(),

            "pending":
                self.repo.complaints_by_status(
                    ComplaintStatus.PENDING
                ),

            "accepted":
                self.repo.complaints_by_status(
                    ComplaintStatus.ACCEPTED
                ),

            "in_progress":
                self.repo.complaints_by_status(
                    ComplaintStatus.IN_PROGRESS
                ),

            "resolved":
                self.repo.complaints_by_status(
                    ComplaintStatus.RESOLVED
                ),

            "closed":
                self.repo.complaints_by_status(
                    ComplaintStatus.CLOSED
                ),

            "reopened":
                self.repo.complaints_by_status(
                    ComplaintStatus.REOPENED
                ),

            "rejected":
                self.repo.complaints_by_status(
                    ComplaintStatus.REJECTED
                ),
        }