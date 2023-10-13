import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDownloadOptimizationCsvByTypeMutation, useGetOptimizationSummaryQuery, useGetOptimizationsQuery } from 'apps/fancyai-web-client/src/core/api/apiOptimization';
import { useSiteDetail } from '@crema/modules/siteDetail';
import { Button, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import { StyledTag } from '../../shared.styled';
import PercentChange from './PercentChange';
import DownloadOptimizationButton from './DownloadOptimizationButton';

const SiteOptimizations = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetOptimizationSummaryQuery({
    siteId: id
  })

  const summryData = useMemo(() => {
    return data?.data || []
  }, [data])

  
  

  const columns = useMemo(() => {
    return [
      {
        title: 'Type of Site Issue',
        dataIndex: 'type',
        key: 'type',
        width: 230,
      },
      {
        title: 'Current Issues',
        dataIndex: 'currentIssues',
        key: 'currentIssues',
      },
      {
        title: 'Original Issues',
        dataIndex: 'totalIssues',
        key: 'totalIssues',
      },
      {
        title: 'Change %',
        dataIndex: 'percentageChange',
        key: 'percentageChange',
        render: (text, { percentageChange }) => {
          return <PercentChange value={percentageChange || 0} />
        }
      },
      {
        title: 'Download Link',
        dataIndex: 'currentIssues',
        key: 'change',
        render: (text, record) => {
          return <DownloadOptimizationButton
            siteId={id}
            type={record.type}
          />
        }
      },
    ]
  }, [])

  return <>
    <Title level={5}>Site Optimizations</Title>
    <Table loading={isLoading} scroll={{
      x: 'min-content'
    }} style={{marginTop: '10px'}} columns={columns} dataSource={summryData} />
  </>
}

export default SiteOptimizations