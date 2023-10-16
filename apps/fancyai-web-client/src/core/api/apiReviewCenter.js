import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiReviewCenter = api.injectEndpoints({
  endpoints: (build) => ({
    getReviewCenterList: build.query({
      query: ({ siteId }) => ({
        url: `reviewcenter/list/${siteId}`,
        method: "GET",
      }),
      providesTags: ['ReviewCenterList']
    }),
    getReviewCenterItem: build.query({
      query: ({ siteId, itemId }) => ({
        url: `reviewcenter/item/${siteId}/${itemId}`,
        method: "GET",
      }),
      providesTags: ['ReviewCenterList']
    }),
    setReviewItem: build.mutation({
      query: ({ siteId, itemId, item }) => ({
        url: `reviewcenter/item/${siteId}/${itemId}`,
        method: "PATCH",
        body: {
          updates: item,
        },
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['ReviewCenterList', 'AuthUser']
        return []
      },
      transformResponse: (response, meta, arg) => {
        if (arg.showNotification) {
          return transformResponseWithNotification(response, 'Review item updated successfully');
        }
        return response
      },
    }),
  }),
});

export const {
  useGetReviewCenterListQuery,
  useGetReviewCenterItemQuery,
  useSetReviewItemMutation,
} = apiReviewCenter;
