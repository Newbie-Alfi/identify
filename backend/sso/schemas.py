from pydantic import BaseModel


class IdentifyRequest(BaseModel):
    fingerprint: str


class IdentifyResponse(BaseModel):
    user_id: int | None
