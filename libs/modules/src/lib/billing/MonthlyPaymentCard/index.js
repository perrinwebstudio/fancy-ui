import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Skeleton, Space } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import { StyledMonthlyPaymentCard } from './index.styled';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import dayjs from 'dayjs';

const MonthlyPaymentCard = ({ isLoading, getAmount }) => {
  const [amount, setAmount] = React.useState(0);

  React.useEffect(() => {
    if (getAmount) {
      getAmount().unwrap().then((res) => {
        setAmount(res.data)
      }).catch((err) => {});
    }
  }, [])

  const daysUntilLastMonth = dayjs().daysInMonth() - dayjs().date() + 1;

  return <StyledMonthlyPaymentCard bordered={false} title="Monthly Payment">
    <AppRowContainer>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Card>
          {isLoading ? <Skeleton active /> : <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={12}>
              <div>
                <Space><Title level={3}>${amount || 0}</Title><Text type='secondary'>/month</Text></Space>
              </div>
              <div
                style={{
                  color: "#43C888",
                  backgroundColor: "#43C88844",
                  padding: '3px 5px',
                  borderRadius: '14px',
                  fontSize: 14,
                  display: 'inline-block',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                {daysUntilLastMonth} days until next payment
              </div>
            </Col>
            <Col xs={24} sm={24} lg={12}>
              <Text type="secondary">Your payment amount for all companies and sites you setup will charge automatically</Text>
            </Col>
          </Row>}
        </Card>
      </Col>
    </AppRowContainer>
  </StyledMonthlyPaymentCard>
}

export default MonthlyPaymentCard;

MonthlyPaymentCard.defaultProps = {};

MonthlyPaymentCard.propTypes = {
  paymentType: PropTypes.string,
  paymentAmount: PropTypes.number,
  nextPayment: PropTypes.string,
};
