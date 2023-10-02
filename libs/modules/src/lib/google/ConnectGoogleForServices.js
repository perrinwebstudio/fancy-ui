import React from 'react';
import PropTypes from 'prop-types';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from 'antd';

const ConnectGoogleForServices = ({ prop1 }) => {
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log('res', res)
    },
    flow: 'auth-code',
    ux_mode: 'popup',
    // emails, anaytics, webmasters
    // scope: 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/userinfo.email',
  })

  return <Button onClick={() => login()}>Test Google GSC, GA</Button>
}

export default ConnectGoogleForServices