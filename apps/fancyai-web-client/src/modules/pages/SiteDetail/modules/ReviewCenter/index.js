import { Card, Col, Row, Switch } from 'antd';
import Title from 'antd/es/typography/Title';
import {
  StyledProductHeader,
  StyledProductHeaderLeft,
  StyledProductHeaderRight,
  StyledProductHeaderSearch,
  StyledShowResolved,
} from './index.styled';
import ReviewCenterColumn from './Column';
import { useGetReviewCenterListQuery } from 'apps/fancyai-web-client/src/core/api/apiReviewCenter';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useMemo, useState } from 'react';

const reviewItemTypes = [
  {
    title: 'Stratege Plan Changes',
    value: 'strategy-plan-changes'
  },
  {
    title: 'Action & Review',
    value: 'action-and-review'
  },
  {
    title: 'Performance Insights',
    value: 'performance-insights'
  }
]

const SiteReviewCenter = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data: items, isLoading } = useGetReviewCenterListQuery({ siteId: id })
  const [showResolved, setShowResolved] = useState(false)
  const [searchStr, setSearchStr] = useState('');

  const itemsToShow = useMemo(() => {
    if (isLoading) return []

    return items?.data?.filter(item => {
      if (searchStr) {
        return item.name?.toLowerCase().includes(searchStr.toLowerCase())
      }
      return true
    }).filter(item => {
      if (showResolved) {
        return !item.canApprove && !item.canEdit && !item.canReject && item.seen
      }

      return item.canApprove || item.canEdit || item.canReject || !item.seen
    })
  }, [items, isLoading, showResolved, searchStr])

  return <>
    <Row gutter={[20, 20]} wrap style={{ paddingBottom: '32px' }}>
      <Col xs={24}>
        <Card bordered={false} bodyStyle={{ padding: '10px 16px' }}>
          <StyledProductHeader>
            <StyledProductHeaderLeft>
              <Title level={3}>Review Center</Title>
            </StyledProductHeaderLeft>
            <StyledProductHeaderRight>
              <StyledProductHeaderSearch
                placeholder='Search here'
                onChange={(e) => setSearchStr(e.target.value)}
              />
              <StyledShowResolved>
                Show Resolved
              </StyledShowResolved>
              <Switch checked={showResolved} onChange={(checked) => setShowResolved(checked)} />
            </StyledProductHeaderRight>
          </StyledProductHeader>
        </Card>
      </Col>
      {reviewItemTypes.map(type => (
        <Col xs={24} xl={8}>
          <ReviewCenterColumn title={type.title} cardItems={itemsToShow.filter(d => d.type === type.value)} />
        </Col>
      ))}
    </Row>
  </>
}

export default SiteReviewCenter