import httpx
from fastapi import Header

from schemas import User


async def get_current_user(
    fingerprint: str = Header(default=...),
) -> User | None:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "http://sso:8000/api/v1/identify",
            json={
                "fingerprint": fingerprint,
            },
        )
        user_id = response.json().get("user_id")

        return User(id=user_id) if user_id else None
