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
import { CheckOutlined } from "@ant-design/icons";
import CreateCompanyModal from "./CreateCompanyModal";
import CompanyLogo from "./CompanyLogo";

const CompanyInfo = ({ isCollapsed }) => {
  const { themeMode } = useThemeContext();
  const { companies } = useAuthUser();
  const { selectedCompanyId, setSelectedCompanyId } = useAppAuth();

  const [isShowCreateCompanyModal, setIsShowCreateCompanyModal] =
    useState(false);

  const onClick = ({ key }) => {
    if (companies?.[key]?.id && companies?.[key]?.id !== selectedCompanyId) {
      setSelectedCompanyId(companies[key].id);
    }
  };

  const items = useMemo(() => {
    if (!companies || !Array.isArray(companies)) return [];
    let arr = [];
    arr = [
      ...companies?.map((item, index) => {
        return {
          key: index,
          label: (
            <StyledDivWrapper>
              <CompanyLogo
                name={item.name}
                url={item.logo}
                selected={selectedCompanyId === item.id}
              />
              
              {item.name}
              {selectedCompanyId === item.id && <CheckOutlined
                style={{
                  color: "#28BC37",
                  marginLeft: "auto",
                  marginRight: "4px",
                }}
              />}
            </StyledDivWrapper>
          ),
        };
      }),
    ];
    arr.push({
      key: companies.length,
      label: (
        <StyledDivWrapper onClick={() => setIsShowCreateCompanyModal(true)}>
          <Image
            width={40}
            src="/assets/images/add_company.png"
            style={{
              border: "1px solid #CDCDCD",
              borderRadius: "50%",
              padding: "10px",
            }}
            preview={false}
          />
          Create New Company
        </StyledDivWrapper>
      ),
    });
    return arr;
  }, [companies, selectedCompanyId]);

  const currentCompany = useMemo(() => {
    let selected = companies?.filter((itm) => itm.id === selectedCompanyId)[0];
    if (selected) {
      return (
        <StyledDivWrapper>
          <div style={{ cursor: 'pointer' }}>
            <CompanyLogo
              name={selected.name}
              url={selected.logo}
            />
          </div>
          {isCollapsed ? '' : selected.name}
        </StyledDivWrapper>
      );
    }
    return <></>;
  }, [selectedCompanyId, isCollapsed, companies]);

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
            minWidth: 200,
          }}
          arrow
        >
          {isCollapsed ? currentCompany : <StyledCrUserInfoInner className="ant-dropdown-link">
            <StyledCrUserInfoContent className="cr-user-info-content">
              <StyledUsernameInfo>{currentCompany}</StyledUsernameInfo>
              <StyledUserArrow className="cr-user-arrow">
                <FaChevronDown />
              </StyledUserArrow>
            </StyledCrUserInfoContent>
          </StyledCrUserInfoInner>}
        </Dropdown>
        <CreateCompanyModal
          isShowModal={isShowCreateCompanyModal}
          handleCloseModal={() => setIsShowCreateCompanyModal(false)}
        />
      </StyledCrUserInfo>
    </>
  );
};

export default CompanyInfo;
