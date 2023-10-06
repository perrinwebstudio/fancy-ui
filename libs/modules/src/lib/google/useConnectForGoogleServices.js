import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useCallback } from 'react';

const useConnectForGoogleServices = ({ onSuccess }) => {
  const [isConnecting, setIsConnecting] = React.useState(false)
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log('res', res)
      setIsConnecting(false)
      onSuccess?.(res)
    },
    onError: (err) => {
      console.log('err', err)
      setIsConnecting(false)
    },
    onNonOAuthError: (err) => {
      console.log('err', err)
      setIsConnecting(false)
    },
    flow: 'auth-code',
    ux_mode: 'popup',
    scope: 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/userinfo.email',
  })

  const connect = useCallback(() => {
    setIsConnecting(true)
    login()
  }, [login, isConnecting, setIsConnecting])

  return {
    connect,
    isConnecting,
  }
}

export default useConnectForGoogleServices