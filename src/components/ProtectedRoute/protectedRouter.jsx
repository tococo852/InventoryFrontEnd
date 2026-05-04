import useAuth from "../../App/context/auth/useAuth"
import { Outlet } from "react-router";

import { Navigate } from "react-router"
const ProtectedRoute = () => {
  const { token } = useAuth()
  
  if (!token) return <Navigate to="/login" replace />
  return <Outlet />
}

export default ProtectedRoute