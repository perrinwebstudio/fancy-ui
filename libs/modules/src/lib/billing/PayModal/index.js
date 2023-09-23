import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/es/modal/Modal';
import Typography from 'antd/es/typography/Typography';
import { Radio, Form, Spin, Button } from 'antd';
import PaymentCardForm from './PaymentCardForm';
import PaymentPaypalForm from './PaymentPaypalForm';
import StyledPayModal from './index.styled';

const PayModal = ({ paymentType = 'card', paymentAmount, nextPayment, onClose }) => {
  const [form] = Form.useForm()
  const _paymentType = Form.useWatch('payment_type', form)

  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  console.log('_paymentType', _paymentType)

  return <StyledPayModal open
    footer={<></>}
    closable onCancel={() => {
    onClose && onClose();
  }}>
    <Typography.Title level={4}>Add Payment Method</Typography.Title>
    <Form initialValues={{
      payment_type: paymentType
    }} form={form}>
      <Form.Item name='payment_type' label="Pay with">
        <Radio.Group>
          <Radio value={'card'}>Card</Radio>
          <Radio value={'paypal'}>Paypal</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
    {
      _paymentType === 'card' && <PaymentCardForm
        onSuccessChange={(value) => {
          setIsSuccess(value)
        }}
        onLoadingChange={(value) => {
          setIsLoading(value)
        }}
        onCancel={() => {
          onClose && onClose()
        }}
      />
    }
    {
      _paymentType === 'paypal' && <PaymentPaypalForm
        onSuccessChange={(value) => {
          setIsSuccess(value)
        }}
        onLoadingChange={(value) => {
          setIsLoading(value)
        }}
        onCancel={() => {
          onClose && onClose()
        }}
      />
    }
    {
      isLoading && <div className='full'>
        <Spin />
      </div>
    }
    {
      isSuccess && <div className='full'>
        <Typography.Title style={{marginBottom: 0}} level={4}>Congratulations! 🎉</Typography.Title>
        <div style={{maxWidth: '400px', textAlign: 'center'}}>
          <Typography.Text>
            You've successfully upgraded to the SEO Pro subscription. We're excited to have you on this journey to optimize and elevate your SEO game.
          </Typography.Text>
        </div>
        <div style={{width: '100%'}}>
          <Button type="primary" block onClick={() => {
            onClose && onClose()
          }}>Got it</Button>
        </div>
      </div>
    }
    <div style={{marginTop: '20px'}}>
      <Typography.Text type="secondary">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
      </Typography.Text>
    </div>
  </StyledPayModal>
}

export default PayModal;