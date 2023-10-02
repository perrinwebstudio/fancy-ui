import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51Nui6tLzzKwUqHThLDwR6iBLZkXcbuxwn6XhQPi0ZisoOCWxIfX9yyk5ahZA1xJqDr0UdiIVrkByFzPdDGmWZQtK00eS51AiDi")

const StripeFormWrapper = ({ children }) => {
  return <Elements stripe={stripePromise}>
    {children}
  </Elements>
}

export default StripeFormWrapper