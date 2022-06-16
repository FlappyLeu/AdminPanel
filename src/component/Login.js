import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../style/login.css";
export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="background">
        <div className="login-right">
          <Form
            className="loginForm"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p className="login-title ">MStars Food delivery</p>
            <Form.Item
              className="form-input"
              label="И-мэйл"
              name="E-mail"
              rules={[
                {
                  required: true,
                  message: "И-мэйл хаягаа оруулна уу!",
                },
              ]}
            >
              <Input placeholder="И-мэйл хаягаа бичнэ үү" />
            </Form.Item>

            <Form.Item
              className="form-input"
              label="Нууц үг"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Нууц үгээ оруулна уу!",
                },
              ]}
            >
              <Input.Password placeholder="Нууц үгээ оруулна уу" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>
            <Button className="forgot-pass">Нууц үг мартсан?</Button>
            <Button />
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="login-button" htmlType="submit">
                Нэвтрэх
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
