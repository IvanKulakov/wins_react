import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Main from "../pages/Main/Main";
import DeliveryPayment from "../pages/Delivery&payment/DeliveryPayment";
import NotFound from "../pages/NotFound/NotFound";
import AdminTool from "../components/AdminTools/Admin/AdminTool";
import Login from "../pages/LoginList/LoginList";
import {connect} from "react-redux";
import {tokenOperations} from "../store/token";
import axios from "axios";
import {customerOperations} from "../store/user";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import RegistartionList from "../pages/RegistrationList/RegistartionList";
import UserInfo from "../pages/UserInfo/UserInfo";
import {languageOperations} from "../store/language";
import DeliveryPage from "../pages/Delivery/DeliveryPage";
import PaymentPage from "../pages/Payment/PaymentPage";
import ExchangePage from "../pages/ Exchange/ExchangePage";
import ContactsPage from "../pages/Contacts/ContactsPage";
import CertificatePage from "../pages/Сertificate/CertificatePage";
import TypesAdmin from "../components/AdminTools/TypesAdmin/TypesAdmin";
import BrandsAdmin from "../components/AdminTools/BrandsAdmin/BrandsAdmin";
import ProductAdmin from "../components/AdminTools/ProductAdmin/ProductAdmin";
import ItemOpen from "../pages/ItemOpen/ItemOpen";

function AppRoutes({ dispatch, user, token }) {
    useEffect(() => {
        const tokenAuth = JSON.parse(localStorage.getItem('token'));
        if (tokenAuth) {
            axios.defaults.headers.common.Authorization = tokenAuth;
            dispatch(customerOperations.getCustomer())
        }
        else {
            axios.defaults.headers.common.Authorization = null;
        }
        dispatch(tokenOperations.getToken());
        dispatch(languageOperations.getLanguage())
        }, [dispatch]);
        const isAuth = !!user.name;
    return (
        <Router>
            <Routes>
                <Route path='/main' element={<Main />}/>
                <Route path='/main/:id' element={<ItemOpen />}/>
                <Route path="/" element={<Navigate replace to="/main" />} />
                <Route path="/login" element={isAuth ? <Navigate to="/userInfo"/> : <Login />} />
                <Route path="/registration" element={isAuth ? <Navigate to="/userInfo"/> : <RegistartionList />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/certificate" element={<CertificatePage />}/>
                <Route path="/delivery" element={<DeliveryPage />}/>
                <Route path="/payment" element={<PaymentPage />}/>
                <Route path="/exchange" element={<ExchangePage />}/>
                <Route path="/contacts" element={<ContactsPage />}/>
                <Route path='/admin' element={
                    <ProtectedRoutes user={user}>
                        <AdminTool />
                    </ProtectedRoutes>
                }
                />
                <Route path='/admin/brands' element={
                    <ProtectedRoutes user={user}>
                        <BrandsAdmin />
                    </ProtectedRoutes>
                }
                />
                <Route path='/admin/types' element={
                    <ProtectedRoutes user={user}>
                        <TypesAdmin />
                    </ProtectedRoutes>
                }
                />
                <Route path='/admin/products' element={
                    <ProtectedRoutes user={user}>
                        <ProductAdmin />
                    </ProtectedRoutes>
                }
                />
                <Route path='/delivery_payment' element={<DeliveryPayment />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );

}

const mapStateToProps = (state) => {
    return {
        token: state.token.data,
        user: state.user.data,
        language: state.language.data,

    };
};

export default connect(mapStateToProps) (AppRoutes);