import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';
import PaypalButton from './PaypalButton';

const PaymentPaypalForm = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = React.useState(false)

  return <Form layout='vertical'>
    <Form.Item label="Connect Paypal">
      <div style={{marginTop: '10px'}}>
        <PaypalButton
          loading={isLoading}
          onClick={async () => {
            setIsLoading(true)
            await onSubmit().unwrap().then((rsp) => {
              setIsLoading(false)
              location.href = rsp.data
            }).catch(() => {
              setIsLoading(false)
            })
          }}
        />
      </div>
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
