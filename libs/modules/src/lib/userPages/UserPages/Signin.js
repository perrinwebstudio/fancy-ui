import React from "react";

import IntlMessages from "@crema/helpers/IntlMessages";
import { useIntl } from "react-intl";
import AppAnimate from "@crema/components/AppAnimate";
import { Button, Checkbox, Form, Input } from "antd";
import { BsMicrosoft } from "react-icons/bs";
import {
  GithubOutlined,
  GoogleOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

import AppPageMeta from "@crema/components/AppPageMeta";
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterAction,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserFieldActionLink,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserSocialLink,
} from "../index.styled";
import { useNavigate } from "react-router-dom";
import FloatLabel from "@crema/modules/components/floatLabel";

const Signin = ({
  loginEmail,
  isLoggingIn,
  loginGoogle,
  loginGithub,
  loginMicrosoft
}) => {
  const { messages } = useIntl();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const email = Form.useWatch("email", form);
  const password = Form.useWatch("password", form);

  const onFinish = (values) => {
    loginEmail?.(values).unwrap().then((result) => {
      navigate('/verify-2fa');
    })
    .catch(() => {});
  };

  const gotoForgetPassword = () => {
    console.log("forget");
    navigate("/forget-password");
  };

  const gotoSignup = () => {
    console.log("signup");
    navigate("/signup");
  };
  return (
    <StyledUserPages>
      <AppPageMeta title="Signin" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserContainer key="a">
          <StyledUserCard>
            <StyledUserCardHeader>
              <h3>
                <IntlMessages id="common.login" />
              </h3>
            </StyledUserCardHeader>

            <StyledUserForm
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              form={form}
            >
              <FloatLabel label={messages["common.email"]} value={email}>
                <Form.Item
                  name="email"
                  className="form-field"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </FloatLabel>

              <FloatLabel label={messages["common.password"]} value={password}>
                <Form.Item
                  name="password"
                  className="form-field"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </FloatLabel>

              <StyledUserFieldAction name="remember" valuePropName="checked">
                <>
                  <Checkbox>
                    <IntlMessages id="common.rememberMe" />
                  </Checkbox>
                  <StyledUserFieldActionLink
                    className="user-field-action-link ml-auto"
                    onClick={gotoForgetPassword}
                  >
                    <IntlMessages id="common.forgetPassword" />
                  </StyledUserFieldActionLink>
                </>
              </StyledUserFieldAction>

              <StyledUserFormBtn loading={isLoggingIn} disabled={isLoggingIn} type="primary" htmlType="submit">
                <IntlMessages id="common.login" />
              </StyledUserFormBtn>
            </StyledUserForm>

            <StyledUserCardFooterAction>
              <span>
                <IntlMessages id="common.orLoginWith" />
              </span>
              <StyledUserSocialLink>
                <Button onClick={loginGoogle}>
                  <GoogleOutlined />
                </Button>
                {/* <Button>
                  <LinkedinFilled />
                </Button> */}
                <Button onClick={loginGithub}>
                  <GithubOutlined />
                </Button>
                <Button onClick={loginMicrosoft}>
                  <BsMicrosoft />
                </Button>
              </StyledUserSocialLink>
            </StyledUserCardFooterAction>

            <StyledUserCardFooter>
              <span>
                <IntlMessages id="common.dontHaveAccount" />
              </span>
              <StyledUserCardFooterLink onClick={gotoSignup}>
                <IntlMessages id="common.signup" />
              </StyledUserCardFooterLink>
            </StyledUserCardFooter>
          </StyledUserCard>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default Signin;
