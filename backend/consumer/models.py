from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from database import Base


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True)
    name = Column(String)

    user_products = relationship("UserProduct", back_populates="product")


class UserProduct(Base):
    __tablename__ = "user_product"

    # this field is not a Foreign Key because User
    # is stored in SSO service's DB only
    user_id = Column(Integer, primary_key=True)
    product_id = Column(
        Integer,
        ForeignKey("product.id", ondelete="CASCADE"),
        primary_key=True,
    )

    product = relationship("Product", back_populates="user_products")
