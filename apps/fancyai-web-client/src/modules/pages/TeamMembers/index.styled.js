import { Select, Button, Typography } from "antd";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  & .ant-select-selector {
    border-radius: 0;
    padding: 8px 14px !important;
    height: 50px !important;
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

export const StyledFormTitle = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0;
`;

export const StyledEditButton = styled(Button)`
  min-width: 100px;
`;
