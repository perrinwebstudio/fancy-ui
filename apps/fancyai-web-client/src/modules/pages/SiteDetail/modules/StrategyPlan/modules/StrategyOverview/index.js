import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import ProgressCard from './ProgressCard';
import Title from 'antd/es/typography/Title';

const StrategyOverview = ({ prop1 }) => {
  return <>
    <Title level={5}>Overview</Title>
    <Row gutter={[20, 20]}>
      {[1,2,3,4,5,6,7,8].map(n => <Col xs={24} sm={24} md={12} lg={8} xl={6}>
        <ProgressCard />
      </Col>)}
    </Row>
  </>
}

export default StrategyOverview