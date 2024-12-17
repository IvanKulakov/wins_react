import React from 'react';
import Header from "../../components/Header/Header";
import AddProduct from "../../components/AdminTools/AddProduct";
import AddType from "../../components/AdminTools/AddType";

function AdminTool(props) {
    return (
        <div className="wrapper">
            <Header />
            <p>ADMINTOOL</p>
            <AddProduct />
            <AddType />
        </div>
    );
}

export default AdminTool;