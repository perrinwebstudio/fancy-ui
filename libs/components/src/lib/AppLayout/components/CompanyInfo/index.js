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

const CompanyInfo = () => {
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
              <Image
                width={40}
                src={item.logo ?? "/assets/images/company_placeholder_logo.jpg"}
                style={{
                  border:
                    selectedCompanyId === item.id
                      ? "1px solid #28BC37"
                      : "1px solid #CDCDCD",
                  borderRadius: "50%",
                }}
                preview={false}
              />
              {item.name}
              <CheckOutlined
                style={{
                  color: "#28BC37",
                  marginLeft: "auto",
                  marginRight: "4px",
                }}
              />
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
  }, [companies]);

  const currentCompany = useMemo(() => {
    let selected = companies?.filter((itm) => itm.id === selectedCompanyId)[0];
    if (selected) {
      return (
        <StyledDivWrapper>
          <Image
            width={40}
            src={selected.logo ?? "/assets/images/company_placeholder_logo.jpg"}
            preview={false}
          />
          {selected.name}
        </StyledDivWrapper>
      );
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
          trigger={["click"]}
          placement="bottomRight"
          overlayStyle={{
            zIndex: 1052,
            minWidth: 200,
          }}
          arrow
        >
          <StyledCrUserInfoInner className="ant-dropdown-link">
            <StyledCrUserInfoContent className="cr-user-info-content">
              <StyledUsernameInfo>{currentCompany}</StyledUsernameInfo>
              <StyledUserArrow className="cr-user-arrow">
                <FaChevronDown />
              </StyledUserArrow>
            </StyledCrUserInfoContent>
          </StyledCrUserInfoInner>
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
