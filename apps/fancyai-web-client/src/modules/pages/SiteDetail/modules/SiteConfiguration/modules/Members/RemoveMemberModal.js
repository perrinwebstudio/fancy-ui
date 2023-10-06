import { Modal, Form, Input } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledDivider,
  StyledFormBtn,
  StyledFormTitle,
  StyledMemberInformation,
} from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useDeleteSiteMemberMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useSiteDetail } from "@crema/modules/siteDetail";

const RemoveMemberModal = ({
  isShowModal,
  handleCloseModal,
  handleSuccess,
  member,
}) => {
  const [form] = Form.useForm();
  const { id: siteId } = useSiteDetail();

  const [deleteSiteMember, { isLoading }] = useDeleteSiteMemberMutation();

  const handleInviteMember = (values) => {
    deleteSiteMember?.({ siteId, userId: member?.id })
      ?.unwrap()
      .then((result) => {
        handleSuccess?.();
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal
      title="Do you want remove site member?"
      open={isShowModal}
      onCancel={handleCloseModal}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <StyledDivider />
      <Form
        name="invite_member"
        initialValues={{}}
        onFinish={handleInviteMember}
        form={form}
      >
        <StyledFormTitle>Member</StyledFormTitle>

        <StyledMemberInformation>
          <b>{member?.name}</b> / {member?.email}
        </StyledMemberInformation>

        <StyledFormTitle>Role</StyledFormTitle>

        <StyledMemberInformation>
          <b>{member?.role.replace("Site", "")}</b>
        </StyledMemberInformation>

        <StyledFormBtn
          loading={isLoading}
          disabled={isLoading}
          // type="primary"
          htmlType="submit"
          danger
        >
          <IntlMessages id="member.remove" />
        </StyledFormBtn>
        <StyledFormBtn
          disabled={isLoading}
          htmlType="button"
          onClick={handleCloseModal}
        >
          <IntlMessages id="common.cancel" />
        </StyledFormBtn>
      </Form>
    </Modal>
  );
};

export default RemoveMemberModal;
