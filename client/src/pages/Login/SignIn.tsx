import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../routes";

export function SignInForm() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);

    navigate(ROUTE.MAIN);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите электронную почту!",
          },
        ]}
      >
        <Input
          style={{ width: "100%" }}
          placeholder="Электронная почта"
          type="email"
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
      >
        <Input.Password
          style={{ width: "100%" }}
          placeholder="Пароль"
          size="large"
        />
      </Form.Item>

      <Form.Item style={{ marginTop: 0 }}>
        <Button style={{ width: "100%" }} type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}
