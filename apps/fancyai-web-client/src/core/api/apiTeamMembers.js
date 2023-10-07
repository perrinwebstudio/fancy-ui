import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiTeamMembers = api.injectEndpoints({
  endpoints: (build) => ({
    fetchTeamMembers: build.query({
      query: ({ companyId }) => ({
        url: `company/${companyId}/members`,
        method: "GET",
      }),
      providesTags: ["TeamMembers"],
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    inviteTeamMember: build.mutation({
      query: (payload) => ({
        url: `company/${payload.companyId}/member/invite`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["TeamMembers"],
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Team member invited successfully"
        );
      },
    }),
    teamMemberChangeRole: build.mutation({
      query: (payload) => ({
        url: `company/${payload.companyId}/member`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["TeamMembers"],
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Team member updated successfully"
        );
      },
    }),
    deleteTeamMember: build.mutation({
      query: (payload) => ({
        url: `company/${payload.companyId}/member`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["TeamMembers"],
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Team member deleted successfully"
        );
      },
    }),
    fetchSiteMembers: build.query({
      query: ({ siteId }) => ({
        url: `site/${siteId}/member`,
        method: "GET",
      }),
      providesTags: ["SiteMember"],
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    inviteSiteMember: build.mutation({
      query: (payload) => ({
        url: `site/${payload.siteId}/member/invite`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["SiteMember"],
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Site member invited successfully"
        );
      },
    }),
    editSiteMember: build.mutation({
      query: (payload) => ({
        url: `site/${payload.siteId}/member`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["SiteMember"],
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Site member updated successfully"
        );
      },
    }),
    deleteSiteMember: build.mutation({
      query: (payload) => ({
        url: `site/${payload.siteId}/member`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["SiteMember"],
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Site member deleted successfully"
        );
      },
    }),
  }),
});

export const {
  useInviteTeamMemberMutation,
  useTeamMemberChangeRoleMutation,
  useDeleteTeamMemberMutation,
  useFetchTeamMembersQuery,
  useFetchSiteMembersQuery,
  useInviteSiteMemberMutation,
  useEditSiteMemberMutation,
  useDeleteSiteMemberMutation,
} = apiTeamMembers;
