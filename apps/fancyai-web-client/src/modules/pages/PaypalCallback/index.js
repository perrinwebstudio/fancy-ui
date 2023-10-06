import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppLoader from '@crema/components/AppLoader';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSubmitPaypalTokenMutation } from 'apps/fancyai-web-client/src/core/api/apiBilling';

const PaypalCallback = ({ prop1 }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [submitToken] = useSubmitPaypalTokenMutation()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  useEffect(() => {
    if (token) {
      submitToken({token}).unwrap().then(() => {
        navigate('/pages/billing')
      }).catch(() => {})
    }
  }, [token, submitToken])
  return <AppLoader />
}


export default PaypalCallback