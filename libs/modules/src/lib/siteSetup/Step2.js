import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import CompetitorListForm from './CompetitorListForm';
import StepFormWrapper from './StepFormWrapper';
import { CheckOutlined } from '@ant-design/icons';

const SiteSetupStep2 = ({ validated }) => {
  const {token} = theme.useToken()
  const validateProps = {
    hasFeedback: true,
    validateStatus: validated ? 'success' : '',
  }

  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4} id='step2'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} 2. Business Information</StyledSiteSetupTitle>
    <Form.Item name='competitors' label="Top Business Competitors (Name and URL)">
      <CompetitorListForm validated={validated} />
    </Form.Item>
    <Form.Item name="products" label="Short list of product and services" {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item name="important_products" label="Important products/services" {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item name="target_customer" label="Target Market / Target Customer"  {...validateProps}>
      <Input />
    </Form.Item>
    <Form.Item name="band_voice_description" label="Band Voice Description"  {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep2