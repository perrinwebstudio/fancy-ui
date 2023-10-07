import React, { useEffect } from 'react';
import AppLoader from '@crema/components/AppLoader';
import { useSearchParams } from 'react-router-dom';
import { updateApiToken } from 'apps/fancyai-web-client/src/core/redux/features/auth/slice';
import { useDispatch } from 'react-redux';

const SocialTokenCallback = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const token = searchParams.get('jwt')
  const dispatch = useDispatch()
  useEffect(() => {
    if (token && token !== 'undefined') {
      setTimeout(() => {
        searchParams.delete('jwt')
        setSearchParams(searchParams)
        dispatch(updateApiToken(token))
      }, 100)
    }
  }, [token, searchParams, setSearchParams, dispatch])

  return <AppLoader />
}

export default SocialTokenCallback