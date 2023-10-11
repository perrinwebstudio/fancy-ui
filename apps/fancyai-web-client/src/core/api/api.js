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
    "CompanySetting",
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
    getS3PresignedUrl: builder.mutation({
      query: (params) => ({
        url: `user/presigned-url`,
        method: "GET",
        params,
      }),
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
  }),
});

export const {
  useGetUserMutation,
  useFetchUserQuery,
  useGetS3PresignedUrlMutation,
} = api;
