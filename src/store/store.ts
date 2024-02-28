import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import users from './slices/userSlice'


export const store = configureStore({
  reducer: {
    users
  },
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 