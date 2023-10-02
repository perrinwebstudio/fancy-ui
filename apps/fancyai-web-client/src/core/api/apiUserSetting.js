import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiUserSetting = api.injectEndpoints({
  endpoints: (build) => ({
    updateUserSetting: build.mutation({
      query: (payload) => ({
        url: `user/settings`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ["UserSetting"];
        return [];
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "User Setting updated successfully"
        );
      },
    }),
  }),
});

export const { useUpdateUserSettingMutation } = apiUserSetting;
