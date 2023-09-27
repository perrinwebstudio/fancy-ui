import { api } from './api'

export const apiAuth = api.injectEndpoints({
  endpoints: (build) => ({
    emailLogin: build.mutation({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        body
      })
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

export const { useLoginSocialMutation, useEmailLoginMutation } = apiAuth
