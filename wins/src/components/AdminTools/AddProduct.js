import React, {useEffect, useMemo, useState} from 'react';
import {Button, Input, Select, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import BrandsSelect from "./BrandsSelect";
import {itemsOperations} from "../../store/items";
import {brandsOperations} from "../../store/brands";
import TypeSelect from "./TypeSelect";
import {typeOperations} from "../../store/type";

const AddProduct = ({ brands, type, dispatch }) => {
    useEffect(() => {
        dispatch(typeOperations.getType())
        dispatch(brandsOperations.getBrands())
    }, [dispatch]);
  const [imgURL1, setImgURL1] = useState('');
  const [brand, setBrand] = useState('');
  const [types, setTypes] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [myCustomParam, setMyCustomParam] = useState('');
  const handleChangeBrands = (value) => {
      setBrand((brands.find((item) =>(item.name === value)).id));
  };
    const handleChangeTypes = (value) => {
        setTypes((type.find((item) =>(item.name === value)).id));
    };
  const allbrands = brands.map((item) => {
    return <BrandsSelect name={item.name} value={item.name} key={item.id} />;
  });
    const alltypes = type.map((item) => {
        return <TypeSelect name={item.name} value={item.name} key={item.id} />;
    });
  const addProductFunc = () => {
    const newProduct = {
      name: name,
      price: price,
      brand: brand,
      type: types,
      img: imgURL1,
      quantity: quantity,
      about: myCustomParam,
    };
    dispatch(itemsOperations.newItem(newProduct));
  };

  return (
    <div>
      <p>Добавление продукта</p>

        <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
            maxCount={1}
        >
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
        </Upload>
        <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
      <Input
        placeholder="price"
        value={price}
        onInput={(e) => setPrice(e.target.value)}
      />
      <Select defaultValue="brands" style={{ width: 300 }} onChange={handleChangeBrands}>
        {allbrands}
      </Select>
        <Select defaultValue="types" style={{ width: 300 }} onChange={handleChangeTypes}>
            {alltypes}
        </Select>
      <Input placeholder="quantity" value={quantity} onInput={(e) => setQuantity(e.target.value)} />
      <Input
        placeholder="myCustomParam"
        value={myCustomParam}
        onInput={(e) => setMyCustomParam(e.target.value)}
      />
      <Button onClick={() => addProductFunc()}>Добавить</Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
      brands: state.brands.data,
      type: state.type.data,
  };
};

export default connect(mapStateToProps)(AddProduct);
