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

///auth/signup/confirm?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOjE2OTU5OTY2MzM4NTUsImVtYWlsIjoidGllbkBmYW5jeWF3ZXNvbWUuY29tIiwiaWQiOiI2NTE2Y2NjN2I0NDJjMDAwMDg5Mzk3MjgiLCJpYXQiOjE2OTU5OTMwMzMsImV4cCI6MTY5NzY4OTkyNjg4OH0.du8hudQ7p2PQJPiUXMiR50Hxl6h_UnGoOj2iY1MhAtQ