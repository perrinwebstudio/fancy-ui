import React from 'react';
import { Button, Divider, Form, Modal, Typography, theme } from 'antd';
import { useRejectContentMutation } from 'apps/fancyai-web-client/src/core/api/apiContent';
import { StyledUpdateModal } from './shared.styled';

const RemoveContentModal = ({ open, onClose, content, type }) => {
  const {token} = theme.useToken()
  const [reject, { isLoading }] = useRejectContentMutation()

  return <StyledUpdateModal closable={false} footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={5}>Do you want to Remove?</Typography.Title>
    <Divider />
    <Form layout='vertical'>
      <Form.Item label={type === 'update' ? 'Content Update' : 'New Content'}>
        <Typography.Text style={{color: token.blue}}>{content?.topic}</Typography.Text>
      </Form.Item>
    </Form>
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
  </StyledUpdateModal>
}


export default RemoveContentModal