import React, {useEffect, useState} from 'react';
import {Button, Input, Select, Upload} from 'antd';
import { connect } from 'react-redux';
import BrandsSelect from "../BrandsAdmin/BrandsSelect";
import {itemsOperations} from "../../../store/items";
import {brandsOperations} from "../../../store/brands";
import TypeSelect from "../TypesAdmin/TypeSelect";
import {typeOperations} from "../../../store/type";

const AddProduct = ({ brands, type, dispatch }) => {
    useEffect(() => {
        dispatch(typeOperations.getType())
        dispatch(brandsOperations.getBrands())
        dispatch(itemsOperations.getItems())
    }, [dispatch]);
  const [imgURL1, setImgURL1] = useState(null);
  const [brand, setBrand] = useState(1);
  const [types, setTypes] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [stars, setStars] = useState(0);
  const [options, setOptions] = useState('');
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
    const handleChangeImg = (e)=>{
        setImgURL1(e.target.files[0])
    }
  const addProductFunc = () => {
    const newProduct = {
      name: name,
      price: price,
      brandId: brand,
      typeId: types,
      img: imgURL1,
      quantity: quantity,
      about: myCustomParam,
      stars: stars,
      options: options,
    };
    dispatch(itemsOperations.newItem(newProduct));
  };

  return (
    <div>
      <p>Добавление продукта</p>

        <input
            placeholder="img"
            type="file"
            onChange={handleChangeImg}/>
        <p>name</p>
        <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
        <p>price</p>
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
        <p>quantity</p>
      <Input placeholder="quantity" value={quantity} onInput={(e) => setQuantity(e.target.value)} />
      <Input
        placeholder="about"
        value={myCustomParam}
        onInput={(e) => setMyCustomParam(e.target.value)}
      />
        <p>starts</p>
        <Input
            placeholder="stars"
            value={stars}
            onInput={(e) => setStars(e.target.value)}
        />
        <p>options</p>
        <Input
            placeholder="options"
            value={options}
            onInput={(e) => setOptions(e.target.value)}
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
