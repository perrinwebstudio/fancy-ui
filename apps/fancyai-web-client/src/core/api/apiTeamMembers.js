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
  }),
});

export const {
  useInviteTeamMemberMutation,
  useTeamMemberChangeRoleMutation,
  useFetchTeamMembersMutation,
} = apiTeamMembers;
