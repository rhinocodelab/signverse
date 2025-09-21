from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from pathlib import Path
import os
import tempfile
from typing import Optional

from app.db.database import get_db

router = APIRouter()

# Create temp audio directory
TEMP_AUDIO_DIR = Path("frontend/public/temp/audio")
TEMP_AUDIO_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/save-audio")
async def save_audio_file(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    """Save uploaded audio file to temp directory"""

    # Validate file type
    allowed_types = ['audio/wav', 'audio/mp3', 'audio/mpeg',
                     'audio/aiff', 'audio/aac', 'audio/ogg', 'audio/flac']
    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported audio format. Supported formats: {allowed_types}"
        )

    # Validate file size (10MB limit)
    file_size = 0
    content = await file.read()
    file_size = len(content)

    if file_size > 10 * 1024 * 1024:  # 10MB limit
        raise HTTPException(
            status_code=400,
            detail="File size too large. Maximum size is 10MB."
        )

    try:
        # Create unique filename to avoid conflicts
        import time
        timestamp = int(time.time() * 1000)  # milliseconds
        file_extension = file.filename.split(
            '.')[-1] if file.filename else 'mp3'
        safe_filename = file.filename.replace(' ', '_').replace(
            '/', '_').replace('\\', '_') if file.filename else 'audio'
        unique_filename = f"{timestamp}_{safe_filename}"

        # Save file to temp directory
        file_path = TEMP_AUDIO_DIR / unique_filename

        with open(file_path, "wb") as buffer:
            buffer.write(content)

        return {
            "message": "Audio file saved successfully",
            "filename": unique_filename,
            "file_path": str(file_path),
            "file_size": file_size,
            "content_type": file.content_type
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to save audio file: {str(e)}"
        )


@router.get("/temp-audio/{filename}")
async def get_temp_audio_file(filename: str):
    """Get temporary audio file"""
    try:
        file_path = TEMP_AUDIO_DIR / filename

        if not file_path.exists():
            raise HTTPException(status_code=404, detail="Audio file not found")

        from fastapi.responses import FileResponse
        return FileResponse(
            path=str(file_path),
            media_type="audio/mpeg",
            filename=filename
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve audio file: {str(e)}"
        )


@router.delete("/temp-audio/{filename}")
async def delete_temp_audio_file(filename: str):
    """Delete temporary audio file"""
    try:
        file_path = TEMP_AUDIO_DIR / filename

        if not file_path.exists():
            raise HTTPException(status_code=404, detail="Audio file not found")

        os.remove(file_path)

        return {
            "message": "Audio file deleted successfully",
            "filename": filename
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to delete audio file: {str(e)}"
        )
