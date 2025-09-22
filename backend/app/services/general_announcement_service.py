from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import and_, or_, func, select
from typing import List, Optional
from app.models.general_announcement import GeneralAnnouncement as GeneralAnnouncementModel
from app.schemas.general_announcement import (
    GeneralAnnouncementCreate, 
    GeneralAnnouncementUpdate, 
    GeneralAnnouncementSearch,
    GeneralAnnouncementStatistics
)


class GeneralAnnouncementService:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create_announcement(self, announcement_data: GeneralAnnouncementCreate) -> GeneralAnnouncementModel:
        """Create a new general announcement record"""
        db_announcement = GeneralAnnouncementModel(**announcement_data.dict())
        self.db.add(db_announcement)
        await self.db.commit()
        await self.db.refresh(db_announcement)
        return db_announcement

    async def get_announcement(self, announcement_id: int) -> Optional[GeneralAnnouncementModel]:
        """Get announcement by ID"""
        result = await self.db.execute(
            select(GeneralAnnouncementModel).where(GeneralAnnouncementModel.id == announcement_id)
        )
        return result.scalar_one_or_none()

    async def get_announcements(self, skip: int = 0, limit: int = 100) -> List[GeneralAnnouncementModel]:
        """Get all announcements with pagination"""
        result = await self.db.execute(
            select(GeneralAnnouncementModel)
            .offset(skip)
            .limit(limit)
            .order_by(GeneralAnnouncementModel.created_at.desc())
        )
        return result.scalars().all()

    async def search_announcements(self, search_params: GeneralAnnouncementSearch) -> List[GeneralAnnouncementModel]:
        """Search announcements with filters"""
        query = select(GeneralAnnouncementModel)

        # Filter by category
        if search_params.category:
            query = query.where(GeneralAnnouncementModel.category == search_params.category)

        # Filter by model
        if search_params.model:
            query = query.where(GeneralAnnouncementModel.model == search_params.model)

        # Filter by active status
        if search_params.is_active is not None:
            query = query.where(GeneralAnnouncementModel.is_active == search_params.is_active)

        # Search by text
        if search_params.search_text:
            search_term = f"%{search_params.search_text}%"
            query = query.where(
                or_(
                    GeneralAnnouncementModel.announcement_name.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_english.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_hindi.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_gujarati.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_marathi.ilike(search_term)
                )
            )

        # Order by creation date (newest first)
        query = query.order_by(GeneralAnnouncementModel.created_at.desc())

        # Apply pagination
        offset = (search_params.page - 1) * search_params.limit
        query = query.offset(offset).limit(search_params.limit)

        result = await self.db.execute(query)
        return result.scalars().all()

    async def count_announcements(self, search_params: GeneralAnnouncementSearch) -> int:
        """Count announcements with filters (without pagination)"""
        query = select(func.count(GeneralAnnouncementModel.id))

        # Filter by category
        if search_params.category:
            query = query.where(GeneralAnnouncementModel.category == search_params.category)

        # Filter by model
        if search_params.model:
            query = query.where(GeneralAnnouncementModel.model == search_params.model)

        # Filter by active status
        if search_params.is_active is not None:
            query = query.where(GeneralAnnouncementModel.is_active == search_params.is_active)

        # Search by text
        if search_params.search_text:
            search_term = f"%{search_params.search_text}%"
            query = query.where(
                or_(
                    GeneralAnnouncementModel.announcement_name.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_english.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_hindi.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_gujarati.ilike(search_term),
                    GeneralAnnouncementModel.announcement_text_marathi.ilike(search_term)
                )
            )

        result = await self.db.execute(query)
        return result.scalar()

    async def update_announcement(self, announcement_id: int, announcement_update: GeneralAnnouncementUpdate) -> Optional[GeneralAnnouncementModel]:
        """Update announcement"""
        db_announcement = await self.get_announcement(announcement_id)
        if not db_announcement:
            return None

        update_data = announcement_update.dict(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_announcement, field, value)

        await self.db.commit()
        await self.db.refresh(db_announcement)
        return db_announcement

    async def delete_announcement(self, announcement_id: int) -> bool:
        """Soft delete announcement (mark as inactive)"""
        db_announcement = await self.get_announcement(announcement_id)
        if not db_announcement:
            return False

        db_announcement.is_active = False
        await self.db.commit()
        return True

    async def hard_delete_announcement(self, announcement_id: int) -> bool:
        """Permanently delete announcement"""
        db_announcement = await self.get_announcement(announcement_id)
        if not db_announcement:
            return False

        await self.db.delete(db_announcement)
        await self.db.commit()
        return True

    async def get_announcement_statistics(self) -> GeneralAnnouncementStatistics:
        """Get announcement statistics"""
        # Total announcements
        total_result = await self.db.execute(select(func.count(GeneralAnnouncementModel.id)))
        total_announcements = total_result.scalar()

        # Active announcements
        active_result = await self.db.execute(
            select(func.count(GeneralAnnouncementModel.id))
            .where(GeneralAnnouncementModel.is_active == True)
        )
        active_announcements = active_result.scalar()

        # Inactive announcements
        inactive_announcements = total_announcements - active_announcements

        # Announcements by category
        category_result = await self.db.execute(
            select(GeneralAnnouncementModel.category, func.count(GeneralAnnouncementModel.id))
            .group_by(GeneralAnnouncementModel.category)
        )
        announcements_by_category = {row[0]: row[1] for row in category_result.fetchall()}

        # Announcements by model
        model_result = await self.db.execute(
            select(GeneralAnnouncementModel.model, func.count(GeneralAnnouncementModel.id))
            .group_by(GeneralAnnouncementModel.model)
        )
        announcements_by_model = {row[0]: row[1] for row in model_result.fetchall()}

        return GeneralAnnouncementStatistics(
            total_announcements=total_announcements,
            active_announcements=active_announcements,
            inactive_announcements=inactive_announcements,
            announcements_by_category=announcements_by_category,
            announcements_by_model=announcements_by_model
        )

    async def update_video_path(self, announcement_id: int, video_path: str) -> Optional[GeneralAnnouncementModel]:
        """Update the ISL video path for an announcement"""
        db_announcement = await self.get_announcement(announcement_id)
        if not db_announcement:
            return None

        db_announcement.isl_video_path = video_path
        await self.db.commit()
        await self.db.refresh(db_announcement)
        return db_announcement


def get_general_announcement_service(db: AsyncSession) -> GeneralAnnouncementService:
    """Get general announcement service instance"""
    return GeneralAnnouncementService(db)