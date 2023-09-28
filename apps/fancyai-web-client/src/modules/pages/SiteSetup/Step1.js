import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input, Select, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import StepFormWrapper from './StepFormWrapper';
import { CheckOutlined } from '@ant-design/icons';

const SiteSetupStep1 = ({ validated }) => {
  const {token} = theme.useToken()

  const validateProps = {
    hasFeedback: true,
    validateStatus: validated ? 'success' : '',
    required: true
  }

  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4} id='step1'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} 1. Site Information</StyledSiteSetupTitle>
    
    <Form.Item required name="name" label="Webiste Name" {...validateProps}>
      <Input placeholder='Apple' suffix={<span />} />
    </Form.Item>
    <Form.Item required name="url" label="Webiste URL" {...validateProps}>
      <Input placeholder='apple.com' suffix={<span />} />
    </Form.Item>
    <Form.Item required name="site_platform" label="Site Platform" {...validateProps}>
      <Select placeholder='Shopify' suffix={<span />}>
        <Select.Option value='shopify'>Shopify</Select.Option>
        <Select.Option value='wordpress'>WordPress</Select.Option>
        <Select.Option value='other'>Other</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item required name="website_purpose" label="Short description of website and website's purpose" {...validateProps}>
      <TextArea rows={6} suffix={<span>xx</span>} />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep1