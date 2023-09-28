import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import { Col, Form, Input } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";
import { ReactComponent as Logo } from "../../../assets/user/forgot-password.svg";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledUserCardForPass,
  StyledUserCardHeader,
  StyledUserCardCenterWrapper,
  StyledUserContainer,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledForPass,
  StyledUserStyledImg,
} from "../index.styled";
import axios from "@crema/services/axios";
import { Store } from "react-notifications-component";
import notification from "../../thirdParty/reactNotification/helpers/notification";

const onFinish = (values) => {
  console.log("Success:", values);
  axios
    .post("/api/password/forgot", values)
    .then((result) => {
      console.log(result, "result");
      if (result.data.success) {
        Store.addNotification(
          Object.assign({}, notification, {
            type: "success",
            title: "Success",
            message: result.data.msg,
          })
        );
      }
    })
    .catch((err) => {
      console.error("onFinishCatch: ", err.response.data.msg);
      Store.addNotification(
        Object.assign({}, notification, {
          type: "danger",
          title: "Error",
          message: err.response.data.msg,
          container: "top-right",
        })
      );
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
          <StyledUserCardForPass>
            <AppRowContainer>
              <Col xs={24} lg={12}>
                <StyledUserStyledImg>
                  <Logo />
                </StyledUserStyledImg>
              </Col>

              <Col xs={24} lg={12}>
                <StyledUserCardCenterWrapper>
                  <StyledUserStyledForPass>
                    <StyledUserCardHeader>
                      <h3>
                        <IntlMessages id="common.forgetPassword" />
                      </h3>
                    </StyledUserCardHeader>

                    <StyledUserForm
                      className="mb-0"
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      form={form}
                    >
                      <FloatLabel
                        label={messages["common.email"]}
                        value={email}
                      >
                        <Form.Item
                          name="email"
                          className="form-field-lg"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Email Address!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </FloatLabel>

                      <StyledUserFormBtn type="primary" htmlType="submit">
                        <IntlMessages id="common.sendNewPassword" />
                      </StyledUserFormBtn>
                    </StyledUserForm>
                  </StyledUserStyledForPass>
                </StyledUserCardCenterWrapper>
              </Col>
            </AppRowContainer>
          </StyledUserCardForPass>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ForgetPassword;
