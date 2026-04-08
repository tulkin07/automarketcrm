import React, { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function CheckUserRole({children,roles}:{children:ReactNode,roles:string[]}) {
    const {user} = useUser()
  return (
   <>
    {roles?.some(item=>item==user?.role)?children:<Navigate to="/404" replace/>}
   </>
  )
}
