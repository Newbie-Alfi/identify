import { observer } from "mobx-react-lite";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useStore } from "../../rootStore";
import { productApi } from "../api";
import { IProductResponse } from "../api/models";
import { ProductContext } from "../context";
import { Product } from "../model";

interface IProductWrapper {
  children: ReactNode;
}

export const ProductWrapper = observer((props: IProductWrapper) => {
  const { children } = props;
  const [products, setProducts] = useState<IProductResponse[] | undefined>();
  const { user } = useStore();

  const init = async () => {
    if (user.fingerprint) {
      const response = await productApi(user.fingerprint).list();

      setProducts(response);
    }
  };

  useEffect(() => {
    init();
  }, [user.fingerprint]);

  const product = useMemo(
    () => (products ? new Product(products) : undefined),
    [products, user.fingerprint]
  );

  return product && user.fingerprint ? (
    <ProductContext.Provider value={{ product, fingerprint: user.fingerprint }}>
      {children}
    </ProductContext.Provider>
  ) : (
    "Loading"
  );
});
