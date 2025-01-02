import React from "react";
import {brandsOperations} from "../../../store/brands";
import {connect} from "react-redux";
function BrandRender({dispatch, item}) {
    const {id, name, img} = item
    return(
        <div>
            <p>id = {id}</p>
            <p>Название бренда - {name}</p>
            <img src={process.env.REACT_APP_SERVER + img} height={100}/>
            <button
                onClick={() => {
                    dispatch(brandsOperations.deleteBrand(id));
                    dispatch(brandsOperations.getBrands())
                }
            }
            >

                Удалить
            </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        language: state.language.data,
        brands: state.brands.data,

    };
};

export default connect(mapStateToProps) (BrandRender);