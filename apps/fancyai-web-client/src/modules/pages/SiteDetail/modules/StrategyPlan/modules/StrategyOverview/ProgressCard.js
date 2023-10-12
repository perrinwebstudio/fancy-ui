import React, { useMemo } from 'react';
import { StyledProgressCard } from './index.styled';
import { Col, Progress, Row, Typography, theme } from 'antd';

const ProgressCard = ({ title, unit, completed, completedLabel, targeted, targetedLabel }) => {
  const {token} = theme.useToken();

  const percent = useMemo(() => {
    if ((completed || 0) + (targeted || 0) === 0) return 0
    return Math.round(completed / (targeted + completed) * 100)
  }, [completed, targeted])

  return <StyledProgressCard>
    <div className='title'>{title}</div>
    <div className='progress-wrapper'>
      <Progress
        strokeColor={token.colorPrimary}
        type='circle'
        percent={percent}
        format={percent => <div className='chart-text-wrapper'>
          <div className='chart-text'>
            <Typography.Title level={4}>{completed}</Typography.Title>
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
        <Col span={10}>
          <div className='stat-number'>{targeted}</div>
          <div className='stat-number-subtitle'>
            <Typography.Text type='secondary'>{targetedLabel}</Typography.Text>
          </div>
        </Col>
        <Col span={2}></Col>
        <Col span={10}>
          <div className='stat-number'>{completed}</div>
          <div className='stat-number-subtitle'>
            <Typography.Text type='secondary'>{completedLabel}</Typography.Text>
          </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </div>
  </StyledProgressCard>
}


export default ProgressCard