import { useEffect, useState } from "react";
import { Space, Table, Tag, Card, Row, Typography, Button } from "antd";
import InviteMemberModal from "./InviteMemberModal";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import {
  useFetchSiteMembersQuery,
  useFetchTeamMembersMutation,
} from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import UserInfo from "libs/components/src/lib/AppLayout/components/UserInfo";
import { StyledEditButton, StyledSelect } from "./index.styled";
import AppLoader from "@crema/components/AppLoader";
import EditMemberModal from "./EditMemberModal";
import { useSiteDetail } from "@crema/modules/siteDetail";
import RemoveMemberModal from "./RemoveMemberModal";

const SiteMembers = ({ prop1 }) => {
  const [isShowInviteModal, setIsShowInviteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [editMemberId, setEditMemberId] = useState(null);
  const [editMemberRole, setEditMemberRole] = useState(null);

  const { id: siteId } = useSiteDetail();
  const { data, isLoading } = useFetchSiteMembersQuery({
    siteId,
  });

  const siteMembers = data?.data ?? [];

  const columns = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Row>
          <UserInfo hasColor hideDropDown />
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
            setEditMemberId(record.id);
            setEditMemberRole(e);
            setIsShowEditModal(true);
          }}
          options={[
            { value: "SiteManager", label: "Manager" },
            { value: "SiteUser", label: "User" },
            { value: "SiteGuest", label: "Guest" },
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
          <StyledEditButton
            danger
            onClick={() => handleOpenDeleteModal(record.id)}
          >
            Delete
          </StyledEditButton>
        </Space>
      ),
    },
  ];

  const handleCloseInviteModal = () => {
    setIsShowInviteModal(false);
  };

  const handleCloseEditModal = () => {
    setEditMemberRole(null);
    setIsShowEditModal(false);
  };

  const handleOpenEditModal = (memberId) => {
    setEditMemberId(memberId);
    setIsShowEditModal(true);
  };

  const handleOpenDeleteModal = (memberId) => {
    setEditMemberId(memberId);
    setIsShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setIsShowDeleteModal(false);
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
          Site Members
        </Typography>
        <Button type="primary" onClick={() => setIsShowInviteModal(true)}>
          Invite Site Member
        </Button>
      </Row>
      <Space direction="vertical" style={{ width: "100%" }}>
        {isLoading ? (
          <AppLoader />
        ) : (
          <Table columns={columns} dataSource={siteMembers} />
        )}
      </Space>
      <InviteMemberModal
        isShowModal={isShowInviteModal}
        handleCloseModal={handleCloseInviteModal}
      />
      <EditMemberModal
        member={siteMembers.filter((e) => e.id === editMemberId)?.[0]}
        isShowModal={isShowEditModal}
        handleCloseModal={handleCloseEditModal}
        editRole={editMemberRole}
      />
      <RemoveMemberModal
        member={siteMembers.filter((e) => e.id === editMemberId)?.[0]}
        isShowModal={isShowDeleteModal}
        handleCloseModal={handleCloseDeleteModal}
      />
    </Card>
  );
};

export default SiteMembers;
