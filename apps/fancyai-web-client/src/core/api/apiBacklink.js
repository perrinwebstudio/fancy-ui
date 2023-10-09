import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiBacklink = api.injectEndpoints({
  endpoints: (build) => ({
    getBacklinkConfig: build.query({
      query: ({ siteId }) => ({
        url: `site/access/${siteId}`, // @TODO: use a separate endpoint instead 
        method: "GET",
      }),
      providesTags: ['Backlink'],
      transformResponse: (response, meta, arg) => {
        return {
          data: response?.data?.backlinkConfig || {}
        }
      },
    }),
    getBacklinkOpportunities: build.query({
      query: ({ siteId }) => ({
        url: `backlinks?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Backlink']
    }),
    updateBacklinkOpportunity: build.mutation({
      query: ({ backlinkId, updates }) => ({
        url: `backlinks/${backlinkId}`,
        method: "PATCH",
        body: {
          updates
        }
      }),
      invalidatesTags: ['Backlink'],
      transformResponse: (response, meta, args) => {
        if (args.showNotification) {
          let message = args.showNotification
          if (typeof message === 'boolean') {
            message = 'Backlink opportunity updated successfully'
          }
          return transformResponseWithNotification(response, message)
        }
        return response
      }
    }),
  }),
});

export const {
  useGetBacklinkOpportunitiesQuery,
  useGetBacklinkConfigQuery,
  useUpdateBacklinkOpportunityMutation
} = apiBacklink;
