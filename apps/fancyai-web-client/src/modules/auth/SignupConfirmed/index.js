import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AppLoader from '@crema/components/AppLoader';
import { useVerifySignupMutation } from 'apps/fancyai-web-client/src/core/api/apiAuth';
import { initialUrl } from '@crema/constants';

const SignupConfirmed = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [verify] = useVerifySignupMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      verify({ token }).unwrap().then(() => {
        navigate(initialUrl)
      }).catch(() => {
        navigate('/signup')
      })
    } else {
      navigate('/signup')
    }
  }, [])

  return <AppLoader />
}
export default SignupConfirmed
