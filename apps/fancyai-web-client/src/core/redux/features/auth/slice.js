import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apiAuth } from '../../../api/apiAuth'
import { api } from '../../../api/api'

const initialState = {
  apiToken: undefined,
  verify2FAToken: undefined,
  currentUser: undefined,
  actAsUserId: undefined,
  authInit: false,
  companies: [],
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateApiToken(state, action) {
      state.apiToken = action.payload
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    },
    logout(state) {
      state.currentUser = undefined
      state.apiToken = undefined
    },
    actAsUser(state, action) {
      state.actAsUserId = action.payload
      state.currentUser = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUser.matchFulfilled,
      (state, action) => {
        if (action.payload.data) {
          state.currentUser = {
            ...action.payload.data.user,
          }
          state.companies = action.payload.data.companies
        }
      },
    )
    .addMatcher(
      apiAuth.endpoints.emailLogin.matchFulfilled,
      (state, action) => {
        if (action.payload.token) {
          state.verify2FAToken = action.payload.token
        }
      },
    )
    .addMatcher(
      apiAuth.endpoints.verify2FA.matchFulfilled,
      (state, action) => {
        if (action.payload.token) {
          state.apiToken = action.payload.token
        }
      },
    )
    .addMatcher(
      apiAuth.endpoints.verifySignup.matchFulfilled,
      (state, action) => {
        if (action.payload.token) {
          state.apiToken = action.payload.token
          state.currentUser = {
            ...action.payload.user,
          }
        }
      },
    )
    .addMatcher(
      apiAuth.endpoints.loginSocial.matchFulfilled,
      (state, action) => {
        if (action.payload.data.token) {
          state.apiToken = action.payload.data.token
          state.currentUser = action.payload.data.user
        }
      },
    )
  }
})

export const authReducer = persistReducer(
  {
    key: 'appAuth',
    storage,
    whitelist: ['apiToken']
  },
  authSlice.reducer
)

export const { updateApiToken, setCurrentUser, logout, actAsUser } =
  authSlice.actions
