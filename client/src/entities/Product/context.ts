import { createContext, useContext } from "react";
import { Product } from "./model";

export const ProductContext = createContext<
  { product: Product; fingerprint: string } | undefined
>(undefined);

export const useProduct = () => {
  const store = useContext(ProductContext);

  if (!store) throw new Error("Контекст не инициализирован!");

  return store;
};
