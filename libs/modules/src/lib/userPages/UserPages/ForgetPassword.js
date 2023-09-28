import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import { Input, Form } from "antd";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";
import {
  StyledUserCardHeader,
  StyledUserCardLgSpace,
  StyledUserCardLogo,
  StyledUserCardPara,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
} from "../index.styled";
import axios from "@crema/services/axios";

const onFinish = (values) => {
  console.log("Success:", values);
  axios
    .post("/api/auth/signup", values)
    .then((result) => {
      if (result.success) {
        navigate("/signup_confirm");
      }
    })
    .catch((err) => {
      console.error("onFinishCatch: ", err);
    });
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ForgetPassword = () => {
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const email = Form.useWatch("email", form);

  return (
    <StyledUserPages>
      <AppPageMeta title="Forgot Password" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserContainer key="a">
          <StyledUserCardLgSpace>
            <StyledUserCardHeader>
              <StyledUserCardLogo>
                <img src={"/assets/images/logo.png"} alt="crema" />
              </StyledUserCardLogo>
              <h3>
                <IntlMessages id="common.forgetPassword" />
              </h3>
            </StyledUserCardHeader>

            <StyledUserCardPara>
              <p className="mb-0">
                <IntlMessages id="common.forgetPasswordTextOne" />
              </p>
              <p className="mb-0">
                <IntlMessages id="common.forgetPasswordTextTwo" />
              </p>
            </StyledUserCardPara>

            <StyledUserForm
              className="mb-0"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFai
              led={onFinishFailed}
            >
              <FloatLabel label={messages["common.email"]} value={email}>
                <StyledUserFieldAction
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email Address!",
                    },
                  ]}
                >
                  <Input placeholder={messages["common.emailAddress"]} />
                </StyledUserFieldAction>
              </FloatLabel>
              <StyledUserFormBtn type="primary" htmlType="submit">
                <IntlMessages id="common.sendNewPassword" />
              </StyledUserFormBtn>
            </StyledUserForm>
          </StyledUserCardLgSpace>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ForgetPassword;
