import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getResearchKeywords: build.query({
      query: ({ siteId }) => ({
        url: `keywords?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Keywords']
    }),
    getLongTermKeywords: build.query({
      query: ({ siteId }) => ({
        url: `keywords/longterm?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Keywords']
    }),
    getShortTermsKeywords: build.query({
      query: ({ siteId }) => ({
        url: `keywords/shortterm?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Keywords']
    }),
    rejectKeyword: build.mutation({
      query: ({ keywordId }) => ({
        url: `keywords/${keywordId}/reject`,
        method: "PATCH",
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Keywords']
        return []
      },
      transformResponse: (response, meta, arg) => {
        if (arg.showNotification) {
          return transformResponseWithNotification(response, 'Keyword rejected successfully');
        }
        return response
      },
    }),
    setKeywordType: build.mutation({
      query: ({ keywordId, type }) => ({
        url: `keywords/${keywordId}/settype`,
        method: "PATCH",
        body: {
          keywordType: type
        },
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Keywords']
        return []
      },
      transformResponse: (response, meta, arg) => {
        if (arg.showNotification) {
          return transformResponseWithNotification(response, 'Keyword type updated successfully');
        }
        return response
      },
    }),
  }),
});

export const {
  useGetResearchKeywordsQuery,
  useGetLongTermKeywordsQuery,
  useGetShortTermsKeywordsQuery,
  useRejectKeywordMutation,
  useSetKeywordTypeMutation,
} = apiSite;