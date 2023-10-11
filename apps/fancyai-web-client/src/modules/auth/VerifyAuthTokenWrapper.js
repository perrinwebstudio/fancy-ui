import React, { useEffect, useState } from 'react'
import { useGetUserMutation } from '../../core/api/api'
import { logout } from '../../core/redux/features/auth/slice'
import { resetStateAction } from '../../core/redux/resetStateAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import AppLoader from '@crema/components/AppLoader'

export default function VerifyAuthTokenWrapper({ children }) {
  const urlPath = window.location.pathname
  const dispatch = useDispatch()
  const [isInitializing, setIsInitializing] = useState(urlPath !== '/verify-2fa' && urlPath !== '/signin')
  const [getUser, { isLoading }] = useGetUserMutation()
  const auth = useSelector((state) => state.authSlice)
  const {currentUser, apiToken} = auth

  useEffect(() => {
    const init = async () => {
      console.log('called init')
      setIsInitializing(true)
      if (apiToken && currentUser == null) {
        await getUser()
          .unwrap()
          .catch(() => {
            dispatch(logout())
            dispatch(resetStateAction())
          })
      }
      setIsInitializing(false)
    }
    init()
  }, [apiToken])

  if (isLoading || isInitializing) {
    return <AppLoader />
  }

  return <>{children}</>
}
