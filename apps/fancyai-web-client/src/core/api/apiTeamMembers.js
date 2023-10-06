import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiTeamMembers = api.injectEndpoints({
  endpoints: (build) => ({
    fetchTeamMembers: build.mutation({
      query: (payload) => ({
        url: `company/${payload.companyId}/members`,
        method: "GET",
      }),
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
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Team Member Invited successfully"
        );
      },
    }),
    teamMemberChangeRole: build.mutation({
      query: (payload) => ({
        url: `company/${payload.companyId}/member/invite`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Team Member Invited successfully"
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
  useFetchTeamMembersMutation,
  useFetchSiteMembersQuery,
  useInviteSiteMemberMutation,
  useEditSiteMemberMutation,
  useDeleteSiteMemberMutation,
} = apiTeamMembers;
