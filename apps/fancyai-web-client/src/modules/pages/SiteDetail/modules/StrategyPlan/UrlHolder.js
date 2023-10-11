import React from 'react';
import { StyledUrlHolder } from './shared.styled';
import { LinkOutlined } from '@ant-design/icons';

const UrlHolder = ({ url, maxLine = 2 }) => {
  return <StyledUrlHolder maxLine={maxLine}>
    <a href={url} target="_blank"><LinkOutlined /> {url}</a>
  </StyledUrlHolder>
}


export default UrlHolder