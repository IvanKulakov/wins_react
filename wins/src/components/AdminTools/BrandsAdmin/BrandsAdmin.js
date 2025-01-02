import React, {useEffect} from "react";
import Header from "../../Header/Header";
import AddBrand from "./AddBrand";
import {connect} from "react-redux";
import {brandsOperations} from "../../../store/brands";
import {Link} from "react-router";
import BrandRender from "./BrandRender";

function BrandsAdmin({dispatch, brands}){

    useEffect(() => {
        dispatch(brandsOperations.getBrands())
    }, [dispatch]);
    const allBrands =
        brands.map((item) => {
            return <BrandRender item={item} key={item.id}/>}
        )
    return(
        <div>
            <Header/>
            <AddBrand />
            <div>
                {
                    allBrands
                }
            </div>
            <Link
                className=""
                to="/admin">
                повернутись назад
            </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        brands: state.brands.data,

    };
};

export default connect(mapStateToProps) (BrandsAdmin);