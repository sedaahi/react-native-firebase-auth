import { configureStore } from '@reduxjs/toolkit'
import useReducer  from './userSlice'
import { thunk } from 'redux-thunk' 

export const store = configureStore({
  reducer: {
    user:useReducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false})
})