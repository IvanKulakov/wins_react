import React from 'react';
import { Select } from 'antd';

const TypeSelect = ({ name, key, value }) => {
    return <Select options={[{  key:{key}, value:{value} }]} />
};

export default TypeSelect;