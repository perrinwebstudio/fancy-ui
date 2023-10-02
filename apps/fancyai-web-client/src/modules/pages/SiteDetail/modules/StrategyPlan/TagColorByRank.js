import { defaultTheme } from '@crema/constants/defaultConfig';
import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { StyledKeywordRankTag, StyledRankTag } from './modules/shared.styled';

const TagColorByRank = ({ text, rank, isKeyword }) => {
  const color = useMemo(() => {
    if (text.rank > 3) {
      return defaultTheme.theme.palette.success[501]
    }
    if (text.rank > 10) {
      return defaultTheme.theme.palette.success[401]
    }
    return defaultTheme.theme.palette.success[301]
  }, [rank])

  if (!isKeyword) {
    return <StyledRankTag style={{color: 'black', backgroundColor: color}}>{text}</StyledRankTag>
  }

  return <StyledKeywordRankTag style={{color: 'black', backgroundColor: color}}>{text}</StyledKeywordRankTag>
}

export default TagColorByRank