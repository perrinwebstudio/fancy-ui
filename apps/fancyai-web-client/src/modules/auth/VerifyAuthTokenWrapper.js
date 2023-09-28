import React, { useEffect, useState } from 'react'
import { useGetUserMutation } from '../../core/api/api'
import { logout } from '../../core/redux/features/auth/slice'
import { resetStateAction } from '../../core/redux/resetStateAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function VerifyAuthTokenWrapper({ children }) {
  const dispatch = useDispatch()
  const [isInitializing, setIsInitializing] = useState(true)
  const [getUser, { isLoading }] = useGetUserMutation()
  const auth = useSelector((state) => state.authSlice)
  const {currentUser, apiToken} = auth

  useEffect(() => {
    const init = async () => {
      setIsInitializing(true)
      if (apiToken && currentUser == null) {
        await getUser()
          .unwrap()
          .catch(() => {
            dispatch(logout())
            dispatch(resetStateAction())
            window.location.href = '/signin'
          })
      }
    }
    init()
      .then(() => {
        setIsInitializing(false)
      })
      .catch(() => {})
  }, [dispatch, apiToken, currentUser, getUser])

  if (isLoading || isInitializing) {
    return null
  }

  return <>{children}</>
}
