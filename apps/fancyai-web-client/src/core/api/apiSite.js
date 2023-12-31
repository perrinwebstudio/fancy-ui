import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanySites: build.query({
      query: ({ companyId }) => ({
        url: `site/${companyId}`,
        method: "GET",
      }),
      providesTags: ['Sites', 'AllSites']
    }),
    getSite: build.query({
      query: ({ siteId }) => ({
        url: `site/access/${siteId}`,
        method: "GET",
      }),
      providesTags: ['Sites']
    }),
    storeCompanySite: build.mutation({
      query: ({ companyId, site }) => ({
        url: `site/${companyId}`,
        method: "POST",
        body: site,
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Sites']
        return []
      },
    }),
    updateSite: build.mutation({
      query: ({ siteId, site }) => ({
        url: `site/update/${siteId}`,
        method: "PATCH",
        body: {
          "updates": site
        },
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Sites', 'BillingAmount']
        return []
      },
      transformResponse: (response, meta, arg) => {
        if (arg.showNotification) {
          return transformResponseWithNotification(response, 'Site updated successfully');
        }
        return response
      },
    }),
    deleteSite: build.mutation({
      query: ({ siteId }) => ({
        url: `site/${siteId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['AllSites', 'BillingAmount']
        return []
      },
      transformResponse: (response, meta, arg) => {
        return transformResponseWithNotification(response, 'Site deleted successfully');
      },
    }),
    connectGoogleService: build.mutation({
      query: ({ siteId, type, code, redirectUri }) => ({
        url: `googletokens`,
        method: "POST",
        body: {
          code,
          siteId,
          type,
          redirectUri
        },
      }),
      invalidatesTags: (_result, error, _arg) => {
        if (!error) return ['Sites']
        return []
      },
      transformResponse: (response, meta, arg) => {
        if (arg.showNotification) {
          return transformResponseWithNotification(response, 'Site updated successfully');
        }
        return response
      },
    }),
    getGSCSites: build.mutation({
      query: ({ siteId, type, redirectUri }) => {
        return {
          url: `gscsites?siteId=${siteId}&type=${type}&redirectUri=${encodeURIComponent(redirectUri)}`,
          method: "GET",
        }
      },
    }),
    getGAAccounts: build.mutation({
      query: ({ siteId, type, redirectUri }) => {
        return {
          url: `gaproperties?siteId=${siteId}&type=${type}&redirectUri=${encodeURIComponent(redirectUri)}`,
          method: "GET",
        }
      },
    }),
    getStrategyPlanOverview: build.query({
      query: ({ siteId }) => ({
        url: `site/${siteId}/strategyPlanOverview`,
        method: "GET",
      }),
      providesTags: ['Keywords', 'Contents', 'Backlink', 'Optimizations']
    }),
  }),
});

export const {
  useGetCompanySitesQuery,
  useStoreCompanySiteMutation,
  useGetSiteQuery,
  useUpdateSiteMutation,
  useConnectGoogleServiceMutation,
  useGetGSCSitesMutation,
  useGetGAAccountsMutation,
  useGetStrategyPlanOverviewQuery,
  useDeleteSiteMutation
} = apiSite;
