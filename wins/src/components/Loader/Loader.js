import React from 'react';
import { Spin } from 'antd';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader__wrapper wrapper">
      <Spin />
    </div>
  );
};

export default Loader;
