import {
  isRejectedWithValue,
  isFulfilled,
} from '@reduxjs/toolkit'
import { notification } from 'antd'


const sendNotification = (_notification) => {
  notification.open({
    message: _notification.header,
    description: _notification.message,
    type: _notification.type,
    onClick: () => {
      console.log('Notification Clicked!')
    }
  })
}

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger =
  (api) => (next) => (action) => {
    const notification = {
      show: true,
      type: 'error',
      message: '',
      header: ''
    }
    if (isRejectedWithValue(action)) {
      const error = action.payload
      if (error.status === 500) {
        notification.message =
          'So sorry! This error is from our end. We will fix it as soon as possbile.'
        notification.header = 'Server error'
      } else if (error.status === 400 || error.status === 403 || error.status === 401 || error.status === 422) {
        notification.message = error.data.msg
        notification.header = 'Error'
      } else if (error.status === 404) {
        notification.message = 'Not found'
        notification.header = 'Error'
      } else if (error.status === 'FETCH_ERROR') {
        notification.message = 'Network error, please check your network'
        notification.header = 'Fetch Error'
      } else {
        notification.show = false
      }

      if (notification.show && !error.omitNotification) {
        sendNotification(notification)
      }
    } else if (
      isFulfilled(action)
    ) {
      console.log('action.payload', action.payload)
      if (action.payload.showNotification) {
        notification.message = action.payload.msg || 'Success'
        notification.header = 'Success'
        notification.type = 'success'
        sendNotification(notification)
      }
    }

    return next(action)
  }
