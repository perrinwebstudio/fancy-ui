import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: '',
  type: 'success',
  header: '',
  show: false
}

export const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState,
  reducers: {
    notify(state, { payload }) {
      const { type = 'success', message, header, show = true } = payload
      state.type = type
      state.header = header
      state.message = message
      state.show = show
    }
  }
})

export const { notify } = notificationSlice.actions
