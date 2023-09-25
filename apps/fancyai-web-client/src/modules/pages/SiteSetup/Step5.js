import React from 'react';
import PropTypes from 'prop-types';
import SEOPlanPicker from './SEOPlanPicker';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Button, Form, Space, Typography } from 'antd';
import StepFormWrapper from './StepFormWrapper';
import StyledInstructionWrapper from './StyledInstructionWrapper';

const SiteSetupStep5 = ({ prop1 }) => {
  return <StepFormWrapper>
    <StyledSiteSetupTitle level={4}  id='step5'>5. Site Connections</StyledSiteSetupTitle>
    <Form.Item label="Connect to Google Search Console">
      <Button type='primary' block size='large'>
        Sign In
      </Button>
    </Form.Item>
    <StyledInstructionWrapper direction='vertical'>
      <Typography.Text strong type='secondary'>Instructions</Typography.Text>
      <Typography.Text type='secondary'>
        1. Get a Google account if you don't have one. That's the only requirement to use Search Console.
      </Typography.Text>
      <Typography.Text type='secondary'>
        2. <a href="https://search.google.com/search-console/welcome" target="_blank">Open Search Console</a>, then <a href='https://support.google.com/webmasters/answer/34592' target='_blank'>add and verify ownership of your site</a>. You'll need to prove that you are the owner of your website, because Search Console shows information about your site that only site owners should see, and allows you to make changes that can affect how your site appears on Google.
      </Typography.Text>
    </StyledInstructionWrapper>

    <Form.Item label="Connect to Google Analytics">
      <Button type='primary' block size='large'>
        Sign In
      </Button>
    </Form.Item>
    <StyledInstructionWrapper direction='vertical'>
      <Typography.Text strong type='secondary'>Instructions</Typography.Text>
      <Typography.Text type='secondary'>
        1. Get a Google account if you don't have one. That's the only requirement to use Search Console.
      </Typography.Text>
      <Typography.Text type='secondary'>
        2. <a href="https://search.google.com/search-console/welcome" target="_blank">Open Search Console</a>, then <a href='https://support.google.com/webmasters/answer/34592' target='_blank'>add and verify ownership of your site</a>. You'll need to prove that you are the owner of your website, because Search Console shows information about your site that only site owners should see, and allows you to make changes that can affect how your site appears on Google.
      </Typography.Text>
    </StyledInstructionWrapper>
  </StepFormWrapper>
}

export default SiteSetupStep5