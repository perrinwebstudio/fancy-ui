import { api } from "./api";
import { transformResponseWithNotification } from "@crema/helpers";

export const apiAuth = api.injectEndpoints({
  endpoints: (build) => ({
    verifySignup: build.mutation({
      query: (body) => ({
        url: "auth/signup/confirm",
        method: "POST",
        body,
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(
          response,
          "Your email has been confirmed successfully, welcome onboard!"
        );
      },
    }),
    verify2FA: build.mutation({
      query: (body) => ({
        url: "auth/verify-2fa",
        method: "POST",
        body,
      }),
    }),
    emailLogin: build.mutation({
      query: (body) => ({
        url: "auth/signin",
        method: "POST",
        body,
      }),
    }),

    userSignup: build.mutation({
      query: (body) => ({
        url: "auth/signup",
        method: "POST",
        body,
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(
          response,
          "Signup successfully"
        );
      },
    }),
    forgotPassword: build.mutation({
      query: (body) => ({
        url: "password/forgot",
        method: "POST",
        body,
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(response, response.msg);
      },
    }),
    resetPassword: build.mutation({
      query: (body) => ({
        url: "password/reset",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(response, response.msg);
      },
    }),
    loginSocial: build.mutation({
      query: (body) => ({
        url: "auth/social/signin",
        method: "POST",
        body,
      }),
    }),
    getCompanySites: build.mutation({
      query: ({ companyId }) => ({
        url: `site/${companyId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginSocialMutation,
  useEmailLoginMutation,
  useVerify2FAMutation,
  useVerifySignupMutation,
  useGetCompanySitesMutation,
  useUserSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = apiAuth;
