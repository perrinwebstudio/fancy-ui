import React from 'react';
import { useEmailLoginMutation } from '../../../core/api/apiAuth'

import { Signin } from "@crema/modules/userPages";

const SigninPage = ({ prop1 }) => {
  const [loginEmail, {isLoading: isLoggingInEmail}] = useEmailLoginMutation()

  return <Signin
    loginEmail={loginEmail}
    isLoggingIn={isLoggingInEmail}
  />
}


export default SigninPage
