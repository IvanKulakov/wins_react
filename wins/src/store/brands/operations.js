import axios from 'axios';
import actions from './actions';
import {message} from "antd";

const getBrands = () => (dispatch) => {
  axios.get('/api/brand').then((res) => {
    dispatch(actions.setBrandsData(res.data));
    dispatch(actions.setBrandsLoading(false));
  });
};
const newBrands = (data) => (dispatch) => {
  axios.post('/api/brand', data).then((res) => {
    message.success(`${res.status}`, 2);

    dispatch(actions.setBrandsData(res.data));
    dispatch(actions.setBrandsLoading(false));
  });
};



export default {
  getBrands,
  newBrands,
};
