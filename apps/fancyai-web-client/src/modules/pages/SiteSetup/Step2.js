import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import StepFormWrapper from './StepFormWrapper';
import { CheckOutlined } from '@ant-design/icons';
import { CompetitorListForm } from '@crema/modules/siteSetup';

const SiteSetupStep2 = ({ validated, showNumber, big }) => {
  const {token} = theme.useToken()
  const validateProps = {
    hasFeedback: true,
    validateStatus: validated ? 'success' : '',
  }

  return <StepFormWrapper big={big} className='form-section'>
    <StyledSiteSetupTitle level={4} id='step2'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} {showNumber && <span>2.</span>} Business Information</StyledSiteSetupTitle>
    <Form.Item name='competitors' label="Top Business Competitors (Name and URL)">
      <CompetitorListForm validated={validated} />
    </Form.Item>
    <Form.Item name="productsAndServices" label="Short list of product and services" {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item name="focusProducts" label="Important products/services" {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item name="targetCustomer" label="Target Market / Target Customer"  {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
    <Form.Item name="brandVoiceDescription" label="Band Voice Description"  {...validateProps}>
      <TextArea rows={3} />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep2