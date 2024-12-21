import React from 'react';
import { Select } from 'antd';

const BrandsSelect = ({ key, value }) => {
  return <Select options={[{  key:{key}, value:{value} }]} />
};

export default BrandsSelect;
