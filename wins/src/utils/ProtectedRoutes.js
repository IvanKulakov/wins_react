import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoutes(props) {
    let admin
    console.log(props);
    return admin ? <Outlet /> : <Navigate to="/login"/>
}

export default ProtectedRoutes