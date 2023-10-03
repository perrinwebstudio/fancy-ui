function to2Character(strValue) {
  return strValue.length === 1 ? `0${strValue}` : strValue;
}

export const colorFromRange = (value, min, max, colorMin, colorMax) => {
  const percentage = (value - min) / (max - min);
  const r = Math.round(percentage * (parseInt(colorMax.slice(1, 3), 16) - parseInt(colorMin.slice(1, 3), 16)) + parseInt(colorMin.slice(1, 3), 16));
  const g = Math.round(percentage * (parseInt(colorMax.slice(3, 5), 16) - parseInt(colorMin.slice(3, 5), 16)) + parseInt(colorMin.slice(3, 5), 16));
  const b = Math.round(percentage * (parseInt(colorMax.slice(5, 7), 16) - parseInt(colorMin.slice(5, 7), 16)) + parseInt(colorMin.slice(5, 7), 16));
  return "#" + to2Character(r.toString(16)) + to2Character(g.toString(16)) + to2Character(b.toString(16));
}

export const MIN_RANK = 1;
export const MAX_RANK = 100;
export const MIN_RANK_COLOR = "#5AE168"
export const MAX_RANK_COLOR = "#E8FFEA"

export const getRankColor = (rank) => {
  return colorFromRange(rank, MIN_RANK, MAX_RANK, MIN_RANK_COLOR, MAX_RANK_COLOR)
  // const rankPercentage = (rank - MIN_RANK) / (MAX_RANK - MIN_RANK);
  // const r = Math.round(rankPercentage * (parseInt(MAX_RANK_COLOR.slice(1, 3), 16) - parseInt(MIN_RANK_COLOR.slice(1, 3), 16)) + parseInt(MIN_RANK_COLOR.slice(1, 3), 16));
  // const g = Math.round(rankPercentage * (parseInt(MAX_RANK_COLOR.slice(3, 5), 16) - parseInt(MIN_RANK_COLOR.slice(3, 5), 16)) + parseInt(MIN_RANK_COLOR.slice(3, 5), 16));
  // const b = Math.round(rankPercentage * (parseInt(MAX_RANK_COLOR.slice(5, 7), 16) - parseInt(MIN_RANK_COLOR.slice(5, 7), 16)) + parseInt(MIN_RANK_COLOR.slice(5, 7), 16));
  // return "#" + to2Character(r.toString(16)) + to2Character(g.toString(16)) + to2Character(b.toString(16));
}

export const MIN_KEYWORD_DIFFICULTY = 1
export const MIDDLE_KEYWORD_DIFFICULTY = 50
export const MAX_KEYWORD_DIFFICULTY = 100
export const MAX_KEYWORD_DIFFICULTY_COLOR = '#CE1717'
export const MIDDLE_KEYWORD_DIFFICULTY_COLOR = '#DC4F00'
export const MIN_KEYWORD_DIFFICULTY_COLOR = '#067F12'

// use MIN_KEYWORD_DIFFICULTY, MAX_KEYWORD_DIFFICULTY, MAX_KEYWORD_DIFFICULTY_COLOR, MIDDLE_KEYWORD_DIFFICULTY_COLOR, MIN_KEYWORD_DIFFICULTY_COLOR
// to calculate the color based on keywordDifficulty
export const getKeywordDifficultyColor = (keywordDifficulty) => {
  if (keywordDifficulty <= MIDDLE_KEYWORD_DIFFICULTY) {
    return colorFromRange(keywordDifficulty, MIN_KEYWORD_DIFFICULTY, MIDDLE_KEYWORD_DIFFICULTY, MIN_KEYWORD_DIFFICULTY_COLOR, MIDDLE_KEYWORD_DIFFICULTY_COLOR)
  }
  return colorFromRange(keywordDifficulty, MIDDLE_KEYWORD_DIFFICULTY, MAX_KEYWORD_DIFFICULTY, MIDDLE_KEYWORD_DIFFICULTY_COLOR, MAX_KEYWORD_DIFFICULTY_COLOR)
}

export const CONTENT_STATUSES = {
  'Planned': {
    key: 'Planned',
    text: 'Planned',
    colorText: '#006EBD',
    colorBg: '#DFEFFF',
  },
  'Completed': {
    key: 'Completed',
    text: 'Completed',
    colorText: '#067F12',
    colorBg: '#D7FADA',
  },
}