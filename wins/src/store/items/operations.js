import axios from 'axios';
import actions from './actions';
import { message } from 'antd';


const getItems = () => (dispatch) => {
  axios.get('/api/products').then((res) => {

    dispatch(actions.setItemsData(res.data));
    dispatch(actions.setItemsLoading(false));
  });
};
const newItem = (bodyFormData) => (dispatch) => {
  axios({
    method: "post",
    url: "/api/products/",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
      .then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(actions.setItemsLoading(false));
  });
};


export default {
  getItems,
  newItem,
};
