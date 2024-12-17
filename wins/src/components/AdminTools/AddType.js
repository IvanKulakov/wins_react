import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import {typeOperations} from "../../store/type";

const AddType = ({ dispatch }) => {
  const [name, setName] = useState('');
  const addNewType = () => {
    const newType = {
      name: name,
    };
    dispatch(typeOperations.newType(newType));
  };
  return (
    <div>
      <h2>Добавить новый тип</h2>
      <div>
        <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
      </div>
      { name ? <Button onClick={() => addNewType()}>Добавить</Button> : undefined}
    </div>
  );
};
export default connect(null)(AddType);
