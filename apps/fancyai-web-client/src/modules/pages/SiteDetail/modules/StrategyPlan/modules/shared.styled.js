import { Button } from "antd";
import styled from "styled-components";

export const CircleMenuButton = styled(Button)`
  box-shadow: 0px 4px 8px 0px #00000014 !important;
  border-radius: 50% !important;
  border: none;
`

export const StyledRankTag = styled.span`
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
  display: -webkit-box;
  max-width: 100%;
  min-width: 200px;
  -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3; 
  -webkit-box-orient: vertical;
`;

export const StyledUrlHolder = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2; 
  -webkit-box-orient: vertical;
`