import styled from "styled-components";

export const StyledActivePlanWrapper = styled.div`
  text-align: center;
  color: white;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledActivePlan = styled.div`
  text-align: center;
  background-color: ${({theme}) => `${theme.palette.success.main}50`};
  color: ${({theme}) => `${theme.palette.success.main}`};
  font-weight: 600;
  padding: 5px 20px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & svg {
    height: 21px;
    width: 21px;
  }
`