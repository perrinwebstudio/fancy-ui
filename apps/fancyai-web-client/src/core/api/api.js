import { createApi } from "@reduxjs/toolkit/query/react";

import { apiUserBaseQuery } from "./baseQuery";

export const REDUCER_KEY_USER_API = "splitApi";

export const api = createApi({
  reducerPath: REDUCER_KEY_USER_API,
  baseQuery: apiUserBaseQuery,
  tagTypes: [
    "Users",
    "AuthUser",
    "Sites",
    "UserSetting",
    "SiteMember",
    "TeamMembers",
  ],
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: () => {
        return "user/me";
      },
    }),
    fetchUser: builder.query({
      query: () => {
        return "user/me";
      },
      providesTags: ["AuthUser"],
    }),
  }),
});

export const { useGetUserMutation, useFetchUserQuery } = api;
