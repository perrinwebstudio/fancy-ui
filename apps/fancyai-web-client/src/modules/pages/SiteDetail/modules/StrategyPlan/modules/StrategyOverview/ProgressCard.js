import React from 'react';
import { StyledProgressCard } from './index.styled';
import { Col, Progress, Row, Typography, theme } from 'antd';

const ProgressCard = ({ prop1 }) => {
  const {token} = theme.useToken();

  console.log('token', token)

  return <StyledProgressCard>
    <div className='title'>Keyword Priorities (Short Term)</div>
    <div className='progress-wrapper'>
      <Progress
        strokeColor={token.colorPrimary}
        type='circle'
        percent={75}
        format={percent => <div className='chart-text-wrapper'>
          <div className='chart-text'>
            <Typography.Title level={4}>650</Typography.Title>
          </div>
          <div className='chart-text chart-text-subtitle'>
            <Typography.Text type='secondary'>Items</Typography.Text>
          </div>
        </div>}
      />
    </div>
    <div className='stat-wrapper'>
      <Row>
        <Col span={1}></Col>
        <Col span={9}>
          <div className='stat-number'>832</div>
          <div className='stat-number-subtitle'>
            <Typography.Text type='secondary'>Targeted</Typography.Text>
          </div>
        </Col>
        <Col span={4}></Col>
        <Col span={9}>
          <div className='stat-number'>832</div>
          <div className='stat-number-subtitle'>
            <Typography.Text type='secondary'>Targeted</Typography.Text>
          </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </div>
  </StyledProgressCard>
}


export default ProgressCard