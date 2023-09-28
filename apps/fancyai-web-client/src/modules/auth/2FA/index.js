import React from 'react';
import { useVerify2FAMutation } from '../../../core/api/apiAuth'

import { Verify2FA } from "@crema/modules/userPages";

const Verify2FaPage = ({ prop1 }) => {
  const [verify2FA, {isLoading}] = useVerify2FAMutation()

  return <Verify2FA
    verify2FA={verify2FA}
    isLoading={isLoading}
  />
}


export default Verify2FaPage
