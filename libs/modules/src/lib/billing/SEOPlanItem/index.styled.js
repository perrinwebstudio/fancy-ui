import { Card } from "antd";
import styled from "styled-components";

export const StyledSEOPlanItemWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  & .tag {
    position: absolute;
    left: 30px;
    top: 0;
    z-index: 1;
    padding: 2px 5px;
    min-width: 70px;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-transform: uppercase;
    text-align: center;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.base};

    [dir='rtl'] & {
      left: auto;
      right: 30px;
    }
  }
`

export const StyledSEOPlanItemCard = styled(Card)``