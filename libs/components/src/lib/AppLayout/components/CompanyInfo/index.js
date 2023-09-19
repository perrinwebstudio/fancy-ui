import React, { useMemo, useState } from "react";
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

const CompanyInfo = () => {
  const { themeMode } = useThemeContext();
  const { user } = useAuthUser();
  const [currentCompanyId, setCurrentCompanyId] = useState(user.company[0].id || -1);

  const onClick = ({key}) => {
    setCurrentCompanyId(user.company[key].id)
  }

  const items = useMemo(() => {
    if (!user.company || !Array.isArray(user.company)) return [];
    let arr = []
    arr = [...(user.company.map((item, index) => {
      return (
        {
          key: index,
          label: 
          <StyledDivWrapper>
            <Image
              width={40}
              src={item.image_url}
              preview={false}
            />
            {item.name}
          </StyledDivWrapper>,
        }
      )
    }))]
    return arr;
  }, [user.company])

  const currentCompany = useMemo(() => {
    let selected = user.company.filter(itm => itm.id === currentCompanyId)[0];
    if (selected) {
      return (
        <StyledDivWrapper>
          <Image
            width={40}
            src={selected.image_url}
            preview={false}
          />
          {selected.name}
        </StyledDivWrapper>
      )
    }
    return <></>
  }, [currentCompanyId])

  return (
    <>
        <StyledCrUserInfo
          className={clsx("cr-user-info", {
            light: themeMode === "light",
          })}
        >
          <Dropdown
            menu={{ items, onClick }}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{
              zIndex: 1052,
              minWidth: 150,
            }}
            arrow

          >
            <StyledCrUserInfoInner className="ant-dropdown-link">
              <StyledCrUserInfoContent className="cr-user-info-content">
                <StyledUsernameInfo>
                  {currentCompany}
                </StyledUsernameInfo>
                <StyledUserArrow className="cr-user-arrow">
                  <FaChevronDown />
                </StyledUserArrow>
              </StyledCrUserInfoContent>
            </StyledCrUserInfoInner>
          </Dropdown>
        </StyledCrUserInfo>
    </>
  );
};

export default CompanyInfo;