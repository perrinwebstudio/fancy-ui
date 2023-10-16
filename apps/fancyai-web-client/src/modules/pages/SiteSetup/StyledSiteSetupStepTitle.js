import { Typography } from "antd";
import styled from "styled-components";

const StyledSiteSetupTitle = styled(Typography.Title)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main} !important;
  margin-bottom: 30px !important;
  scroll-margin-top: 100px;
  position: relative;

  & .more-button {
    position: absolute;
    right: 0;
    top: 0;
  }
`

export default StyledSiteSetupTitle