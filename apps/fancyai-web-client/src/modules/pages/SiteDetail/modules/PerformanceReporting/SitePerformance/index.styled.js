import { Card, Row, Typography } from "antd";
import styled from "styled-components";
import AppCard from "@crema/components/AppCard";
import Title from "antd/es/typography/Title";

export const StyledTitle = styled(Title)`
  font-size: 14px;
  margin-bottom: 0px !important;
`;

export const StyledCard = styled(AppCard)`
  & .ant-card-body {
    padding: 16px 20px !important;
  }
  margin-bottom: 20px;
`;

export const StyledVisitorCard = styled(AppCard)`
  margin-bottom: 20px;
  & .ant-card-head-title {
    flex: 1;
  }
  & .ant-card-extra {
    margin-top: 12px !important;
    flex: 2;
  }
`;

export const StyledVisitorCardAmount = styled(Typography)`
  font-size: 32px;
  font-weight: 400;
  color: #0078cc;
`;

export const StyledVisitorCardDescription = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  color: #28bc37;
  padding: 10px 0;
`;

export const StyledVisitorAction = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: unset;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    align-items: center;
    flex-direction: row;
  }

  & .visitor-action-view {
    display: none;
    align-items: center;
    justify-center: center
    flex: 1;
    flex-wrap: wrap;
    margin-right: 10px;
    gap: 16px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      display: flex;
    }
  }

  & .visitor-action-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1;
    font-size: 12px;
    padding-bottom: 2px;
    &:not(:first-of-type) {
      border-left: solid 1px ${({ theme }) => theme.palette.text.secondary}30;
    }
  }
  & .dot-visitor {
    height: 10px;
    width: 10px;
    margin-right: 4px;
    border-radius: 50%;
  }
  & .ant-select {
    flex: 1;
  }
`;

export const StyledStateText = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  color: #757575;
`;
