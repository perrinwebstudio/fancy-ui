import { Card, Row, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const HowItWorkTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.primary.main} !important;
  text-align: center;
  margin-bottom: 10px !important;
`;

export const StyledAnalysisPane = styled.div`
  margin-bottom: 16px;
`;

export const StyledAnalysisTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  padding: 6px 0;
`;

export const StyledAnalysisBody = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 12px;
  border: 1px solid #c2c2c2;
  min-height: 80px;
`;
