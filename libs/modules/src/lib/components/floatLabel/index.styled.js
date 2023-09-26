import styled from "styled-components";

export const StyledFloatLabel = styled.div`
  position: relative;
  margin-bottom: 28px;
  & .ant-input {
    height: 50px;
  }
  & .ant-input-password .ant-input {
    height: 40px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 12px;
  top: 12px;
  transition: 0.2s ease all;
  z-index: 100;
  padding: 2px 4px;

  &.label-float {
    background-color: white;
    left: 10px;
    top: -10px;
    font-size: 10px;
  }
`;
