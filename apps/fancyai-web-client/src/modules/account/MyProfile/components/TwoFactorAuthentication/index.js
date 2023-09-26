import React, { useState } from "react";
import { Row, Button, Col, Input, Typography, Switch, Image } from "antd";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useIntl } from "react-intl";
import { VerticalCenterDiv } from "./index.styled";
import { Divider } from "antd";
import AppCard from "@crema/components/AppCard";
import {
  StyledUserProfileFormTitle,
  StyledUserProfileGroupBtn,
} from "../index.styled";
import FloatLabel from "@crema/modules/components/floatLabel";

const { Text } = Typography;

const TwoFactorAuthentication = () => {
  const { messages } = useIntl();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [enableTwoFactor, setEnableTwoFactor] = useState(false);
  const [enableMultiFactor, setEnableMultiFactor] = useState(false);

  const onFinish = () => {};

  return (
    <>
      <StyledUserProfileFormTitle>
        <IntlMessages id="userProfile.two_factor" />
      </StyledUserProfileFormTitle>
      <Row gutter={12}>
        <Col xs={24} md={12} lg={8}>
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
        </Col>
        <Col xs={24} md={12}>
          <VerticalCenterDiv height={50}>
            <Switch checked={enableTwoFactor} onChange={setEnableTwoFactor} />
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
              checked={enableMultiFactor}
              onChange={setEnableMultiFactor}
            />
            <Text>{messages["userProfile.enable_multi_factor"]}</Text>
          </VerticalCenterDiv>
        </Col>
        <Col xs={24} md={12}>
          <h3>QR Code</h3>
          <Image
            src={
              "/assets/images/qr-" +
              (enableMultiFactor ? "enabled.png" : "disabled.png")
            }
            preview={false}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "12px" }}>
        <Col xs={24} md={24}>
          <StyledUserProfileGroupBtn
            shouldUpdate
            className="user-profile-group-btn"
          >
            <Button type="primary" onClick={onFinish}>
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
