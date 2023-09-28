import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';

const SiteSetupSteps = ({ current = 1, onClickStep, checkStepFinish }) => {
  const getStatus = (step) => {
    return current === step ?  'process' : checkStepFinish?.(step) ? 'finish' : 'wait'
  }
  return <Steps
    // type="navigation"
    onChange={(step) => {
      onClickStep(step)
    }}
    current={current}
    items={[
      {
        title: '',
        status:  getStatus(0),
      },
      {
        title: '',
        status: getStatus(1),
      },
      {
        title: '',
        status: getStatus(2),
      },
      {
        title: '',
        status: getStatus(3),
      },
      {
        title: '',
        status: getStatus(4),
      },
      {
        title: '',
        status: getStatus(5),
      },
      {
        title: '',
        status: checkStepFinish?.(5) ? 'finish' : current === 6 ? 'process' : 'wait',
      },
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