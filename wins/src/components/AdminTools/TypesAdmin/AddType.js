import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import {typeOperations} from "../../../store/type";

const AddType = ({ dispatch , token}) => {
  const [name, setName] = useState('');
  const addNewType = () => {
    const newType = {
      name: name.toLowerCase(),
    };
    dispatch(typeOperations.newType(newType));
    dispatch(typeOperations.getType())
  };
  return (
    <div className="wrapper">
      <h2>Добавить новый тип</h2>
      <div>
        <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
      </div>
      { name ? <Button onClick={() => addNewType()}>Добавить</Button> : undefined}
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        language: state.language.data,
        token: state.token.data,
    };
};

export default connect(mapStateToProps) (AddType);
