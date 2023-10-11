import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiOptimization = api.injectEndpoints({
  endpoints: (build) => ({
    getOptimizations: build.query({
      query: ({ siteId }) => ({
        url: `optimisations?siteId=${siteId}`,
        method: "GET",
      }),
      providesTags: ['Optimizations']
    }),
  }),
});

export const {
  useGetOptimizationsQuery,
} = apiOptimization;
