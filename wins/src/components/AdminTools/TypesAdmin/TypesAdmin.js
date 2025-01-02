import React, {useEffect, useState} from "react";
import Header from "../../Header/Header";
import AddType from "./AddType";
import {connect} from "react-redux";
import TypeSelect from "./TypeSelect";
import {typeOperations} from "../../../store/type";
import {Select} from "antd";
import {Link} from "react-router";

function TypesAdmin ({dispatch, type}) {
    const [types, setTypes] = useState(0);

    useEffect(() => {
        dispatch(typeOperations.getType())
    }, [dispatch]);
    const handleChangeTypes = (value) => {
        setTypes((type.find((item) =>(item.name === value)).id));
    };
    console.log(types);
    const alltypes = type.map((item) => {
        return <TypeSelect name={item.name} value={item.name} key={item.id} />;
    });
    return(
        <div>
            <Header/>
            <AddType />
            <div className="wrapper">
                <p>Оберіть тип продукру для дій з ним</p>
                <Select defaultValue="types" style={{ width: 300 }} onChange={handleChangeTypes}>
                    {alltypes}
                </Select>
            </div>
            <button
                onClick={()=> {
                    dispatch(typeOperations.deleteType(types));
                    dispatch(typeOperations.getType())
                }}
            >
                Удалить
            </button>
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
        type: state.type.data,

    };
};

export default connect(mapStateToProps) (TypesAdmin);