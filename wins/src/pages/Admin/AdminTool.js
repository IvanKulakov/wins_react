import React from 'react';
import Header from "../../components/Header/Header";
import AddProduct from "../../components/AdminTools/AddProduct";
import AddType from "../../components/AdminTools/AddType";
import AddBrand from "../../components/AdminTools/AddBrand";

function AdminTool(props) {
    return (
        <div className="wrapper">
            <Header />
            <p>ADMINTOOL</p>
            <AddProduct />
            <AddType />
            <AddBrand />
        </div>
    );
}

export default AdminTool;