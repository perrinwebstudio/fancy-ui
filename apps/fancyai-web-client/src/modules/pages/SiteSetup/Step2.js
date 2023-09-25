import React from 'react';
import PropTypes from 'prop-types';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import CompetitorListForm from './CompetitorListForm';
import StepFormWrapper from './StepFormWrapper';

const SiteSetupStep2 = ({ prop1 }) => {
  return <StepFormWrapper>
    <StyledSiteSetupTitle level={4} id='step2'>2. Business Information</StyledSiteSetupTitle>
    
    <Form.Item label="Top Business Competitors (Name and URL)" name={'competitors'}>
      <CompetitorListForm />
    </Form.Item>

    <Form.Item label="Site Platform">
      <Select placeholder='Shopify'>
        <Select.Option value='Shopify'>Shopify</Select.Option>
        <Select.Option value='WordPress'>WordPress</Select.Option>
        <Select.Option value='Other'>Other</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item label="Short list of product and services">
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item label="Important products/services">
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item label="Target Market / Target Customer">
      <Input />
    </Form.Item>
    <Form.Item label="Band Voice Description">
      <TextArea rows={3} />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep2