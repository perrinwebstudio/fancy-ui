import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiSite = api.injectEndpoints({
  endpoints: (build) => ({
    getNewContents: build.query({
      query: ({ siteId }) => ({
        url: `content/new?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Contents']
    }),
    getContentUpdates: build.query({
      query: ({ siteId }) => ({
        url: `content/updates?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Contents']
    }),
  }),
});

export const {
} = apiSite;
