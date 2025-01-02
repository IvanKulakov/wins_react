import React from "react";
import Header from "../../Header/Header";
import AddProduct from "./AddProduct";

function ProductAdmin () {
    return (
        <div>
            <Header/>
            <div className="wrapper">
                <AddProduct />
            </div>

        </div>
    )
}
export default ProductAdmin;