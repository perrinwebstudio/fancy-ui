import styled from "styled-components";
import { Modal } from "antd";

export const StyledAppNotificationModal = styled(Modal)`
  .ant-modal-content {
    background: #fafafa;
    padding: 40px;
  }

  .ant-picker-large input {
    font-size: ${({ theme }) => {
      return theme.font.size.base
    }};
  }

  .ant-divider {
    margin: 15px 0px 30px 0px;
    border-color: ${({ theme }) => {
      console.log('theme', theme)
      return theme.palette.gray[400]
    }};
  }
`
