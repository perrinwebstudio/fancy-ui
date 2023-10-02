import styled from "styled-components";

const StyledStripeForm = styled.form`
  & .FormGroup {
    padding: 0;
    background-color: white;
    will-change: opacity, transform;
    border: 1px solid ${({ theme }) => theme.palette.gray[300]};
  }

  & .FormRow {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 10px;
  }

  & .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  & .StripeElement {
    width: 100%;
    padding: 6px 15px 6px 0;
  }
`

export default StyledStripeForm;