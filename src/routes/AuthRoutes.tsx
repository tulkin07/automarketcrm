import React, { type ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSession } from '../context/SessionContext'

export default function AuthRoutes() {
  const {isAuth,loading} = useSession()
  if(loading) return null
  return isAuth?<Navigate to="/" replace/>:<Outlet/>
}
