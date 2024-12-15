import axios from 'axios';
import actions from './actions';

const getItems = () => (dispatch) => {
  axios.get('/api/products').then((res) => {
    console.log("ghgh");

    dispatch(actions.setItemsData(res.data));
    dispatch(actions.setItemsLoading(false));
  });
};


export default {
  getItems,
};
