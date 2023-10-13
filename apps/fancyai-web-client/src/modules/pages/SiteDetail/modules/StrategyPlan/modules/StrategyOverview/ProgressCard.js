import React, { useMemo } from 'react';
import { StyledProgressCard } from './index.styled';
import { Col, Progress, Row, Typography, theme } from 'antd';

const ProgressCard = ({ title, progress, middleValue, middleLabel, rightValue, rightLabel, leftValue, leftLabel }) => {
  const {token} = theme.useToken();

  return <StyledProgressCard>
    <div className='title'>{title}</div>
    <div className='progress-wrapper'>
      <Progress
        strokeColor={token.colorPrimary}
        type='circle'
        percent={progress}
        format={percent => <div className='chart-text-wrapper'>
          <div className='chart-text'>
            <Typography.Title level={4}>{middleValue}</Typography.Title>
          </div>
          <div className='chart-text chart-text-subtitle'>
            <Typography.Text type='secondary'>{middleLabel}</Typography.Text>
          </div>
        </div>}
      />
    </div>
    <div className='stat-wrapper'>
      <Row>
        <Col span={12}>
          <div className='stat-number'>{leftValue}</div>
          <div className='stat-number-subtitle'>
            <Typography.Text type='secondary'>{leftLabel}</Typography.Text>
          </div>
        </Col>
        <Col span={12}>
          <div className='stat-number'>{rightValue}</div>
          <div className='stat-number-subtitle'>
            <Typography.Text type='secondary'>{rightLabel}</Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  </StyledProgressCard>
}


export default ProgressCard