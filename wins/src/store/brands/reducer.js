import types from './types';

const initialState = {
  data: [],
  isLoading: true,
  totalItemsCount: 0,
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BRANDS_DATA: {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }
};

export default brandsReducer;
