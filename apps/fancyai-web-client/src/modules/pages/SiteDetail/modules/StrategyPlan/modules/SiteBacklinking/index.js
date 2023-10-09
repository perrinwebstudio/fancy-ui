import React from 'react';
import BacklinkConfig from './BacklinkConfig';
import BacklinkInfo from './BacklinkInfo';
import BacklinkOpportunities from './BacklinkOpportunities';
import { StyledStrategyPlanCard } from '../../shared.styled';

const SiteBacklinking = ({ prop1 }) => {
  return <>
    <StyledStrategyPlanCard bordered={false}>
      <BacklinkConfig />
      <div style={{marginTop: '10px'}}>
        <BacklinkInfo />
      </div>
    </StyledStrategyPlanCard>
    <StyledStrategyPlanCard bordered={false}>
      <BacklinkOpportunities />
    </StyledStrategyPlanCard>
  </>
}

export default SiteBacklinking