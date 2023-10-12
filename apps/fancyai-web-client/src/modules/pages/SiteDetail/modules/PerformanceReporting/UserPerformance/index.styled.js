import { Button, Card, Input, Row, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const StyledTitle = styled(Title)`
  margin-top: 8px !important;
  margin-bottom: 16px !important;
`;

export const StyledRadioTitle = styled(Typography)`
  color: #0078cc;
`;

export const StyledRadioButton = styled(Button)`
  border-radius: 50px !important;
`;

export const StyledInactiveRadioButton = styled(Button)`
  background: #959ca94d;
  color: #6b7280;
  border-radius: 50px !important;
  border-color: transparent !important;
`;

export const StyledRadioRow = styled(Row)`
  gap: 12px;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
    align-items: end;
    justify-content: center;
  }
`;

export const StyledSearchInput = styled(Input.Search)`
  max-width: 180px;
  margin: 8px 0;
  float: right;

  & input {
    border-start-start-radius: 6px;
    border-end-start-radius: 6px;
  }
`;
