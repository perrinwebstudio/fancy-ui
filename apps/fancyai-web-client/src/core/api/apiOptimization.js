import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiOptimization = api.injectEndpoints({
  endpoints: (build) => ({
    getOptimizations: build.query({
      query: ({ siteId }) => ({
        url: `optimisations/${siteId}`,
        method: "GET",
      }),
      providesTags: ['Optimizations']
    }),
    getOptimizationSummary: build.query({
      query: ({ siteId }) => ({
        url: `optimisations/summary/${siteId}`,
        method: "GET",
      }),
      providesTags: ['Optimizations']
    }),
    downloadOptimizationCsvByType: build.mutation({
      query: ({ siteId, type }) => ({
        url: `optimisations/download/${siteId}?optimisationType=${type}`,
        method: "GET",
      }),
      // transformResponse: (response) => {
      //   return transformResponseWithNotification({
      //     csv: response
      //   }, 'Download CSV Successfully')
      // }
    }),
  }),
});

export const {
  useGetOptimizationsQuery,
  useGetOptimizationSummaryQuery,
  useDownloadOptimizationCsvByTypeMutation
} = apiOptimization;
