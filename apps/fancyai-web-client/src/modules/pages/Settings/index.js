import axios from "axios";
import { Row, Button, Col, Form, Input, Typography, Card } from "antd";
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
import { useSiteDetail } from "@crema/modules/siteDetail";
import {
  useGetS3PresignedUrlMutation,
  useGetSiteQuery,
  useUpdateUserSettingMutation,
} from "apps/fancyai-web-client/src/core/api";
import { useState } from "react";
import FloatLabel from "@crema/modules/components/floatLabel";
import { StyledUserProfileGroupBtn } from "../../account/MyProfile/index.styled";
const { Text } = Typography;

const Settings = () => {
  const { id } = useSiteDetail();
  const { data: site, isLoading: loadingSite } = useGetSiteQuery(
    {
      siteId: id,
    },
    {
      skip: !id,
    }
  );
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);

  const [siteImage, setSiteImage] = useState(
    site?.photoURL
      ? site?.photoURL
      : "/assets/images/user_avatar_placeholder.jpg"
  );

  const [updateUserSetting, { isLoading }] = useUpdateUserSettingMutation();
  const [getS3PresignedUrl] = useGetS3PresignedUrlMutation();
  const [isUploading, setIsUploading] = useState(false);

  console.log(site, id, "site");

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      setSiteImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const onReset = () => {
    setSiteImage("/assets/images/user_avatar_placeholder.jpg");
  };

  const onFinish = async (values) => {
    // console.log("Finish:", values);
    let avatar = site?.photoURL ?? "";
    if (acceptedFiles?.length) {
      const avatarFile = acceptedFiles[0];
      setIsUploading(true);
      const res = await getS3PresignedUrl({
        fileName: avatarFile.name.split(".")?.[0],
        fileType: avatarFile.name.split(".")?.[1] ?? "",
      });
      if (res?.data?.data) {
        const { signedRequest } = res.data.data;
        const reader = new FileReader();
        reader.readAsArrayBuffer(avatarFile);

        reader.onload = () => {
          const data = reader.result;
          axios.put(`${signedRequest}`, data);
        };
        avatar = signedRequest.split("?")?.[0];
      }
    }
    updateUserSetting?.({ ...values, avatar })
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
    setIsUploading(false);
  };

  return (
    <>
      <h2>Settings</h2>
      <Card style={{ marginTop: 16 }}>
        <Form
          onFinish={onFinish}
          initialValues={{
            ...site,
            siteImage: site?.photoURL
              ? site?.photoURL
              : "/assets/images/user_avatar_placeholder.jpg",
          }}
          form={form}
        >
          <Text strong>Settings</Text>
          <Row style={{ marginTop: 16 }}>
            <Col xs={24} md={24} lg={18}>
              <StyledInfoUpload>
                <StyledInfoUploadAvatar src={siteImage} />

                <StyledInfoUploadContent>
                  <Text strong>{site?.name}</Text>
                </StyledInfoUploadContent>
              </StyledInfoUpload>
              <AppRowContainer gutter={16}>
                <Col xs={24} md={12}>
                  <FloatLabel label="Company Name" value={name}>
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
                  <StyledInputWrapper>
                    <StyledInfoUploadContent>
                      <StyledInfoUploadBtnView>
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} />
                          <label htmlFor="icon-button-file">
                            <Button type="primary">Upload Company Logo</Button>
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
      </Card>
    </>
  );
};

export default Settings;
