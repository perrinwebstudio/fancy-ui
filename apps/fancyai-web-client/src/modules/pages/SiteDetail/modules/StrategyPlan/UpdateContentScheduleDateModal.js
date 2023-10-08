import React, { useEffect } from 'react';
import { Button, DatePicker, Divider, Form, Modal, Typography, theme } from 'antd';
import { useRejectKeywordMutation } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import { useUpdateContentMutation } from 'apps/fancyai-web-client/src/core/api/apiContent';
import dayjs from 'dayjs';

const UpdateContentScheduleDateModal = ({ open, onClose, content, title }) => {
  console.log('content', content)

  const {token} = theme.useToken()
  const [update, { isLoading }] = useUpdateContentMutation()
  const [date, setDate] = React.useState(dayjs(content.scheduledFor, "M/DD/YYYY"))

  useEffect(() => {
    setDate(content?.scheduledFor ? dayjs(content.scheduledFor, "M/DD/YYYY") : null)
  }, [content?.scheduledFor])

  if (!content) return null

  console.log('content?.scheduledFor', content?.scheduledFor)
  console.log('date', date)

  return <Modal footer={<></>} open={open} destroyOnClose onCancel={onClose}>
    <Typography.Title level={5}>Update Scheduled Date</Typography.Title>
    <Divider />
    <Form layout='vertical'>
      <Form.Item label="Schedule Date">
       <DatePicker
        onChange={(date) => setDate(date)}
        format={'MM/DD/YYYY'}
        value={date}
        size='middle' style={{ width: '100%' }} />
      </Form.Item>
    </Form>

    <Divider />
    <Button
      size='middle'
      loading={isLoading}
      onClick={() => {
        update({
          contentId: content._id,
          showNotification: true,
          updates: {
            scheduledFor: date ? date.format('M/DD/YYYY') : null
          }
        }).unwrap().then(() => {
          onClose()
        }).catch(() => {})
      }}
      type="primary" block>Update</Button>
    <div style={{marginTop: '10px'}}>
      <Button
        size='middle'
        loading={isLoading}
        onClick={onClose}
        block type='ghost'>Cancel</Button>
    </div>
  </Modal>
}


export default UpdateContentScheduleDateModal