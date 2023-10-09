import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiUserSetting = api.injectEndpoints({
  endpoints: (build) => ({
    getMFAQRImage: build.query({
      query: ({}) => ({
        url: `user/qrcode`,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    updateUserSetting: build.mutation({
      query: (payload) => ({
        url: `user/profile`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ["AuthUser"];
        return [];
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "User profile updated successfully"
        );
      },
    }),
    updateUserPassword: build.mutation({
      query: (payload) => ({
        url: `user/password`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ["AuthUser"];
        return [];
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "User password updated successfully"
        );
      },
    }),
    updateUser2fa: build.mutation({
      query: (payload) => ({
        url: `user/2fa`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Two-Factor Authentication updated successfully"
        );
      },
    }),
  }),
});

export const {
  useUpdateUserSettingMutation,
  useUpdateUserPasswordMutation,
  useUpdateUser2faMutation,
  useGetMFAQRImageQuery,
} = apiUserSetting;
