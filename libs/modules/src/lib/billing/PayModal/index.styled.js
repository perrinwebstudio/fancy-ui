import { Modal } from "antd";
import styled from "styled-components";

const StyledPayModal = styled(Modal)`
  & .ant-modal-body {
    position: relative;
  }

  & .full {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
`

export default StyledPayModal;