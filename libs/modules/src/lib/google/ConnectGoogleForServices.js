import React from 'react';
import { Button } from 'antd';
import useConnectForGoogleServices from './useConnectForGoogleServices';
import { GoogleOutlined } from '@ant-design/icons';

const ConnectGoogleForServices = ({ onSuccess, label, Element = Button, isLoading }) => {
  const { connect, isConnecting } = useConnectForGoogleServices({
    onSuccess
  })

  return <Element icon={<GoogleOutlined />} loading={isConnecting || isLoading} onClick={() => connect()}>{label}</Element>
}

export default ConnectGoogleForServices