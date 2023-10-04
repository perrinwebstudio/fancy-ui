import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import { DotChartOutlined } from '@ant-design/icons';
import StepDoneIcon from './StepDoneIcon';
import StepInProgressIcon from './StepInProgressIcon';
import StepNotDoneIcon from './StepNotDoneIcon';

const StepIcon = ({status}) => {
  let icon = null
  switch (status) {
    case 'finish':
      icon = <StepDoneIcon />
      break
    case 'process':
      icon = <StepInProgressIcon />
      break
    default:
      icon = <StepNotDoneIcon />
  }
  return icon
}

const SiteSetupSteps = ({ current = 1, onClickStep, checkStepFinish, skippableSteps, visitedSteps = [] }) => {
  const getStatus = (step) => {
    if (step === 6) {
      if (current === 7) {
        return 'finish'
      }
    }
    if (skippableSteps.includes(step) && current > step) {
      return 'finish'
    }
    const status = current === step ?  'process' : checkStepFinish?.(step) ? 'finish' : 'wait'

    if (status === 'finish' && !visitedSteps.includes(step)) {
      return 'wait'
    }

    return status
  }

  const renderItemProps = (step) => {
    return {
      title: '',
      status:  getStatus(step),
      icon: <StepIcon status={getStatus(step)} />
    }
  }

  return <Steps
    size="small"
    onChange={(step) => {
      if (getStatus(step) !== 'wait' || visitedSteps.includes(step)) {
        onClickStep(step)
      }
    }}
    current={current}
    items={[
      renderItemProps(0),
      renderItemProps(1),
      renderItemProps(2),
      renderItemProps(3),
      renderItemProps(4),
      renderItemProps(5),
      renderItemProps(6),
    ]}
  />
}

SiteSetupSteps.defaultProps = {
  prop1: ''
};

SiteSetupSteps.propTypes = {
  prop1: PropTypes.string
};

export default SiteSetupSteps