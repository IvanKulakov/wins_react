import axios from 'axios';
import actions from './actions';


const getItem = (id) => (dispatch) => {
  axios.get(`/api/products/${id}`).then((res) => {

    dispatch(actions.setItemData(res.data));
    dispatch(actions.setItemLoading(false));
  });
};



export default {
  getItem,
};
