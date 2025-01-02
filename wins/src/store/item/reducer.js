import types from './types';

const initialState = {
  data: [],
  isLoading: true,
  totalItemsCount: 0,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEM_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_ITEM_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default itemReducer;
