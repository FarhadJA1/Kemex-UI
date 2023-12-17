import { IUser } from '@/store/types.ts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getToken, removeToken, setToken } from '@/utils/helperFunctions.ts'
import baseService from '@/utils/baseService.ts'
import { showSuccessMessage } from '@/constants/notifications.ts'
//import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '@/utils/localStorage.ts'
import { getUserFromLocalStorage } from '@/utils/localStorage.ts'

interface IInitialState {
  token: string | null
  loading: boolean
  user: IUser | {}
  error: null | string | undefined
}

const initialState:IInitialState = {
  token : getToken(),
  loading: false,
  user: getUserFromLocalStorage(),
  error: null
}

// const fetchUserData = createAsyncThunk(
//   'auth/fetchUserData',
//   async (_, {rejectWithValue}) =>{
//     try {
//       const accessToken = getToken()
//       baseService.defaults.headers.Authorization = `${accessToken}`
//       const res = await baseService.get('/Auth/Login')
//       return{...res.data, accessToken}
//     }catch (e){
//       removeToken()
//       return rejectWithValue('')
//     }
//   }
// )

export const loginUser = createAsyncThunk(
  'auth/login',
  async (payload:IUser) =>{
    const res = await baseService.post('/Auth/Login', payload)

    setToken(res.data)
    //addUserToLocalStorage(payload)
    return res.data
  }
)

export const signOut = createAsyncThunk('auth/signOut', async () => {
  removeToken();
  //removeUserFromLocalStorage()
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload
      state.user = action.meta.arg
      showSuccessMessage()
      state.loading = false
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error.message
      state.token = null
      state.loading = false
    })

    builder.addCase(signOut.pending, (state) => {
      state.loading = true
    })
    builder.addCase(signOut.fulfilled, (state) => {
      state.token = null
      state.user = {}
      state.loading = false
    })
    builder.addCase(signOut.rejected, (state, action) => {
      state.error = action.error.message
      state.token = null
      state.loading = false
    })
  }
})

export const {} = authSlice.actions
export default authSlice.reducer