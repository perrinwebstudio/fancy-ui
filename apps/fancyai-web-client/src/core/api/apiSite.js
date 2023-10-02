import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanySites: build.query({
      query: ({ companyId }) => ({
        url: `site/${companyId}`,
        method: "GET",
      }),
      providesTags: ['Sites']
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
        url: `site/${siteId}`,
        method: "PATCH",
        body: {
          "updates": site
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
  }),
});

export const {
  useGetCompanySitesQuery,
  useStoreCompanySiteMutation,
  useGetSiteQuery,
  useUpdateSiteMutation,
} = apiSite;
