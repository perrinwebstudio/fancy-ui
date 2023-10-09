import { Button } from "antd";
import styled from "styled-components";

export const CircleMenuButton = styled(Button)`
  box-shadow: 0px 4px 8px 0px #00000014 !important;
  border-radius: 50% !important;
  border: none;
`

export const StyledTag = styled.span`
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-block;
`;

export const StyledKeywordRankTag = styled.span`
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  // display: -webkit-box;
  // max-width: 100%;
  // min-width: 200px;
  -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3; 
  -webkit-box-orient: vertical;
`;

export const StyledUrlHolder = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props => props.maxLine)}; /* number of lines to show */
          line-clamp: ${(props => props.maxLine)}; 
  -webkit-box-orient: vertical;

  & a {
    word-break: break-all
  }
`

export const StyledOneLineText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
  overflow: hidden;
`

export const StyledTwoLineText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 150px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2; 
  -webkit-box-orient: vertical;
`