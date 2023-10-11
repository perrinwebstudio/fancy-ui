import { Typography } from 'antd';
import {
  StyledCardCalendarWrapper,
  StyledCardRow,
  StyledCardWrapper,
  StyledIconWrapper,
  StyledIconsLeft,
  StyledTagWrapper
} from './index.styled';
import { ArrowUpOutlined, CalendarOutlined, CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useState } from 'react';
import EditHaroLinkModal from './EditHaroLinkModal';
import { useSetReviewItemMutation } from 'apps/fancyai-web-client/src/core/api/apiReviewCenter';
import EditContentModal from './EditContentModal';
import NewContentModal from './NewContentModal';
import EditPaidLinkBudgetModal from './EditPaidLinkBudgetModal';

const ReviewCenterCard = ({ item }) => {
  const date = moment(item.updatedAt).format('MM/DD/YYYY');
  const [setReviewItem, { isLoading }] = useSetReviewItemMutation();
  const [dataType, setDataType] = useState('');

  const onSeen = () => {
    if (!item.canApprove && item.seen) {
      return;
    }
    if (item.canApprove) {
      const payload = { status: 'approved' }
      setReviewItem({ siteId: item.site, itemId: item._id, item: payload })
      return;
    }
    const payload = { seen: 'true' }
    setReviewItem({ siteId: item.site, itemId: item._id, item: payload })
  }

  const onEdit = () => {
    if (!item.canEdit) {
      return;
    }
    setDataType(item.dataType)
  }

  const onReject = () => {
    if (item.canReject) {
      const payload = { status: 'rejected' }
      setReviewItem({ siteId: item.site, itemId: item._id, item: payload })
      return;
    }
  }

  const onClose = () => {
    setDataType('');
  }

  const getStatusName = (status, seen) => {
    if (status === 'approved' || status === 'rejected' || status === 'pending') {
      return status;
    }
    if (!!seen) {
      return 'Read'
    }
    return 'Unread';
  }

  return <>
    <StyledCardWrapper status={item.status}>
      <StyledCardRow>
        <StyledCardCalendarWrapper>
          <CalendarOutlined style={{ width: '16px' }} />
          <span>{date}</span>
        </StyledCardCalendarWrapper>
        <StyledTagWrapper status={item.status}>
          <span>{item.category}</span>
          <div>{getStatusName(item.status, item.seen)}</div>
        </StyledTagWrapper>
      </StyledCardRow>
      <div>
        <Typography.Title level={5}>{item.name}</Typography.Title>
        <Typography>{item.textDescription}</Typography>
      </div>
      <StyledCardRow>
        <StyledIconsLeft>
          <StyledIconWrapper color={item.canApprove || !item.seen ? '#28BC37' : '#C2C2C2'} >
            <CheckOutlined onClick={onSeen} />
          </StyledIconWrapper>
          <StyledIconWrapper color={item.canEdit ? '#0078CC' : '#C2C2C2'}>
            <EditOutlined onClick={onEdit} />
          </StyledIconWrapper>
          <StyledIconWrapper color={item.canReject ? '#CE1717' : '#C2C2C2'}>
            <DeleteOutlined onClick={onReject} />
          </StyledIconWrapper>
        </StyledIconsLeft>
        <StyledIconWrapper color="#0078CC">
          <ArrowUpOutlined rotate={45} />
        </StyledIconWrapper>
      </StyledCardRow>
    </StyledCardWrapper>
    <EditContentModal open={dataType === 'html'} item={item} onClose={onClose} />
    <NewContentModal open={dataType === 'rtf'} item={item} onClose={onClose} />
    <EditPaidLinkBudgetModal open={dataType === 'number'} item={item} onClose={onClose} />
    <EditHaroLinkModal open={dataType === 'link'} item={item} onClose={onClose} />
  </>
}

export default ReviewCenterCard