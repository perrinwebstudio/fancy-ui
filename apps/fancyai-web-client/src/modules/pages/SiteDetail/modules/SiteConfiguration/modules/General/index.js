import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Divider, Form } from "antd";
import { Step1, Step2, Step4 } from "@crema/modules/siteSetup";
import {
  useGetSiteQuery,
  useUpdateSiteMutation,
} from "apps/fancyai-web-client/src/core/api/apiSite";
import { useSiteDetail } from "@crema/modules/siteDetail";
import AppLoader from "@crema/components/AppLoader";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const SiteGeneral = ({ prop1 }) => {
  const { id } = useSiteDetail();
  const { data, isLoading } = useGetSiteQuery({ siteId: id });
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation();
  const [edit, setEdit] = React.useState(true);
  const [form] = Form.useForm();

  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  if (isLoading) return <AppLoader />;
  return (
    <Card>
      <Form
        form={form}
        onFinish={() => {
          update({
            siteId: id,
            site: form.getFieldsValue(),
            showNotification: true,
          });
        }}
        layout="vertical"
        initialValues={data?.data || {}}
      >
        <Step1 />
        <Step2 />
        <Step4 />
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
        {edit && (
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
            }}
          >
            Save
          </Button>
        )}
      </div>
    </Card>
  );
};

export default SiteGeneral;
