import React from 'react';
import { Dropdown } from 'antd';

import IntlMessages from '@crema/helpers/IntlMessages';
import NotificationItem from './NotificationItem';
import { IoIosNotificationsOutline } from 'react-icons/io';
import {
  StyledDrowdownWrapper,
  StyledNotifyButtonAll,
  StyledNotifyIcon,
  StyledNotifyLink,
  StyledNotifyList,
  StyledNotifyScrollSubmenu,
  StyledNotifyText,
} from './index.styled';
import { useAuthUser } from '@crema/hooks/AuthHooks';

const AppNotifications = () => {

  const { notifications } = useAuthUser();

  const notificationItems = [
    {
      key: 1,
      label: (
        <span className='header'>
          <IntlMessages id='common.notifications' /> ({notifications?.length ?? 0})
        </span>
      ),
    },
    {
      key: 2,
      label: (
        <StyledNotifyScrollSubmenu>
          <StyledNotifyList
            dataSource={notifications}
            renderItem={(item) => {
              return <NotificationItem key={item.id} item={item} />;
            }}
          />
        </StyledNotifyScrollSubmenu>
      ),
    },
  ];

  return (
    <StyledDrowdownWrapper>
      <Dropdown
        menu={{ items: notificationItems }}
        className='dropdown'
        overlayClassName='header-notify-messages'
        getPopupContainer={(triggerNode) => triggerNode}
        trigger={['click']}
      >
        <StyledNotifyLink onClick={(e) => e.preventDefault()}>
          <StyledNotifyIcon>
            <IoIosNotificationsOutline />
          </StyledNotifyIcon>
          <StyledNotifyText>
            <IntlMessages id='common.notifications' />
          </StyledNotifyText>
        </StyledNotifyLink>
      </Dropdown>
    </StyledDrowdownWrapper>
  );
};

export default AppNotifications;
