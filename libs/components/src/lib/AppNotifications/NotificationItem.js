import React from 'react';

import PropTypes from 'prop-types';
import { List } from 'antd';
import {
  StyledNotifyListItem,
  StyledNotifyMsgAvatar,
} from './NotificationItem.styled';
import { useNavigate } from 'react-router-dom';

const NotificationItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();

  const handleClickNotification = () => {
    navigate(`/pages/sites/${item.siteId}/review_center/`);
  }

  return (
    <StyledNotifyListItem className='item-hover' onClick={handleClickNotification}>
      <List.Item.Meta
        avatar={<StyledNotifyMsgAvatar src={item.image ?? '/assets/images/site_logo_placeholder.png'} alt={item.siteName} />}
        description={`${item.count} unread notifications on ${item.siteName}`}
      />
    </StyledNotifyListItem>
  );
};

export default NotificationItem;

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
