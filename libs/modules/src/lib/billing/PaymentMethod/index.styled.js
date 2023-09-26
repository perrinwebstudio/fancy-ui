import { Card } from 'antd';
import styled from 'styled-components';

export const StyledPaymentMethodCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;

  & .ant-row > .ant-col {
    margin-bottom: 0;
  }

  & .ant-card-body {
    flex: 1;
  }

  & .ant-card {
    width: 100%;
  }

  & .ant-card, .ant-row, .ant-col {
    height: 100%;
  }

  .ant-col {
    display: flex;
    align-items: center;
    justify-content: stretch;
  }
`;