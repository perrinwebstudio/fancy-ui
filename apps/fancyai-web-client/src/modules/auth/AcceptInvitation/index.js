import AppLoader from '@crema/components/AppLoader';
import { SettingPassword } from '@crema/modules/userPages';
import { useResetPasswordMutation } from 'apps/fancyai-web-client/src/core/api';
import { updateApiToken } from 'apps/fancyai-web-client/src/core/redux/features/auth/slice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const AcceptInvitation = ({ prop1 }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const jwt = searchParams.get('jwt')
  const isNewUser = searchParams.get('new_user')
  const [needPassword, setNeedPassword] = React.useState(false)
  const dispatch = useDispatch()

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  useEffect(() => {
    if (jwt) {
      if (isNewUser) {
        setNeedPassword(true)
      } else {
        setTimeout(() => {
          searchParams.delete('jwt')
          setSearchParams(searchParams)
          dispatch(updateApiToken(jwt))
        }, 100)
      }
    }
  }, [jwt, isNewUser, needPassword, searchParams, setSearchParams, dispatch])

  return <>
    {!needPassword && <AppLoader />}
    {
      needPassword && <SettingPassword
        resetPassword={resetPassword}
        isLoading={isLoading}
      />
    }
  </>
}

export default AcceptInvitation

///accept-invitation?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlhbWRvYW5taW5odGllbkBnbWFpbC5jb20iLCJpZCI6IjY1MmNmNWU3MjVkNzM2MDAwOGZlZmNhYSIsImlhdCI6MTY5NzQ3MDY5OSwiZXhwIjoxNjk5MTY5MDcwNDQ0fQ.KmEc_1T3aspLJNB9fQX3PVY15EHiy3ChpI7zC2ujX8Y