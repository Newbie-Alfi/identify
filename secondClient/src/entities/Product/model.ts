import { makeAutoObservable } from "mobx";
import { IProductResponse } from "./api/models";

export class Product {
  products: IProductResponse[];

  constructor(products: IProductResponse[]) {
    this.products = products;

    makeAutoObservable(this);
  }
}
