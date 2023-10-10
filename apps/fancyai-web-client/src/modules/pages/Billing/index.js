import React, { useMemo } from "react";
import { Col, Typography } from "antd";
import { Skeleton } from "antd";

import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";
import { useGetDataApi } from "@crema/hooks/APIHooks";

import {
  BillingTable,
  MonthlyPaymentCard,
  PaymentMethod,
  PayModal,
} from "@crema/modules/billing";
import AppInfoView from "@crema/components/AppInfoView";
import Card from "antd/es/card/Card";
import {
  useAddStripePaymentMethodMutation,
  useGetCompanyBillingDetailQuery,
  useGetPaypalLinkMutation,
} from "apps/fancyai-web-client/src/core/api/apiBilling";
import AppLoader from "@crema/components/AppLoader";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const { Title } = Typography;

const Billing = () => {
  const [{ apiData: transactions }] = useGetDataApi("/transactions");
  const [pay, setPay] = React.useState(false);
  const { selectedCompanyId } = useAppAuth();

  const { data, isLoading: isLoadingBillingDetail } =
    useGetCompanyBillingDetailQuery({
      companyId: selectedCompanyId,
    });

  const [addPaymentStrip] = useAddStripePaymentMethodMutation();
  const [addPaymentPaypal] = useGetPaypalLinkMutation();

  const payment = useMemo(() => {
    if (!data) return null;
    if (
      data.data.currentPaymentMethod === "Stripe" &&
      Object.keys(data.data.stripeDetail || {}.length > 0)
    ) {
      return {
        type: "Stripe",
        info: data.data.stripeDetail,
      };
    }
    if (
      data.data.currentPaymentMethod === "Paypal" &&
      Object.keys(data.data.paypalDetail || {}.length > 0)
    ) {
      return {
        type: "Paypal",
        info: data.data.paypalDetail,
      };
    }
    return null;
  }, [data]);

  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  return (
    <>
      <AppPageMeta title="Billing" />
      <Title level={4}>Billing and Payment Method</Title>
      <AppRowContainer>
        <Col xs={24} sm={24} lg={12}>
          <MonthlyPaymentCard isLoading={isLoadingBillingDetail} />
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <PaymentMethod
            paymentType={payment?.type}
            paymentTypeInfo={payment?.info}
            isLoading={isLoadingBillingDetail}
            onClickChange={() => {
              if (!isEmailVerified) {
                setShowEmailConfirmPopup(true);
                return;
              }
              setPay(true);
            }}
          />
        </Col>
      </AppRowContainer>

      <Title level={4}>Payment History</Title>
      {transactions && transactions.length > 0 ? (
        <AppRowContainer>
          <Col xs={24} sm={24} lg={24}>
            <Card>
              <BillingTable transactionsData={transactions} />
            </Card>
          </Col>
        </AppRowContainer>
      ) : null}

      {pay && (
        <PayModal
          onSubmitStripe={(id, info) => {
            return addPaymentStrip({
              companyId: selectedCompanyId,
              paymentMethodId: id,
              billingAddress: info,
              cardHolderName: info.name,
            });
          }}
          onSubmitPaypal={() => {
            return addPaymentPaypal({
              companyId: selectedCompanyId,
            });
          }}
          onClose={() => {
            setPay(false);
          }}
        />
      )}

      <AppInfoView />
    </>
  );
};

export default Billing;
