import React, { useState } from 'react';
import { Button, Divider, Input, Modal, Typography } from 'antd';
import moment from 'moment';
import { StyledCardCalendarWrapper, StyledCardRow, StyledEditLinkBudgetContentWrapper, StyledModalInfoWrapper, StyledModalOrignalContentWrapper, StyledOriginalContent, StyledTagWrapper } from './index.styled';
import { CalendarOutlined, DollarOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { useGetReviewCenterItemQuery, useSetReviewItemMutation } from 'apps/fancyai-web-client/src/core/api/apiReviewCenter';

const EditPaidLinkBudgetModal = ({ open, onClose, item }) => {
  const { data: itemData, isLoading } = useGetReviewCenterItemQuery({ siteId: item?.site, itemId: item?._id }, { skip: !open })
  const date = moment(item.updatedAt).format('MM/DD/YYYY');
  const [setReviewItem, { isEditLoading }] = useSetReviewItemMutation();
  const [inputValue, setInputValue] = useState()

  const onValueChange = (e) => {
    setInputValue(e.target.value);
  }

  React.useEffect(() => {
    setInputValue(itemData?.data?.userEditedData)
  }, [itemData]);

  const onConfirmEdit = () => {
    const payload = { userEditedData: inputValue }
    setReviewItem({ siteId: item.site, itemId: item._id, item: payload })
    onClose();
  }
  return <>
    <Modal footer={<></>} open={open} closeIcon={null} width={610} closable={false}>
      <Typography.Title level={3} style={{ textAlign: 'left' }}>Edit</Typography.Title>
      
      <Divider />

      <StyledModalInfoWrapper style={{width: '100%'}}>
        <StyledCardRow>
          <StyledCardCalendarWrapper>
            <CalendarOutlined style={{width: '16px'}} />
            <span>{date}</span>
          </StyledCardCalendarWrapper>
          <StyledTagWrapper>
            <span>{item.category}</span>
          </StyledTagWrapper>
        </StyledCardRow>
        <Typography.Title level={5} style={{marginBottom: 0, fontWeight: 500}}>
          Review And Approval Required For Paid Link Budget
        </Typography.Title>
      </StyledModalInfoWrapper>

      <StyledEditLinkBudgetContentWrapper>
        <span>$ {itemData?.data?.data}</span>
        <span>Recommended Paid Link Budget</span>
        <ExclamationCircleFilled />
      </StyledEditLinkBudgetContentWrapper>

      <StyledModalOrignalContentWrapper style={{padding: 0}}>
        <Typography style={{fontSize: '18px'}}>Paid Link Budget</Typography>
        <Input type='number' onChange={onValueChange} size="large" value={inputValue} prefix={<DollarOutlined style={{color: '#0078CC'}} />} style={{marginTop: '16px'}} />
      </StyledModalOrignalContentWrapper>

      <Divider />
      <div style={{gap: '10px', justifyContent: 'center'}}>
        <Button
          size='large'
          loading={isEditLoading}
          onClick={() => {
            onConfirmEdit()
          }}
          style={{width: '90%', margin: '10px 5%'}}
          type="primary" block>
          Confirm Edit
        </Button>
        <Button
          size='large'
          onClick={onClose}
          style={{width: '90%', border: '1px solid #0078cc', color: '#0078cc', margin: '0 5%'}}
          block type='ghost'>
          Cancel
        </Button>
      </div>
    </Modal>
  </>
}


export default EditPaidLinkBudgetModal;