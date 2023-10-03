import { Button, Dropdown, Space, Switch, Table, Tag } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import TagColorByRank from '../../TagColorByRank';
import { convertNumberToCommaSeparated, formatCurrency } from '@crema/helpers';
import { CircleMenuButton, StyledUrlHolder } from '../../shared.styled';
import { EllipsisOutlined } from '@ant-design/icons';
import { MdMoreVert } from 'react-icons/md';
import MenuDropdown from './MenuDropdown';
import TagColorByKeywordDifficulty from '../../TagColorByKeywordDifficulty';

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
    title: 'Keyword Priority Score',
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
    rank: 2,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
    priorityScore: 32000,
    dificultyScore: 1,
  },
  {
    key: '2',
    keyword: 'This is a longtail keyword longer longer longer',
    searchIntentType: 'Transactional',
    monthlyVolume: 32000,
    rank: 30,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
    priorityScore: 32000,
    dificultyScore: 55,
  },
  {
    key: '3',
    keyword: 'This is a longtail keyword longer longer longer',
    searchIntentType: 'Transactional',
    monthlyVolume: 32000,
    rank: 100,
    gain: 1000,
    page: 'www.yoga.com/homepage/tag1/tag2/tag3/tag3',
    priorityScore: 32000,
    dificultyScore: 100,
  },
];

const KeywordResearch = ({ prop1 }) => {
  return <>
    <Title level={5}>Short Term Keywords</Title>
    <Table scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={data} />
  </>
}

export default KeywordResearch