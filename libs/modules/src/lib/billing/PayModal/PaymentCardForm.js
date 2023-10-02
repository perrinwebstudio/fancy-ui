import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import StripeForm from './StripeForm';
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements} from '@stripe/react-stripe-js';

const PaymentCardForm = forwardRef(({ onLoadingChange, onSuccessChange, onCancel }, ref) => {
  useImperativeHandle(ref, () => ({
    submit: () => {
      console.log('submit!!')
    }
  }));
  
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const handleStripFormSubmit = async (e) =>{
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement)
    })

    if(!error){
      try {
        const {id} = paymentMethod
        return id
      } catch (error) {
        console.log("Error", error)
      }
    }else {
      console.log(error.message)
    }
  }

  const handleSubmit = async (values) => {
    setIsLoading(true)
    const id = await handleStripFormSubmit()
    console.log('id', id)
    console.log('values', values)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  const [form] = Form.useForm()

  React.useEffect(() => {
    console.log('isLoading', isLoading)
    onLoadingChange && onLoadingChange(isLoading)
  }, [isLoading])

  React.useEffect(() => {
    console.log('isSuccess', isSuccess)
    onSuccessChange && onSuccessChange(isSuccess)
  }, [isSuccess])

  return <Form onFinish={handleSubmit} form={form} layout='vertical' >
    <StripeForm />

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
      <Button type='primary' block htmlType='submit'>Pay USD 349.00</Button>
    </Form.Item>
    <Form.Item>
      <Button type='ghost' block onClick={() => {
        onCancel && onCancel()
      }}>Cancel</Button>
    </Form.Item>
  </Form>
})

export default PaymentCardForm