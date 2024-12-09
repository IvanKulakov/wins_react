import axios from 'axios';
import actions from './actions';

const getBrands = () => (dispatch) => {
  axios.get('/api/brand').then((res) => {
    dispatch(actions.setBrandsData(res.data));
    dispatch(actions.setBrandsLoading(false));
  });
};


export default {
  getBrands,
};
