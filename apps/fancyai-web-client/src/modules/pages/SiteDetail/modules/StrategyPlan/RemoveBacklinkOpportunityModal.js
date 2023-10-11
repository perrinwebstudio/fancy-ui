import React from 'react';
import { Button, Divider, Form, Modal, Typography, theme } from 'antd';
import { useRejectKeywordMutation } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import UrlHolder from './UrlHolder';
import { useUpdateBacklinkOpportunityMutation } from 'apps/fancyai-web-client/src/core/api/apiBacklink';
import { StyledUpdateModal } from './shared.styled';

const RemoveBacklinkOpportunityModal = ({ open, onClose, backlink }) => {
  const {token} = theme.useToken()
  const [update, { isLoading }] = useUpdateBacklinkOpportunityMutation()

  return <StyledUpdateModal closable={false} footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={4}>Do you want to remove Backlink Opportunity?</Typography.Title>
    <Divider />
    <Form layout='vertical'>
      <div style={{marginBottom: '10px'}}>
        <div><Typography.Text strong style={{fontSize: '15px'}}>Opportunity Type</Typography.Text></div>
        <div style={{marginTop: '5px'}}><Typography.Text style={{color: token.colorPrimary}}>{backlink?.opportunityType}</Typography.Text></div>
      </div>
      <div style={{marginBottom: '30px'}}>
        <div><Typography.Text strong style={{fontSize: '15px'}}>Opportunity Link</Typography.Text></div>
        <div style={{marginTop: '5px'}}><Typography.Text style={{color: token.colorPrimary}}>{backlink.opportunityUrl}</Typography.Text></div>
      </div>
    </Form>
    <div style={{marginTop: '20px'}}>
      <Button
        size='large'
        loading={isLoading}
        onClick={() => {
          update({
            backlinkId: backlink._id,
            showNotification: 'Backlink opportunity removed successfully',
            updates: {
              status: 'rejected'
            }
          }).unwrap().then(() => {
            onClose()
          }).catch(() => {})
        }}
        type="primary" danger block>Remove</Button>
    </div>
    <div style={{marginTop: '10px'}}>
      <Button
        size='large'
        loading={isLoading}
        onClick={onClose}
        block type='ghost'>Cancel</Button>
    </div>
  </StyledUpdateModal>
}


export default RemoveBacklinkOpportunityModal