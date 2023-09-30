import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import Typography from 'antd/es/typography/Typography';
import StepFormWrapper from './StepFormWrapper';
import { CheckOutlined } from '@ant-design/icons';

const SiteSetupStep7 = ({ validated }) => {
  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4}  id='step7'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} 7. Setup Complete</StyledSiteSetupTitle>
    <div style={{textAlign: 'center'}}>
      <Typography.Title strong center level={5} >
        The answers you provide here will help us align our custom crafted SEO strategy with your business to help improve your organic search traffic and revenue.Please contact us if you have any questions.
      </Typography.Title>
    </div>
  </StepFormWrapper>
}

export default SiteSetupStep7