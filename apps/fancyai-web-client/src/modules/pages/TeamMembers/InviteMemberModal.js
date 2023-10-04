import { Modal, Form, Input } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import { StyledDivider, StyledFormBtn, StyledSelect } from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useInviteTeamMemberMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useAppAuth } from "@crema/context/AppAuthProvider";

const InviteMemberModal = ({ isShowModal, handleCloseModal }) => {
  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);
  const email = Form.useWatch("email", form);
  const role = Form.useWatch("role", form);
  const { selectedCompanyId } = useAppAuth();

  const [inviteTeamMember, { isLoading }] = useInviteTeamMemberMutation();

  const handleInviteMember = (values) => {
    inviteTeamMember?.({ ...values, companyId: selectedCompanyId })
      ?.unwrap()
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <Modal
      title="Invite Team Member"
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
        <FloatLabel label="Member Full Name" value={name}>
          <Form.Item
            name="name"
            className="form-field"
            rules={[{ required: true, message: "Please input member name!" }]}
          >
            <Input />
          </Form.Item>
        </FloatLabel>
        <FloatLabel label="Member Email" value={email}>
          <Form.Item
            name="email"
            className="form-field"
            rules={[{ required: true, message: "Please input member email!" }]}
          >
            <Input />
          </Form.Item>
        </FloatLabel>
        <Form.Item
          name="role"
          className="form-field"
          rules={[{ required: true, message: "Please choose member role!" }]}
        >
          <StyledSelect
            placeholder="Choose Role"
            options={[
              { value: "CompanyOwner", label: "Owner" },
              { value: "CompanyAdmin", label: "Admin" },
              { value: "CompanyManager", label: "Manager" },
              { value: "CompanyUser", label: "User" },
              { value: "CompanyGuest", label: "Guest" },
            ]}
          />
        </Form.Item>

        <StyledFormBtn
          loading={isLoading}
          disabled={isLoading}
          type="primary"
          htmlType="submit"
        >
          <IntlMessages id="member.invite" />
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

export default InviteMemberModal;
