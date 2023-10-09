import React, { useState } from "react";
import { Row, Button, Col, Input, Typography, Switch, Image } from "antd";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useIntl } from "react-intl";
import { StyledQRcodeImage, VerticalCenterDiv } from "./index.styled";
import { Divider } from "antd";
import AppCard from "@crema/components/AppCard";
import {
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from "../index.styled";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  useGetMFAQRImageQuery,
  useUpdateUser2faMutation,
} from "apps/fancyai-web-client/src/core/api/apiUserSetting";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import AppLoader from "@crema/components/AppLoader";

const { Text } = Typography;

const TwoFactorAuthentication = () => {
  const { messages } = useIntl();
  const { user } = useAuthUser();

  // const [phoneNumber, setPhoneNumber] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(
    user.twoFactorEnabled
  );
  const [multiFactorEnabled, setMultiFactorEnabled] = useState(
    user.multiFactorEnabled
  );

  const [updateUser2fa, { isLoading }] = useUpdateUser2faMutation();
  const { data: qrcode, isLoading: qrcodeLoading } = useGetMFAQRImageQuery({});

  const onFinish = () => {
    updateUser2fa?.({
      twoFactorEnabled,
      multiFactorEnabled,
    })
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

  return (
    <>
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.two_factor" />
      </StyledUserProfileFormTitle>
      <Row gutter={12}>
        {/* <Col xs={24} md={12} lg={8}>
          <FloatLabel
            label={messages["userProfile.phone_number"]}
            value={phoneNumber}
          >
            <Input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </FloatLabel>
        </Col> */}
        <Col xs={24} md={12}>
          <VerticalCenterDiv height={50}>
            <Switch checked={twoFactorEnabled} onChange={setTwoFactorEnabled} />
            <Text>{messages["userProfile.enable_two_factor"]}</Text>
          </VerticalCenterDiv>
        </Col>
      </Row>
      <Divider style={{ marginTop: 0 }} />
      <Row gutter={12}>
        <Col xs={24} md={12} lg={8}>
          <StyledUserProfileFormTitle>
            <IntlMessages id="userProfile.multi_factor" />
          </StyledUserProfileFormTitle>
          <VerticalCenterDiv height={40}>
            <Switch
              checked={multiFactorEnabled}
              onChange={setMultiFactorEnabled}
            />
            <Text>{messages["userProfile.enable_multi_factor"]}</Text>
          </VerticalCenterDiv>
        </Col>
        <Col xs={24} md={12}>
          <h3>QR Code</h3>
          {qrcodeLoading ? (
            <StyledQRcodeImage>
              <AppLoader />
            </StyledQRcodeImage>
          ) : (
            <Image
              src={
                qrcode?.data ??
                "/assets/images/qr-enabled.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              }
              style={{
                filter: multiFactorEnabled ? "" : "blur(4px)",
                transition: "all .2s",
              }}
              preview={false}
              width={200}
            />
          )}
        </Col>
      </Row>
      <Row style={{ marginTop: "24px" }}>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className="user-profile-group-btn"
          >
            <Button
              type="primary"
              onClick={onFinish}
              loading={isLoading}
              disabled={isLoading}
            >
              Save Changes
            </Button>
            <Button>Cancel</Button>
          </StyledUserProfileGroupBtn>
        </Col>
      </Row>
    </>
  );
};

export default TwoFactorAuthentication;
