from sqlalchemy import Column, Integer, String

from database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    fingerprint = Column(String)
