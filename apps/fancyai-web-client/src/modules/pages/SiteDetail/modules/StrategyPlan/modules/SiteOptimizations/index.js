import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useGetOptimizationsQuery } from 'apps/fancyai-web-client/src/core/api/apiOptimization';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { Button, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import { StyledTag } from '../../shared.styled';

function summarizeOptimizationData(data) {
  const summary = {};

  data.forEach(item => {
      const type = item.optimisationType;
      summary[type] = (summary[type] || 0) + 1;
  });

  return Object.keys(summary).map(type => ({
      optimisationType: type,
      currentIssues: summary[type]
  }));
}

const SiteOptimizations = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetOptimizationsQuery({
    siteId: id
  })

  const summryData = useMemo(() => {
    return summarizeOptimizationData(data?.data || [])
  }, [data])

  console.log('summryData', summryData)

  const columns = [
    {
      title: 'Type of Site Issue',
      dataIndex: 'optimisationType',
      key: 'optimisationType',
      width: 230,
    },
    {
      title: 'Current Issues',
      dataIndex: 'currentIssues',
      key: 'currentIssues',
    },
    {
      title: 'Original Issues',
      dataIndex: 'currentIssues',
      key: 'originalIssues',
    },
    {
      title: 'Change %',
      dataIndex: 'currentIssues',
      key: 'change',
      render: (text, record) => {
        return <StyledTag style={{backgroundColor: '#5AE168'}}>+0%</StyledTag>
      }
    },
    {
      title: 'Download Link',
      dataIndex: 'currentIssues',
      key: 'change',
      render: (text, record) => {
        return <Button type='primary'>Download</Button>
      }
    },
  ]

  return <>
    <Title level={5}>Site Optimizations</Title>
    <Table loading={isLoading} scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={summryData} />
  </>
}

export default SiteOptimizations