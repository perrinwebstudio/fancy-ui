import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiPerformanceReport = api.injectEndpoints({
  endpoints: (build) => ({
    fetchStrageticAnalysis: build.query({
      query: (params) => ({
        url: `performance/stragetic-analysis/`,
        method: "GET",
        params,
      }),
    }),
    fetchRevenueData: build.query({
      query: (params) => ({
        url: `performance/revenue/`,
        method: "GET",
        params,
      }),
    }),
    fetchSearchImpressionClick: build.query({
      query: (params) => ({
        url: `performance/search-impressions-clicks/`,
        method: "GET",
        params,
      }),
    }),
    fetchConversionsRevenue: build.query({
      query: (params) => ({
        url: `performance/conversions-revenue/`,
        method: "GET",
        params,
      }),
    }),
    fetchKeywordPerfomance: build.query({
      query: (params) => ({
        url: `performance/keyword/`,
        method: "GET",
        params,
      }),
    }),
    fetchSitePerformance: build.query({
      query: (params) => ({
        url: `performance/site/`,
        method: "GET",
        params,
      }),
    }),
    fetchSearchPerformance: build.query({
      query: (params) => ({
        url: `performance/search/`,
        method: "GET",
        params,
      }),
    }),
    fetchUserPerformance: build.query({
      query: (params) => ({
        url: `performance/user/`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useFetchStrageticAnalysisQuery,
  useFetchRevenueDataQuery,
  useFetchSearchImpressionClickQuery,
  useFetchConversionsRevenueQuery,
  useFetchKeywordPerfomanceQuery,
  useFetchSitePerformanceQuery,
  useFetchSearchPerformanceQuery,
  useFetchUserPerformanceQuery,
} = apiPerformanceReport;
