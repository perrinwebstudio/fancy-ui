import React from 'react';
import { Button } from 'antd';
import useConnectForGoogleServices from './useConnectForGoogleServices';

const ConnectGoogleForServices = ({ onSuccess, label, Element = Button, isLoading }) => {
  const { connect, isConnecting } = useConnectForGoogleServices({
    onSuccess
  })

  return <Element loading={isConnecting || isLoading} onClick={() => connect()}>{label}</Element>
}

export default ConnectGoogleForServices