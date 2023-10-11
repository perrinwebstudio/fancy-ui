import React, { useMemo } from 'react';
import { StyledTag } from '../../../shared.styled';
import { BACKLINK_OPPORTUNITY_STATUSES } from '@crema/constants';

const BacklinkStatus = ({ status }) => {
  const _status = useMemo(() => {
    return BACKLINK_OPPORTUNITY_STATUSES[status] || {}
  }, [status])

  return <StyledTag style={{
    backgroundColor: _status.bgColor,
    color: _status.txtColor,
    fontWeight: 600,
  }} >{_status.text || status}</StyledTag>
}


export default BacklinkStatus