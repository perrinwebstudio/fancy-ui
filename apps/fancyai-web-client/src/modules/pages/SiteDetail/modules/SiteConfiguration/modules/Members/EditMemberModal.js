import { Modal, Form, Input } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import {
  StyledDivider,
  StyledFormBtn,
  StyledSelect,
  StyledFormTitle,
  StyledMemberInformation,
} from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useEditSiteMemberMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useSiteDetail } from "@crema/modules/siteDetail";
import { useEffect, useState } from "react";

const EditMemberModal = ({
  isShowModal,
  handleCloseModal,
  member,
  handleSuccess,
  editRole,
}) => {
  const [form] = Form.useForm();
  const { id: siteId } = useSiteDetail();

  const [editSiteMember, { isLoading }] = useEditSiteMemberMutation();

  const handleEditMember = (values) => {
    editSiteMember?.({ ...values, siteId, userId: member?.id })
      ?.unwrap()
      .then((result) => {
        handleSuccess?.();
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    form.setFieldsValue({
      role: editRole ?? member?.role,
    });
  }, [member?.role, editRole]);

  return (
    <Modal
      title={editRole ? "Role change confirmation" : "Edit Site Member"}
      open={isShowModal}
      onCancel={handleCloseModal}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <StyledDivider />
      {editRole}
      <Form
        name="edit_member"
        initialValues={{}}
        onFinish={handleEditMember}
        form={form}
      >
        <StyledFormTitle>Member</StyledFormTitle>

        <StyledMemberInformation>
          <b>{member?.name}</b> / {member?.email}
        </StyledMemberInformation>

        <StyledFormTitle>Role</StyledFormTitle>

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
        <StyledFormBtn
          loading={isLoading}
          disabled={isLoading}
          type="primary"
          htmlType="submit"
        >
          <IntlMessages id="common.update" />
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

export default EditMemberModal;
