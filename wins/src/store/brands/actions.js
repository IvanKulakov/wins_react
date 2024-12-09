import types from './types';

const setBrandsData = (brandsData) => ({ type: types.SET_BRANDS_DATA, data: brandsData });
const setBrandsLoading = (isLoading) => ({ type: types.SET_BRANDS_LOADING, data: isLoading });


export default {
  setBrandsData,
  setBrandsLoading,
};
