import { Col, Row } from 'antd';
import React from 'react';

const StepFormWrapper = ({ children }) => {
  return <Row>
    <Col xs={0} sm={0} md={0} lg={6}/>
    <Col md={24} lg={12}>
      {children}
    </Col>
  </Row>
}

export default StepFormWrapper