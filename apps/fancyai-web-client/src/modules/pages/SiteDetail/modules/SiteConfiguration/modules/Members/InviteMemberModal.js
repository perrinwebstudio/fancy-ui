import { Modal, Form, Input, Switch, Row, Typography } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledDivider,
  StyledFormBtn,
  StyledSelect,
  StyledSwitch,
  StyledSwitchLabel,
} from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useInviteSiteMemberMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useSiteDetail } from "@crema/modules/siteDetail";

const InviteMemberModal = ({
  isShowModal,
  handleCloseModal,
  handleSuccess,
}) => {
  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);
  const email = Form.useWatch("email", form);
  const { id: siteId } = useSiteDetail();

  const [inviteSiteMember, { isLoading }] = useInviteSiteMemberMutation();

  const handleInviteSiteMember = async (values) => {
    inviteSiteMember?.({ ...values, siteId })
      ?.unwrap()
      .then((result) => {
        form.resetFields();
        handleSuccess?.();
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
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
        initialValues={{
          create_team_member: false,
        }}
        onFinish={handleInviteSiteMember}
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
              { value: "SiteManager", label: "Manager" },
              { value: "SiteUser", label: "User" },
              { value: "SiteGuest", label: "Guest" },
            ]}
          />
        </Form.Item>
        <Row>
          <Form.Item name="create_team_member" className="form-field">
            <StyledSwitch title="Add to Team Members" />
          </Form.Item>
          <StyledSwitchLabel>Add to Team Members</StyledSwitchLabel>
        </Row>
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
