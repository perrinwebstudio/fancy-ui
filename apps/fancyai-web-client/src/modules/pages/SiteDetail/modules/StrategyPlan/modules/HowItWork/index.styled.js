import { Card, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import styled from "styled-components";

export const HowItWorkTitle = styled(Title)`
  color: ${({theme}) => theme.palette.primary.main} !important;
  text-align: center;
  margin-bottom: 10px !important;
`

export const HowItWorkSubTitle = styled(Title)`
  color: ${({theme}) => theme.palette.primary.main} !important;
  text-align: center;
  margin-top: 0px !important;
  margin-bottom: 10px !important;
`

export const HowItWorkInfoBox = styled(Card)`
  height: 100%;
  background-color: ${({theme}) => {
    return theme.sidebar.light.sidebarMenuSelectedBgColor
  }} !important;
  box-shadow: 0px 4px 8px 0px #00000014 !important;
`

export const HowItWorkInfoBigBox = styled(Card)`
  height: 100%;
  background-color: ${({theme}) => {
    return theme.sidebar.light.sidebarMenuSelectedBgColor
  }} !important;
  box-shadow: 0px 4px 8px 0px #00000014 !important;
`

export const EngageWithUsInfoBox = styled.div`
  width: 100%;
  margin-top: 30px;
`

export const StyledStrategyPlanWrapper = styled(Row)`
  margin-top: 20px;
  margin-bottom: 20px;
`

export const HowItWorkImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  & svg {
    max-width: 80%;

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
`

export const HowItWorkServicesWrapper = styled(Row)`
  margin-top: 40px;
`

export const HowItWorkServiceBoxText = styled(Paragraph)`
  font-size: ${({theme}) => {
    console.log('theme', theme)
    return theme.font.size.lg
  }};
  line-height: 2;
  margin-bottom: 0px !important;

  & ul {
    margin-bottom: 0px !important;
  }
`