import { Row } from "antd";
import styled from "styled-components";

const StyledSiteSetupStepBar = styled(Row)`
  background-color: ${({ theme }) => theme.palette.background.default};
  position: sticky;
  top: 0;
  z-index: 1;
`

export default StyledSiteSetupStepBar