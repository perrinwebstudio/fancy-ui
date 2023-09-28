import React, { useEffect, useMemo } from "react";
import { Anchor, Button, Card, Col, Form, Row, Typography } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import AppInfoView from "@crema/components/AppInfoView";
import {SiteSetupSteps} from "@crema/modules/siteSetup";
import StyledSiteSetupStepBar from "./StyledSiteSetupStepBar";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import NewSiteForm from "./NewSiteForm";

const { Title } = Typography;

export const validateStep = (step, formData) => {
  switch (step) {
    case 0:
      return formData.name && formData.url && formData.site_platform && formData.website_purpose
    case 1:
      return formData.competitors?.length && formData.products && formData.important_products && formData.target_customer && formData.band_voice_description
    case 2:
      return formData.plan
    case 3:
      return formData.market && formData.target_market && formData.important_keywords && formData.avoid_keywords && formData.kpi && formData.service_notes
    case 4:
      return true
    case 5:
      return true
    case 6:
      return true
  }
  return true
}

const SiteSetup = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  useEffect(() => {
    document.querySelector('.site-setup-form-wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  const [formRef] = Form.useForm();
  const [formData, setFormData] = React.useState({})

  const form = useMemo(() => {
    return <Form initialValues={{
        site_platform: 'shopify'
      }}
      form={formRef}
      onFinish={(values) => {
        console.log(values)
      }}
      layout="vertical"
      onFieldsChange={(changedFields, allFields) => {
        const _data = {}
        allFields.forEach(field => {
          _data[field.name[0]] = field.value
        })
        setFormData(_data)
      }}
    >
      <NewSiteForm formData={formData} currentStep={currentStep} onStepChange={(step) => {
        if (step >= 0 && step <= 6) {
          setCurrentStep(step)
        }
      }} />
    </Form>
  }, [currentStep, setFormData, formRef, formData])

  return (
    <>
      <AppPageMeta title="Add new site" />
      <StyledSiteSetupStepBar>
        <Col md={16} lg={5}>
          <Title level={3}>Add new site</Title>
        </Col>
        <Col xs={0} sm={0} md={16} lg={14}>
          <SiteSetupSteps checkStepFinish={(step) => {
            return validateStep(step, formData)
          }} current={currentStep} onClickStep={(step) => {
            setCurrentStep(step)
          }} />
        </Col>
        <Col md={16} lg={5}>
          <div style={{textAlign: 'right'}}>
            <Link to="/pages/sites"><Button ghost type='primary'>Back to sites</Button></Link>
          </div>
        </Col>
      </StyledSiteSetupStepBar>
      <SimpleBarReact style={{ flex: 1, overflowY: 'auto', minHeight: '0px', marginTop: '10px', marginBottom: '10px' }}>
        <Card className="site-setup-form-wrapper" bordered={false} style={{overflow: 'scroll'}}>
          {form}
        </Card>
      </SimpleBarReact>
      <AppInfoView />
    </>
  );
};

export default SiteSetup;
