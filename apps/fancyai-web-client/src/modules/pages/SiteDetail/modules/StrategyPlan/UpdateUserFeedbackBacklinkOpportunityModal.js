import React, { useEffect } from 'react';
import { Button, Divider, Form, Modal, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useUpdateBacklinkOpportunityMutation } from 'apps/fancyai-web-client/src/core/api/apiBacklink';
import AppNotificationModal from 'libs/components/src/lib/AppNotificationModal';

const UpdateUserFeedbackBacklinkOpportunityModal = ({ open, onClose, backlink }) => {
  const [update, { isLoading }] = useUpdateBacklinkOpportunityMutation()
  const [userFeedback, setUserFeedback] = React.useState(backlink.userFeedback)

  return <AppNotificationModal closable={false} footer={<></>} open={open} destroyOnClose onCancel={onClose}>
    <Typography.Title level={4}>User Feedback Edits</Typography.Title>
    <Divider />
    <Form layout='vertical'>
      <Form.Item label="User Feedback">
        <TextArea
          value={userFeedback}
          onChange={(e) => setUserFeedback(e.target.value)}
          rows={5}
        />
      </Form.Item>
    </Form>

    <Button
      size='large'
      loading={isLoading}
      disabled={userFeedback === backlink.userFeedback}
      onClick={() => {
        update({
          backlinkId: backlink._id,
          siteId: backlink.site,
          showNotification: true,
          updates: {
            userFeedback: userFeedback
          }
        }).unwrap().then(() => {
          onClose()
        }).catch(() => {})
      }}
      type="primary" block>Confirm Edit</Button>
    <div style={{marginTop: '10px'}}>
      <Button
        size='large'
        loading={isLoading}
        onClick={onClose}
        block type='ghost'>Cancel</Button>
    </div>
  </AppNotificationModal>
}


export default UpdateUserFeedbackBacklinkOpportunityModal