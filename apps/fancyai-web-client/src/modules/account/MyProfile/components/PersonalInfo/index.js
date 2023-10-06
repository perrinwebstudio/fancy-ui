import React, { useState } from "react";
import axios from "axios";
import { Row, Button, Col, Form, Input, Typography } from "antd";
import AppRowContainer from "@crema/components/AppRowContainer";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import { useDropzone } from "react-dropzone";
import { useIntl } from "react-intl";
import {
  StyledInfoUpload,
  StyledInfoUploadAvatar,
  StyledInfoUploadContent,
  StyledInputWrapper,
  StyledInfoUploadBtnView,
} from "./index.styled";
import {
  StyledUserProfileGroupBtn,
  StyledUserProfileFormTitle,
} from "../index.styled";
import FloatLabel from "@crema/modules/components/floatLabel";
import { useUpdateUserSettingMutation } from "apps/fancyai-web-client/src/core/api/apiUserSetting";
import {
  useGetUserMutation,
  useGetS3PresignedUrlMutation,
} from "apps/fancyai-web-client/src/core/api/api";

const { Text } = Typography;

const PersonalInfo = () => {
  const { user } = useAuthUser();
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);
  const jobTitle = Form.useWatch("jobTitle", form);
  const email = Form.useWatch("email", form);

  const [userImage, setUserImage] = useState(
    user.photoURL ? user.photoURL : "/assets/images/user_avatar_placeholder.jpg"
  );

  const [updateUserSetting, { isLoading }] = useUpdateUserSettingMutation();
  const [getS3PresignedUrl] = useGetS3PresignedUrlMutation();
  const [getUser] = useGetUserMutation();
  const [isUploading, setIsUploading] = useState(false);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setUserImage("/assets/images/user_avatar_placeholder.jpg");
  };

  const onFinish = async (values) => {
    // console.log("Finish:", values);
    // if (acceptedFiles?.length) {
    //   const avatarFile = acceptedFiles[0];
    //   setIsUploading(true);
    //   const res = await getS3PresignedUrl({
    //     fileName: avatarFile.name.split(".")?.[0],
    //     fileType: avatarFile.name.split(".")?.[1] ?? "",
    //   });
    //   if (res?.data?.data) {
    //     const { url, signedRequest } = res.data.data;
    //     await axios.put(signedRequest, avatarFile);
    //     window.location.href = url;
    //   }
    // }
    updateUserSetting?.(values)
      .unwrap()
      .then((result) => {
        getUser()
          .unwrap()
          .catch(() => {
            dispatch(logout());
            dispatch(resetStateAction());
          });
      })
      .catch((err) => console.error(err));
  };

  console.log(user);

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
            : "/assets/images/user_avatar_placeholder.jpg",
        }}
        form={form}
      >
        <Row>
          <Col xs={24} md={24} lg={18}>
            <StyledInfoUpload>
              <StyledInfoUploadAvatar src={userImage} />

              <StyledInfoUploadContent>
                <Text strong>{user.name}</Text>
                <br></br>
                <Text>{user.email}</Text>
              </StyledInfoUploadContent>
            </StyledInfoUpload>
            <AppRowContainer gutter={16}>
              <Col xs={24} md={12}>
                <FloatLabel label={messages["common.name"]} value={name}>
                  <Form.Item
                    name="name"
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
                  label={messages["userProfile.job_title"]}
                  value={jobTitle}
                >
                  <Form.Item
                    name="jobTitle"
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
                  <StyledInfoUploadContent>
                    <StyledInfoUploadBtnView>
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <label htmlFor="icon-button-file">
                          <Button type="primary">Profile Image Upload</Button>
                        </label>
                      </div>
                    </StyledInfoUploadBtnView>
                  </StyledInfoUploadContent>
                </StyledInputWrapper>
              </Col>
              <Col xs={24} md={24}>
                <StyledUserProfileGroupBtn
                  shouldUpdate
                  className="user-profile-group-btn"
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={isUploading || isLoading}
                    disabled={isUploading || isLoading}
                  >
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
