import { Button, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useMemo, useState } from 'react';
import TagColorByRank from '../../TagColorByRank';
import { convertNumberToCommaSeparated, formatCurrency } from '@crema/helpers';
import { StyledUrlHolder } from '../../shared.styled';
import { useGetShortTermsKeywordsQuery } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import RemoveKeywordModal from '../../RemoveKeywordModal';

const ShortTermKeywords = ({ prop1 }) => {
  const {id} = useSiteDetail()
  const {data: keywordData, isLoading} = useGetShortTermsKeywordsQuery({ siteId: id })
  const [remove, setRemove] = useState(null)

  const columns = useMemo(() => {
    return [
      {
        title: 'Keyword',
        dataIndex: 'keyword',
        key: 'keyword',
        render: (_, {currentSiteRank, keyword}) => (
          <>
            <TagColorByRank isKeyword text={keyword} rank={currentSiteRank} />
          </>
        ),
        fixed: 'left',
        width: 230,
      },
      {
        title: 'Search Intent Type',
        dataIndex: 'searchIntentType',
        key: 'searchIntentType',
        render: (_, {searchIntentType}) => {
          return <div className='nowrap'>{searchIntentType}</div>
        },
      },
      {
        title: 'Monthly Volume',
        dataIndex: 'monthlyVolume',
        key: 'monthlyVolume',
        render: (_, {monthlyVolume}) => {
          return convertNumberToCommaSeparated(monthlyVolume)
        },
      },
      {
        title: 'Current Site Rank',
        key: 'currentSiteRank',
        dataIndex: 'currentSiteRank',
        render: (_, {currentSiteRank}) => (
          <>
            <TagColorByRank text={currentSiteRank} rank={currentSiteRank} />
          </>
        ),
      },
      {
        title: 'Potential Revenue Gains',
        key: 'potentialRevenueGains',
        render: (_, {potentialRevenueGains}) => {
          return formatCurrency(potentialRevenueGains, {
            language: 'en-US',
            currency: 'USD',
          }, 0)
        },
      },
      {
        title: 'Page',
        dataIndex: 'pageURL',
        key: 'pageURL',
        render: (_, {pageURL}) => {
          return <StyledUrlHolder>{pageURL}</StyledUrlHolder>
        },
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, keyword) => (
          <Space size="middle">
            <Button onClick={() => {
              setRemove(keyword)
            }} danger>Remove</Button>
          </Space>
        ),
      }
    ]
  }, [setRemove]);

  return <>
    <Title level={5}>Short Term Keyword Priorities</Title>
    <Table loading={isLoading} scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={keywordData?.data || []} />
    <RemoveKeywordModal open={!!remove} keyword={remove} onClose={() => setRemove(null)}  />
  </>
}

export default ShortTermKeywords