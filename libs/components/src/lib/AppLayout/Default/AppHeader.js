import React from "react";
import AppLanguageSwitcher from "../../AppLanguageSwitcher";
import AppNotifications from "../../AppNotifications";
import PropTypes from "prop-types";
import { FiMoreVertical } from "react-icons/fi";
import {
  StyledAppHeader,
  StyledAppHeaderSectionDesk,
  StyledAppHeaderSectionMobile,
} from "./index.styled";
import { Button, Dropdown, Space, Typography } from "antd";
import { StyledDropdownWrapper } from "../index.styled";
import UserInfo from '../components/UserInfo';
import { MenuOutlined } from "@ant-design/icons";

const items = [
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <UserInfo hasColor /> },
];

const AppHeader = ({ isCollapsed, onToggleSidebar }) => {
  return (
    <StyledAppHeader>
      <Space align="center">
        <Button
          style={{padding: '5px'}}
          type="ghost" onClick={() => {
          onToggleSidebar(!isCollapsed)
        }}>
          <MenuOutlined />
        </Button>
        <Typography.Title style={{marginBottom: 0}} level={4}>Fancy AI</Typography.Title>
      </Space>
      <StyledAppHeaderSectionDesk>
        <AppNotifications />
        <UserInfo hasColor />
      </StyledAppHeaderSectionDesk>
      <StyledAppHeaderSectionMobile>
        <StyledDropdownWrapper>
          <Dropdown
            menu={{ items }}
            overlayClassName="dropdown-wrapper"
            getPopupContainer={(triggerNode) => triggerNode}
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link-mobile"
              onClick={(e) => e.preventDefault()}
            >
              <FiMoreVertical />
            </a>
          </Dropdown>
        </StyledDropdownWrapper>
      </StyledAppHeaderSectionMobile>
    </StyledAppHeader>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  onToggleSidebar: PropTypes.func,
  isCollapsed: PropTypes.bool,
};
