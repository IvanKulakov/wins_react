import { Navigate, useLocation} from "react-router-dom"

function ProtectedRoutes({ user, children }) {
    const location = useLocation();
    if(user.role !== "ADMIN"){
        return <Navigate to="/login"/>
    }
    return children
}

export default ProtectedRoutes;