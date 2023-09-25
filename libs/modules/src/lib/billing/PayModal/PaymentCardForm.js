import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, DatePicker, Form, Input, Row, Space, Switch, Typography } from 'antd';
import CardNumberInput from './CardNumberInput';

const PaymentCardForm = ({ onLoadingChange, onSuccessChange, onCancel }) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  React.useEffect(() => {
    console.log('isLoading', isLoading)
    onLoadingChange && onLoadingChange(isLoading)
  }, [isLoading])

  React.useEffect(() => {
    console.log('isSuccess', isSuccess)
    onSuccessChange && onSuccessChange(isSuccess)
  }, [isSuccess])

  return <Form layout='vertical'>
    <Form.Item label="Card Number">
      <CardNumberInput placeholder='1234 5678 90101 1121' />
    </Form.Item>

    <Row gutter={16}>
      <Col md={12}>
        <Form.Item label="Expiration Date">
          <DatePicker format='MM/YY'
            placeholder='MM/YY' style={{width: '100%'}} picker="month" />
        </Form.Item>
      </Col>
      <Col md={12}>
        <Form.Item label="CVV">
          <Input maxLength={3} placeholder='***' />
        </Form.Item>
      </Col>
    </Row>

    <Form.Item>
      <Space align='center' justify='middle'>
        <Form.Item style={{marginBottom: 0}}>
          <Switch size='small' />
        </Form.Item>
        <Typography.Text  type='secondary'>Save this card</Typography.Text>
      </Space>
    </Form.Item>

    <Form.Item label="Card Holder Name">
      <Input placeholder='Card Holder Name' />
    </Form.Item>

    <Form.Item style={{marginBottom: '10px'}} name="address1" label="Billing Address">
      <Input placeholder='Address 1' />
    </Form.Item>
    <Form.Item style={{marginBottom: '10px'}} name="address2">
      <Input placeholder='Address 2' />
    </Form.Item>
    <Form.Item style={{marginBottom: '10px'}} name="country">
      <Input placeholder='Country' />
    </Form.Item>
    <Form.Item style={{marginBottom: '10px'}} name="state">
      <Input placeholder='Stage / Region' />
    </Form.Item>
    <Form.Item style={{marginBottom: '10px'}} name="city">
      <Input placeholder='City' />
    </Form.Item>
    <Form.Item name="post_code">
      <Input placeholder='Post Code' />
    </Form.Item>

    <Form.Item>
      <Button size='large' type='primary' block onClick={() => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
          setIsSuccess(true)
        }, 2000)
      }}>Pay USD 349.00</Button>
    </Form.Item>
    <Form.Item>
      <Button size='large' type='ghost' block onClick={() => {
        onCancel && onCancel()
      }}>Cancel</Button>
    </Form.Item>
  </Form>
}

PaymentCardForm.defaultProps = {
  prop1: ''
};

PaymentCardForm.propTypes = {
  prop1: PropTypes.string
};

export default PaymentCardForm