import { api } from './api'
import { transformResponseWithNotification } from '@crema/helpers'

export const apiAuth = api.injectEndpoints({
  endpoints: (build) => ({
    verifySignup: build.mutation({
      query: (body) => ({
        url: 'auth/signup/confirm',
        method: 'POST',
        body
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(response, 'Your email has been confirmed successfully, welcome onboard!')
      }
    }),
    verify2FA: build.mutation({
      query: (body) => ({
        url: 'auth/verify-2fa',
        method: 'POST',
        body
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(response, 'Login successfully')
      }
    }),
    emailLogin: build.mutation({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        body
      }),
      transformResponse: (response) => {
        return transformResponseWithNotification(response, 'Login successfully')
      }
    }),
    loginSocial: build.mutation({
      query: (body) => ({
        url: 'auth/social/signin',
        method: 'POST',
        body
      })
    })
  })
})

export const { 
  useLoginSocialMutation,
  useEmailLoginMutation,
  useVerify2FAMutation,
  useVerifySignupMutation
} = apiAuth
