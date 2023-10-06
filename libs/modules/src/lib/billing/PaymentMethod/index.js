import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Row, Skeleton, Space, Typography } from 'antd';
import { StyledPaymentMethodCard } from './index.styled';
import { RiPaypalFill, RiUserFill } from 'react-icons/ri';
import VisaIcon from './VisaIcon';
import { capitalizeFirstLetter } from '@crema/helpers';
import MasterCardIcon from './MasterCardIcon';
import { BsPaypal } from 'react-icons/bs';
import { BiLogoPaypal } from 'react-icons/bi';
import Title from 'antd/es/typography/Title';

const PaymentMethodCard = ({ isLoading, onClickChange, paymentType, paymentTypeInfo }) => {
  const { brand, cardNumber, expYear, expMonth, name } = (paymentTypeInfo || {});

  return <StyledPaymentMethodCard bordered={false} title="Payment Method">
    <Row gutter={{ xs: 16, sm: 16, md: 32 }} justify="center" align="middle">
      <Col xs={24} sm={24} lg={paymentType ? 18 : 24}>
        {isLoading && <Skeleton active />}
        {paymentType && paymentType === 'Stripe' && <Card>
          <Space align='top'>
            <div style={{
              width: 70,
              height: 50,
            }}>
              {brand === 'visa' && <VisaIcon />}
              {brand === 'mastercard' && <MasterCardIcon />}
            </div>
            <div>
              <div><Typography.Text strong>{capitalizeFirstLetter(brand)} ending * {cardNumber}</Typography.Text></div>
              <div><Typography.Text type='secondary'>Expiry {expMonth}/{expYear}</Typography.Text></div>
              <Space style={{marginTop: 10}}>
                <RiUserFill /> {name}
              </Space>
            </div>
          </Space>
        </Card>}
        {paymentType && paymentType === 'Paypal' && <Card>
          <Space align='top'>
            <div style={{
              width: 50,
              height: 50,
            }}>
              <BsPaypal size={40} />
            </div>
            <div>
              <Title level={5}>
                Paypal
              </Title>
              <Typography.Text type='secondary'>You've added paypal as your payment method</Typography.Text>
            </div>
            
            
          </Space>
        </Card>}
        {!isLoading && !paymentType && <Card style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={() => {
            onClickChange && onClickChange();
          }} type="primary">Add payment method</Button>
        </Card>}
      </Col>
      {paymentType && <Col xs={24} sm={24} lg={6}>
        <Button onClick={() => {
          onClickChange && onClickChange();
        }} type="primary">Change</Button>
      </Col>}
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
