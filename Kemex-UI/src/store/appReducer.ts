import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  count: number
}

const initialState:IInitialState = {
  count:0
}

export  const appReducer = createSlice({
  name:'app',
  initialState,
  reducers:{}
})

export const {} = appReducer.actions

export default appReducer.reducer