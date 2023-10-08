import { defaultTheme } from '@crema/constants/defaultConfig';
import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { StyledKeywordRankTag, StyledRankTag } from './shared.styled';
import { colorFromRange, getRankColor } from '@crema/constants';

const TagColorByScore = ({ text, textColor = 'black', score, minValue, maxValue, minColor, maxColor, isKeyword }) => {
  const color = useMemo(() => {
    return colorFromRange(score, minValue, maxValue, minColor, maxColor)
  }, [score])

  if (!isKeyword) {
    return <StyledRankTag style={{color: textColor, backgroundColor: color}}>{text}</StyledRankTag>
  }

  return <StyledKeywordRankTag style={{color: textColor, backgroundColor: color}}>{text}</StyledKeywordRankTag>
}

export default TagColorByScore