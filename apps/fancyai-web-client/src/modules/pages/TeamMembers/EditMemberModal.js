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
import { useTeamMemberChangeRoleMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useEffect, useState } from "react";
import { useAppAuth } from "@crema/context/AppAuthProvider";

const EditMemberModal = ({
  isShowModal,
  handleCloseModal,
  member,
  handleSuccess,
  editRole,
}) => {
  const [form] = Form.useForm();
  const { selectedCompanyId } = useAppAuth();

  const [teamMemberChangeRole, { isLoading }] =
    useTeamMemberChangeRoleMutation();

  const handleEditMember = (values) => {
    teamMemberChangeRole?.({
      ...values,
      companyId: selectedCompanyId,
      userId: member?.id,
    })
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
      title={editRole ? "Role change confirmation" : "Edit Team Member"}
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
