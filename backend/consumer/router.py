from database import AsyncSession, get_db_session
from dependencies import get_current_user
from fastapi import APIRouter, Depends, Response, status
from models import Product, UserProduct
from schemas import ProductCreate, ProductRead, ToggleProduct, User
from sqlalchemy import delete, select
from sqlalchemy.orm import joinedload

router = APIRouter(prefix="/api/v1", tags=["consumer"])


@router.get("/products")
async def get_products(
    user: User | None = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
) -> list[ProductRead]:
    query = select(Product).options(joinedload(Product.user_products))
    result = await session.execute(query)
    products = result.unique().scalars().all()

    for product in products:
        product.picked = False
        for user_product in product.user_products:
            if user_product.user_id == user.id:
                product.picked = True
                break

    return products


@router.post("/products")
async def create_product(
    product: ProductCreate,
    session: AsyncSession = Depends(get_db_session),
):
    new_product = Product(**product.dict())
    session.add(new_product)

    await session.commit()
    await session.refresh(new_product)

    return new_product


@router.post(
    "/products/toggle",
    responses={
        status.HTTP_201_CREATED: {
            "description": "Product was selected",
        },
        status.HTTP_204_NO_CONTENT: {
            "description": "Product was unselected",
        },
    },
)
async def toggle_product_selection(
    data: ToggleProduct,
    user: User = Depends(get_current_user),
    session: AsyncSession = Depends(get_db_session),
):
    result = await session.execute(
        select(UserProduct).where(
            UserProduct.user_id == user.id,
            UserProduct.product_id == data.product_id,
        )
    )
    if result.scalar():
        # delete
        query = delete(UserProduct).where(
            UserProduct.user_id == user.id,
            UserProduct.product_id == data.product_id,
        )
        await session.execute(query)
        await session.commit()

        return Response(status_code=status.HTTP_204_NO_CONTENT)
    else:
        # create a UserProduct relation
        session.add(UserProduct(user_id=user.id, product_id=data.product_id))
        await session.commit()
        return Response(status_code=status.HTTP_201_CREATED)
