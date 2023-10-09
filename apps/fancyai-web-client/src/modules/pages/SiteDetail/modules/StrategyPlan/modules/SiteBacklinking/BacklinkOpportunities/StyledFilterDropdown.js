import { Popover, Space } from "antd";
import styled from "styled-components";


const StyledFilterDropdown = styled(Space)`
  min-width: 250px;

  & h5 {
    margin-bottom: 0;
  }

  & .ant-checkbox-wrapper-checked {
    color: ${({ theme }) => theme.palette.primary.main} !important;
  }

  & .ant-divider {
    margin: 0px 0px;
    border-color: ${({ theme }) => {
      console.log('theme', theme)
      return theme.palette.gray[300]
    }};
  }
`

export default StyledFilterDropdown