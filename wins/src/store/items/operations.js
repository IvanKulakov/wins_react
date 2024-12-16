import axios from 'axios';
import actions from './actions';

const getItems = () => (dispatch) => {
  axios.get('/api/products').then((res) => {

    dispatch(actions.setItemsData(res.data));
    dispatch(actions.setItemsLoading(false));
  });
};


export default {
  getItems,
};
