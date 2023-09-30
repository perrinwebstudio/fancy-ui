import { Space, theme } from "antd";
import styled from "styled-components";

const StyledSubMenuHorizontal = styled(Space)`
  width: 100%;

  & .ant-radio-button-wrapper {
    box-sizing: content-box;
    padding-left: 30px !important;
    padding-right: 30px !important;
    height: 30px !important;
    text-align: center !important;
    border-color: ${({theme}) => theme.palette.primary.main} !important;

    & span {
      line-height: 28px !important;
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

export default StyledSubMenuHorizontal