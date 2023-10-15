import { Col, Row } from 'antd';
import React from 'react';

const StepFormWrapper = ({ children, big = false, ...props }) => {
  return <Row {...props}>
    <Col xs={0} sm={0} md={0} lg={!big ? 7 : 3}/>
    <Col xs={24} sm={24} md={24} lg={!big ? 10 : 18}>
      {children}
    </Col>
  </Row>
}

export default StepFormWrapper