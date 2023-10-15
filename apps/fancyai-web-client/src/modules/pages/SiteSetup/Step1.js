import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input, Select, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import StepFormWrapper from './StepFormWrapper';
import { CheckOutlined } from '@ant-design/icons';

const SiteSetupStep1 = ({ validated, showNumber, showDelete, big }) => {
  const {token} = theme.useToken()

  const validateProps = {
    hasFeedback: true,
    validateStatus: validated ? 'success' : '',
  }

  return <StepFormWrapper big={big} className='form-section'>
    <StyledSiteSetupTitle level={4} id='step1'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} {showNumber && <span>1.</span>} Site Information</StyledSiteSetupTitle>
    
    <Form.Item name="name" label="Website Name" {...validateProps}>
      <Input placeholder='Apple' suffix={<span />} />
    </Form.Item>
    <Form.Item name="url" label="Website URL" {...validateProps}>
      <Input placeholder='apple.com' suffix={<span />} />
    </Form.Item>
    <Form.Item name="platform" label="CMS / Platform" {...validateProps}>
      <Select placeholder='Shopify' suffix={<span />}>
        <Select.Option value='shopify'>Shopify</Select.Option>
        <Select.Option value='wordpress'>WordPress</Select.Option>
        <Select.Option value='other'>Other</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item name="description" label="Short description of website and website's purpose" {...validateProps}>
      <TextArea rows={6} />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep1