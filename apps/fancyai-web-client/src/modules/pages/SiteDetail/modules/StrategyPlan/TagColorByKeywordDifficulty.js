import { defaultTheme } from '@crema/constants/defaultConfig';
import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { StyledKeywordRankTag, StyledRankTag } from './shared.styled';
import { getKeywordDifficultyColor, getRankColor } from '@crema/constants';

const TagColorByKeywordDifficulty = ({ text, difficulty, isKeyword }) => {
  const color = useMemo(() => {
    return getKeywordDifficultyColor(difficulty)
  }, [difficulty])

  if (!isKeyword) {
    return <StyledRankTag style={{color: 'white', backgroundColor: color}}>{text}</StyledRankTag>
  }

  return <StyledKeywordRankTag style={{color: 'white', backgroundColor: color}}>{text}</StyledKeywordRankTag>
}

export default TagColorByKeywordDifficulty