import styled from "styled-components";

export const StyledBacklinkInfoWrapper = styled.div`
  & .setting-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0px;
    color: ${({theme}) => theme.palette.primary.main} !important;
    font-size: 13px;

    & .number {
      padding: 5px 10px;
      background-color: #f4f7fe;
      border-radius: 5px;
    }

    & .text {
      flex: 1
    }
  }
`

export const StyledBackConfigWrapper = styled.div`
  & .budget {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 10px;
    height: 50px;

    & .ant-input-number {
      border-color: ${({theme}) => theme.palette.primary.main} !important;
      
      & input {
        color: ${({theme}) => theme.palette.primary.main} !important;
      }
    }
    
    &.primary {
      background-color: #f4f7fe;
      color: ${({theme}) => theme.palette.primary.main};
    }

    &.success {
      background-color: #f0f9f2;
      color: ${({theme}) => theme.palette.success.main};
    }

    & .number {
      width: 80px;

      & .ant-input-number-handler-wrap {
        display: none !important;
      }
    }
  }
`
