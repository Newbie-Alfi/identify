import { Form, Input, Button } from "antd";

export function SignUpForm() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
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

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
      >
        <Input.Password
          style={{ width: "100%" }}
          placeholder="Повторите пароль"
          size="large"
        />
      </Form.Item>

      <Form.Item style={{ marginTop: 0 }}>
        <Button
          // size="large"
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}
