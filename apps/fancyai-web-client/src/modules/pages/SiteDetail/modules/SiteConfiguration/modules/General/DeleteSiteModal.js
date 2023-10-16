import React from 'react';
import { Button, Divider, Typography, theme } from 'antd';
import AppNotificationModal from 'libs/components/src/lib/AppNotificationModal';
import { useDeleteSiteMutation } from 'apps/fancyai-web-client/src/core/api';
import { useNavigate } from 'react-router-dom';
import { initialUrl } from '@crema/constants';

const DeleteSiteModal = ({ site, onClose, open }) => {
  const navigate = useNavigate()
  const {token} = theme.useToken()
  const [remove, { isLoading }] = useDeleteSiteMutation()

  return <AppNotificationModal closable={false} footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={4}>Do you want to Remove?</Typography.Title>
    <Divider />

    {/* <Form layout='vertical'>
      <Form.Item label="Keyword">
        <Typography.Text style={{color: token.blue}}>{keyword?.keyword}</Typography.Text>
      </Form.Item>
    </Form> */}

    <div style={{marginBottom: '30px'}}>
      <div><Typography.Text strong style={{fontSize: '15px'}}>Site</Typography.Text></div>
      <div style={{marginTop: '5px'}}><Typography.Text style={{color: token.colorPrimary}}>{site?.name}</Typography.Text></div>
    </div>

    <div style={{marginBottom: '30px'}}>
      <div><Typography.Text strong style={{fontSize: '15px'}}>Site Url</Typography.Text></div>
      <div style={{marginTop: '5px'}}><Typography.Text style={{color: token.colorPrimary}}>{site?.url}</Typography.Text></div>
    </div>

    <Button
      size='large'
      loading={isLoading}
      onClick={() => {
        remove({
          siteId: site._id,
        }).unwrap().then(() => {
          onClose()
          navigate(initialUrl)
        }).catch(() => {})
      }}
      type="primary" danger block>Remove</Button>
    <div style={{marginTop: '10px'}}>
      <Button
        size='large'
        loading={isLoading}
        onClick={onClose}
        block type='ghost'>Cancel</Button>
    </div>
  </AppNotificationModal>
}


export default DeleteSiteModal