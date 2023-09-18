import React, { useMemo } from "react";
import clsx from "clsx";
import { Dropdown } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { useThemeContext } from "@crema/context/ThemeContextProvider";
import { useAuthUser } from "@crema/hooks/AuthHooks";
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

const CompanyInfo = () => {
  const { themeMode } = useThemeContext();
  const { user } = useAuthUser();

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  const items = useMemo(() => {
    let arr = []
    arr = [...user.company && user.company.map((item, index) => {
      return (
        {
          key: index,
          label: item.name
        }
      )
    })]
    return arr;
  }, [user])

  return (
    <>
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
              {user.photoURL ? (
                <StyledCrUserInfoAvatar src={user.photoURL} />
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
                    {user.displayName ? user.displayName : "admin user "}
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
    </>
  );
};

export default CompanyInfo;