import axios from 'axios';
import actions from './actions';
import {message} from "antd";

const getType = () => (dispatch) => {
  axios.get('/api/type').then((res) => {
    dispatch(actions.setTypeData(res.data));
    dispatch(actions.setTypeLoading(false));
  });
};
const newType = (data) => (dispatch) => {
  axios.post('/api/type', data).then((res) => {
    message.success(`${res.status}`, 2);

    dispatch(actions.setTypeData(res.data));
    dispatch(actions.setTypeLoading(false));
  });
};


export default {
  getType,
  newType,
};
