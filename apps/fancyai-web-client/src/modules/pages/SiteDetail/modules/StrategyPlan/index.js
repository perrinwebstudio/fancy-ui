import React from 'react';
import PropTypes from 'prop-types';
import { SiteDetailSubMenuVertical, useSiteDetail } from '@crema/modules/siteDetail';
import { Card, Col, Row } from 'antd';
import HowItWork from './modules/HowItWork';
import ShortTermKeywords from './modules/ShortTermKeywords';
import LongTermKeywords from './modules/LongTermKeywords';
import KeywordResearch from './modules/KeywordResearch';
import ContentList from './modules/ContentList';
import SiteOptimizations from './modules/SiteOptimizations';
import SiteBacklinking from './modules/SiteBacklinking';
import StrategyOverview from './modules/StrategyOverview';

const SiteStrategyPlan = ({ prop1 }) => {
  const {id, subMenu} = useSiteDetail()

  return <>
    <Row gutter={20}>
      <Col xs={0} sm={0} md={12} lg={7} xl={6}>
        <SiteDetailSubMenuVertical />
      </Col>
      <Col xs={24} sm={24} md={12} lg={17} xl={18}>
        {subMenu !== 'backlinking' && <Card bordered={false}>
          {
            subMenu === 'how_it_work' && <HowItWork />
          }
          {
            subMenu === 'overview' && <StrategyOverview />
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
            subMenu === 'content_updates' && <ContentList type="update" />
          }
          {
            subMenu === 'new_content' && <ContentList type="new" />
          }
          {
            subMenu === 'site_optimizations' && <SiteOptimizations />
          }
        </Card>}
          {
            subMenu === 'backlinking' && <SiteBacklinking />
          }
      </Col>
    </Row>
  </>
}

export default SiteStrategyPlan