import React, { useState } from 'react';
import { Button, Divider, Modal, Typography, theme } from 'antd';
import moment from 'moment';
import { StyledCardCalendarWrapper, StyledCardRow, StyledModalInfoWrapper, StyledModalOrignalContentWrapper, StyledTagWrapper } from './index.styled';
import { CalendarOutlined } from '@ant-design/icons';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useGetReviewCenterItemQuery, useSetReviewItemMutation } from 'apps/fancyai-web-client/src/core/api/apiReviewCenter';

const NewContentModal = ({ open, onClose, item }) => {
  const { quill, quillRef } = useQuill();
  const { data: itemData, isLoading } = useGetReviewCenterItemQuery({ siteId: item?.site, itemId: item?._id }, { skip: !open })
  const date = moment(item.updatedAt).format('MM/DD/YYYY');
  const [quillContent, setQullContent] = useState('');
  const [setReviewItem, { isEditLoading }] = useSetReviewItemMutation();
  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(itemData?.data?.userEditedData || '');
      setQullContent(itemData?.data?.userEditedData || '')
    }
  }, [quill, itemData]);

  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setQullContent(quill.root.innerHTML)
      });
    }
  }, [quill]);

  const onConfirmEdit = () => {
    const payload = { userEditedData: quillContent }
    setReviewItem({ siteId: item.site, itemId: item._id, item: payload })
    onClose();
  }

  return <>
    <Modal footer={<></>} open={open} closeIcon={null} width={1475} closable={false}>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>Edit</Typography.Title>

      <Divider />

      <StyledModalInfoWrapper>
        <StyledCardRow>
          <StyledCardCalendarWrapper>
            <CalendarOutlined style={{ width: '16px' }} />
            <span>{date}</span>
          </StyledCardCalendarWrapper>
          <StyledTagWrapper>
            <span>{item.category}</span>
          </StyledTagWrapper>
        </StyledCardRow>
        <Typography.Title level={5} style={{ marginBottom: 0, fontWeight: 500 }}>Review And Approval Required For New Content</Typography.Title>
      </StyledModalInfoWrapper>

      {!isLoading && (<StyledModalOrignalContentWrapper>
        <Typography style={{ fontSize: '18px' }}>New Content</Typography>
        <div style={{ width: '100%', height: 200, marginTop: '16px', paddingBottom: '50px' }}>
          <div ref={quillRef} />
        </div>
      </StyledModalOrignalContentWrapper>)}

      <Divider />
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Button
          size='large'
          onClick={onClose}
          style={{ width: '310px', border: '1px solid #0078cc', color: '#0078cc' }}
          block type='ghost'>
          Cancel
        </Button>
        <Button
          size='large'
          loading={isEditLoading}
          onClick={onConfirmEdit}
          style={{ width: '310px' }}
          type="primary" block>
          Confirm Edit
        </Button>
      </div>
    </Modal>
  </>
}


export default NewContentModal;