from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from config import DATABASE_URL

engine = create_async_engine(DATABASE_URL, future=True)

Base = declarative_base()

async_session = sessionmaker(
    bind=engine, class_=AsyncSession, expire_on_commit=False
)


# dependency
async def get_db_session() -> AsyncSession:
    async with async_session() as session:
        yield session
