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

const SiteSetupSteps = ({ current = 1, onClickStep, checkStepFinish }) => {
  const getStatus = (step) => {
    if (step === 6) {
      return checkStepFinish?.(5) ? 'finish' : current === 6 ? 'process' : 'wait'
    }
    return current === step ?  'process' : checkStepFinish?.(step) ? 'finish' : 'wait'
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
    // type="navigation"
    onChange={(step) => {
      onClickStep(step)
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