import { defaultTheme } from '@crema/constants/defaultConfig';
import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { StyledKeywordRankTag, StyledTag } from './shared.styled';
import { getKeywordDifficultyColor, getRankColor } from '@crema/constants';

const TagColorByKeywordDifficulty = ({ text, difficulty, isKeyword }) => {
  const color = useMemo(() => {
    return getKeywordDifficultyColor(difficulty)
  }, [difficulty])

  if (!isKeyword) {
    return <StyledTag style={{color: 'white', backgroundColor: color}}>{text}</StyledTag>
  }

  return <StyledKeywordRankTag style={{color: 'white', backgroundColor: color}}>{text}</StyledKeywordRankTag>
}

export default TagColorByKeywordDifficulty