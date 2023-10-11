import React, { useEffect } from "react";

import IntlMessages from "@crema/helpers/IntlMessages";
import { useIntl } from "react-intl";
import AppAnimate from "@crema/components/AppAnimate";
import { Button, Checkbox, Form, Input } from "antd";
import { BsMicrosoft } from "react-icons/bs";
import {
  GithubOutlined,
  GoogleOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

import AppPageMeta from "@crema/components/AppPageMeta";
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardFooterAction,
  StyledUserCardFooterLink,
  StyledUserCardHeader,
  StyledUserCardSubHeader,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserFieldActionLink,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserSocialLink,
} from "../index.styled";
import { useNavigate } from "react-router-dom";
import axios from "@crema/services/axios";
import { initialUrl } from "@crema/constants/AppConst";
import FloatLabel from "@crema/modules/components/floatLabel";
import Typography from "antd/es/typography/Typography";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const Signin = ({
  verify2FA,
  isLoading,
}) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const {verify2FAToken: apiToken} = useAuthUser();

  const goToSignin = () => {
    navigate("/signin");
  };

  // useEffect(() => {
  //   if (!apiToken) {
  //     goToSignin();
  //   }
  // })

  const onFinish = (values) => {
    verify2FA?.({
      code: values.code,
      token: apiToken
    }).unwrap().then((result) => {
      navigate(initialUrl);
    })
    .catch(() => {});
  };
  return (
    <StyledUserPages>
      <AppPageMeta title="Signin" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserContainer key="a">
          <StyledUserCard>
            <h3>
              Verifying
            </h3>

            <StyledUserCardSubHeader>
              <Typography.Text type='secondary'>
                Please enter the 2FA code sent to your email.
              </Typography.Text>
            </StyledUserCardSubHeader>

            <StyledUserForm
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              form={form}
            >
              <FloatLabel>
                <Form.Item
                  name="code"
                  className="form-field"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                  ]}
                >
                  <Input placeholder="2FA Code" />
                </Form.Item>
              </FloatLabel>

              <StyledUserFormBtn loading={isLoading} disabled={isLoading} type="primary" htmlType="submit">
                Verify
              </StyledUserFormBtn>
            </StyledUserForm>

            <StyledUserCardFooter>
              <StyledUserCardFooterLink onClick={goToSignin}>
                Back to Sign In
              </StyledUserCardFooterLink>
            </StyledUserCardFooter>
          </StyledUserCard>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default Signin;
