import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanySites: build.query({
      query: ({ companyId }) => ({
        url: `site/${companyId}`,
        method: "GET",
      }),
    }),
    getSite: build.query({
      query: ({ siteId }) => ({
        url: `site/access/${siteId}`,
        method: "GET",
      }),
    }),
    storeCompanySite: build.mutation({
      query: ({ companyId, site }) => ({
        url: `site/${companyId}`,
        method: "POST",
        body: site,
      })
    }),
    updateSite: build.mutation({
      query: ({ siteId, site }) => ({
        url: `site/${siteId}`,
        method: "PATCH",
        body: {
          "updates": site
        },
      })
    }),
  }),
});

export const {
  useGetCompanySitesQuery,
  useStoreCompanySiteMutation,
  useGetSiteQuery,
  useUpdateSiteMutation,
} = apiSite;