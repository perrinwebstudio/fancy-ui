import { Button, Space, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import TagColorByRank from '../../TagColorByRank';
import { convertNumberToCommaSeparated, formatCurrency } from '@crema/helpers';
import { StyledUrlHolder } from '../shared.styled';

const columns = [
  {
    title: 'Keyword',
    dataIndex: 'keyword',
    key: 'keyword',
    render: (_, {rank, keyword}) => (
      <>
        <TagColorByRank isKeyword text={keyword} rank={rank} />
      </>
    ),
  },
  {
    title: 'Search Intent Type',
    dataIndex: 'searchIntentType',
    key: 'searchIntentType',
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
    key: 'rank',
    dataIndex: 'rank',
    render: (_, {rank}) => (
      <>
        <TagColorByRank text={rank} rank={rank} />
      </>
    ),
  },
  {
    title: 'Potential Revenue Gains',
    key: 'gain',
    render: (_, {gain}) => {
      return formatCurrency(gain, {
        language: 'en-US',
        currency: 'USD',
      }, 0)
    },
  },
  {
    title: 'Page',
    dataIndex: 'page',
    key: 'page',
    render: (_, {page}) => {
      return <StyledUrlHolder>{page}</StyledUrlHolder>
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button danger>Remove</Button>
      </Space>
    ),
  }
];

const data = [
  {
    key: '1',
    keyword: 'This is a longtail keyword longer longer longer',
    searchIntentType: 'Transactional',
    monthlyVolume: 32000,
    rank: 2,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
  },
];

const ShortTermKeywords = ({ prop1 }) => {
  return <>
    <Title level={5}>Short Term Keywords</Title>
    <Table scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={data} />
  </>
}

export default ShortTermKeywords