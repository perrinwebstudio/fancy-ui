import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, Card, Space, Typography } from 'antd';
import StyledSEOPlanItemTitle from './StyledSEOPlanItemTitle';
import { CheckOutlined } from '@ant-design/icons';
import StyledSEOPlanItemPricing from './StyledSEOPlanItemPricing';

const SEOPlanItem = ({ plan, planCode, pricingComponent, active, features, buttonLabel, color }) => {
  return <Badge.Ribbon color={color} text={planCode}>
    <Card style={{
      minWidth: '250px',
      maxWidth: '250px'
    }}>
      <Space direction='vertical' style={{
        width: '100%'
      }}>
        <StyledSEOPlanItemTitle style={{ marginBottom: '0px' }} level={3}>{plan}</StyledSEOPlanItemTitle>
        <StyledSEOPlanItemPricing level={5}>{pricingComponent}</StyledSEOPlanItemPricing>
        <Button block primary style={{
          backgroundColor: color,
          color: 'white',
          marginTop: '15px',
          width: '100%'
        }}>
          {buttonLabel}
        </Button>
        <Space direction='vertical' style={{marginTop: '15px'}}>
          {
            features.map((feature, index) => <Space>
              <CheckOutlined /> <Typography.Text  key={index}>{feature}</Typography.Text>
            </Space>)
          }
        </Space>
      </Space>
    </Card>
  </Badge.Ribbon>
}

SEOPlanItem.defaultProps = {
  prop1: ''
};

SEOPlanItem.propTypes = {
  prop1: PropTypes.string
};

export default SEOPlanItem