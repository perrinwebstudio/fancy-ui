import { api } from './api'
import { transformResponseWithNotification } from '@crema/helpers'

export const testApiSite = api.injectEndpoints({
  endpoints: (build) => ({
    indexSites: build.query({
      query: (args) => ({
        url: `site/${args.company_id}`,
        method: 'GET'
      })
    }),
    storeSite: build.mutation({
      query: (args) => ({
        url: `site/${args.company_id}`,
        method: 'POST',
        body: args.data
      }),
      transformResponse: transformResponseWithNotification
    }),
    
  })
})

export const { 
  useIndexSitesQuery
} = testApiSite
