import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/currentuser'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})