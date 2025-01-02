import axios from 'axios';
import actions from './actions';
import {message} from "antd";
import * as url from "url";

const getType = () => (dispatch) => {
  axios.get('/api/type').then((res) => {
    dispatch(actions.setTypeData(res.data));
    dispatch(actions.setTypeLoading(false));
  });
};
const newType = (data) => (dispatch) => {
  axios.post("/api/type" , data).then((res) => {
    if (res.status === 200) {
      message.success(`${res.status}`, 2);
      message.success('Тип добавлен!', 2)

    }
  })
  .catch((error) => {
      console.log(error);
      message.error(`${error.response.data.message}`, 2);
    });
    dispatch(actions.setTypeLoading(false));
};

const deleteType = (dataId) => (dispatch) => {
  axios.delete(`/api/type/${dataId}`).then(res => {
    message.success(`${res.status}`, 2)
  })
}


export default {
  getType,
  newType,
  deleteType,
};
