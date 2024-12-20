import types from './types';

const setLanguage = (languageData) => ({ type: types.SET_LANGUAGE_DATA, data: languageData });
const setLanguageLoading = (isLoading) => ({ type: types.SET_LANGUAGE_LOADING, data: isLoading });

export default {
  setLanguage,
  setLanguageLoading,
};
