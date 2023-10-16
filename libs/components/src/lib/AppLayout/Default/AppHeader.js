import React from "react";
import AppLanguageSwitcher from "../../AppLanguageSwitcher";
import AppNotifications from "../../AppNotifications";
import PropTypes from "prop-types";
import { FiMoreVertical } from "react-icons/fi";
import {
  StyledAppHeader,
  StyledAppHeaderSectionDesk,
  StyledAppHeaderSectionMobile,
  StyledEmailConfirmPopup,
} from "./index.styled";
import { Button, Collapse, Dropdown, Space, Typography } from "antd";
import { StyledDropdownWrapper } from "../index.styled";
import UserInfo from "../components/UserInfo";
import { MenuOutlined } from "@ant-design/icons";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const items = [
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <UserInfo hasColor /> },
];

const AppHeader = ({ isCollapsed, onToggleSidebar }) => {
  const { showEmailConfirmPopup, setShowEmailConfirmPopup } = useAuthUser();

  return (
    <StyledAppHeader>
      <Space direction="vertical" style={{rowGap: "0 !important"}}>
        <Button
          style={{ padding: "5px" }}
          type="ghost"
          onClick={() => {
            onToggleSidebar(!isCollapsed);
          }}
        >
          <MenuOutlined />
        </Button>
        <Typography.Title style={{ marginBottom: 0 }} level={4}>
          FancyAI
        </Typography.Title>
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
      {showEmailConfirmPopup && (
        <StyledEmailConfirmPopup>
          <Typography>
            Email Confirm
            <br />
            <br />
            Please confirm your email address to continue. Check your inbox for
            a confirmation email from us, click the provided link to verify your
            account and enjoy our platform's features.
          </Typography>
          <Button
            type="primary"
            onClick={() => setShowEmailConfirmPopup(false)}
          >
            Got it
          </Button>
        </StyledEmailConfirmPopup>
      )}
    </StyledAppHeader>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  onToggleSidebar: PropTypes.func,
  isCollapsed: PropTypes.bool,
};
