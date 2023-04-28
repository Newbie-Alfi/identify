import { Col, Row, Result, Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE } from "../routes";

export default function NotFoundPage() {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Result
          status="404"
          subTitle="Такой страницы не существует."
          extra={
            <Link to={ROUTE.MAIN}>
              <Button type="primary">На главную</Button>
            </Link>
          }
        />
      </Col>
    </Row>
  );
}
