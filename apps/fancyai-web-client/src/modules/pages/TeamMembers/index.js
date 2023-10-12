import { useEffect, useState } from "react";
import { Space, Table, Tag, Card, Row, Typography, Button } from "antd";
import InviteMemberModal from "./InviteMemberModal";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import { useFetchTeamMembersQuery } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import UserInfo from "libs/components/src/lib/AppLayout/components/UserInfo";
import { StyledEditButton, StyledSelect } from "./index.styled";
import AppLoader from "@crema/components/AppLoader";
import EditMemberModal from "./EditMemberModal";
import RemoveMemberModal from "./RemoveMemberModal";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const TeamMembers = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [editMemberId, setEditMemberId] = useState(null);
  const [editMemberRole, setEditMemberRole] = useState(null);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const { selectedCompanyId } = useAppAuth();
  const { data, isLoading } = useFetchTeamMembersQuery({
    companyId: selectedCompanyId,
  });

  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  const teamMembers = data?.data ?? [];

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Row>
          <UserInfo hasColor hideDropDown propsUser={record} />
        </Row>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text, record) => (
        <StyledSelect
          placeholder="Choose Role"
          value={text}
          onChange={(e) => {
            if (!isEmailVerified) {
              setShowEmailConfirmPopup(true);
              return;
            }
            setEditMemberId(record.id);
            setEditMemberRole(e);
            setIsShowEditModal(true);
          }}
          options={[
            { value: "CompanyOwner", label: "Owner" },
            { value: "CompanyAdmin", label: "Admin" },
            { value: "CompanyManager", label: "Manager" },
            { value: "CompanyUser", label: "User" },
            { value: "CompanyGuest", label: "Guest" },
          ]}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <StyledEditButton
            type="primary"
            onClick={() => handleOpenEditModal(record.id)}
          >
            Edit
          </StyledEditButton>
          {record.role != "CompanyOwner" && (
            <StyledEditButton
              onClick={() => handleOpenDeleteModal(record.id)}
              danger
            >
              Delete
            </StyledEditButton>
          )}
        </Space>
      ),
    },
  ];

  const handleCloseInviteModal = () => {
    setIsShowModal(false);
  };

  const handleCloseEditModal = () => {
    setIsShowEditModal(false);
  };

  const handleOpenEditModal = (memberId) => {
    if (!isEmailVerified) {
      setShowEmailConfirmPopup(true);
      return;
    }
    setEditMemberId(memberId);
    setIsShowEditModal(true);
  };

  const handleOpenDeleteModal = (memberId) => {
    if (!isEmailVerified) {
      setShowEmailConfirmPopup(true);
      return;
    }
    setEditMemberId(memberId);
    setIsShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  const handleOpenInviteModal = (val) => {
    if (!isEmailVerified) {
      setShowEmailConfirmPopup(true);
      return;
    }
    setIsShowModal(val);
  };

  return (
    <Card
      style={{
        boxShadow: "0 8px 12px 0 rgba(29,32,43,.07)",
        marginTop: "16px",
      }}
    >
      <Row justify="space-between" style={{ alignItems: "center" }}>
        <Typography
          style={{ fontSize: "24px", fontWeight: 600, padding: "8px 0" }}
        >
          Team Members
        </Typography>
        <Button type="primary" onClick={() => handleOpenInviteModal(true)}>
          Invite Team Member
        </Button>
      </Row>
      <Space direction="vertical" style={{ width: "100%" }}>
        {isLoading ? (
          <AppLoader />
        ) : (
          <Table columns={columns} dataSource={teamMembers} />
        )}
      </Space>
      <InviteMemberModal
        isShowModal={isShowModal}
        handleCloseModal={handleCloseInviteModal}
      />
      <EditMemberModal
        member={teamMembers.filter((e) => e.id === editMemberId)?.[0]}
        isShowModal={isShowEditModal}
        handleCloseModal={handleCloseEditModal}
        editRole={editMemberRole}
      />
      <RemoveMemberModal
        member={teamMembers.filter((e) => e.id === editMemberId)?.[0]}
        isShowModal={isShowDeleteModal}
        handleCloseModal={handleCloseDeleteModal}
      />
    </Card>
  );
};

export default TeamMembers;
