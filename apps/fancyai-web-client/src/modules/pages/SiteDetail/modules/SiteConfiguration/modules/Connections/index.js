import React from "react";
import { Button, Card, Divider, Form } from "antd";
import {
  useGetSiteQuery,
  useUpdateSiteMutation,
} from "apps/fancyai-web-client/src/core/api/apiSite";
import { useSiteDetail } from "@crema/modules/siteDetail";
import AppLoader from "@crema/components/AppLoader";
import AppSiteGoogleProvider from "apps/fancyai-web-client/src/modules/providers/AppSiteGoogleProvider";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import SiteSetupStep5 from "apps/fancyai-web-client/src/modules/pages/SiteSetup/Step5";
import SiteSetupStep6 from "apps/fancyai-web-client/src/modules/pages/SiteSetup/Step6";

const SiteConnections = ({ prop1 }) => {
  const { id } = useSiteDetail();
  const { data, isLoading } = useGetSiteQuery({ siteId: id });
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation();

  const [form] = Form.useForm();

  const gaAccountId = Form.useWatch("gaAccountId", form);

  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  if (isLoading) return <AppLoader />;
  return (
    <Card style={{maxWidth: '700px', margin: '0px auto'}}>
      <Form
        onFinish={() => {
          update({
            siteId: id,
            site: form.getFieldsValue(),
            showNotification: true,
          });
        }}
        form={form}
        layout="vertical"
        initialValues={data?.data || {}}
      >
        <AppSiteGoogleProvider selectedGaAccount={gaAccountId} siteId={id}>
          <SiteSetupStep5 big />
        </AppSiteGoogleProvider>
        <SiteSetupStep6 sitePlatform={data?.data?.platform} />
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
          loading={isUpdating}
          className="limited-min-width"
          type="primary"
          onClick={() => {
            if (!isEmailVerified) {
              setShowEmailConfirmPopup(true);
              return;
            }
            form.submit();
            setEdit(false);
          }}
        >
          Save
        </Button>
      </div>
    </Card>
  );
};

export default SiteConnections;
