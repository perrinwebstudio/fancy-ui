import { Typography } from "antd";
import styled from "styled-components";

const StyledSiteSetupTitle = styled(Typography.Title)`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main} !important;
  margin-bottom: 30px !important;
  scroll-margin-top: 100px;
`

export default StyledSiteSetupTitle