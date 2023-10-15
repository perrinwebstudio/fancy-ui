import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Form, Input, Select, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import StepFormWrapper from './StepFormWrapper';
import { CheckOutlined } from '@ant-design/icons';

const SiteSetupStep4 = ({validated, showNumber}) => {
  const {token} = theme.useToken()

  const validateProps = {
    hasFeedback: true,
    validateStatus: validated ? 'success' : '',
  }

  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4}  id='step4'>{validated && <CheckOutlined
      style={{marginRight: '10px', color: token.colorSuccess}}
    />} {showNumber && <span>4.</span>} Service Specific Information</StyledSiteSetupTitle>
    <Form.Item name="marketType" label="Do you serve local or national market?" {...validateProps}>
      <Select>
        <Select.Option value="local">Local</Select.Option>
        <Select.Option value="national">National</Select.Option>
      </Select>
    </Form.Item>
    <Form.Item name="marketRegion" label="Which (local/national) markets do you serve?" {...validateProps}>
      <Input />
    </Form.Item>
    <Form.Item name="importantKeywords" label="Most Important keywords or phrases to your business" {...validateProps}>
      <TextArea />
    </Form.Item>
    <Form.Item name="avoidKeywords" label="Words or phrases you’d like to avoid (branding reasons, regulatory reasons, etc.)" {...validateProps}>
      <TextArea />
    </Form.Item>
    <Form.Item name="kpi" label="What Key Performance Indicators are most important to you?" {...validateProps}>
      <TextArea />
    </Form.Item>
    <Form.Item name="additionalNotes" label="Additional notes or important information" {...validateProps}>
      <TextArea />
    </Form.Item>
  </StepFormWrapper>
}

export default SiteSetupStep4