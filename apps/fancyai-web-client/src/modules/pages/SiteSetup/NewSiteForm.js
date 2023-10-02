import React from 'react';

import { Button, Form, notification } from "antd";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, StepFormWrapper } from '@crema/modules/siteSetup';
import StyledSpaceOnCompleted from './StyledSpaceOnCompleted';

export const validateStep = (step, formData) => {
  switch (step) {
    case 0:
      return formData.name && formData.url && formData.platform && formData.website_purpose
    case 1:
      return formData.competitors?.length && formData.products && formData.important_products && formData.target_customer && formData.band_voice_description
    case 2:
      return formData.plan
    case 3:
      return formData.market && formData.target_market && formData.important_keywords && formData.avoid_keywords && formData.kpi && formData.service_notes
    case 4:
      return false
    case 5:
      return false
    case 6:
      return false
  }
  return true
}

const MAP_STEP_TO_FORM = {
  0: Step1,
  1: Step2,
  2: Step3,
  3: Step4,
  4: Step5,
  5: Step6,
  6: Step7,
  7: Step8
}

export const CAN_SKIP_STEPS = [4, 5]
const FINISH_STEPS = [6, 7]

const renderForm = (currentStep, formStep, props) => {
  const FormComponent = MAP_STEP_TO_FORM[formStep]

  const styles = {display: currentStep === formStep ? '' : 'none'}

  return <div style={styles}>
    <FormComponent {...props} />
  </div>
}

const NewSiteForm = ({ formData, currentStep = 0, onPrevStep, onNextStep, isLoading }) => {  
  return <>
    {FINISH_STEPS.includes(currentStep) && <StyledSpaceOnCompleted />}
    {renderForm(currentStep, 0, { validated: validateStep(0, formData) })}
    {renderForm(currentStep, 1, { validated: validateStep(1, formData)})}
    {renderForm(currentStep, 2, { validated: validateStep(2, formData)})}
    {renderForm(currentStep, 3, { validated: validateStep(3, formData)})}
    {renderForm(currentStep, 4, { validated: validateStep(4, formData)})}
    {renderForm(currentStep, 5, { validated: validateStep(5, formData), sitePlatform: formData.platform})}
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
          disabled={!CAN_SKIP_STEPS.includes(currentStep) && (!validateStep(currentStep, formData) || isLoading)}
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
            onNextStep()
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