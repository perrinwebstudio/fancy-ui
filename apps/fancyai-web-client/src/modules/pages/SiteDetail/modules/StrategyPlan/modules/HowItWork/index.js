import { Col, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { EngageWithUsInfoBox, HowItWorkImageWrapper, HowItWorkInfoBigBox, HowItWorkInfoBox, HowItWorkServiceBoxText, HowItWorkServicesWrapper, HowItWorkSubTitle, HowItWorkTitle, StyledStrategyPlanWrapper } from './index.styled';
import { ReactComponent as HowItWorkImage } from '../../../../../../../assets/images/how-it-work-steps.svg';
import Paragraph from 'antd/es/typography/Paragraph';

const OVERVIEW_PLANS = [
  'Identify the best keyword opportunities for your business',
  'Identify website technical and content changes to optimize for the best keyword opportunitie',
  'Plan new content to optimize the website for the best keyword opportunities',
  'Plan backlink strategies and outreach to increase rankings for the best keyword opportunities'
]

const ON_GOING_PERFORMANCE_SERVICES = [
  'Monthly Performance Report',
  'Monthly Performance Review Calls',
  'At the end of each strategy plan, we re-evaluate and create a new strategy plan for next 6 months.'
]

const IMPLEMENTATION_SERVICES = [
  'Site technical optimization',
  'Site speed optimization',
  'Site content optimization',
  'New content creation',
  'High-quality/targeted backlink'
]

const HowItWork = ({ prop1 }) => {
  return <>
    <Title level={5}>How it work</Title>
    <HowItWorkTitle level={4}>Overview</HowItWorkTitle>
    <HowItWorkSubTitle level={5}>Research & Strategy Plan: Our Plan For The Next 6 Months</HowItWorkSubTitle>
    <StyledStrategyPlanWrapper gutter={[20, 20]}>
      {
        OVERVIEW_PLANS.map((plan, index) => {
          return <Col sm={24} md={12} lg={12} xl={6} xxl={6} key={index}>
            <HowItWorkInfoBox bordered={false}>
              {plan}
            </HowItWorkInfoBox>
          </Col>
        })
      }
    </StyledStrategyPlanWrapper>
    
    <EngageWithUsInfoBox>
      <HowItWorkTitle level={4}>Engaging With Us</HowItWorkTitle>
      <HowItWorkImageWrapper>
        <HowItWorkImage />
      </HowItWorkImageWrapper>
    </EngageWithUsInfoBox>

    <HowItWorkServicesWrapper gutter={[20, 20]}>
      <Col xs={0} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <HowItWorkSubTitle level={5}>On-Going Performance Evaluation & Reporting</HowItWorkSubTitle>
      </Col>
      <Col xs={0} sm={24} md={12} lg={12} xl={12} xxl={12}>
      <HowItWorkSubTitle level={5}>Implementation of Strategy Plan: We work closely with you to implement our customized plan</HowItWorkSubTitle>
      </Col>
    </HowItWorkServicesWrapper>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <HowItWorkInfoBigBox bordered={false}>
          <HowItWorkServiceBoxText>
            <ul>
              {
                ON_GOING_PERFORMANCE_SERVICES.map((service, index) => {
                  return <li key={index}>{service}</li>
                })
              }
            </ul>
          </HowItWorkServiceBoxText>
        </HowItWorkInfoBigBox>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <HowItWorkInfoBigBox bordered={false}>
          <HowItWorkServiceBoxText>
            <ul>
              {
                IMPLEMENTATION_SERVICES.map((service, index) => {
                  return <li key={index}>{service}</li>
                })
              }
            </ul>
          </HowItWorkServiceBoxText>
        </HowItWorkInfoBigBox>
      </Col>
    </Row>
  </>
}

export default HowItWork