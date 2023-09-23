import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { StyledPaymentMethodCard } from './index.styled';
import { RiUserFill } from 'react-icons/ri';
import VisaIcon from './VisaIcon';

const PaymentMethodCard = ({ paymentType, paymentAmount, nextPayment, onClickChange }) => {
  return <StyledPaymentMethodCard bordered={false} title="Monthly Payment">
    <Row gutter={{ xs: 16, sm: 16, md: 32 }} justify="center" align="middle">
      <Col xs={24} sm={24} lg={18}>
        <Card>
          <Space align='top'>
            <div style={{
              width: 70,
              height: 50,
            }}>
              <VisaIcon />
            </div>
            <div>
              <div><Typography.Text strong>Visa ending * 1234</Typography.Text></div>
              <div><Typography.Text type='secondary'>Expiry 06/24</Typography.Text></div>
              <Space style={{marginTop: 10}}>
                <RiUserFill /> John Alex
              </Space>
            </div>
          </Space>
        </Card>
      </Col>
      <Col xs={24} sm={24} lg={6}>
        <Button onClick={() => {
          onClickChange && onClickChange();
        }} type="primary">Change</Button>
      </Col>
    </Row>
  </StyledPaymentMethodCard>
}

export default PaymentMethodCard;

PaymentMethodCard.defaultProps = {};

PaymentMethodCard.propTypes = {
  paymentType: PropTypes.string,
  paymentAmount: PropTypes.number,
  nextPayment: PropTypes.string,
};
