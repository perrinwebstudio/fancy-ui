import React, { useEffect } from 'react';
import { Button, DatePicker, Divider, Form, Typography } from 'antd';
import { useUpdateContentMutation } from 'apps/fancyai-web-client/src/core/api/apiContent';
import dayjs from 'dayjs';
import TextArea from 'antd/es/input/TextArea';
import AppNotificationModal from 'libs/components/src/lib/AppNotificationModal';

const UpdateContentScheduleDateModal = ({ open, onClose, content, type }) => {
  const [update, { isLoading }] = useUpdateContentMutation()
  const [date, setDate] = React.useState(dayjs(content.scheduledFor, "M/D/YYYY"))
  const [topic, setTopic] = React.useState(content.topic)

  useEffect(() => {
    setDate(content?.scheduledFor ? dayjs(content.scheduledFor, "M/D/YYYY") : null)
  }, [content?.scheduledFor])

  if (!content) return null

  return <AppNotificationModal width={450} closable={false} footer={<></>} open={open} destroyOnClose onCancel={onClose}>
    <Typography.Title level={5}>{type === 'new' ? 'New Content Edits' : 'Content Update Edits'}</Typography.Title>
    <Divider />
    <Form layout='vertical'>
      {type === 'new' && <Form.Item label="Blog/Page Topic">
        <TextArea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          rows={4}
          placeholder="Enter blog/page topic"
          style={{ width: '100%' }}
        />
      </Form.Item>}
      <Form.Item label="Schedule For">
       <DatePicker
        onChange={(date) => setDate(date)}
        format={'MM/DD/YYYY'}
        value={date}
        size='large'
        style={{ width: '100%' }} />
      </Form.Item>
    </Form>

    <Button
      size='large'
      loading={isLoading}
      disabled={topic === content.topic && date.isSame(dayjs(content.scheduledFor, "M/D/YYYY"))}
      onClick={() => {
        update({
          siteId: content.site,
          contentId: content._id,
          showNotification: true,
          updates: {
            scheduledFor: date ? date.format('MM/DD/YYYY') : null,
            topic
          }
        }).unwrap().then(() => {
          onClose()
        }).catch(() => {})
      }}
      type="primary" block>Update</Button>
    <div style={{marginTop: '10px'}}>
      <Button
        size='large'
        loading={isLoading}
        onClick={onClose}
        block type='ghost'>Cancel</Button>
    </div>
  </AppNotificationModal>
}


export default UpdateContentScheduleDateModal