import React from "react";
import { Button, Card, Col, Form, Row, Typography } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import AppInfoView from "@crema/components/AppInfoView";
import {SiteSetupSteps} from "@crema/modules/siteSetup";
import SiteSetupStep1 from "./Step1";
import SiteSetupStep2 from "./Step2";
import StyledSiteSetupStepBar from "./StyledSiteSetupStepBar";
import SiteSetupStep3 from "./Step3";
import SiteSetupStep4 from "./Step4";
import SiteSetupStep5 from "./Step5";
import SiteSetupStep6 from "./Step6";
import SiteSetupStep7 from "./Step7";
import StepFormWrapper from "./StepFormWrapper";
import { Link } from "react-router-dom";

const { Title } = Typography;

const SiteSetup = () => {
  const [form] = Form.useForm();

  const sitePlatform = Form.useWatch('site_platform', form)

  return (
    <>
      <AppPageMeta title="Add new site" />
      <StyledSiteSetupStepBar>
        <Col md={16} lg={5}>
          <Title level={3}>Add new site</Title>
        </Col>
        <Col md={16} lg={14}>
          <SiteSetupSteps />
        </Col>
        <Col md={16} lg={5}>
          <div style={{textAlign: 'right'}}>
            <Link to="/pages/sites"><Button ghost type='primary'>Back to sites</Button></Link>
          </div>
        </Col>
      </StyledSiteSetupStepBar>
      <div style={{ flex: 1, minHeight: '0px', overflowY: 'auto', marginTop: '10px', marginBottom: '10px' }}>
        <Card bordered={false}>
          <Form initialValues={{
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
        </Card>
      </div>
      <AppInfoView />
    </>
  );
};

export default SiteSetup;
