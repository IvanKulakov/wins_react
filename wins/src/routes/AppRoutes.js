import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import DeliveryPayment from "../pages/Delivery&payment/DeliveryPayment";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/main' element={<Main />}/>
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route exact path='/delivery_payment' element={<DeliveryPayment />}/>
            </Routes>
        </Router>
    );
}


export default AppRoutes;