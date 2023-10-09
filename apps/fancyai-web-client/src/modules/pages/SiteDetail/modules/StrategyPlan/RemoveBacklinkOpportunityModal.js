import React from 'react';
import { Button, Divider, Modal, Typography, theme } from 'antd';
import { useRejectKeywordMutation } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import UrlHolder from './UrlHolder';
import { useUpdateBacklinkOpportunityMutation } from 'apps/fancyai-web-client/src/core/api/apiBacklink';

const RemoveBacklinkOpportunityModal = ({ open, onClose, backlink }) => {
  const {token} = theme.useToken()
  const [update, { isLoading }] = useUpdateBacklinkOpportunityMutation()

  return <Modal footer={<></>} open={open} onCancel={onClose}>
    <Typography.Title level={5}>Do you want to remove?</Typography.Title>
    <Divider />
    <div><Typography.Text strong>Backlink Opportunity</Typography.Text></div>
    <div>Opportunity Type: <Typography.Text style={{color: token.blue}}>{backlink?.opportunityType}</Typography.Text></div>
    <div>Opportunity Link: <UrlHolder url={backlink.opportunityUrl} /></div>

    <Divider />
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
    <div style={{marginTop: '10px'}}>
      <Button
        size='large'
        loading={isLoading}
        onClick={onClose}
        block type='ghost'>Cancel</Button>
    </div>
  </Modal>
}


export default RemoveBacklinkOpportunityModal