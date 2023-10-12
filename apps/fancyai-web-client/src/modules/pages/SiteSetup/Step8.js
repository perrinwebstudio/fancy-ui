import React from 'react';
import Typography from 'antd/es/typography/Typography';
import StepFormWrapper from './StepFormWrapper';
import StyledWelcomeAboard from './StyledWelcomeAboard';

const SiteSetupStep8 = () => {
  return <StepFormWrapper className='form-section'>
    <div style={{textAlign: 'center'}}>
      <Typography.Title level={4} id='step8'>Setup Complete!</Typography.Title>
      <Typography.Title strong level={5} >
        Thank you for completing the Site Setup form!
      </Typography.Title>
      <StyledWelcomeAboard strong >
        Welcome aboard!
      </StyledWelcomeAboard>
    </div>
  </StepFormWrapper>
}

export default SiteSetupStep8