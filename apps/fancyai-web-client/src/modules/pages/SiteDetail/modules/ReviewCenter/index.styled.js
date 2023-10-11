import { Button, Input, Space } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

const { Search } = Input;

export const StyledProductHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const StyledProductHeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 12px;
  overflow: hidden;

  [dir='rtl'] & {
    padding-right: 0;
    padding-left: 12px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    width: calc(100% - 262px);
  }

  & h3 {
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-right: 12px;
    margin-bottom: 0;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 12px;
    }
  }
`;

export const StyledProductHeaderShowingText = styled.span`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const StyledProductHeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProductHeaderSearch = styled(Search)`
  position: relative;
  width: 220px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-input {
    padding: 8px 14px;
    height: 36px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  & .ant-input-search-button {
    height: 36px;
    width: 36px;
    box-shadow: none;

    & .anticon svg {
      display: block;
    }
  }
`;

export const StyledProductHeaderBtn = styled(Button)`
  border: 0 none;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.circle};
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 20px;

  &:hover,
  &:focus {
    background-color: ${() => rgba('black', 0.1)};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover,
    &:focus {
      background-color: ${() => rgba('black', 0.2)};
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const StyledShowResolved = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: right;
  margin-right: 10px;
  margin-left: 20px;
  color: #626D80;
`;

export const StyledColumnWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 8px 0px #00000014;
  border-radius: 12px;
`;

export const StyledColumnHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  border-radius: 12px 12px 0px 0px;
  padding: 15px 16px 18px 16px;
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid #0505050F;
  background: #FAFAFA
  linear-gradient(0deg, #FAFAFA, #FAFAFA);
`;

export const StyledColumnContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px 16px;
  gap: 8px;
`;

export const StyledDropdownSpace = styled(Space)`
  .ant-space-item {
    color: #0078CC !important;
    cursor: pointer;
  }
`

export const StyledCardWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  border-radius: 20px;
  border: 1px solid ${props => props.status === 'approved' ? '#AFF2B5' : props.status === 'rejected' ? '#F6A8A8' : "#C2C2C2"};
  background: #FFF;
`;

export const StyledCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const StyledCardCalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #626D80;
`;

export const StyledTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    display: flex;
    width: 114px;
    padding: 6px 2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #DFEFFF;
    color: #006EBD;
    border-radius: 500px;
    text-transform: capitalize;
  }

  div {
    display: flex;
    width: 114px;
    padding: 6px 2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 500px;
    border: 1px solid ${props => props.status === 'approved' ? '#067F12' : props.status === 'rejected' ? '#CE1717' : "#0078CC"};
    color:  ${props => props.status === 'approved' ? '#067F12' : props.status === 'rejected' ? '#CE1717' : "#006EBD"};
    text-transform: capitalize;
  }
`;

export const StyledIconsLeft = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: 1px solid ${props => props.color ? props.color : "gray"};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  cursor: pointer;
`;

export const StyledModalInfoWrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: var(--background-blue-light, #F4F7FE);
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledModalOrignalContentWrapper = styled.div`
  width: 100%;
  padding: 22px 100px 0 100px;
  display: flex;
  flex-direction: column;
`;

export const StyledOriginalContent = styled.div`
  background: var(--background-blue-light, #F4F7FE);
  color: var(--text-black, #070C18);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 10px 14px;
  margin-top: 16px;
`;

export const StyledEditLinkBudgetContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  background: var(--background-completed, #D7FADA);
  margin: 16px 0;
  color: #067F12;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;