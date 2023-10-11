import React, { useState } from 'react';
import { Button, Divider, Modal, Typography } from 'antd';
import moment from 'moment';
import { StyledCardCalendarWrapper, StyledCardRow, StyledEditLinkBudgetContentWrapper, StyledModalInfoWrapper, StyledModalOrignalContentWrapper, StyledOriginalContent, StyledTagWrapper } from './index.styled';
import { CalendarOutlined, ExclamationCircleFilled, LinkOutlined } from '@ant-design/icons';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useGetReviewCenterItemQuery, useSetReviewItemMutation } from 'apps/fancyai-web-client/src/core/api/apiReviewCenter';

const EditHaroLinkModal = ({ open, onClose, item }) => {
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
    <Modal footer={<></>} open={open} closeIcon={null} width={610} closable={false}>
      <Typography.Title level={3} style={{ textAlign: 'left' }}>Edit</Typography.Title>

      <Divider />

      <StyledModalInfoWrapper style={{ width: '100%' }}>
        <StyledCardRow>
          <StyledCardCalendarWrapper>
            <CalendarOutlined style={{ width: '16px' }} />
            <span>{date}</span>
          </StyledCardCalendarWrapper>
          <StyledTagWrapper>
            <span>{itemData?.data?.category}</span>
          </StyledTagWrapper>
        </StyledCardRow>
        <Typography.Title level={5} style={{ marginBottom: 0, fontWeight: 500 }}>
          Review And Approval Required For HARO Opportunity
        </Typography.Title>
      </StyledModalInfoWrapper>

      {!isLoading && (<StyledModalOrignalContentWrapper style={{ padding: '20px 0' }}>
        <Typography style={{ fontSize: '18px' }}>Prewritten quote</Typography>
        <div style={{ width: '100%', height: 150, marginTop: '16px', paddingBottom: '60px' }}>
          <div ref={quillRef} />
        </div>
      </StyledModalOrignalContentWrapper>
      )}

      <StyledModalOrignalContentWrapper style={{ padding: 0 }}>
        <Typography style={{ fontSize: '18px' }}>Haro Link</Typography>
        <a href={`https://${itemData?.data?.data}` } target="_blank" >
          <StyledEditLinkBudgetContentWrapper>
            <div style={{ display: 'flex', gap: '8px' }}>
              <LinkOutlined />
              <span>HARO Link Budget</span>
            </div>
            <ExclamationCircleFilled />
          </StyledEditLinkBudgetContentWrapper>
        </a>


      </StyledModalOrignalContentWrapper>

      <div style={{ gap: '10px', justifyContent: 'center' }}>
        <Button
          size='large'
          loading={isEditLoading}
          onClick={() => {
            onConfirmEdit()
          }}
          style={{ width: '90%', margin: '10px 5%' }}
          type="primary" block>
          Confirm Edit
        </Button>
        <Button
          size='large'
          onClick={onClose}
          style={{ width: '90%', border: '1px solid #0078cc', color: '#0078cc', margin: '0 5%' }}
          block type='ghost'>
          Cancel
        </Button>
      </div>
    </Modal>
  </>
}


export default EditHaroLinkModal;