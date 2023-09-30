import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { Dropdown, Image } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { useThemeContext } from "@crema/context/ThemeContextProvider";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import {
  StyledCrUserInfo,
  StyledDivWrapper,
  StyledCrUserInfoContent,
  StyledCrUserInfoInner,
  StyledUserArrow,
  StyledUsernameInfo,
} from "./index.styled";
import { useAppAuth } from "@crema/context/AppAuthProvider";

const CompanyInfo = () => {
  const { themeMode } = useThemeContext();
  const { user } = useAuthUser();
  const { selectedCompanyId, setSelectedCompanyId } = useAppAuth();

  console.log(selectedCompanyId);

  useEffect(() => {
    if (selectedCompanyId < 0) {
      setSelectedCompanyId(user.companies?.[0]?.id ?? -1);
    }
  }, [user.companies]);

  const onClick = ({ key }) => {
    setSelectedCompanyId(user.company[key].id);
  };

  const items = useMemo(() => {
    if (!user.companies || !Array.isArray(user.companies)) return [];
    let arr = [];
    arr = [
      ...user.companies
        .filter((e) => e.id !== selectedCompanyId)
        .map((item, index) => {
          return {
            key: index,
            label: <StyledDivWrapper>{item.name}</StyledDivWrapper>,
          };
        }),
    ];
    return arr;
  }, [user.companies]);

  const currentCompany = useMemo(() => {
    let selected = user.companies.filter(
      (itm) => itm.id === selectedCompanyId
    )[0];
    if (selected) {
      return <StyledDivWrapper>{selected.name}</StyledDivWrapper>;
    }
    return <></>;
  }, [selectedCompanyId]);

  return (
    <>
      <StyledCrUserInfo
        className={clsx("cr-user-info", {
          light: themeMode === "light",
        })}
      >
        <Dropdown
          menu={{ items, onClick }}
          trigger={Boolean(items.length) ? ["click"] : []}
          placement="bottomRight"
          overlayStyle={{
            zIndex: 1052,
            minWidth: 150,
          }}
          arrow
        >
          <StyledCrUserInfoInner className="ant-dropdown-link">
            <StyledCrUserInfoContent className="cr-user-info-content">
              <StyledUsernameInfo>{currentCompany}</StyledUsernameInfo>
              <StyledUserArrow className="cr-user-arrow">
                {Boolean(items.length) && <FaChevronDown />}
              </StyledUserArrow>
            </StyledCrUserInfoContent>
          </StyledCrUserInfoInner>
        </Dropdown>
      </StyledCrUserInfo>
    </>
  );
};

export default CompanyInfo;
