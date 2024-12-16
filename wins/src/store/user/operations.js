import axios from 'axios';
import actions from './actions';
import actionsToken from '../token/actions';

const setCustomer = (userData) => (dispatch) => {
  axios.post(`/api/user/login`, userData).then((res) => {
    dispatch(actions.setCustomerData(res.data));
    dispatch(actions.setCustomerLoading(false));
  });
};
const setLoginCustomer = (userData) => (dispatch) => {
  axios({
    method: 'post',
    url: `/api/user/login`,
    headers: { 'Content-Type': 'application/json' },
    data: userData,
  })
    .then((response) => {
      dispatch(actionsToken.setToken(response.data.token));
      dispatch(actions.setCustomerData(response.data.userData));

      localStorage.setItem('token', JSON.stringify(response.data.token));
    })
    .catch((error) => {
      console.log(error);
    });
  dispatch(actions.setCustomerLoading(false));
};

const getCustomer = () => (dispatch) => {
  axios.get(`/api/user/auth`).then((res) => {
    dispatch(actionsToken.setToken(res.data.token));
    localStorage.setItem('token', JSON.stringify(res.data.token));
    dispatch(actions.setCustomerData(res.data.userData));
    dispatch(actions.setCustomerLoading(false));
  });
};
const upDateCustomer = (userData) => (dispatch) => {
  axios.put(`/api/customers`, userData).then((res) => {
    dispatch(actions.setCustomerData(res.data));
    dispatch(actions.setCustomerLoading(false));
  });
};

export default {
  getCustomer,
  upDateCustomer,
  setCustomer,
  setLoginCustomer,
};
