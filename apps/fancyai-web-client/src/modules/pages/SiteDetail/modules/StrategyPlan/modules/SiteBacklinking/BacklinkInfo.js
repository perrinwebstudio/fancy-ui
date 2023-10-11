import { InfoCircleFilled } from '@ant-design/icons';
import { Col, Row, Spin } from 'antd';
import React from 'react';
import { StyledBacklinkInfoWrapper } from './index.styled';
import { BACKLINK_INFO_TYPES } from '@crema/constants';
import { useGetBacklinkConfigQuery } from 'apps/fancyai-web-client/src/core/api/apiBacklink';
import { useSiteDetail } from '@crema/modules/siteDetail';

const BacklinkInfo = ({ prop1 }) => {
  const { id } = useSiteDetail()
  const { data, isLoading } = useGetBacklinkConfigQuery({
    siteId: id,
  })

  return <StyledBacklinkInfoWrapper>
    <Row gutter={20}>
      {
        BACKLINK_INFO_TYPES.map((type) => {
          return <Col key={type.key} xs={24} sm={24} md={24} lg={8} >
            <div className='setting-row'>
            <div className='number'>{ isLoading ? <Spin size='small' /> : data?.data[type.key] }</div>
            <div className='text'>{type.text}</div>
            <div><InfoCircleFilled /></div>
          </div>
          </Col>
        })
      }
    </Row>
  </StyledBacklinkInfoWrapper>
}

export default BacklinkInfo