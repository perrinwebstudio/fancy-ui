import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Checkbox, Col, Form, Input } from "antd";
import { useIntl } from "react-intl";
import AppPageMeta from "@crema/components/AppPageMeta";
import { ReactComponent as Logo } from "../../../assets/user/signup.svg";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledUserCardFooter,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserFieldActionLink,
  StyledUserFieldActionRow,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledImg,
  StyledDiv,
} from "../index.styled";
import { useNavigate } from "react-router-dom";
import axios from "@crema/services/axios";

const Signup = () => {
  const { messages } = useIntl();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const companyName = Form.useWatch("company_name", form);
  const fullName = Form.useWatch("name", form);
  const email = Form.useWatch("email", form);
  const password = Form.useWatch("password", form);
  const confirmPassword = Form.useWatch("confirmPassword", form);

  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("/api/auth/signup", values)
      .then((result) => {
        if (result.success) {
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.error("onFinishCatch: ", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const gotoSignin = () => {
    navigate("/signin");
  };

  return (
    <StyledUserPages>
      <AppPageMeta title="Signup" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserContainer key="a">
          <StyledUserCardLg>
            <AppRowContainer gutter={32}>
              <Col xs={24} lg={12}>
                <StyledDiv>
                  <StyledUserStyledImg>
                    <Logo />
                  </StyledUserStyledImg>
                </StyledDiv>
              </Col>

              <Col xs={24} lg={12}>
                <StyledUserCardHeader>
                  <h3>
                    <IntlMessages id="common.signup" />
                  </h3>
                </StyledUserCardHeader>

                <StyledUserForm
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  form={form}
                >
                  <FloatLabel
                    label={messages["common.company_name"]}
                    value={companyName}
                  >
                    <Form.Item
                      name="company_name"
                      className="form-field"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Company Name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </FloatLabel>

                  <FloatLabel label={messages["common.name"]} value={fullName}>
                    <Form.Item
                      name="name"
                      className="form-field"
                      rules={[
                        { required: true, message: "Please input your Name!" },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </FloatLabel>

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

                  <FloatLabel
                    label={messages["common.password"]}
                    value={password}
                  >
                    <Form.Item
                      name="password"
                      className="form-field"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </FloatLabel>

                  <FloatLabel
                    label={messages["common.retypePassword"]}
                    value={confirmPassword}
                  >
                    <Form.Item
                      name="confirmPassword"
                      className="form-field"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Retype Password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                  </FloatLabel>

                  <StyledUserFieldActionRow
                    name="remember"
                    valuePropName="checked"
                  >
                    <>
                      <Checkbox>
                        <IntlMessages id="common.iAgreeTo" />
                      </Checkbox>
                      <StyledUserFieldActionLink className="user-field-action-link">
                        <IntlMessages id="common.termConditions" />
                      </StyledUserFieldActionLink>
                    </>
                  </StyledUserFieldActionRow>

                  <StyledUserFormBtn type="primary" htmlType="submit">
                    <IntlMessages id="common.signup" />
                  </StyledUserFormBtn>
                </StyledUserForm>

                <StyledUserCardFooter>
                  <span>
                    <IntlMessages id="common.alreadyHaveAccount" />
                  </span>
                  <StyledUserCardFooterLink onClick={gotoSignin}>
                    <IntlMessages id="common.signInHere" />
                  </StyledUserCardFooterLink>
                </StyledUserCardFooter>
              </Col>
            </AppRowContainer>
          </StyledUserCardLg>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default Signup;
