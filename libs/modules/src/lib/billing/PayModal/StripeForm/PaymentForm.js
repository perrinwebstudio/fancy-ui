import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements, AddressElement} from '@stripe/react-stripe-js';
import { Col, Form, Row, theme } from 'antd';
import StyledStripeForm from './StyledStripeForm';
import { defaultTheme } from '@crema/constants/defaultConfig';

const getCardOptions = () => {
  return {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "black",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "14px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "black" },
        "::placeholder": { color: defaultTheme.theme.palette.text.secondary }
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "black"
      }
    }
  }
}

const PaymentForm = ({ prop1 }) => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const cardOptions = useMemo(() => {
    return getCardOptions()
  }, [])

  return <StyledStripeForm>
      <Form.Item label="Card Number">
        <fieldset className='FormGroup'>
          <div className="FormRow">
            <CardNumberElement options={cardOptions} />
          </div>
        </fieldset>
      </Form.Item>
      <Row gutter={10}>
        <Col span={12}>
          <Form.Item label="Expiration Date">
            <fieldset className='FormGroup'>
              <div className="FormRow">
                <CardExpiryElement options={cardOptions} />
              </div>
            </fieldset>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="CVC">
            <fieldset className='FormGroup'>
              <div className="FormRow">
              <CardCvcElement options={cardOptions} />
              </div>
            </fieldset>
          </Form.Item>
        </Col>
      </Row>
    </StyledStripeForm>
}

export default PaymentForm