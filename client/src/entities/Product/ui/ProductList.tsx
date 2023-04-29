import { CheckOutlined } from "@ant-design/icons";
import { List, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { productApi } from "../api";
import { useProduct } from "../context";

export const ProductList = observer(() => {
  const { product, fingerprint } = useProduct();
  const onPick = async (id: number) => {
    await productApi(fingerprint).pick(id);

    const response = await productApi(fingerprint).list();

    product.products = response;
  };

  console.log(product.products[0].picked);

  return (
    <List
      dataSource={product.products}
      renderItem={(v) => (
        <List.Item onClick={() => onPick(v.id)}>
          <Typography.Text>
            {v.picked ? <CheckOutlined /> : ""} {v.name}
          </Typography.Text>
        </List.Item>
      )}
    />
  );
});
