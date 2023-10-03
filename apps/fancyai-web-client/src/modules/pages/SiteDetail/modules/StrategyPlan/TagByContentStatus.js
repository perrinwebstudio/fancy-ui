import { defaultTheme } from '@crema/constants/defaultConfig';
import { Tag } from 'antd';
import React, { useMemo } from 'react';
import { StyledKeywordRankTag, StyledRankTag } from './shared.styled';
import { CONTENT_STATUSES, getRankColor } from '@crema/constants';

const TagByContentStatus = ({ status, isKeyword }) => {
  const colorText = CONTENT_STATUSES[status]?.colorText || 'black'
  const colorBg = CONTENT_STATUSES[status]?.colorBg || 'white'
  const text = CONTENT_STATUSES[status]?.text || status

  if (!isKeyword) {
    return <StyledRankTag style={{color: colorText, backgroundColor: colorBg}}>{text}</StyledRankTag>
  }

  return <StyledKeywordRankTag style={{color: colorText, backgroundColor: colorBg}}>{text}</StyledKeywordRankTag>
}

export default TagByContentStatus