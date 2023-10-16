import React from 'react';
import { Button, Divider, Form, Modal, Typography, theme } from 'antd';
import { useRejectContentMutation } from 'apps/fancyai-web-client/src/core/api/apiContent';
import AppNotificationModal from 'libs/components/src/lib/AppNotificationModal';

const RemoveContentModal = ({ open, onClose, content, type }) => {
  const {token} = theme.useToken()
  const [reject, { isLoading }] = useRejectContentMutation()

  return <AppNotificationModal closable={false} footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={4}>Do you want to Remove?</Typography.Title>
    <Divider />
    <div style={{marginBottom: '30px'}}>
      <div><Typography.Text strong style={{fontSize: '15px'}}>{type === 'update' ? 'Content Update' : 'New Content'}</Typography.Text></div>
      <div style={{marginTop: '5px'}}><Typography.Text style={{color: token.colorPrimary}}>{content?.topic}</Typography.Text></div>
    </div>
    <Button
      size='large'
      loading={isLoading}
      onClick={() => {
        reject({
          siteId: content.site,
          contentId: content._id
        }).unwrap().then(() => {
          onClose()
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


export default RemoveContentModal