import React from 'react';
import { useEmailLoginMutation } from '../../../core/api/apiAuth'

import { Signin } from "@crema/modules/userPages";
import { environment } from 'apps/fancyai-web-client/src/environments/environment';

const SigninPage = ({ prop1 }) => {
  const [loginEmail, {isLoading: isLoggingInEmail}] = useEmailLoginMutation()

  return <Signin
    loginEmail={loginEmail}
    isLoggingIn={isLoggingInEmail}
    loginGoogle={() => {
      location.href = `${environment.apiHost}/auth/google`
    }}
    loginGithub={() => {
      location.href = `${environment.apiHost}/auth/github`
    }}
    loginMicrosoft={() => {
      alert('coming soon')
    }}
  />
}


export default SigninPage
