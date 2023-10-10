import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiCompanySetting = api.injectEndpoints({
  endpoints: (build) => ({
    fetchCompanyInfo: build.query({
      query: ({ companyId }) => ({
        url: `company/${companyId}`,
        method: "GET",
      }),
      providesTags: ["CompanySetting"],
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    updateCompanySetting: build.mutation({
      query: (payload) => ({
        url: `company/${payload.companyId}/setting`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ["CompanySetting"];
        return [];
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(
          response,
          "Company settings updated successfully"
        );
      },
    }),
    getS3PresignedUrl: build.mutation({
      query: (params) => ({
        url: `company/presigned-url`,
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
  useFetchCompanyInfoQuery,
  useUpdateCompanySettingMutation,
  useUpdateUserPasswordMutation,
  useUpdateUser2faMutation,
  useGetMFAQRImageQuery,
} = apiCompanySetting;
