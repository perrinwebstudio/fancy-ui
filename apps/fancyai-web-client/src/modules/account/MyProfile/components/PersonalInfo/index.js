import React, { useState } from "react";
import { Row, Button, Col, Form, Input, Typography } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import { useIntl } from "react-intl";
import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadContent,
  StyledInputWrapper,
} from "./index.styled";
import {
  StyledUserProfileGroupBtn,
  StyledUserProfileFormTitle,
} from "../index.styled";
import FloatLabel from "@crema/modules/components/floatLabel";

const { Text } = Typography;

const PersonalInfo = () => {
  const { user } = useAuthUser();
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const fullName = Form.useWatch("fullName", form);
  const positionTitle = Form.useWatch("positionTitle", form);
  const email = Form.useWatch("email", form);

  const [userImage, setUserImage] = useState(
    user.photoURL ? user.photoURL : "/assets/images/placeholder.jpg"
  );

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <>
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.personalInfo" />
      </StyledUserProfileFormTitle>
      <Form
        onFinish={onFinish}
        initialValues={{
          ...user,
          userImage: user.photoURL
            ? user.photoURL
            : "/assets/images/placeholder.jpg",
        }}
        form={form}
      >
        <Row>
          <Col xs={24} md={24} lg={12}>
            <StyledInfoUpload>
              <StyledInfoUploadAvatar src={userImage} />

              <StyledInfoUploadContent>
                <Text strong>{user.displayName}</Text>
                <br></br>
                <Text>{user.email}</Text>
              </StyledInfoUploadContent>
            </StyledInfoUpload>
            <AppRowContainer gutter={16}>
              <Col xs={24} md={12}>
                <FloatLabel
                  label={messages["common.fullName"]}
                  value={fullName}
                >
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Full Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </FloatLabel>
              </Col>
              <Col xs={24} md={12}>
                <FloatLabel
                  label={messages["userProfile.position_title"]}
                  value={positionTitle}
                >
                  <Form.Item
                    name="positionTitle"
                    rules={[
                      {
                        required: true,
                        message: "Please input your User Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </FloatLabel>
              </Col>
              <Col xs={24} md={12}>
                <FloatLabel label={messages["userProfile.email"]} value={email}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your e-mail address!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </FloatLabel>
              </Col>
              <Col xs={24} md={12}>
                <StyledInputWrapper>
                  <Button type="primary">Profile Image Upload</Button>
                </StyledInputWrapper>
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
      </Form>
    </>
  );
};

export default PersonalInfo;
