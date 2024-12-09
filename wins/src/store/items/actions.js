import types from './types';

const setItemsData = (itemsData) => ({ type: types.SET_ITEMS_DATA, data: itemsData });
const setItemsLoading = (isLoading) => ({ type: types.SET_ITEMS_LOADING, data: isLoading });


export default {
  setItemsData,
  setItemsLoading,
};
