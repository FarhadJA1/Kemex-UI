import axios from 'axios'
//import { getUserFromLocalStorage } from './localStorage'
import { removeToken } from './helperFunctions'


 const baseService = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL
})

baseService.interceptors.request.use((config) =>{
   //const user = getUserFromLocalStorage()
   const token = localStorage.getItem('token')
   
  if(token && config && config.headers){
     config.headers['Authorization'] = `Bearer ${token}`
     
  }
   return config
})

baseService.interceptors.response.use(response =>response,async (res) => {
  
  if(res.response?.status === 401){
    
   removeToken()
  }
  return Promise.reject(res)
})

export default baseService