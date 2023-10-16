import React from "react";
import SEOPlanPicker from "../../../../../../billing/SEOPlanPicker";
import { Button, Card, Divider, Form, Space } from "antd";
import {
  useGetSiteQuery,
  useUpdateSiteMutation,
} from "apps/fancyai-web-client/src/core/api/apiSite";
import { useSiteDetail } from "@crema/modules/siteDetail";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const SiteBilling = () => {
  const { id } = useSiteDetail();
  const { data, isLoading } = useGetSiteQuery({ siteId: id });
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation();
  const [form] = Form.useForm();
  const billingPlan = Form.useWatch("billingPlan", form);

  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  return (
    <>
      <Card>
        <Form
          form={form}
          onFinish={() => {
            console.log("form.getFieldsValue()", form.getFieldsValue());
            update({
              siteId: id,
              site: form.getFieldsValue(),
              showNotification: true,
            });
          }}
          layout="vertical"
          initialValues={data?.data || {}}
        >
          <Form.Item name="billingPlan">
            <SEOPlanPicker buttonLabel={"Switch Plan"} />
          </Form.Item>
        </Form>

        <Divider />

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Button
            disabled={billingPlan === data?.data?.billingPlan}
            loading={isUpdating}
            className="limited-min-width"
            type="primary"
            onClick={() => {
              if (!isEmailVerified) {
                setShowEmailConfirmPopup(true);
                return;
              }
              form.submit();
            }}
          >
            Save Changes
          </Button>
        </div>
      </Card>
    </>
  );
};

export default SiteBilling;
