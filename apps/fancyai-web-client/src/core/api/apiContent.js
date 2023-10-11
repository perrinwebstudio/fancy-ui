import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiContent = api.injectEndpoints({
  endpoints: (build) => ({
    getNewContents: build.query({
      query: ({ siteId }) => ({
        url: `content/${siteId}/new`,
        method: "GET",
      }),
      providesTags: ['Contents']
    }),
    getContentUpdates: build.query({
      query: ({ siteId }) => ({
        url: `content/${siteId}/updates`,
        method: "GET",
      }),
      providesTags: ['Contents']
    }),
    updateContent: build.mutation({
      query: ({ siteId, contentId, updates }) => ({
        url: `content/${siteId}/${contentId}`,
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
      query: ({ siteId, contentId }) => ({
        url: `content/reject/${siteId}/${contentId}`,
        method: "PATCH",
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Contents']
        return []
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(response, 'Item removed');
      },
    }),
  }),
});

export const {
  useGetNewContentsQuery,
  useGetContentUpdatesQuery,
  useUpdateContentMutation,
  useRejectContentMutation,
} = apiContent;
