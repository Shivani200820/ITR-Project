
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.constants.complaint_status import (
    ComplaintStatus,
    is_valid_transition,
)
from app.models.complaint import Complaint
from app.models.user import User

from app.repositories.complaint.complaint_repository import ComplaintRepository
from app.repositories.complaint.complaint_query import (
    ComplaintQueryRepository,
)

from app.repositories.complaint_category_repository import (
    ComplaintCategoryRepository,
)
from app.repositories.department_repository import (
    DepartmentRepository,
)
from app.repositories.complaint_priority_repository import (
    ComplaintPriorityRepository,
)

from app.schemas.complaint import ComplaintCreate
from app.schemas.complaint.update import ComplaintUpdate

from app.utils.complaint_number import generate_complaint_number

from app.ai.complaint_analyzer import ComplaintAnalyzer
from app.ai.response_parser import AIResponseParser
from app.services.complaint.duplicate_detection_service import (
    DuplicateDetectionService,
)
from app.repositories.complaint.complaint_support_repository import (
    ComplaintSupportRepository,
)
from app.models.complaint_support import ComplaintSupport
from app.repositories.complaint.complaint_history_repository import (
    ComplaintHistoryRepository,
)
from app.models.complaint_history import ComplaintHistory

from datetime import datetime

from app.schemas.complaint import (
    ComplaintResolveRequest,
    CitizenConfirmationRequest,
)


CATEGORY_MAP = {
    "road": "Pothole",
    "pothole": "Pothole",
    "garbage": "Garbage",
    "water leakage": "Water Leakage",
    "water": "Water Leakage",
    "street light": "Street Light",
    "drain": "Drain Blockage",
    "drain blockage": "Drain Blockage",
    "water supply": "Water Leakage",
}

DEPARTMENT_MAP = {
    "municipal corporation": "Sanitation",
    "public works department": "Roads",
    "roads": "Roads",
    "road": "Roads",
    "sanitation": "Sanitation",
    "water supply": "Water Supply",
    "electricity": "Electricity",
    "drainage": "Drainage",
}

PRIORITY_MAP = {
    "low": "Low",
    "medium": "Medium",
    "high": "High",
    "critical": "Critical",
}

class ComplaintService:

    def __init__(self, db: Session):
        self.db = db

        self.repository = ComplaintRepository(db)
        self.query_repository = ComplaintQueryRepository(db)

        self.category_repository = ComplaintCategoryRepository(db)
        self.department_repository = DepartmentRepository(db)
        self.priority_repository = ComplaintPriorityRepository(db)
        self.support_repository = ComplaintSupportRepository(db)
        self.history_repository = ComplaintHistoryRepository(db)
    def create_complaint(
        self,
        data: ComplaintCreate,
        citizen_id: int,
    ) -> Complaint:

        # AI Analysis
        analyzer = ComplaintAnalyzer()

        raw_response = analyzer.analyze(
            citizen_text=data.description,
        )

        parsed = AIResponseParser.parse(
            raw_response,
        )

        category_name = CATEGORY_MAP.get(
            parsed.category.strip().lower(),
            parsed.category,
        )

        department_name = DEPARTMENT_MAP.get(
            parsed.department.strip().lower(),
            parsed.department,
        )

        priority_name = PRIORITY_MAP.get(
            parsed.priority.value.strip().lower(),
            parsed.priority.value,
        )
        category = self.category_repository.get_by_name(
            category_name
        )

        department = self.department_repository.get_by_name(
            department_name
        )

        priority = self.priority_repository.get_by_name(
            priority_name
        )
        if category is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Category '{parsed.category}' not found.",
            )

        if department is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Department '{parsed.department}' not found.",
            )

        if priority is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Priority '{parsed.priority.value}' not found.",
            )

        # Duplicate Detection
        duplicate_service = DuplicateDetectionService(
            self.db
        )

        existing = duplicate_service.find_duplicate(
            latitude=data.latitude,
            longitude=data.longitude,
            category_id=category.id,
        )

        if existing:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail={
                    "message": "Similar complaint already exists.",
                    "complaint_id": existing.id,
                    "complaint_number": existing.complaint_number,
                },
            )

      

        complaint = Complaint(
            complaint_number=generate_complaint_number(),
            citizen_id=citizen_id,

            title=data.title,
            description=data.description,

            latitude=data.latitude,
            longitude=data.longitude,

            voice_note_url=data.voice_note_url,

            # Current values
            department_id=department.id,
            category_id=category.id,
            priority_id=priority.id,
            status_id=ComplaintStatus.PENDING,

            # AI values
            ai_category_id=category.id,
            ai_department_id=department.id,
            ai_priority_id=priority.id,
            ai_description=parsed.description,
            ai_confidence=parsed.confidence,

            # Final values
            final_category_id=category.id,
            final_department_id=department.id,
            final_priority_id=priority.id,
            final_description=parsed.description,
        )

        return self.repository.create(complaint)

    def get_complaint(
        self,
        complaint_id: int,
    ):

        complaint = self.repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found.",
            )

        return complaint

    def get_by_number(
        self,
        complaint_number: str,
    ):

        complaint = self.repository.get_by_number(
            complaint_number
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found.",
            )

        return complaint

    def list_complaints(
        self,
        page: int = 1,
        page_size: int = 10,
    ):

        query = self.query_repository.get_query()

        query = self.query_repository.sort(query)

        return self.query_repository.paginate(
            query,
            page,
            page_size,
        )

    def complaints_by_status(
        self,
        status_id: int,
    ):

        return (
            self.query_repository
            .filter_by_status(status_id)
            .all()
        )

    def complaints_by_department(
        self,
        department_id: int,
    ):

        return (
            self.query_repository
            .filter_by_department(department_id)
            .all()
        )

    def citizen_complaints(
        self,
        citizen_id: int,
    ):

        return (
            self.query_repository
            .filter_by_citizen(citizen_id)
            .all()
        )

    def update_complaint(
        self,
        complaint_id: int,
        data: ComplaintUpdate,
        citizen_id: int,
    ):

        complaint = self.get_complaint(
            complaint_id
        )

        if complaint.citizen_id != citizen_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You cannot update this complaint.",
            )

        if complaint.status_id != ComplaintStatus.PENDING:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint can no longer be updated.",
            )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for key, value in update_data.items():
            setattr(
                complaint,
                key,
                value,
            )

        return self.repository.update(
            complaint
        )

    def delete_complaint(
        self,
        complaint_id: int,
        citizen_id: int,
    ):

        complaint = self.get_complaint(
            complaint_id
        )

        if complaint.citizen_id != citizen_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You cannot delete this complaint.",
            )

        if complaint.status_id != ComplaintStatus.PENDING:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint cannot be deleted after it has been accepted.",
            )

        self.repository.delete(
            complaint
        )

        return {
            "message": "Complaint deleted successfully."
        }
    
    def support_complaint(
        self,
        complaint_id: int,
        citizen_id: int,
    ):

        complaint = self.get_complaint(
            complaint_id
        )

        if self.support_repository.exists(
            complaint_id,
            citizen_id,
        ):
            raise HTTPException(
                status_code=409,
                detail="You already support this complaint.",
            )

        support = ComplaintSupport(
            complaint_id=complaint.id,
            citizen_id=citizen_id,
        )

        self.support_repository.create(
            support
        )

        return {
            "message": "Support added successfully.",
            "support_count": self.support_repository.count(
                complaint.id
            ),
        }
    def accept_complaint(
        self,
        complaint_id: int,
        officer: User,
    ):

        complaint = self.get_complaint(
            complaint_id
        )

        if not is_valid_transition(
            ComplaintStatus(complaint.status_id),
            ComplaintStatus.ACCEPTED,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid status transition.",
            )

        old_status = ComplaintStatus(
            complaint.status_id
        )

        complaint.assigned_officer_id = officer.id
        complaint.status_id = ComplaintStatus.ACCEPTED

        self.repository.save(
            complaint
        )

        history = ComplaintHistory(
            complaint_id=complaint.id,
            old_status_id=old_status,
            new_status_id=ComplaintStatus.ACCEPTED,
            changed_by=officer.id,
        )

        self.history_repository.create(
            history
        )

        return complaint
    
    def reject_complaint(
        self,
        complaint_id: int,
        officer: User,
        reason: str,
    ):

        complaint = self.get_complaint(
            complaint_id
        )

        if not is_valid_transition(
            ComplaintStatus(complaint.status_id),
            ComplaintStatus.REJECTED,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid status transition.",
            )

        old_status = complaint.status_id

        complaint.status_id = ComplaintStatus.REJECTED
        complaint.assigned_officer_id = officer.id
        complaint.rejection_reason = reason

        self.repository.save(
            complaint
        )

        history = ComplaintHistory(
            complaint_id=complaint.id,
            old_status_id=old_status,
            new_status_id=ComplaintStatus.REJECTED,
            changed_by=officer.id,
            remarks=reason,
        )

        self.history_repository.create(
            history
        )

        return complaint
    
    def start_work(
        self,
        complaint_id: int,
        officer: User,
    ):
        complaint = self.get_complaint(
            complaint_id
        )

        # Only assigned officer can start work
        if complaint.assigned_officer_id != officer.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not assigned to this complaint.",
            )

        # Validate status transition
        if not is_valid_transition(
            ComplaintStatus(complaint.status_id),
            ComplaintStatus.IN_PROGRESS,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid status transition.",
            )

        # Don't hardcode old status
        old_status = complaint.status_id

        complaint.status_id = ComplaintStatus.IN_PROGRESS
        complaint.started_at = datetime.utcnow()

        self.repository.save(
            complaint
        )

        history = ComplaintHistory(
            complaint_id=complaint.id,
            old_status_id=old_status,
            new_status_id=ComplaintStatus.IN_PROGRESS,
            changed_by=officer.id,
        )

        self.history_repository.create(
            history
        )

        return complaint
    

    def resolve_complaint(
        self,
        complaint_id: int,
        officer: User,
        request: ComplaintResolveRequest,
    ):
        complaint = self.get_complaint(
            complaint_id
        )

        if complaint.assigned_officer_id != officer.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not assigned to this complaint.",
            )

        if not is_valid_transition(
            ComplaintStatus(complaint.status_id),
            ComplaintStatus.RESOLVED,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid status transition.",
            )

        old_status = complaint.status_id

        complaint.status_id = ComplaintStatus.RESOLVED

        complaint.resolution_remarks = (
            request.resolution_remarks
        )

        complaint.resolution_image_url = (
            request.resolution_image_url
        )

        complaint.resolved_at = datetime.utcnow()

        self.repository.save(
            complaint
        )

        history = ComplaintHistory(
            complaint_id=complaint.id,
            old_status_id=old_status,
            new_status_id=ComplaintStatus.RESOLVED,
            changed_by=officer.id,
            remarks=request.resolution_remarks,
        )

        self.history_repository.create(
            history
        )

        return complaint
    
    def citizen_confirmation(
        self,
        complaint_id: int,
        citizen: User,
        request: CitizenConfirmationRequest,
    ):
        complaint = self.get_complaint(
            complaint_id
        )

        # Verify complaint owner
        if complaint.citizen_id != citizen.id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You can only confirm your own complaint.",
            )

        # Only resolved complaints can be confirmed
        if ComplaintStatus(complaint.status_id) != ComplaintStatus.RESOLVED:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Only resolved complaints can be confirmed.",
            )

        old_status = complaint.status_id

        # Save citizen feedback
        complaint.citizen_feedback = request.feedback
        complaint.citizen_rating = request.rating

        # Decision
        if request.decision == "close":
            complaint.status_id = ComplaintStatus.CLOSED
            complaint.closed_at = datetime.utcnow()
            new_status = ComplaintStatus.CLOSED
        else:
            complaint.status_id = ComplaintStatus.REOPENED
            new_status = ComplaintStatus.REOPENED

        self.repository.save(
            complaint
        )

        history = ComplaintHistory(
            complaint_id=complaint.id,
            old_status_id=old_status,
            new_status_id=new_status,
            changed_by=citizen.id,
            remarks=request.feedback,
        )

        self.history_repository.create(
            history
        )

        return complaint