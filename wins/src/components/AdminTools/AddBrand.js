import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import {brandsOperations} from "../../store/brands";

const AddBrand = ({ dispatch }) => {
    const [name, setName] = useState('');
    const addNewType = () => {
        const newType = {
            name: name,
        };
        dispatch(brandsOperations.newBrands(newType));
    };
    return (
        <div>
            <h2>Добавить новый бренд</h2>
            <div>
                <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
            </div>
            { name ? <Button onClick={() => addNewType()}>Добавить</Button> : undefined}
        </div>
    );
};
export default connect(null)(AddBrand);
