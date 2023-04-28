import { TabsProps, Tabs, Typography, Col, Row, Tooltip } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ROUTE } from "../routes";

export default function Login() {
  const navigate = useNavigate();

  const onChange = (key: string) => {
    navigate(key);
  };

  const items: TabsProps["items"] = [
    {
      key: ROUTE.SIGN_IN,
      label: `Вход`,

      children: <Outlet />,
    },
    {
      key: ROUTE.SIGN_UP,
      label: `Регистрация`,
      children: <Outlet />,
    },
  ];

  return (
    <Row style={{ height: "100vh" }}>
      <Col style={{ marginTop: "10vh" }} span={12} offset={6}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: 420 }}>
            <Link to={ROUTE.MAIN}>
              <Tooltip>
                <div
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Typography.Title style={{ margin: 0 }}>
                    Благобрать
                  </Typography.Title>
                </div>
              </Tooltip>
            </Link>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </Col>
    </Row>
  );
}
