import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { useSession } from '../context/SessionContext'

export default function ProtectRoutes() {
  const {isAuth,loading} = useSession()
  if(loading) return null
  return isAuth?<Layout/>: <Navigate to={"/login"} replace/>
}
