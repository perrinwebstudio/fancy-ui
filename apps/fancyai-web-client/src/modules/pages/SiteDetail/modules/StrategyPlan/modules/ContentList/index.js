import { Space, Switch, Table, Tooltip } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useMemo, useState } from 'react';
import { convertNumberToCommaSeparated } from '@crema/helpers';
import { StyledOneLineText, StyledTwoLineText } from '../../shared.styled';
import MenuDropdown from './MenuDropdown';
import TagByContentStatus from '../../TagByContentStatus';
import { CalendarOutlined } from '@ant-design/icons';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { useGetContentUpdatesQuery, useGetNewContentsQuery } from 'apps/fancyai-web-client/src/core/api/apiContent';
import UrlHolder from '../../UrlHolder';
import TagColorByScore from '../../TagColorByScore';
import UpdateContentScheduleDateModal from '../../UpdateContentScheduleDateModal';
import RemoveContentModal from '../../RemoveContentModal';

const ContentList = ({ type }) => {
  const { id } = useSiteDetail()

  const hook = type === 'new' ? useGetNewContentsQuery : useGetContentUpdatesQuery

  const { data: contentData, isLoading } = hook({ siteId: id })

  const filteredData = useMemo(() => {
    return (contentData?.data || []).filter((element) => {
      return !element.isRejected
    })
  }, [contentData])

  const maxPriorityScore = useMemo(() => {
    let max = 0;
    (filteredData || []).forEach((element) => {
      if (max < element.priorityScore) max = element.priorityScore
    }) ;
    return max;
  }, [filteredData])

  const [remove, setRemove] = useState(null)
  const [edit, setEdit] = useState(null)

  const columns = useMemo(() => [
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
    ... (type === 'update' ? [{
      title: 'Optimisation type',
      dataIndex: 'optimizationType',
      key: 'optimizationType',
    }] : []),
    {
      title: 'Blog/Page Topic',
      dataIndex: 'topic',
      key: 'topi',
      render: (_, {topic, url}) => (
        <>
          <Tooltip title={topic}><StyledOneLineText>{topic}</StyledOneLineText></Tooltip>
          {url && <UrlHolder maxLine={1} url={url} />}
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
      title: 'Secondary Keyword',
      key: 'secondaryKeywords',
      dataIndex: 'secondaryKeywords',
      render: (_, {secondaryKeywords}) => (
        <>
          <StyledTwoLineText>{(secondaryKeywords || []).join(', ')}</StyledTwoLineText>
        </>
      ),
      width: 200
    },
    {
      title: 'Priority Score',
      key: 'priorityScore',
      dataIndex: 'priorityScore',
      render: (_, {priorityScore}) => (
        <>
          <TagColorByScore
            text={priorityScore}
            score={priorityScore}
            minValue={0}
            maxValue={maxPriorityScore}
            minColor={'#E8FFEA'}
            maxColor={'#5AE168'}
          />
        </>
      ),
    },
    // {
    //   title: 'Monthly Search Traffic',
    //   dataIndex: 'monthlySearchVolume',
    //   key: 'monthlySearchVolume',
    //   render: (_, {monthlySearchVolume}) => {
    //     return convertNumberToCommaSeparated(monthlySearchVolume)
    //   },
    // },
    {
      title: 'MSV',
      dataIndex: 'monthlySearchVolume',
      key: 'monthlySearchVolume',
      render: (_, {monthlySearchVolume}) => {
        return convertNumberToCommaSeparated(monthlySearchVolume)
      },
    },
    {
      title: 'Scheduled For',
      dataIndex: 'scheduledFor',
      key: 'scheduledFor',
      render: (_, {scheduledFor}) => {
        return <Space><StyledOneLineText><CalendarOutlined /> {scheduledFor}</StyledOneLineText></Space>
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, content) => (
        <MenuDropdown
          type={type}
          onEdit={() => {
            setEdit(content)
          }}
          onRemove={() => {
            setRemove(content)
          }}
        />
      ),
      fixed: 'right'
    }
  ], [filteredData, type]);

  return <>
    <Title level={5}>{type === 'new' ? 'New Content' : 'Content Updates'}</Title>
    <Table
      rowKey={record => record._id}
      loading={isLoading}
      scroll={{
        x: 'max-content'
      }}
      columns={columns} dataSource={filteredData || []} />
    {edit && <UpdateContentScheduleDateModal type={type} onClose={() => setEdit(null)} open={!!edit} content={edit} />}
    {remove && <RemoveContentModal open={!!remove} onClose={() => setRemove(null)} content={remove} type={type} /> }
  </>
}

export default ContentList