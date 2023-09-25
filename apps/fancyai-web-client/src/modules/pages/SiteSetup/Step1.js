import React from 'react';
import PropTypes from 'prop-types';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import StepFormWrapper from './StepFormWrapper';

const SiteSetupStep1 = ({ prop1 }) => {
  return <StepFormWrapper>
    <StyledSiteSetupTitle level={4}>1. Site Information</StyledSiteSetupTitle>
    
    <Form.Item label="Webiste Name">
      <Input placeholder='Apple' />
    </Form.Item>
    <Form.Item label="Webiste URL">
      <Input placeholder='apple.com' />
    </Form.Item>
    <Form.Item name="site_platform" label="Site Platform">
      <Select placeholder='Shopify'>
        <Select.Option value='shopify'>Shopify</Select.Option>
        <Select.Option value='wordpress'>WordPress</Select.Option>
        <Select.Option value='other'>Other</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="Short description of website and website's purpose">
      <TextArea rows={6} />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep1