import axios from 'axios';
import actions from './actions';

const getType = () => (dispatch) => {
  axios.get('/api/type').then((res) => {
    dispatch(actions.setTypeData(res.data));
    dispatch(actions.setTypeLoading(false));
  });
};


export default {
  getType,
};
