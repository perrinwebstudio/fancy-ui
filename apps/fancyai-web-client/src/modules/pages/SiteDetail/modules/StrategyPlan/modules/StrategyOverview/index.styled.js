import styled from "styled-components";

export const StyledProgressCard = styled.div`
  background-color: ${({theme}) => theme.palette.background.default};
  padding: 10px 20px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .title {
    font-weight: 600;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    // white-space: nowrap;
    text-align: center;
  }

  h4 {
    margin-bottom: 0;
  }

  & .chart-text-wrapper {
    margin-top: -10px;
  }

  & .chart-text {
    line-height: 0px;
  }

  & .chart-text-subtitle span {
    font-size: 12px;
    line-height: 0px !important;
  }

  & .progress-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }

  & svg.ant-progress-circle {
    background: white;
  }

  & .ant-progress-circle-trail, .ant-progress-circle-path {
    stroke-width: 8px;
  }

  & .ant-progress {
    width: 100%;
    min-height: 150px;
    text-align: center;
  }

  & .ant-progress-inner {
    width: 150px !important;
    height: 150px !important;
  }

  & .stat-wrapper {
    text-align: center;
    margin-top: 20px;
  }

  & .stat-number {
    font-size: 16px;
    font-weight: 600;
  }

  & .stat-number-subtitle span {
    font-size: 12px;
  }
`