import React from 'react';
import PropTypes from 'prop-types';
import { ConnectGoogleForServices } from '@crema/modules/google';
import { GoogleLogin } from '@react-oauth/google'

const TestPage = ({ prop1 }) => {
  return <>
    <div>
      <GoogleLogin
        cancel_on_tap_outside={true}
        onSuccess={(response) => {
          console.log('response', response)
        }}
        onError={() => {
          console.log('error')
        }}
        width={300}
        theme="outline"
        size="large"
        state_cookie_domain="getfancy.ai"
        useOneTap
      />
      <div style={{marginTop: '20px'}}><ConnectGoogleForServices /></div>
    </div>
  </>
}

export default TestPage