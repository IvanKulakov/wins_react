import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import DeliveryPayment from "../pages/Delivery&payment/DeliveryPayment";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import AdminTool from "../pages/Admin/AdminTool";
import Login from "../pages/Login/Login";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/main' element={<Main />}/>
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path="/login" element={<Login />} />
                <Route element = {<ProtectedRoutes />}>
                    <Route path="/admin" element={<AdminTool/>} />
                </Route>
                <Route exact path='/delivery_payment' element={<DeliveryPayment />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );

}


export default AppRoutes;