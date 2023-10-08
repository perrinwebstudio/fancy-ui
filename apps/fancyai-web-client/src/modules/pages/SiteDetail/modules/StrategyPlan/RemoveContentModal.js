import React from 'react';
import { Button, Divider, Modal, Typography, theme } from 'antd';
import { useRejectContentMutation } from 'apps/fancyai-web-client/src/core/api/apiContent';

const RemoveContentModal = ({ open, onClose, content, type }) => {
  const {token} = theme.useToken()
  const [reject, { isLoading }] = useRejectContentMutation()

  return <Modal footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={5}>Do you want to remove?</Typography.Title>
    <Divider />
    <div><Typography.Text strong>{type === 'update' ? 'Content Update' : 'New Content'}</Typography.Text></div>
    <div><Typography.Text style={{color: token.blue}}>{content?.topic}</Typography.Text></div>
    <Divider />
    <Button
      size='large'
      loading={isLoading}
      onClick={() => {
        reject({
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
  </Modal>
}


export default RemoveContentModal