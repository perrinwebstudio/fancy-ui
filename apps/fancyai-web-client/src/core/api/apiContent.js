import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getNewContents: build.query({
      query: ({ siteId }) => ({
        url: `content/new?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Contents']
    }),
    getContentUpdates: build.query({
      query: ({ siteId }) => ({
        url: `content/updates?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Contents']
    }),
    updateContent: build.mutation({
      query: ({ contentId, updates }) => ({
        url: `content/${contentId}`,
        method: "PATCH",
        body: {
          updates,
        },
      }),
      invalidatesTags: ['Contents'],
      transformResponse: ((response, meta, args) => {
        if (args.showNotification) {
          return transformResponseWithNotification(response, "Content updated successfully")
        }
        return response
      }),
    }),
    rejectContent: build.mutation({
      query: ({ contentId }) => ({
        url: `keywords/${contentId}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Contents']
        return []
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(response, 'Content rejected successfully');
      },
    }),
  }),
});

export const {
  useGetNewContentsQuery,
  useGetContentUpdatesQuery,
  useUpdateContentMutation,
  useRejectContentMutation,
} = apiSite;
