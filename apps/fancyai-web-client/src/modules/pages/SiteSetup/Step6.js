import React from 'react';
import StyledSiteSetupTitle from './StyledSiteSetupStepTitle';
import StepFormWrapper from './StepFormWrapper';
import { Button, Collapse, Form, Input, Typography, theme } from 'antd';
import StyledInstructionWrapper, { StyledInstructionText } from './StyledInstructionWrapper';
import { CheckOutlined } from '@ant-design/icons';
import { FaShopify, FaWordpressSimple } from 'react-icons/fa';
import { MdOutlineSpaceDashboard } from 'react-icons/md';


const SiteSetupStep6 = ({ sitePlatform, validated, setDownloadedWpPlugin, setInstalledShopifyApp, showNumber }) => {
  const WordpressInstruction = [
    {
      key: '1',
      label: 'Instructions',
      children: <>
        <p>
          In your WordPress dashboard, choose Plugins > Add new.
        </p>
        <StyledInstructionText>1. Search for a plugin with the search bar in the top right corner. A number of results will appear.</StyledInstructionText>
        <StyledInstructionText>2. After finding the plugin in the results, click Install Now. You can also click the plugin name to view more details about it.</StyledInstructionText>
        <StyledInstructionText>3. To use the plugin, you’ll need to activate it. When the installation is finished (this usually takes a couple seconds), click Activate.</StyledInstructionText>
      </>
    }
  ];
  const OtherInstruction = [
    {
      key: '1',
      label: 'Instructions',
      children: <>
        <p>
          There will be instruction for Other Platform.
        </p>
        <StyledInstructionText>1. Search for a plugin with the search bar in the top right corner. A number of results will appear.</StyledInstructionText>
        <StyledInstructionText>2. After finding the plugin in the results, click Install Now. You can also click the plugin name to view more details about it.</StyledInstructionText>
        <StyledInstructionText>3. To use the plugin, you’ll need to activate it. When the installation is finished (this usually takes a couple seconds), click Activate.</StyledInstructionText>
      </>
    }
  ];
  const { token } = theme.useToken()
  return <StepFormWrapper className='form-section'>
    <StyledSiteSetupTitle level={4} id='step6'>{validated && <CheckOutlined
      style={{ marginRight: '10px', color: token.colorSuccess }}
    />} {showNumber && <span>6.</span>} App / Plugin Installation</StyledSiteSetupTitle>
    {(!sitePlatform || sitePlatform === 'shopify') && <>
      <Form.Item name="shopifySiteUrl" style={{ marginBottom: '10px' }} label="Shopify site URL">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={false}
          onClick={() => {
            setInstalledShopifyApp?.(true)
            window.open('https://google.com?q=shopify-plugin', "_blank", "noreferrer");
          }}
          type='primary'
          block
          style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center' }}
        >
          <FaShopify />
          Install App
        </Button>
      </Form.Item>
    </>}
    {(!sitePlatform || sitePlatform === 'wordpress') && <Form.Item style={{ marginBottom: '10px' }} label="Wordpress site">
      <Button
        disabled={false}
        type='primary'
        block
        onClick={() => {
          setDownloadedWpPlugin?.(true)
          window.open('https://fancy-ai-data.s3.us-east-2.amazonaws.com/public/testwp.zip', "_blank", "noreferrer");
        }}
        style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}
      >
        <FaWordpressSimple />
        Download Plugin
      </Button>
      <Collapse accordion expandIconPosition='end' bordered={false} items={WordpressInstruction} style={{ marginBottom: '20px' }} />
    </Form.Item>}
    {(!sitePlatform || sitePlatform === 'other') && <Form.Item style={{ marginBottom: '10px' }} label="Other platforms">
      <Collapse accordion expandIconPosition='end' bordered={false} items={OtherInstruction} style={{ marginBottom: '20px' }} />
      <Button
        disabled={false}
        type='primary'
        block
        onClick={() => {
          
        }}
        style={{ display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}
      >
        <MdOutlineSpaceDashboard />
        Download sample file
      </Button>
    </Form.Item>}
  </StepFormWrapper>
}

export default SiteSetupStep6