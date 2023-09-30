import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanySites: build.query({
      query: ({ companyId }) => ({
        url: `site/${companyId}`,
        method: "GET",
      }),
    }),
    storeCompanySite: build.mutation({
      query: ({ companyId, site }) => ({
        url: `site/${companyId}`,
        method: "POST",
        body: site,
      })
    })
  }),
});

export const {
  useGetCompanySitesQuery,
  useStoreCompanySiteMutation,
} = apiSite;
