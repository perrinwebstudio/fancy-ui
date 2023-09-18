import AppCard from "@crema/components/AppCard";
import styled from "styled-components";

export const StyledCenterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCourseCategoryCard = styled(AppCard)`
  overflow: hidden;
  background: transparent;
  border: 2px solid #dadada;
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
