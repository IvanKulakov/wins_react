import { Outlet, Navigate } from "react-router-dom"
import {connect} from "react-redux";

function ProtectedRoutes({ dispatch, user }) {
    let admin = !!user.name;
    console.log(admin)
    return ( admin ? <Outlet /> : <Navigate to="/login"/>)
}
const mapStateToProps = (state) => {
    return {
        user: state.user.data,
    };
};

export default connect(mapStateToProps) (ProtectedRoutes);