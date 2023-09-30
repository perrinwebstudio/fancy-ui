import { Space, theme } from "antd";
import styled from "styled-components";

const StyledMainMenu = styled(Space)`
  & .ant-space-item {
    box-shadow: 0px 4px 8px 0px #00000014;
  }

  & .ant-radio-button-wrapper {
    box-sizing: content-box;
    padding-left: 50px !important;
    padding-right: 50px !important;
    height: 40px !important;
    border-color: ${({theme}) => theme.palette.primary.main} !important;

    & span {
      line-height: 38px !important;
      color: ${({theme}) => theme.palette.primary.main} !important;
    }

    &:before {
      display: none !important;
    }
  }

  & .ant-radio-button-wrapper-checked {
    background-color: ${({theme}) => theme.palette.primaryDark.main} !important;
    border-color: ${({theme}) => theme.palette.primaryDark.main} !important;

    & span {
      color: white !important;
    }
  }
`

export default StyledMainMenu