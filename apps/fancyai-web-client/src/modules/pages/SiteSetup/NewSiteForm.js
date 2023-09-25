import React from 'react';
import PropTypes from 'prop-types';
import SiteSetupStep1 from "./Step1";
import SiteSetupStep2 from "./Step2";
import SiteSetupStep3 from "./Step3";
import SiteSetupStep4 from "./Step4";
import SiteSetupStep5 from "./Step5";
import SiteSetupStep6 from "./Step6";
import SiteSetupStep7 from "./Step7";
import StepFormWrapper from "./StepFormWrapper";
import { Button, Form } from "antd";


const NewSiteForm = ({ prop1 }) => {
  console.log('rerender')
  const [form] = Form.useForm();
  const sitePlatform = Form.useWatch('site_platform', form)

  return <Form initialValues={{
    site_platform: 'shopify'
  }} form={form} layout="vertical">
    <SiteSetupStep1 />
    <SiteSetupStep2 />
    <SiteSetupStep3 />
    <SiteSetupStep4 />
    <SiteSetupStep5 />
    <SiteSetupStep6 sitePlatform={sitePlatform} />
    <SiteSetupStep7 />
    <StepFormWrapper >
      <Button style={{marginTop: '20px'}} type="primary" block size="large">Confirm</Button>
    </StepFormWrapper>
  </Form>
}

export default NewSiteForm