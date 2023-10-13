import React from 'react';
import { StyledTag } from '../../shared.styled';

const PercentChange = ({ value }) => {
  return <StyledTag style={{color: 'white', backgroundColor: value >= 0 ? '#067F12' : '#CE1717'}}>{value > 0 ? '+' : ''}{value}</StyledTag>
}


export default PercentChange