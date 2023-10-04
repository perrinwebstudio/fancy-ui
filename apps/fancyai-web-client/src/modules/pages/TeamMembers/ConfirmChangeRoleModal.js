import { Modal, Form, Input } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import { StyledDivider, StyledFormBtn, StyledSelect } from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useTeamMemberChangeRoleMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";

const ConfirmChangeRoleModal = ({
  isShowModal,
  handleCloseModal,
  memberId,
}) => {
  const [form] = Form.useForm();
  const role = Form.useWatch("role", form);

  const [teamMemberChangeRole, { isLoading }] =
    useTeamMemberChangeRoleMutation();

  const handleInviteMember = (values) => {
    teamMemberChangeRole?.({ ...values, memberId })
      ?.unwrap()
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <Modal
      title="Role Change Confirmation"
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

export default ConfirmChangeRoleModal;
