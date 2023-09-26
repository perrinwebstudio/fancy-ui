import React from 'react';
import PropTypes from 'prop-types';
import SEOPlanPicker from './SEOPlanPicker';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import Typography from 'antd/es/typography/Typography';
import StepFormWrapper from './StepFormWrapper';

const SiteSetupStep7 = ({ prop1 }) => {
  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4}  id='step7'>7. Setup Complete</StyledSiteSetupTitle>
    <div style={{textAlign: 'center'}}>
      <Typography.Title strong center level={5} >
        The answers you provide here will help us align our custom crafted SEO strategy with your business to help improve your organic search traffic and revenue.Please contact us if you have any questions.
      </Typography.Title>
    </div>
  </StepFormWrapper>
}

export default SiteSetupStep7