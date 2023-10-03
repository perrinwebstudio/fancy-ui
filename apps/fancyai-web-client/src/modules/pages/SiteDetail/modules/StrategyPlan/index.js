import React from 'react';
import PropTypes from 'prop-types';
import { SiteDetailSubMenuVertical, useSiteDetail } from '@crema/modules/siteDetail';
import { Card, Col, Row } from 'antd';
import HowItWork from './modules/HowItWork';
import ShortTermKeywords from './modules/ShortTermKeywords';
import LongTermKeywords from './modules/LongTermKeywords';
import KeywordResearch from './modules/KeywordResearch';
import ContentUpdates from './modules/ContentUpdates';

const SiteStrategyPlan = ({ prop1 }) => {
  const {id, subMenu} = useSiteDetail()

  return <>
    <Row gutter={20}>
      <Col lg={7} xl={6}>
        <SiteDetailSubMenuVertical />
      </Col>
      <Col lg={17} xl={18}>
        <Card bordered={false}>
          {
            subMenu === 'how_it_work' && <HowItWork />
          }
          {
            subMenu === 'keyword_short_term' && <ShortTermKeywords />
          }
          {
            subMenu === 'keyword_long_term' && <LongTermKeywords />
          }
          {
            subMenu === 'keyword_research' && <KeywordResearch />
          }
          {
            subMenu === 'content_updates' && <ContentUpdates />
          }
        </Card>
      </Col>
    </Row>
  </>
}

export default SiteStrategyPlan