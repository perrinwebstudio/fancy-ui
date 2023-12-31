import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, theme } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import SEOPlanPicker from '../../billing/SEOPlanPicker';

const SiteSetupStep3 = ({ validated, subscriptionPlans }) => {
  const {token} = theme.useToken()
  return <>
    <StyledSiteSetupTitle level={4}  id='step3'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} 3. Service Plan Selection</StyledSiteSetupTitle>
    <Form.Item name="billingPlan" className='form-section'>
      <SEOPlanPicker />
    </Form.Item>
  </>
}

export default SiteSetupStep3