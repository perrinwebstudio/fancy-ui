import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card, Space, Tag, Typography, theme } from 'antd';
import StyledSEOPlanItemTitle from './StyledSEOPlanItemTitle';
import { CheckOutlined } from '@ant-design/icons';
import StyledSEOPlanItemPricing from './StyledSEOPlanItemPricing';
import {StyledActivePlan, StyledActivePlanWrapper} from './StyledActivePlan';
import CircleIcon from './CircleIcon';
import { StyledSEOPlanItemCard, StyledSEOPlanItemWrapper } from './index.styled';

const SEOPlanItem = ({ viewMode, onClick, plan, planCode, planShortCode, pricingComponent, active, features, buttonLabel, color }) => {
  const {token} = theme.useToken()
  
  return <StyledSEOPlanItemWrapper>
    <span
      className='tag'
      style={{
        backgroundColor: color,
        color: 'white',
      }}
    >
      {planShortCode || planCode}
    </span>
    <StyledSEOPlanItemCard
      style={{
      minWidth: '250px',
      maxWidth: '250px',
      borderColor: active ? token.colorSuccess : undefined,
    }}>
      <Space direction='vertical' style={{
        width: '100%'
      }}>
        <StyledSEOPlanItemTitle style={{ marginBottom: '0px' }} level={3}>{plan}</StyledSEOPlanItemTitle>
        <StyledSEOPlanItemPricing level={5}>{pricingComponent}</StyledSEOPlanItemPricing>
        {(!viewMode || !(active && viewMode)) && <Button
          disabled={viewMode}
          onClick={() => onClick?.(planCode)}
          block
          success
          style={{
            backgroundColor: active ? 'white' : color,
            color: active ? 'black' : 'white',
            marginTop: '15px',
            width: '100%',
            borderWidth: '0px',
            borderColor: active ? token.colorPrimary : undefined,
          }}>
          {active && <CheckOutlined style={{ color: token.colorSuccess }} /> }{active ? 'Selected' : buttonLabel}
        </Button>}
        {
          active && viewMode && <StyledActivePlanWrapper><StyledActivePlan><CircleIcon /> <div>Active</div></StyledActivePlan></StyledActivePlanWrapper>
        }
        <Space direction='vertical' style={{marginTop: '15px'}}>
          {
            features.map((feature, index) => <Space>
              <CheckOutlined /> <Typography.Text  key={index}>{feature}</Typography.Text>
            </Space>)
          }
        </Space>
      </Space>
    </StyledSEOPlanItemCard>
  </StyledSEOPlanItemWrapper>
  // </Badge.Ribbon><Badge.Ribbon color={color} text={planCode}>
}

SEOPlanItem.defaultProps = {
  prop1: ''
};

SEOPlanItem.propTypes = {
  prop1: PropTypes.string
};

export default SEOPlanItem