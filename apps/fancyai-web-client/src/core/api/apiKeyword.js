import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiKeyword = api.injectEndpoints({
  endpoints: (build) => ({
    getResearchKeywords: build.query({
      query: ({ siteId }) => ({
        url: `keywords/list/${siteId}`,
        method: "GET",
      }),
      providesTags: ['Keywords']
    }),
    getLongTermKeywords: build.query({
      query: ({ siteId }) => ({
        url: `keywords/longterm/${siteId}`,
        method: "GET",
      }),
      providesTags: ['Keywords']
    }),
    getShortTermsKeywords: build.query({
      query: ({ siteId }) => ({
        url: `keywords/shortterm/${siteId}`,
        method: "GET",
      }),
      providesTags: ['Keywords']
    }),
    rejectKeyword: build.mutation({
      query: ({ siteId, keywordId }) => ({
        url: `keywords/reject/${siteId}/${keywordId}`,
        method: "PATCH",
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Keywords']
        return []
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(response, 'Keyword removed');
      },
    }),
    setKeywordType: build.mutation({
      query: ({ siteId, keywordId, keywordType }) => ({
        url: `keywords/settype/${siteId}/${keywordId}`,
        method: "PATCH",
        body: {
          keywordType,
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
} = apiKeyword;
