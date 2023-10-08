import { Table } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useMemo, useState } from 'react';
import TagColorByRank from '../../TagColorByRank';
import { convertNumberToCommaSeparated, formatCurrency } from '@crema/helpers';
import { StyledUrlHolder } from '../../shared.styled';
import MenuDropdown from './MenuDropdown';
import TagColorByKeywordDifficulty from '../../TagColorByKeywordDifficulty';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useGetResearchKeywordsQuery } from 'apps/fancyai-web-client/src/core/api/apiKeyword';
import RemoveKeywordModal from '../../RemoveKeywordModal';
import TagColorByScore from '../../TagColorByScore';
import UrlHolder from '../../UrlHolder';


const KeywordResearch = ({ prop1 }) => {
  const {id} = useSiteDetail()
  const {data: keywordData, isLoading} = useGetResearchKeywordsQuery({ siteId: id })

  const [remove, setRemove] = useState(null)

  const maxPriorityScore = useMemo(() => {
    let max = 0;
    (keywordData?.data || []).forEach((element) => {
      if (max < element.priorityScore) max = element.priorityScore
    }) ;
    return max;
  }, [keywordData])

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
      title: 'Keyword Priority Score',
      key: 'priorityScore',
      dataIndex: 'priorityScore',
      render: (_, {priorityScore}) => (
        <>
          <TagColorByScore
            text={Math.round(priorityScore)}
            score={priorityScore}
            minValue={0}
            maxValue={maxPriorityScore}
            minColor={'#E8FFEA'}
            maxColor={'#5AE168'}
          />
        </>
      ),
    },
    {
      title: 'Keyword Difficulty Score',
      key: 'difficultyScore',
      dataIndex: 'difficultyScore',
      render: (_, {difficultyScore}) => (
        <>
          <TagColorByKeywordDifficulty text={difficultyScore} difficulty={difficultyScore} />
        </>
      ),
    },
    {
      title: 'Monthly Search Traffic',
      dataIndex: 'monthlyVolume',
      key: 'monthlyVolume',
      render: (_, {monthlyVolume}) => {
        return convertNumberToCommaSeparated(monthlyVolume)
      },
    },
    {
      title: 'Related Page',
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
        <MenuDropdown keyword={keyword} onRemove={() => setRemove(keyword)} />
      ),
    }
  ];

  return <>
    <Title level={5}>Short Term Keywords</Title>
    <Table loading={isLoading} scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={keywordData?.data || []} />
    <RemoveKeywordModal open={!!remove} keyword={remove} onClose={() => setRemove(null)}  />
  </>
}

export default KeywordResearch