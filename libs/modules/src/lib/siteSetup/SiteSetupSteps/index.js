import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';

const SiteSetupSteps = ({ current = 1 }) => {
  return <Steps
    // type="navigation"
    current={current}
    items={[
      {
        title: '',
        status: 'finish',
      },
      {
        title: '',
        status: current === 1 ? 'process' : 'wait',
      },
      {
        title: '',
        status: current === 2 ? 'process' : 'wait',
      },
      {
        title: '',
        status: current === 3 ? 'process' : 'wait',
      },
      {
        title: '',
        status: current === 4 ? 'process' : 'wait',
      },
      {
        title: '',
        status: current === 5 ? 'process' : 'wait',
      },
      {
        title: '',
        status: current === 6 ? 'process' : 'wait',
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