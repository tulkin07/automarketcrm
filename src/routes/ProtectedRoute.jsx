import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import Layout from '../components/Layout'

export default function ProtectedRoute({ children }) {
    const { isAuth, setAuth } = useAuthContext()

    return isAuth ? <Layout/> : <Navigate replace to={"/login"} />
}
