import { Card, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const HowItWorkTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.primary.main} !important;
  text-align: center;
  margin-bottom: 10px !important;
`;
