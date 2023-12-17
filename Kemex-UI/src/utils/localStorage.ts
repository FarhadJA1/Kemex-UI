import { IUser } from '@/store/types.ts'


export const addUserToLocalStorage = (user:IUser) =>{
  localStorage.setItem('admin', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () =>{
  localStorage.removeItem('admin')
}

export const getUserFromLocalStorage = () =>{
  const result = localStorage.getItem('admin')
  return result? JSON.parse(result): null
}