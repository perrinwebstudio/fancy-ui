import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';
import PaypalButton from './PaypalButton';

const PaymentPaypalForm = ({ onLoadingChange, onSuccessChange, onCancel }) => {
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
    <Form.Item label="Connect Paypal">
      <div style={{marginTop: '10px'}}><PaypalButton /></div>
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
  </Form>
}

PaymentPaypalForm.defaultProps = {
  prop1: ''
};

PaymentPaypalForm.propTypes = {
  prop1: PropTypes.string
};

export default PaymentPaypalForm
