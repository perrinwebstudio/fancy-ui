import React from "react";
import AppAnimate from "@crema/components/AppAnimate";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col, Typography, Button } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import { ReactComponent as Logo } from "../../../assets/user/signup.svg";
import { ReactComponent as InMail } from "../../../assets/icon/inmail.svg";
import {
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserPages,
  StyledUserStyledImg,
  StyledDiv,
  StyledDivDown,
  StyledDivOnlyContent,
} from "../index.styled";

const { Title, Text } = Typography;

const SignupConfirm = () => {
  return (
    <StyledUserPages>
      <AppPageMeta title="SignupConfirm" />
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
                <StyledDivDown>
                  <StyledDivOnlyContent>
                    <InMail width={50} height={30} />
                    <Title level={4}>Thank you for signing up!</Title>
                  </StyledDivOnlyContent>
                  <StyledDivOnlyContent>
                    <Text strong>
                      Please check your email to confirm your address and
                      activate your account. If you don't see the email, don't
                      forget to check your spam folder.
                      <br></br>
                      <Text strong style={{ color: "#0a8fdc" }}>
                        Welcome aboard!
                      </Text>
                    </Text>
                  </StyledDivOnlyContent>
                  <Button style={{ width: "100%" }} type="primary">
                    Got It
                  </Button>
                </StyledDivDown>
              </Col>
            </AppRowContainer>
          </StyledUserCardLg>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default SignupConfirm;
