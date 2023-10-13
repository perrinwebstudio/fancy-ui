import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import ProgressCard from './ProgressCard';
import Title from 'antd/es/typography/Title';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useGetStrategyPlanOverviewQuery } from 'apps/fancyai-web-client/src/core/api';
import { formatCurrency, formatCurrencyUS, getProgress } from '@crema/helpers';

const StrategyOverview = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetStrategyPlanOverviewQuery({
    siteId: id
  })

  const overviewData = useMemo(() => {
    return data?.data || {}
  }, [data])

  const {
    shortTerm,
    longTerm,
    research,
    contentCreation,
    contentUpdate,
    siteOptimization,
    backlinks,
    backlinkBudget
  } = useMemo(() => {
    return {
      shortTerm: overviewData?.shortTermKeywords || {},
      longTerm: overviewData?.longTermKeywords || {},
      research: overviewData?.keywordsResearch || {},
      contentUpdate: overviewData?.contentUpdates || {},
      contentCreation: overviewData?.contentCreation || {},
      siteOptimization: overviewData?.siteOptimisations || {},
      backlinks: overviewData?.backlinkOpportunities || {},
      backlinkBudget: overviewData?.articleBudgetUtilisation || {}
    }
  })

  return <>
    <Title level={5}>Overview</Title>
    <Row style={{marginTop: '10px'}} gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Keyword Priorities (Short Term)"}
          middleValue={shortTerm.allShortTermKeywords || 0}
          middleLabel="Items"
          rightValue={shortTerm.completedShortTermKeywords || 0}
          rightLabel={"Completed"}
          leftValue={shortTerm.targetShorTermKeywords || 0}
          leftLabel={"Targeted"}
          progress={getProgress(shortTerm.completedShortTermKeywords, overviewData?.shortTermKeywords?.allShortTermKeywords)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Keyword Priorities (Long Term)"}
          middleValue={longTerm.allLongTermKeywords || 0}
          middleLabel="Items"
          rightValue={longTerm.completedLongTermKeywords || 0}
          rightLabel={"Completed"}
          leftValue={longTerm.targetLongTermKeywords || 0}
          leftLabel={"Targeted"}
          progress={getProgress(longTerm.completedLongTermKeywords, longTerm.allLongTermKeywords)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Keyword Research"}
          middleValue={research.totalResearchKeywords || 0}
          middleLabel="Items"
          leftValue={(research.totalResearchKeywords || 0) - (research.activeResearchKeywords || 0)}
          leftLabel={"Inactive"}
          rightValue={research.activeResearchKeywords || 0}
          rightLabel={"Active"}
          progress={getProgress(research.activeResearchKeywords, research.totalResearchKeywords)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Content Update"}
          middleValue={contentUpdate.allUpdateContent || 0}
          middleLabel="Items"
          rightValue={contentUpdate.completedUpdateContent || 0}
          rightLabel={"Completed"}
          leftValue={contentUpdate.plannedUpdateContent || 0}
          leftLabel={"Planned"}
          progress={getProgress(contentUpdate.completedUpdateContent, contentUpdate.allUpdateContent)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Content Creation"}
          middleValue={contentCreation.allNewContent || 0}
          middleLabel="Items"
          rightValue={contentCreation.completedNewContent || 0}
          rightLabel={"Completed"}
          leftValue={contentCreation.plannedNewContent || 0}
          leftLabel={"Planned"}
          progress={getProgress(contentCreation.completedNewContent, contentCreation.allNewContent)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Site Optimizations"}
          middleValue={siteOptimization.allSiteOptimisations || 0}
          middleLabel="Items"
          rightValue={siteOptimization.completedSiteOptimisations || 0}
          rightLabel={"Completed"}
          leftValue={siteOptimization.plannedSiteOptimisations || 0}
          leftLabel={"Planned"}
          progress={getProgress(siteOptimization.completedSiteOptimisations, siteOptimization.allSiteOptimisations)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Backlink Opportunities"}
          middleValue={backlinks.allBacklinkOpportunities || 0}
          middleLabel="Items"
          rightValue={backlinks.liveBacklinkOpportunities || 0}
          rightLabel={"Live"}
          leftValue={(backlinks.allBacklinkOpportunities || 0)}
          leftLabel={"Found"}
          progress={getProgress(backlinks.liveBacklinkOpportunities, backlinks.allBacklinkOpportunities)}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Paid Content Budget Utilization"}
          middleValue={formatCurrencyUS(backlinkBudget.monthlyPaidContentBudget || 0)}
          middleLabel=""
          rightValue={formatCurrencyUS(backlinkBudget.monthlyPaidContentBudgetUsed || 0)}
          rightLabel={"Used"}
          leftValue={formatCurrencyUS((backlinkBudget.monthlyPaidContentBudget || 0) - (backlinkBudget.monthlyPaidContentBudgetUsed || 0))}
          leftLabel={"Unused"}
          progress={getProgress(backlinkBudget.monthlyPaidContentBudgetUsed, backlinkBudget.monthlyPaidContentBudget)}
        />
      </Col>
    </Row>
  </>
}

export default StrategyOverview