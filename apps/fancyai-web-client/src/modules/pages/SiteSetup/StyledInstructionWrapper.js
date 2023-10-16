import { Space } from "antd";
import styled from "styled-components";

const StyledInstructionWrapper = styled(Space)`
  padding-left: 10px;
  margin-bottom: 20px;
`

export const StyledInstructionContent = styled.p`
  color: #626D80;
  font-weight: 500;
`;

export const StyledInstructionText = styled.p`
  margin-bottom: 4px;
  padding: 0 8px;
`;

export const StyledInstructionLink = styled.a`
  color: #626D80;
  text-decoration: underline;
  &:hover {
    color: #626D8090;
    text-decoration: underline;
  }
`;

export default StyledInstructionWrapper