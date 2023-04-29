from pydantic import BaseModel


class User(BaseModel):
    id: int


class ProductBase(BaseModel):
    name: str


class ProductCreate(ProductBase):
    pass


class ToggleProduct(BaseModel):
    product_id: int


class ProductRead(ProductBase):
    id: int
    picked: bool

    class Config:
        orm_mode = True
