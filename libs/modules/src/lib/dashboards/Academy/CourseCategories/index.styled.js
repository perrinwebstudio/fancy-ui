import AppCard from "@crema/components/AppCard";
import { Button } from "antd";
import Slider from "react-slick";
import styled from "styled-components";

export const StyledCourseCategoryCard = styled(AppCard)`
  overflow: hidden;
`;

export const StyledCourceCategorySlider = styled(Slider)`
  position: relative;
  padding-bottom: 20px;

  & .slick-slide img {
    height: auto;
    width: 100%;
  }

  & .slick-dots {
    padding: 0 16px;
    bottom: 0;
  }

  & .slick-dots li {
    width: 33%;
    height: auto;
    margin: 0;
  }

  & .slick-dots li button {
    width: 90%;
    height: 4px;
    position: relative;

    &:before {
      width: 100%;
      height: 4px;
      content: "";
      font-size: 0;
      background-color: ${({ theme }) => theme.palette.primary.main};
      border-radius: 30px;
      opacity: 0.15;
    }

    &:hover,
    &:focus {
      &:before {
        opacity: 0.8;
      }
    }
  }

  & .slick-dots li.slick-active button {
    &:before {
      opacity: 0.8;
    }
  }

  & .slick-arrow {
    display: none !important;
  }
`;

export const StyledCourseCategoryContent = styled.div`
  padding: 12px 16px 16px;

  & p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledCourseCategoryTitle = styled.h5`
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledCourseCategoryLink = styled.a`
  
`;

export const StyledCourseCategoryDescription = styled.p`
  margin-top: 4px;
  color: #626D80;
`;

export const StyledCourseCategoryFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledCourseCategoryBadge = styled.span`
  padding: 3px 8px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 2px;
  font-size: ${({ theme }) => theme.font.size.sm};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    padding: 3px 8px;
    font-size: ${({ theme }) => theme.font.size.base};
  }

  & img {
    margin-right: 5px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 5px;
    }
  }
`;

export const StyledOpenButton = styled(Button)`
  min-width: 100px;
`;
