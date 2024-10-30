import { configureStore } from '@reduxjs/toolkit'
import quoteReducer from './quoteSlice'

export const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
