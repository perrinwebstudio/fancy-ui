import { Button, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useMemo, useState } from 'react';
import TagColorByRank from '../../TagColorByRank';
import { convertNumberToCommaSeparated, formatCurrency } from '@crema/helpers';
import { StyledUrlHolder } from '../../shared.styled';
import { useGetLongTermKeywordsQuery, useGetShortTermsKeywordsQuery } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import RemoveKeywordModal from '../../RemoveKeywordModal';
import UrlHolder from '../../UrlHolder';

const LongTermKeywords = ({ prop1 }) => {
  const {id} = useSiteDetail()
  const {data: keywordData, isLoading} = useGetLongTermKeywordsQuery({ siteId: id })

  const filteredData = useMemo(() => {
    return (keywordData?.data || []).filter((r) => {
      return !r.isRejected
    })
  }, [keywordData])

  const [remove, setRemove] = useState(null)

  const columns = [
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
        return <UrlHolder url={pageURL} />
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, keyword) => (
        <Space size="middle">
          <Button danger onClick={() => setRemove(keyword)}>Remove</Button>
        </Space>
      ),
    }
  ];

  return <>
    <Title level={5}>Long-Term Keyword Priorities</Title>
    <Table loading={isLoading} scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={filteredData || []} />
    <RemoveKeywordModal open={!!remove} keyword={remove} onClose={() => setRemove(null)}  />
  </>
}

export default LongTermKeywords