import { Space, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import TagColorByRank from '../../TagColorByRank';
import { convertNumberToCommaSeparated, formatCurrency } from '@crema/helpers';
import { StyledKeywordRankTag, StyledOneLineText, StyledTwoLineText, StyledUrlHolder } from '../../shared.styled';
import MenuDropdown from './MenuDropdown';
import TagColorByKeywordDifficulty from '../../TagColorByKeywordDifficulty';
import TagByContentStatus from '../../TagByContentStatus';
import { CalendarOutlined, LinkOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, {status}) => (
      <>
        <TagByContentStatus status={status} />
      </>
    ),
  },
  {
    title: 'Optimisation type',
    dataIndex: 'optimizationType',
    key: 'optimizationType',
  },
  {
    title: 'Blog/Page Topic',
    dataIndex: 'page',
    key: 'page',
    render: (_, {page, url}) => (
      <>
        <StyledOneLineText>{page}</StyledOneLineText>
        <Space><LinkOutlined /><StyledOneLineText><a target='_blank' href={url}>{url.replace('http://', '').replace('https://', '')}</a></StyledOneLineText></Space>
      </>
    ),
  },
  {
    title: 'Primary Keyword',
    key: 'primaryKeyword',
    dataIndex: 'primaryKeyword',
    render: (_, {primaryKeyword}) => (
      <>
        <StyledTwoLineText>{primaryKeyword}</StyledTwoLineText>
      </>
    ),
  },
  {
    title: 'MSV',
    dataIndex: 'monthlyScoreValue',
    key: 'monthlyScoreValue',
    render: (_, {monthlyScoreValue}) => {
      return convertNumberToCommaSeparated(monthlyScoreValue)
    },
  },
  {
    title: 'Secondary Keyword',
    key: 'secondaryKeyword',
    dataIndex: 'secondaryKeyword',
    render: (_, {secondaryKeyword}) => (
      <>
        <StyledTwoLineText>{secondaryKeyword}</StyledTwoLineText>
      </>
    ),
  },
  {
    title: 'Priority Score',
    key: 'priorityScore',
    dataIndex: 'priorityScore',
    render: (_, {priorityScore}) => (
      <>
        <TagColorByRank text={priorityScore} rank={priorityScore} />
      </>
    ),
  },
  {
    title: 'Keyword Difficulty Score',
    key: 'dificultyScore',
    dataIndex: 'dificultyScore',
    render: (_, {dificultyScore}) => (
      <>
        <TagColorByKeywordDifficulty text={dificultyScore} difficulty={dificultyScore} />
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
    title: 'Scheduled For',
    dataIndex: 'date',
    key: 'date',
    render: (_, {date}) => {
      return <Space><StyledOneLineText><CalendarOutlined /> {date}</StyledOneLineText></Space>
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <MenuDropdown />
    ),
  }
];

const data = [
  {
    key: '1',
    keyword: 'This is a longtail keyword longer longer longer',
    searchIntentType: 'Transactional',
    monthlyVolume: 32000,
    monthlyScoreValue: 32000,
    rank: 10,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
    priorityScore: 32000,
    dificultyScore: 1,
    status: 'Planned',
    optimizationType: 'Minor Optimizations',
    page: 'Embracing Mindfulness and Flexibility abc xyz',
    url: 'https://superman.com/abc/xyz?dmt=1',
    primaryKeyword: 'this is a long tail keyword',
    secondaryKeyword: 'secondary keyword',
    date: '2023-02-02'
  },
  {
    key: '1',
    keyword: 'This is a longtail keyword longer longer longer',
    searchIntentType: 'Transactional',
    monthlyVolume: 32000,
    monthlyScoreValue: 32000,
    rank: 2,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
    priorityScore: 32000,
    dificultyScore: 50,
    status: 'Planned',
    optimizationType: 'Minor Optimizations',
    page: 'Embracing Mindfulness and Flexibility abc xyz',
    url: 'https://superman.com/abc/xyz?dmt=1',
    primaryKeyword: 'this is a long tail keyword',
    secondaryKeyword: 'secondary keyword',
    date: '2023-02-02'
  },
  {
    key: '1',
    keyword: 'This is a longtail keyword longer longer longer',
    searchIntentType: 'Transactional',
    monthlyVolume: 32000,
    monthlyScoreValue: 32000,
    rank: 2,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
    priorityScore: 32000,
    dificultyScore: 100,
    status: 'Planned',
    optimizationType: 'Minor Optimizations',
    page: 'Embracing Mindfulness and Flexibility abc xyz',
    url: 'https://superman.com/abc/xyz?dmt=1',
    primaryKeyword: 'this is a long tail keyword',
    secondaryKeyword: 'secondary keyword',
    date: '2023-02-02'
  },
];

const ContentUpdates = ({ prop1 }) => {
  return <>
    <Title level={5}>Short Term Keywords</Title>
    <Table scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={data} />
  </>
}

export default ContentUpdates