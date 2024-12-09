import types from './types';

const initialState = {
  data: [],
  isLoading: true,
  totalItemsCount: 0,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEMS_DATA: {
      return { ...state, data: action.data };
    }
    default:
      return state;
  }
};

export default itemsReducer;
