import { Col, Row } from 'antd';
import React from 'react';

const StepFormWrapper = ({ children }) => {
  return <Row>
    <Col xs={0} sm={0} md={0} lg={7}/>
    <Col md={24} lg={10}>
      {children}
    </Col>
  </Row>
}

export default StepFormWrapper