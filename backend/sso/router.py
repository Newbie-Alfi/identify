from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse
from sqlalchemy import select

from database import AsyncSession, get_db_session
from models import User
from schemas import IdentifyRequest, IdentifyResponse

router = APIRouter(prefix="/api/v1", tags=["sso"])


@router.post(
    "/identify",
    status_code=status.HTTP_200_OK,
    response_model=IdentifyResponse,
    responses={
        status.HTTP_201_CREATED: {
            "description": "User was created",
            "model": IdentifyResponse,
        }
    },
)
async def identify(
    data: IdentifyRequest, session: AsyncSession = Depends(get_db_session)
):
    # check if the user with such fingerprint already exists
    query = select(User).where(User.fingerprint == data.fingerprint)
    result = await session.execute(query)
    user: User = result.scalar()

    if not user:
        user = User(fingerprint=data.fingerprint)

        session.add(user)
        await session.commit()

        return JSONResponse(
            {"user_id": user.id}, status_code=status.HTTP_201_CREATED
        )

    return {"user_id": user.id}
