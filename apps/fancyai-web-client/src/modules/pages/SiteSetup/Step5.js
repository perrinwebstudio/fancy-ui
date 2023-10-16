import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import { Button, Collapse, Form, Space, Typography, theme } from 'antd';
import StepFormWrapper from './StepFormWrapper';
import { StyledInstructionContent, StyledInstructionLink, StyledInstructionText } from './StyledInstructionWrapper';
import { CheckOutlined } from '@ant-design/icons';
import { SiteGoogleGAServiceConnect, SiteGoogleGscServiceConnect, useSiteGoogle } from '@crema/modules/siteGoogle';

const GoogleSearchInstructionItems = [
  {
    key: '1',
    label: 'Instructions',
    children: <StyledInstructionContent>
      Get a Google account if you don't have one. That's the only requirement to use Search Console <StyledInstructionLink href="https://search.google.com/search-console/welcome" target="_blank">Open Search Console</StyledInstructionLink>,
      then <StyledInstructionLink href="https://support.google.com/webmasters/answer/34592" target="_blank">add and verify ownership of your site</StyledInstructionLink>.
      You'll need to prove that you are the owner of your website, because Search Console shows information about your site that only site owners should see,
      and allows you to make changes that can affect how your site appears on Google.
    </StyledInstructionContent>,
  }
];

const GoogleAnalyticsInstructionItems = [
  {
    key: '1',
    label: 'Instructions',
    children: <StyledInstructionContent>
      <p>
        When you create your application, you register it using the <StyledInstructionLink href="https://console.cloud.google.com/" target="_blank">Google API Console</StyledInstructionLink>. Google then provides information you'll need later, such as a client ID and a client secret.
      </p>
      <StyledInstructionText>1. Activate the Analytics API in the Google API Console. (If the API isn't listed in the API Console, then skip this step.)</StyledInstructionText>
      <StyledInstructionText>2. When your application needs access to user data, it asks Google for a particular scope of access.</StyledInstructionText>
      <StyledInstructionText>3. Google displays a consent screen to the user, asking them to authorize your application to request some of their data.</StyledInstructionText>
      <StyledInstructionText>4. If the user approves, then Google gives your application a short-lived access token.</StyledInstructionText>
      <StyledInstructionText>5. Your application requests user data, attaching the access token to the request.</StyledInstructionText>
      <StyledInstructionText>6. If Google determines that your request and the token are valid, it returns the requested data.</StyledInstructionText>
    </StyledInstructionContent>
  }
];

const SiteSetupStep5 = ({ validated, showNumber }) => {
  const { token } = theme.useToken()

  const { site: siteData } = useSiteGoogle()
  const onChange = (key) => {
    console.log(key);
  };

  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4} id='step5'>{validated && <CheckOutlined
      style={{ marginRight: '10px', color: token.colorSuccess }}
    />} {showNumber && <span>5.</span>} Google Services Connections</StyledSiteSetupTitle>
    <Form.Item label="Connect to Google Search Console">
      <SiteGoogleGscServiceConnect siteData={siteData} />
    </Form.Item>
    <Collapse accordion expandIconPosition='end' bordered={false} items={GoogleSearchInstructionItems} onChange={onChange} style={{ marginBottom: '20px' }} />
    <Form.Item label="Connect to Google Analytics">
      <SiteGoogleGAServiceConnect siteData={siteData} />
    </Form.Item>
    <Collapse accordion expandIconPosition='end' bordered={false} items={GoogleAnalyticsInstructionItems} onChange={onChange} style={{ marginBottom: '20px' }} />
  </StepFormWrapper>
}

export default SiteSetupStep5