import { transformResponseWithNotification } from "@crema/helpers";
import { api } from "./api";

export const apiBilling = api.injectEndpoints({
  endpoints: (build) => ({
    getCompanyBillingDetail: build.query({
      query: ({ companyId }) => ({
        url: `company/${companyId}/billing/detail`,
        method: "GET",
      }),
      providesTags: ['CompanyBillingDetail']
    }),
    addStripePaymentMethod: build.mutation({
      query: ({ companyId, paymentMethodId, billingAddress }) => ({
        url: `billing/${companyId}/method/stripe`,
        method: "POST",
        body: {
          paymentMethodId,
          billingAddress
        },
      }),
      invalidatesTags: ['CompanyBillingDetail'],
      transformResponse: (response) => {
        return transformResponseWithNotification(response, 'Payment method added successfully')
      }
    }),
    getPaypalLink: build.mutation({
      query: ({ companyId }) => ({
        url: `billing/${companyId}/method/paypal`,
        method: "POST",
      }),
    }),
    submitPaypalToken: build.mutation({
      query: ({ token }) => ({
        url: `billing/paypal/checkout/return?token=${token}`,
        method: "GET",
      }),
    }),
    getCompanyNextBillingAmount: build.mutation({
      query: ({ companyId }) => ({
        url: `company/${companyId}/billing/amount`,
        method: "GET",
      }),
    }),
    getSiteSubscriptionPlans: build.query({
      query: () => ({
        url: `billing/billing-plan/`,
        method: "GET",
      }),
    }),
    getCompanyPaymentHistory: build.query({
      query: ({ companyId }) => ({
        url: `company/${companyId}/payment/history`,
        method: "GET",
      }),
      providesTags: ['CompanyPaymentHistory']
    }),
  }),
});

export const {
  useGetCompanyBillingDetailQuery,
  useAddStripePaymentMethodMutation,
  useGetPaypalLinkMutation,
  useSubmitPaypalTokenMutation,
  useGetCompanyNextBillingAmountMutation,
  useGetSiteSubscriptionPlansQuery,
  useGetCompanyPaymentHistoryQuery
} = apiBilling;
