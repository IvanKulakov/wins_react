import types from './types';

const setTypeData = (typeData) => ({ type: types.SET_TYPE_DATA, data: typeData });
const setTypeLoading = (isLoading) => ({ type: types.SET_TYPE_LOADING, data: isLoading });


export default {
  setTypeData,
  setTypeLoading,
};
