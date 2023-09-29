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
import { Button, Form, notification } from "antd";
import { validateStep } from '.';

const MAP_STEP_TO_FORM = {
  0: SiteSetupStep1,
  1: SiteSetupStep2,
  2: SiteSetupStep3,
  3: SiteSetupStep4,
  4: SiteSetupStep5,
  5: SiteSetupStep6,
  6: SiteSetupStep7
}

const renderForm = (currentStep, formStep, props) => {
  const FormComponent = MAP_STEP_TO_FORM[formStep]
  return <div style={{display: currentStep === formStep ? '' : 'none'}}>
    <FormComponent {...props} />
  </div>
}

const NewSiteForm = ({ formData, currentStep = 0, onStepChange }) => {
  return <>
    {renderForm(currentStep, 0, { validated: validateStep(0, formData) })}
    {renderForm(currentStep, 1, { validated: validateStep(1, formData)})}
    {renderForm(currentStep, 2, { validated: validateStep(2, formData)})}
    {renderForm(currentStep, 3, { validated: validateStep(3, formData)})}
    {renderForm(currentStep, 4, { validated: validateStep(4, formData)})}
    {renderForm(currentStep, 5, { validated: validateStep(5, formData), sitePlatform: formData.site_platform})}
    {renderForm(currentStep, 6, {})}
    <StepFormWrapper >
      <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
        {currentStep > 0 && <Button
          onClick={() => {
            onStepChange(currentStep - 1)
          }}
          style={{marginTop: '20px'}}
          block
          size="large">Previous</Button>}
        {currentStep < 6 && <Button
          disabled={!validateStep(currentStep, formData)}
          onClick={() => {
            onStepChange(currentStep + 1)
          }}
          style={{marginTop: '20px'}} type="primary" block size="large">Next</Button>}
      </div>
    </StepFormWrapper>

    <StepFormWrapper>
      {currentStep === 6 && <Button htmlType='submit' style={{marginTop: '20px'}} type="primary" block size="large">Confirm</Button>}
    </StepFormWrapper>
  </>
}

export default NewSiteForm