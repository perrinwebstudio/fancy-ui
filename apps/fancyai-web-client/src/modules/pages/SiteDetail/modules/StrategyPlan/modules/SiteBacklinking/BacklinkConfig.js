import { InfoCircleFilled } from '@ant-design/icons';
import { Col, Input, InputNumber, Row, Space, Spin, Typography } from 'antd';
import React from 'react';
import { StyledBackConfigWrapper } from './index.styled';
import { convertNumberToCommaSeparated } from '@crema/helpers';
import { useGetBacklinkConfigQuery } from 'apps/fancyai-web-client/src/core/api/apiBacklink';
import { useSiteDetail } from '@crema/modules/siteDetail';

const BacklinkConfig = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetBacklinkConfigQuery({
    siteId: id,
  })

  return <StyledBackConfigWrapper>
    <Row gutter={20}>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <div className='budget primary'>
          {isLoading ? <Spin size="small" /> : <InputNumber
            className='number'
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          />}
          <span style={{flex: 1}}>Paid Content Budget</span>
          <span><InfoCircleFilled /></span>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <div className='budget success'>
          {isLoading ? <Spin size="small" /> : <strong className='number'>$ {data?.data?.recommendedMonthlyPaidContentBudget ? convertNumberToCommaSeparated(data.data.recommendedMonthlyPaidContentBudget) : '-'}</strong>}
          <span style={{flex: 1}}>Recommended Monthly Paid Content Budget</span>
          <span><InfoCircleFilled /></span>
        </div>
      </Col>
    </Row>
  </StyledBackConfigWrapper>
}


export default BacklinkConfig