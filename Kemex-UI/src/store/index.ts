import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@/store/appReducer.ts'
import  productReducer  from '@/store/productReducer.ts'
import authSlice from '@/store/authReducer.ts'


export const store = configureStore({
  reducer:{
    app:appReducer,
    products: productReducer,
    auth: authSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch