import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Divider, Form, Popover } from "antd";
import {
  useGetSiteQuery,
  useUpdateSiteMutation,
} from "apps/fancyai-web-client/src/core/api/apiSite";
import { useSiteDetail } from "@crema/modules/siteDetail";
import AppLoader from "@crema/components/AppLoader";
import { ArrowLeftOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import SiteSetupStep1 from "apps/fancyai-web-client/src/modules/pages/SiteSetup/Step1";
import SiteSetupStep2 from "apps/fancyai-web-client/src/modules/pages/SiteSetup/Step2";
import SiteSetupStep3 from "apps/fancyai-web-client/src/modules/pages/SiteSetup/Step3";
import SiteSetupStep4 from "apps/fancyai-web-client/src/modules/pages/SiteSetup/Step4";
import { MdMoreVert } from "react-icons/md";
import { StyledSiteGeneralConfigCard } from "./index.styled";
import DeleteSiteModal from "./DeleteSiteModal";
import DeleteSiteButton from "./DeleteSiteButton";

const SiteGeneral = ({ prop1 }) => {
  const { id } = useSiteDetail();
  const { data, isLoading } = useGetSiteQuery({ siteId: id });
  const [update, { isLoading: isUpdating }] = useUpdateSiteMutation();
  const [edit, setEdit] = React.useState(true);
  const [form] = Form.useForm();

  const [remove, setRemove] = React.useState(false);

  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  if (isLoading) return <AppLoader />;
  return (
    <StyledSiteGeneralConfigCard style={{maxWidth: '700px', margin: '0px auto'}}>
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
        <DeleteSiteButton onClickDelete={() => setRemove(true)} />
    
        <SiteSetupStep1 big showDelete />
        <SiteSetupStep2 big />
        <SiteSetupStep4 big />
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
            Save Changes
          </Button>
        )}
      </div>

      {
        (!!remove && data?.data) && <DeleteSiteModal
          site={data.data}
          onClose={() => setRemove(false)}
          open={!!remove}
        />
      }
    </StyledSiteGeneralConfigCard>
  );
};

export default SiteGeneral;
