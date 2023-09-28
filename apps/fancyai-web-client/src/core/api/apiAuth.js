import { api } from './api'
import { transformResponseWithNotification } from '@crema/helpers'

export const apiAuth = api.injectEndpoints({
  endpoints: (build) => ({
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

export const { useLoginSocialMutation, useEmailLoginMutation } = apiAuth
