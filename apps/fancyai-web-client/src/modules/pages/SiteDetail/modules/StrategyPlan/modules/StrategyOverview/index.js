import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import ProgressCard from './ProgressCard';
import Title from 'antd/es/typography/Title';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useGetStrategyPlanOverviewQuery } from 'apps/fancyai-web-client/src/core/api';

// "data": {
//   "shortTermKeywords": {
//       "allShortTermKeywords": 25,
//       "completedShortTermKeywords": 9,
//       "targetShorTermKeywords": 16
//   },
//   "longTermKeywords": {
//       "allLongTermKeywords": 11,
//       "completedLongTermKeywords": 7,
//       "targetLongTermKeywords": 4
//   },
//   "keywordsResearch": {
//       "totalResearchKeywords": 57,
//       "activeResearchKeywords": 50
//   },
//   "contentUpdates": {
//       "allUpdateContent": 33,
//       "completedUpdateContent": 8,
//       "plannedUpdateContent": 25
//   },
//   "contentCreation": {
//       "allNewContent": 36,
//       "completedNewContent": 12,
//       "plannedNewContent": 24
//   },
//   "siteOptimisations": {
//       "allSiteOptimisations": 51,
//       "completedSiteOptimisations": 0,
//       "plannedSiteOptimisations": 51
//   },
//   "backlinkOpportunities": {
//       "allBacklinkOpportunities": 0,
//       "liveBacklinkOpportunities": 0
//   },
//   "articleBudgetUtilisation": {
//       "_id": "6523d3c8a3fa730008c25673",
//       "monthlyPaidContentBudget": 200,
//       "recommendedMonthlyPaidContentBudget": 10000,
//       "monthlyProfileLinks": 4,
//       "paidContentOpportunities": 4,
//       "unlinkedMentionOpportunities": 4,
//       "profileOpportunities": 4,
//       "reviewRoundupOpportunities": 4,
//       "helpReporterOpportunities": 2,
//       "industryPartnerOpportunities": 3,
//       "directoryListingOpportunities": 4,
//       "localCitationOpportunities": 3,
//       "site": "651830bc0ffac50008d99bad",
//       "createdAt": "2023-10-09T10:19:52.486Z",
//       "updatedAt": "2023-10-11T13:05:55.058Z",
//       "__v": 0
//   }
// }

const StrategyOverview = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetStrategyPlanOverviewQuery({
    siteId: id
  })

  const overviewData = useMemo(() => {
    return data?.data || {}
  }, [data])

  return <>
    <Title level={5}>Overview</Title>
    <Row style={{marginTop: '10px'}} gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Keyword Priorities (Short Term)"}
          unit={"Items"}
          completed={overviewData?.shortTermKeywords?.completedShortTermKeywords || 0}
          completedLabel={"Completed"}
          targeted={overviewData?.shortTermKeywords?.targetShorTermKeywords || 0}
          targetedLabel={"Targeted"}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard
          title={"Keyword Priorities (Long Term)"}
          unit={"Items"}
          completed={overviewData?.longTermKeywords?.completedLongTermKeywords || 0}
          completedLabel={"Completed"}
          targeted={overviewData?.longTermKeywords?.targetLongTermKeywords || 0}
          targetedLabel={"Targeted"}
        />
      </Col>
    </Row>
  </>
}

export default StrategyOverview