import {
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { environment } from '../../environments/environment'

export const apiUserBaseQuery = fetchBaseQuery({
  baseUrl: `${environment.apiHost}/`,
  prepareHeaders: (headers, { getState }) => {
    const apiToken = getState().authSlice.apiToken
    const actAsUserId = getState().authSlice.actAsUserId

    headers.set('Accept', 'application/json')

    if (apiToken) {
      let authorizationHeader = `Bearer ${apiToken}`
      if (actAsUserId) {
        authorizationHeader = `${authorizationHeader} ${actAsUserId}`
      }
      headers.set('authorization', authorizationHeader)
    }

    if (actAsUserId) {
      headers.set('ACT_AS_USER_ID', actAsUserId.toString())
    }

    return headers
  }
})

export const freshApiBaseQuery = fetchBaseQuery({
  baseUrl: ''
})
