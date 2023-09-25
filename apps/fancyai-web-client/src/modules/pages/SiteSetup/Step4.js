import React from 'react';
import PropTypes from 'prop-types';
import SEOPlanPicker from './SEOPlanPicker';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import StepFormWrapper from './StepFormWrapper';

const SiteSetupStep4 = ({ prop1 }) => {
  return <StepFormWrapper>
    <StyledSiteSetupTitle level={4}  id='step4'>4. Service Specific Information</StyledSiteSetupTitle>
    <Form.Item label="Do you serve local or national market?">
      <Input />
    </Form.Item>
    <Form.Item label="Which (local/national) markets do you serve?">
      <Input />
    </Form.Item>
    <Form.Item label="Most Important keywords or phrases to your business">
      <TextArea />
    </Form.Item>
    <Form.Item label="Words or phrases you’d like to avoid (branding reasons, regulatory reasons, etc.)">
      <TextArea />
    </Form.Item>
    <Form.Item label="What Key Performance Indicators are most important to you?">
      <TextArea />
    </Form.Item>
    <Form.Item label="Additional notes or important information">
      <TextArea />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep4