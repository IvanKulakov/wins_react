import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes() {
    let admin
    return admin ? <Outlet /> : <Navigate to="/login"/>
}

export default ProtectedRoutes