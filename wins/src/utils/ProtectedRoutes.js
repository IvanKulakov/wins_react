import { Navigate } from "react-router-dom"

function ProtectedRoutes({ user, children }) {
    if(user.role !== "ADMIN"){
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtectedRoutes;