import { Modal, Form, Input } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledDivider,
  StyledFormBtn,
  StyledFormTitle,
  StyledMemberInformation,
} from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useDeleteTeamMemberMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useAppAuth } from "@crema/context/AppAuthProvider";

const RemoveMemberModal = ({
  isShowModal,
  handleCloseModal,
  handleSuccess,
  member,
}) => {
  const [form] = Form.useForm();
  const { selectedCompanyId } = useAppAuth();

  const [deleteTeamMember, { isLoading }] = useDeleteTeamMemberMutation();

  const handleInviteMember = (values) => {
    deleteTeamMember?.({ companyId: selectedCompanyId, userId: member?.id })
      ?.unwrap()
      .then((result) => {
        handleSuccess?.();
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal
      title="Do you want remove team member?"
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
          <b>{member?.role.replace("Company", "")}</b>
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
