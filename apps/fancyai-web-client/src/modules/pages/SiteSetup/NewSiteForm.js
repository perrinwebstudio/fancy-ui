import React from 'react';

import { Button, Form, notification } from "antd";
import { validateStep } from '.';
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, StepFormWrapper } from '@crema/modules/siteSetup';

const MAP_STEP_TO_FORM = {
  0: Step1,
  1: Step2,
  2: Step3,
  3: Step4,
  4: Step5,
  5: Step6,
  6: Step7
}

const renderForm = (currentStep, formStep, props) => {
  const FormComponent = MAP_STEP_TO_FORM[formStep]
  return <div style={{display: currentStep === formStep ? '' : 'none'}}>
    <FormComponent {...props} />
  </div>
}

const NewSiteForm = ({ formData, currentStep = 0, onPrevStep, onNextStep, isLoading }) => {  
  return <>
    {renderForm(currentStep, 0, { validated: validateStep(0, formData) })}
    {renderForm(currentStep, 1, { validated: validateStep(1, formData)})}
    {renderForm(currentStep, 2, { validated: validateStep(2, formData)})}
    {renderForm(currentStep, 3, { validated: validateStep(3, formData)})}
    {renderForm(currentStep, 4, { validated: validateStep(4, formData)})}
    {renderForm(currentStep, 5, { validated: validateStep(5, formData), sitePlatform: formData.platform})}
    {renderForm(currentStep, 6, {})}
    <StepFormWrapper >
      <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        {currentStep > 0 && <Button
          onClick={() => {
            onPrevStep()
          }}
          style={{marginTop: '20px', maxWidth: '200px'}}
          block
          >Previous</Button>}
        {currentStep < 6 && <Button
          loading={isLoading}
          disabled={!validateStep(currentStep, formData) || isLoading}
          onClick={() => {
            onNextStep()
          }}
          style={{marginTop: '20px', maxWidth: '200px'}} type="primary" block >Next</Button>}
      </div>
    </StepFormWrapper>

    <StepFormWrapper>
      {currentStep === 6 && <Button
        loading={isLoading}
        disabled={isLoading}
        htmlType='submit'
        style={{marginTop: '20px'}}
        type="primary" block>Confirm</Button>}
    </StepFormWrapper>
  </>
}

export default NewSiteForm