import { ReactElement } from 'react'
import { useAppSelector } from '@/store/hooks.ts'
import { Navigate } from 'react-router-dom'

interface IProps {
  children: ReactElement
}

const ProtectedRoute = ({ children }: IProps) => {
  const { token}  = useAppSelector(state => state.auth)
  if(!token) {
    return <Navigate to={'/login'}/>
  }
  return children
}

//Object.entries(user).length === 0

export default ProtectedRoute
