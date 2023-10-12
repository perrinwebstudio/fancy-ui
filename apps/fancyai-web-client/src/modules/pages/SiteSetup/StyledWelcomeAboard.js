import { Typography } from "antd";
import styled from "styled-components";

const StyledWelcomeAboard = styled(Typography.Text)`
  color: ${({theme}) => theme.palette.primary.main};
`

export default StyledWelcomeAboard;