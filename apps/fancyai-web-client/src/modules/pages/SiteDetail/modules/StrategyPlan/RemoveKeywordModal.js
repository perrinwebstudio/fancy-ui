import React from 'react';
import { Button, Divider, Form, Modal, Space, Typography, theme } from 'antd';
import { useRejectKeywordMutation } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import { StyledUpdateModal } from './shared.styled';

const RemoveKeywordModal = ({ open, onClose, keyword }) => {
  const {token} = theme.useToken()
  const [reject, { isLoading }] = useRejectKeywordMutation()

  return <StyledUpdateModal closable={false} footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={4}>Do you want to Remove?</Typography.Title>
    <Divider />

    {/* <Form layout='vertical'>
      <Form.Item label="Keyword">
        <Typography.Text style={{color: token.blue}}>{keyword?.keyword}</Typography.Text>
      </Form.Item>
    </Form> */}

    <div style={{marginBottom: '30px'}}>
      <div><Typography.Text strong style={{fontSize: '15px'}}>Keyword</Typography.Text></div>
      <div style={{marginTop: '5px'}}><Typography.Text style={{color: token.colorPrimary}}>{keyword?.keyword}</Typography.Text></div>
    </div>

    <Button
      size='large'
      loading={isLoading}
      onClick={() => {
        reject({
          keywordId: keyword._id
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


export default RemoveKeywordModal