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
  axios({
    method: "post",
    url: "/api/brand/",
    data: data,
    headers: {"Content-Type": "multipart/form-data"},
  }).then((res) => {
    if (res.status === 200) {
    message.success(`${res.status}`, 2);
    message.success('Бренд добавлен!', 2)
  }
  })
      .catch((error) => {
        console.log(error);
        message.error(`${error.response.data.message}`, 2);
      });
    dispatch(actions.setBrandsLoading(false));
};

const deleteBrand = (dataId) => (dispatch) => {
  axios.delete(`/api/brand/${dataId}`).then(res => {
    message.success(`${res.status}`, 2)
  })
}



export default {
  getBrands,
  newBrands,
  deleteBrand,
};
