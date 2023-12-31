import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Dropdown } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { useThemeContext } from "@crema/context/ThemeContextProvider";
import { useAuthMethod, useAuthUser } from "@crema/hooks/AuthHooks";
import { useSidebarContext } from "@crema/context/SidebarContextProvider";
import PropTypes from "prop-types";
import {
  StyledCrUserDesignation,
  StyledCrUserInfo,
  StyledCrUserInfoAvatar,
  StyledCrUserInfoContent,
  StyledCrUserInfoInner,
  StyledUserArrow,
  StyledUsername,
  StyledUsernameInfo,
} from "./index.styled";
import { useAppAuth } from "@crema/context/AppAuthProvider";

const UserInfo = ({ hasColor, hideDropDown, propsUser }) => {
  const { themeMode } = useThemeContext();
  const { user: myself } = useAuthUser();
  const navigate = useNavigate();
  const { sidebarColorSet } = useSidebarContext();
  const { allowSidebarBgImage } = useSidebarContext();
  const { onLogout } = useAppAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(propsUser ?? myself);
  }, [propsUser, myself]);

  const getUserAvatar = () => {
    if (user?.name) {
      return user?.name.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user?.email.charAt(0).toUpperCase();
    }
  };

  const items = [
    {
      key: 1,
      label: <div onClick={() => navigate("/my-profile")}>My Profile</div>,
    },
    {
      key: 2,
      label: (
        <div
          onClick={() => {
            console.log("logout");
            onLogout();
          }}
        >
          Logout
        </div>
      ),
    },
  ];

  console.log(user, "user");

  return (
    <>
      {hasColor ? (
        <StyledCrUserInfo
          style={{
            backgroundColor: allowSidebarBgImage
              ? ""
              : sidebarColorSet.sidebarHeaderColor,
            color: sidebarColorSet.sidebarTextColor,
          }}
          className={clsx("cr-user-info", {
            light: themeMode === "light",
          })}
        >
          <Dropdown
            menu={{ items }}
            trigger={!hideDropDown ? ["click"] : []}
            placement="bottomRight"
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}
          >
            <StyledCrUserInfoInner className="ant-dropdown-link">
              {user?.photoURL ? (
                <StyledCrUserInfoAvatar src={user?.photoURL} />
              ) : (
                <StyledCrUserInfoAvatar>
                  {getUserAvatar()}
                </StyledCrUserInfoAvatar>
              )}
              <StyledCrUserInfoContent
                className="cr-user-info-content full-width"
              >
                <StyledUsernameInfo>
                  <StyledUsername
                    className={clsx("text-truncate", {
                      light: themeMode === "light",
                    })}
                  >
                    {user?.name ? user?.name : "admin user "}
                  </StyledUsername>
                  {!hideDropDown && (
                    <StyledUserArrow className="cr-user-arrow">
                      <FaChevronDown />
                    </StyledUserArrow>
                  )}
                </StyledUsernameInfo>
              </StyledCrUserInfoContent>
            </StyledCrUserInfoInner>
          </Dropdown>
        </StyledCrUserInfo>
      ) : (
        <StyledCrUserInfo
          className={clsx("cr-user-info", {
            light: themeMode === "light",
          })}
        >
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}
          >
            <StyledCrUserInfoInner className="ant-dropdown-link">
              {user?.photoURL ? (
                <StyledCrUserInfoAvatar src={user?.photoURL} />
              ) : (
                <StyledCrUserInfoAvatar>
                  {getUserAvatar()}
                </StyledCrUserInfoAvatar>
              )}
              <StyledCrUserInfoContent className="cr-user-info-content">
                <StyledUsernameInfo>
                  <StyledUsername
                    className={clsx("text-truncate", {
                      light: themeMode === "light",
                    })}
                  >
                    {user?.name ? user?.name : "admin user "}
                  </StyledUsername>
                  <StyledUserArrow className="cr-user-arrow">
                    <FaChevronDown />
                  </StyledUserArrow>
                </StyledUsernameInfo>
                <StyledCrUserDesignation className="text-truncate cr-user-designation">
                  System Manager
                </StyledCrUserDesignation>
              </StyledCrUserInfoContent>
            </StyledCrUserInfoInner>
          </Dropdown>
        </StyledCrUserInfo>
      )}
    </>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  hasColor: PropTypes.bool,
};
