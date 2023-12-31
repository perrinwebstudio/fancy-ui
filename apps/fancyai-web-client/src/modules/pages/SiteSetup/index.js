import React, { useCallback, useEffect, useMemo } from "react";
import { Anchor, Button, Card, Col, Form, Row, Typography } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import AppInfoView from "@crema/components/AppInfoView";
import {SiteSetupSteps} from "@crema/modules/siteSetup";
import StyledSiteSetupStepBar from "./StyledSiteSetupStepBar";
import { Link } from "react-router-dom";
import SimpleBarReact from "simplebar-react";
import NewSiteForm, { CAN_SKIP_STEPS, validateStep } from "./NewSiteForm";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetSiteQuery, useStoreCompanySiteMutation, useUpdateSiteMutation } from "apps/fancyai-web-client/src/core/api/apiSite";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import StyledSpaceOnCompleted from "./StyledSpaceOnCompleted";
import AppSiteGoogleProvider from "../../providers/AppSiteGoogleProvider";

const { Title } = Typography;

const SiteSetup = () => {
  const [store, { isLoading }] = useStoreCompanySiteMutation()
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation()

  const { selectedCompanyId } = useAppAuth()
  const [currentStep, setCurrentStep] = React.useState(0);

  useEffect(() => {
    document.querySelector('.site-setup-form-wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

  const [formRef] = Form.useForm();
  const [formData, setFormData] = React.useState({
    platform: 'shopify'
  })
  const [id, setId] = React.useState(null)
  const [downloadedWpPlugin, setDownloadedWpPlugin] = React.useState(false)
  const [installedShopifyApp, setInstalledShopifyApp] = React.useState(false)

  const [visitedSteps, setVisitedSteps] = React.useState([0])

  const onStepChange = useCallback((step) => {
    setCurrentStep(step)
    if (!visitedSteps.includes(step)) {
      setVisitedSteps([...visitedSteps, step])
    }
  }, [setCurrentStep, visitedSteps])

  const onNextStep = useCallback(async (step) => {
    if (currentStep === 0 && !id) {
      await store({
        companyId: selectedCompanyId,
        site: formData
      }).unwrap().then((rsp) => {
        setId(rsp.data._id)
        onStepChange(currentStep + 1)
      }).catch((err) => {})
    } else if (id) {
      // update company here
      await update({
        siteId: id,
        site: formData
      }).unwrap().then((rsp) => {
        onStepChange(currentStep + 1)
      }).catch((err) => {})
    }
  }, [currentStep, onStepChange, store, selectedCompanyId, formData, id])

  const onPreviousStep = useCallback(async () => {
    console.log('currentStep', currentStep)
    if (currentStep > 0) {
      onStepChange(currentStep - 1)
    }
  }, [onStepChange, currentStep])

  const form = useMemo(() => {
    return <Form initialValues={{
        platform: 'shopify'
      }}
      form={formRef}
      layout="vertical"
      onFieldsChange={(changedFields, allFields) => {
        const _data = {}
        allFields.forEach(field => {
          _data[field.name[0]] = field.value
        })
        setFormData(_data)
      }}
    >
      <NewSiteForm
        siteId={id}
        downloadedWpPlugin={downloadedWpPlugin}
        setDownloadedWpPlugin={setDownloadedWpPlugin}
        installedShopifyApp={installedShopifyApp}
        setInstalledShopifyApp={setInstalledShopifyApp}
        isLoading={isLoading || isUpdating}
        formData={formData}
        currentStep={currentStep}
        onNextStep={onNextStep}
        onPrevStep={() => {
          onPreviousStep()
        }}
      />
    </Form>
  }, [currentStep, setFormData, formRef, formData, isLoading, isUpdating, downloadedWpPlugin, installedShopifyApp, setDownloadedWpPlugin, setInstalledShopifyApp, onNextStep])

  return (
    <>
      <AppPageMeta title="Add new site" />
      <StyledSiteSetupStepBar>
        <Col md={16} lg={5}>
          <Title level={4}>Add new site</Title>
        </Col>
        <Col xs={0} sm={0} md={16} lg={14}>
          <SiteSetupSteps
            checkStepFinish={(step) => {
              return validateStep(step, formData, downloadedWpPlugin, installedShopifyApp)
            }}
            current={currentStep}
            onClickStep={(step) => {
              onStepChange(step)
            }}
            skippableSteps={CAN_SKIP_STEPS}
            visitedSteps={visitedSteps}
          />
        </Col>
        <Col md={16} lg={5}>
          <div style={{textAlign: 'right'}}>
            <Link to="/pages/sites"><Button icon={<ArrowLeftOutlined />} type='link'>Back to sites</Button></Link>
          </div>
        </Col>
      </StyledSiteSetupStepBar>
      <SimpleBarReact style={{ flex: 1, overflowY: 'auto', minHeight: '0px', marginTop: '20px', marginBottom: '10px' }}>
        <Card className="site-setup-form-wrapper" bordered={false} style={{overflowY: 'auto'}}>
          {form}
        </Card>
      </SimpleBarReact>
      <AppInfoView />
    </>
  );
};

export default SiteSetup;
