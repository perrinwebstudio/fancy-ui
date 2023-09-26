import { Col, Row } from 'antd';
import React from 'react';

const StepFormWrapper = ({ children, ...props }) => {
  return <Row {...props}>
    <Col xs={0} sm={0} md={0} lg={7}/>
    <Col xs={24} sm={24} md={24} lg={10}>
      {children}
    </Col>
  </Row>
}

export default StepFormWrapper