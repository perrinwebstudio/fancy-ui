import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import { authReducer, authSlice } from './features/auth/slice'
import { REDUCER_KEY_USER_API, api } from '../api/api'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import { RESET_STATE_ACTION_TYPE } from './resetStateAction'

// @TODO: might need to implement this
import { notificationSlice } from './features/notification/slice'
import { rtkQueryErrorLogger } from './middlewares/showResponseErrorMessage'

const reducers = {
  [authSlice.name]: authReducer,
  [REDUCER_KEY_USER_API]: api.reducer,
  [notificationSlice.name]: notificationSlice.reducer
}

const combinedReducer = combineReducers(reducers)

export const rootReducer = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {}
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([
      api.middleware,
      rtkQueryErrorLogger
    ])
})

export const persistor = persistStore(store)
