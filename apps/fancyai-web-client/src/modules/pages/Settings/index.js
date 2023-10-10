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
import { useState } from "react";
import FloatLabel from "@crema/modules/components/floatLabel";
import { StyledUserProfileGroupBtn } from "../../account/MyProfile/index.styled";
import {
  useFetchCompanyInfoQuery,
  useUpdateCompanySettingMutation,
} from "apps/fancyai-web-client/src/core/api/apiCompanySetting";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import AppLoader from "@crema/components/AppLoader";
import UploadLogoModal from "./UploadLogoModal";

const { Text } = Typography;

const Settings = () => {
  const { selectedCompanyId } = useAppAuth();

  const { data, isLoading: fetching } = useFetchCompanyInfoQuery(
    {
      companyId: selectedCompanyId,
    },
    {
      skip: !Boolean(selectedCompanyId),
    }
  );

  const [updateCompanySetting, { isLoading }] =
    useUpdateCompanySettingMutation();

  const companyInfo = data?.data;

  console.log(companyInfo, "companyInfo");
  const { messages } = useIntl();

  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);

  const [isShowUploadModal, setIsShowUploadModal] = useState(false);

  const onFinish = async (values) => {
    // console.log("Finish:", values);
    updateCompanySetting?.({ ...values, logo, companyId: selectedCompanyId })
      .unwrap()
      .then((result) => {
        getUser()
          .unwrap()
          .catch(() => {});
      })
      .catch((err) => console.error(err));
    setIsUploading(false);
  };

  const handleOpenUploadModal = () => {
    setIsShowUploadModal(true);
  };

  return (
    <>
      <h2>Settings</h2>
      <Card style={{ marginTop: 16 }}>
        {companyInfo ? (
          <Form
            onFinish={onFinish}
            initialValues={{
              ...companyInfo,
            }}
            form={form}
          >
            <Text strong>Settings</Text>
            <Row style={{ marginTop: 16 }}>
              <Col xs={24} md={24} lg={18}>
                <StyledInfoUpload>
                  <StyledInfoUploadAvatar
                    src={
                      companyInfo?.logo
                        ? companyInfo?.logo
                        : "/assets/images/company_placeholder_logo.jpg"
                    }
                  />

                  <StyledInfoUploadContent>
                    <Text strong>{companyInfo?.name}</Text>
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
                          {/* <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <label htmlFor="icon-button-file"> */}
                          <Button
                            type="primary"
                            onClick={handleOpenUploadModal}
                          >
                            Upload Company Logo
                          </Button>
                          {/* </label>
                          </div> */}
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
                        loading={isLoading}
                        disabled={isLoading}
                      >
                        Save Changes
                      </Button>
                      <Button htmlType="cancel">Cancel</Button>
                    </StyledUserProfileGroupBtn>
                  </Col>
                </AppRowContainer>
              </Col>
              <UploadLogoModal
                isShowModal={isShowUploadModal}
                handleCloseModal={() => setIsShowUploadModal(false)}
                companyInfo={companyInfo}
              />
            </Row>
          </Form>
        ) : (
          <AppLoader />
        )}
      </Card>
    </>
  );
};

export default Settings;
