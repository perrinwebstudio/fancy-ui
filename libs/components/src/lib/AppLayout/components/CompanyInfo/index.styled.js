import styled from "styled-components";
import { Avatar, Button, Form, List } from "antd";
import { darken } from "polished";

export const StyledDivWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  font-weight: 600;
`;

export const StyledDropdownList = styled(List)`
  & .ant-list-item {
    padding: 5px 12px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) =>
        darken(0.03, theme.palette.background.paper)};
    }
  }
`;

export const StyledInputWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCrUserInfo = styled.div`
  background-color: transparent !important;
  padding: 7px 12px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 71px;
  }

  & .ant-dropdown-link {
    color: inherit;

    & .anticon {
      font-size: ${({ theme }) => theme.font.size.sm};
    }
  }

  &.light {
    & .ant-dropdown-link {
      color: inherit;
    }
  }
`;

export const StyledCrUserInfoInner = styled.a`
  display: flex;
  align-items: center;
`;

export const StyledCrUserInfoAvatar = styled(Avatar)`
  font-size: 24px;
  background-color: ${({ theme }) => theme.palette.orange[6]};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCrUserInfoContent = styled.span`
  width: calc(100% - 62px);
  margin-left: 16px;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;
  width: 100%;

  [dir="rtl"] & {
    margin-left: 0;
    margin-right: 16px;
  }
`;

export const StyledUsernameInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: 600;
`;

export const StyledUsername = styled.h3`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: inherit;

  &.light {
    color: inherit;
  }
`;

export const StyledUserArrow = styled.span`
  margin-left: 12px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  [dir="rtl"] & {
    margin-left: 0;
    margin-right: 12px;
  }

  & svg {
    display: block;
  }
`;

export const StyledCrUserDesignation = styled.span`
  margin-top: -2px;
  color: inherit;
  font-size: ${({ theme }) => theme.font.size.base};

  .ant-layout-sider-dark & {
    color: inherit;
  }
`;

export const StyledDivider = styled.hr`
  border-width: 1px;
  opacity: 0.3;
  margin-bottom: 24px;
`;

export const StyledFormBtn = styled(Button)`
  width: 100%;
  min-height: 42px;
  margin: 8px 0;
`;

export const StyledInfoUpload = styled(Form.Item)`
  margin-bottom: 20px;

  & .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
  }
`;

export const StyledInfoUploadAvatar = styled(Avatar)`
  margin-right: 16px;
  width: 50px;
  height: 50px;

  [dir="rtl"] & {
    margin-right: 0;
    margin-left: 16px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 64px;
    height: 64px;
  }
`;

export const StyledInfoUploadContent = styled.div`
  flex: 1;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.palette.text.secondary};

  & p {
    margin-bottom: 0;
  }
`;

export const StyledInfoUploadBtnView = styled.div`
  margin-bottom: 6px;
  display: flex;
  align-items: center;

  & .dropzone {
    margin-right: 10px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }

  & .ant-btn {
    height: 30px;
    padding: 3.5px 12px;
  }
`;

export const StyledUserProfileGroupBtn = styled(Form.Item)`
  position: relative;

  & .ant-btn {
    & + .ant-btn {
      margin-left: 12px;

      [dir="rtl"] & {
        margin-left: 0;
        margin-right: 12px;
      }
    }
  }
`;
