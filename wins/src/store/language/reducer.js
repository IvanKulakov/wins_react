import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LANGUAGE_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_LANGUAGE_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default languageReducer;
