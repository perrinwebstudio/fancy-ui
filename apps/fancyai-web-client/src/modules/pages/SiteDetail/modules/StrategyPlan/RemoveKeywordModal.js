import React from 'react';
import { Button, Divider, Modal, Typography, theme } from 'antd';
import { useRejectKeywordMutation } from 'apps/fancyai-web-client/src/core/api/apiKeyword';

const RemoveKeywordModal = ({ open, onClose, keyword, onRemove }) => {
  const {token} = theme.useToken()
  const [reject, { isLoading }] = useRejectKeywordMutation()

  return <Modal footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={5}>Do you want to remove?</Typography.Title>
    <Divider />
    <div><Typography.Text strong>Keyword</Typography.Text></div>
    <div><Typography.Text style={{color: token.blue}}>{keyword?.keyword}</Typography.Text></div>

    <Divider />
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
  </Modal>
}


export default RemoveKeywordModal