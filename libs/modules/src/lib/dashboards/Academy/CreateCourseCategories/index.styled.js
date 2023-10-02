import AppCard from "@crema/components/AppCard";
import { Button } from "antd";
import styled from "styled-components";

export const StyledCenterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCourseCategoryCard = styled(AppCard)`
  overflow: hidden;
  background: #e1ecfb;
  border: 2px solid #0078cc;
  box-shadow: none;
`;

export const StyledAddSiteButton = styled(Button)`
  padding: "12px 24px;
`;

export const StyledCourseCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px 16px;
  gap: 24px;

  & p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
