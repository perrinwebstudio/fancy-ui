import React from "react";
import { Button, Col, Typography } from "antd";

import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";
import { useGetDataApi } from "@crema/hooks/APIHooks";

import {
  BillingTable,
  MonthlyPaymentCard,
  PaymentMethod,
  PayModal
} from "@crema/modules/billing";
import AppInfoView from "@crema/components/AppInfoView";
import Card from "antd/es/card/Card";


const { Title } = Typography;

const Billing = () => {
  const [{ apiData: transactions }] = useGetDataApi("/transactions");
  const [pay, setPay] = React.useState(false);

  return (
    <>
      <AppPageMeta title="Billing" />
      <Title level={3}>Billing and Payment Method</Title>
      <AppRowContainer>
        <Col xs={24} sm={24} lg={12}>
          <MonthlyPaymentCard />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <PaymentMethod onClickChange={() => {
            setPay(true);
          }} />
        </Col>
      </AppRowContainer>

      <Title level={3}>Payment History</Title>
      {transactions && transactions.length > 0 ? (
        <AppRowContainer>
          <Col xs={24} sm={24} lg={24}>
            <Card>
              <BillingTable transactionsData={transactions} />
            </Card>
          </Col>
        </AppRowContainer>
      ) : null}

      {
        pay && <PayModal onClose={() => {
          setPay(false);
        }} />
      }

      <AppInfoView />
    </>
  );
};

export default Billing;
