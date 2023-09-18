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
import { Dropdown } from "antd";
import { StyledDropdownWrapper } from "../index.styled";

const items = [
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = ({ isCollapsed, onToggleSidebar }) => {
  return (
    <StyledAppHeader>
      <h2>Fancy AI</h2>
      <StyledAppHeaderSectionDesk>
        <AppLanguageSwitcher />
        <AppNotifications />
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
