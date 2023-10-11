import { defaultTheme } from '@crema/constants/defaultConfig';
import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { StyledKeywordRankTag, StyledTag } from './shared.styled';
import { getRankColor } from '@crema/constants';

const TagColorByRank = ({ text, rank, isKeyword }) => {
  const color = useMemo(() => {
    return getRankColor(rank)
  }, [rank])

  if (!isKeyword) {
    return <StyledTag style={{color: 'black', backgroundColor: color}}>{text}</StyledTag>
  }

  return <StyledKeywordRankTag style={{color: 'black', backgroundColor: color}}>{text}</StyledKeywordRankTag>
}

export default TagColorByRank