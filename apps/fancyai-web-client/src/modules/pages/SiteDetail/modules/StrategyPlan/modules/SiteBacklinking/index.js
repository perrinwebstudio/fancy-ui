import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import BacklinkConfig from './BacklinkConfig';
import BacklinkInfo from './BacklinkInfo';
import Title from 'antd/es/typography/Title';
import BacklinkOpportunities from './BacklinkOpportunities';

const SiteBacklinking = ({ prop1 }) => {
  return <>
    <Card bordered={false}>
      <BacklinkConfig />
      <div style={{marginTop: '10px'}}>
        <BacklinkInfo />
      </div>
    </Card>
    <Card style={{marginTop: '20px'}} bordered={false}>
      <BacklinkOpportunities />
    </Card>
  </>
}

export default SiteBacklinking