
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useEffect } from 'react'

export default function AuthRoute({ children }) {
    const { isAuth } = useAuthContext()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (!isAuth) {
    //         navigate("/login")
    //     }
    // }, [isAuth])

    return !isAuth ? <Outlet /> : <Navigate replace to={"/dashboard"} />
}
