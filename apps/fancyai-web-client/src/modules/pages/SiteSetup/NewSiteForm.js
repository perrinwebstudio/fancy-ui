import React from 'react';
import { Button } from "antd";
import StyledSpaceOnCompleted from './StyledSpaceOnCompleted';
import { useNavigate } from 'react-router-dom';
import AppSiteGoogleProvider from '../../providers/AppSiteGoogleProvider';
import StepFormWrapper from './StepFormWrapper';
import SiteSetupStep1 from './Step1';
import SiteSetupStep2 from './Step2';
import SiteSetupStep3 from './Step3';
import SiteSetupStep4 from './Step4';
import SiteSetupStep5 from './Step5';
import SiteSetupStep6 from './Step6';
import SiteSetupStep7 from './Step7';
import SiteSetupStep8 from './Step8';

export const validateStep = (step, formData, downloadedWpPlugin = false, installedShopifyApp = false) => {
  switch (step) {
    case 0:
      return formData.name && formData.url && formData.platform && formData.description
    case 1:
      return formData.competitors?.length && formData.productsAndServices && formData.focusProducts && formData.targetCustomer && formData.brandVoiceDescription
    case 2:
      return formData.billingPlan
    case 3:
      return formData.marketType && formData.marketRegion && formData.importantKeywords && formData.avoidKeywords && formData.kpi && formData.additionalNotes
    case 4:
      return false
    case 5:
      if (formData.platform === 'shopify') {
        if (!!formData.shopifySiteUrl && formData.shopifySiteUrl !== '' && installedShopifyApp) return true
        return false
      }
      if (formData.platform === 'wordpress') {
        return downloadedWpPlugin
      }
      return true
    case 6:
      return false
  }
  return true
}

const MAP_STEP_TO_FORM = {
  0: SiteSetupStep1,
  1: SiteSetupStep2,
  2: SiteSetupStep3,
  3: SiteSetupStep4,
  4: SiteSetupStep5,
  5: SiteSetupStep6,
  6: SiteSetupStep7,
  7: SiteSetupStep8
}

export const CAN_SKIP_STEPS = [4]
const FINISH_STEPS = [6, 7]

const renderForm = (currentStep, formStep, props) => {
  const FormComponent = MAP_STEP_TO_FORM[formStep]

  const styles = {display: currentStep === formStep ? '' : 'none'}

  return <div style={styles}>
    {
      formStep === 4 ? 
      <AppSiteGoogleProvider selectedGaAccount={props.gaAccountId} siteId={props.siteId}>
        <FormComponent {...props} showNumber />
      </AppSiteGoogleProvider>
      : <FormComponent {...props} showNumber />
    }
  </div>
}

const NewSiteForm = ({ formData,
    siteId,
    currentStep = 0,
    onPrevStep,
    onNextStep,
    isLoading,
    downloadedWpPlugin,
    setDownloadedWpPlugin,
    installedShopifyApp,
    setInstalledShopifyApp
  }) => {  
  const navigate = useNavigate()
  return <>
    {FINISH_STEPS.includes(currentStep) && <StyledSpaceOnCompleted />}
    {renderForm(currentStep, 0, { validated: validateStep(0, formData) })}
    {renderForm(currentStep, 1, { validated: validateStep(1, formData)})}
    {renderForm(currentStep, 2, { validated: validateStep(2, formData)})}
    {renderForm(currentStep, 3, { validated: validateStep(3, formData)})}
    {renderForm(currentStep, 4, { 
      validated: validateStep(4, formData),
      siteId,
      gaAccountId: formData.gaAccountId,
    })}
    {renderForm(currentStep, 5, {
        validated: validateStep(5, formData, downloadedWpPlugin, installedShopifyApp),
        sitePlatform: formData.platform,
        downloadedWpPlugin,
        setDownloadedWpPlugin,
        installedShopifyApp,
        setInstalledShopifyApp,
        siteId,
      }
    )}
    {renderForm(currentStep, 6, {})}
    {renderForm(currentStep, 7, {})}
    <StepFormWrapper >
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        {currentStep > 0 && currentStep < 6 && <Button
          onClick={() => {
            onPrevStep()
          }}
          style={{marginTop: '20px', maxWidth: '200px'}}
          block
          >Previous</Button>}
        {currentStep < 6 && <Button
          loading={isLoading}
          disabled={!CAN_SKIP_STEPS.includes(currentStep) && (!validateStep(currentStep, formData, downloadedWpPlugin, installedShopifyApp) || isLoading)}
          onClick={() => {
            onNextStep()
          }}
          style={{marginTop: '20px', maxWidth: '200px'}} type="primary" block >Next</Button>}
        {currentStep === 6 && <Button
          onClick={() => {
            onNextStep()
          }}
          loading={isLoading}
          disabled={isLoading}
          htmlType='submit'
          style={{marginTop: '20px', maxWidth: '300px'}}
          type="primary" block>Confirm</Button>}
        {currentStep === 7 && <Button
          onClick={() => {
            navigate('/pages/sites')
          }}
          loading={isLoading}
          disabled={isLoading}
          htmlType='submit'
          style={{marginTop: '20px', maxWidth: '300px'}}
          type="primary" block>Got It</Button>}
      </div>

      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        {currentStep === 6 && <Button
          onClick={() => {
            onPrevStep()
          }}
          loading={isLoading}
          disabled={isLoading}
          htmlType='submit'
          style={{marginTop: '20px', maxWidth: '200px'}}
          type="primary" ghost block>Back To Step 6</Button>}
      </div>
    </StepFormWrapper>
    {FINISH_STEPS.includes(currentStep) && <StyledSpaceOnCompleted />}
  </>
}

export default NewSiteForm