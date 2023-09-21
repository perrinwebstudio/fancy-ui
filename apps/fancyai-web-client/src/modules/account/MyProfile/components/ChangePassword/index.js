import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import FloatLabel from "@crema/modules/components/floatLabel";
import { useIntl } from "react-intl";
import {
  StyledUserProfileForm,
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from "../index.styled";

const ChangePassword = () => {
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const oldPassword = Form.useWatch("oldPassword", form);
  const newPassword = Form.useWatch("newPassword", form);
  const reNewPassword = Form.useWatch("reNewPassword", form);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledUserProfileForm
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Row>
        <Col xs={24} md={24} lg={12}>
          <StyledUserProfileFormTitle>
            <IntlMessages id="userProfile.changePassword" />
          </StyledUserProfileFormTitle>
          <AppRowContainer gutter={16}>
            <Col xs={24} md={12}>
              <FloatLabel
                label={messages["common.oldPassword"]}
                value={oldPassword}
              >
                <Form.Item
                  name="oldPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Enter Password",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </FloatLabel>
            </Col>
            <Col xs={24} md={12} />
            <Col xs={24} md={12}>
              <FloatLabel
                label={messages["common.newPassword"]}
                value={newPassword}
              >
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your New Password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </FloatLabel>
            </Col>
            <Col xs={24} md={12}>
              <FloatLabel
                label={messages["common.retypeNewPassword"]}
                value={reNewPassword}
              >
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input Your Confirm Password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "The Confirm Password that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </FloatLabel>
            </Col>
            <Col xs={24} md={24}>
              <StyledUserProfileGroupBtn
                shouldUpdate
                className="user-profile-group-btn"
              >
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
                <Button htmlType="cancel">Cancel</Button>
              </StyledUserProfileGroupBtn>
            </Col>
          </AppRowContainer>
        </Col>
      </Row>
    </StyledUserProfileForm>
  );
};

export default ChangePassword;
