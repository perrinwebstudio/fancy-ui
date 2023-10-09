import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import ProgressCard from './ProgressCard';

const StrategyOverview = ({ prop1 }) => {
  return <Row gutter={[10, 10]}>
    {[1,2,3,4,5,6,7,8].map(n => <Col xs={24} sm={24} md={12} lg={8} xl={6}>
      <ProgressCard />
    </Col>)}
  </Row>
}

export default StrategyOverview