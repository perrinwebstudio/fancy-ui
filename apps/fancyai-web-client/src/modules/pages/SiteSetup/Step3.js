import React from 'react';
import PropTypes from 'prop-types';
import SEOPlanPicker from './SEOPlanPicker';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form } from 'antd';

const SiteSetupStep3 = ({ prop1 }) => {
  return <Form.Item className='form-section'>
    <StyledSiteSetupTitle level={4}  id='step3'>3. Service Plan Selection</StyledSiteSetupTitle>
    <SEOPlanPicker />
  </Form.Item>
}

export default SiteSetupStep3