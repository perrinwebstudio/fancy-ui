import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import { Typography, Col, Form, Input } from "antd";
import { useIntl } from "react-intl";
import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";
import { ReactComponent as Logo } from "../../../assets/user/reset-password.svg";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledUserCardHeader,
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledImgAuto,
  StyledUserStyledResetImgCol,
  StyledWrapper,
} from "../index.styled";
import { useNavigate, useSearchParams } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ResetPassword = ({ resetPassword, isLoading }) => {
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const newPassword = Form.useWatch("newPassword", form);
  const confirmPassword = Form.useWatch("confirmPassword", form);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    resetPassword?.({
      token: searchParams.get("token") ?? "",
      ...values,
    })
      .unwrap()
      .then((result) => {
        navigate("/signin");
      })
      .catch(() => {});
  };

  return (
    <StyledUserPages>
      <AppPageMeta title="Reset Password" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserContainer key="a">
          <StyledUserCardLg>
            <AppRowContainer>
              <StyledUserStyledResetImgCol xs={24} md={12}>
                <StyledUserStyledImgAuto className="user-styled-img">
                  <Logo />
                </StyledUserStyledImgAuto>
              </StyledUserStyledResetImgCol>

              <Col xs={24} md={12}>
                <StyledWrapper>
                  <StyledUserCardHeader>
                    <h3>
                      <IntlMessages id="common.resetPassword" />
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
                      label={messages["common.password"]}
                      value={newPassword}
                    >
                      <Form.Item
                        name="newPassword"
                        className="form-field"
                        rules={[
                          {
                            required: true,
                            message: "Please input your New Password!",
                          },
                          {
                            min: 8,
                            message: "Password must have a minimum length of 8",
                          },
                          {
                            pattern: new RegExp(
                              "(?=.*[A-Z|!@#$&*])(?!.*[ ]).*$"
                            ),
                            message:
                              "Password must contain at least one uppercase letter or special character",
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
                          () => ({
                            validator(_, value) {
                              if (!value || newPassword === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The new password that you entered do not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                    </FloatLabel>

                    <StyledUserFormBtn
                      type="primary"
                      htmlType="submit"
                      loading={isLoading}
                      disabled={isLoading}
                    >
                      <IntlMessages id="common.resetMyPassword" />
                    </StyledUserFormBtn>
                  </StyledUserForm>
                </StyledWrapper>
              </Col>
            </AppRowContainer>
          </StyledUserCardLg>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ResetPassword;
