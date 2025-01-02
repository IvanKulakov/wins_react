import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import {brandsOperations} from "../../../store/brands";

const AddBrand = ({ dispatch }) => {
    const [name, setName] = useState('');
    const [imgURL1, setImgURL1] = useState(null);

    const handleChangeImg = (e)=>{
        setImgURL1(e.target.files[0])
    }
    const addNewType = () => {
        const newType = {
            name: name,
            img: imgURL1,

        };
        dispatch(brandsOperations.newBrands(newType));
        dispatch(brandsOperations.getBrands())
    };
    return (
        <div>
            <h2>Добавить новый бренд</h2>
            <div>
                <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
            </div>
            <input
                placeholder="img"
                type="file"
                onChange={handleChangeImg}/>

            { name ? <Button onClick={() => addNewType()}>Добавить</Button> : undefined}
        </div>
    );
};
export default connect(null)(AddBrand);
