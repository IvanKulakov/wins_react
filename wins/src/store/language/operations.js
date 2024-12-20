import actions from './actions';

const getLanguage = () => (dispatch) => {
  try {
    if (!JSON.parse(localStorage.getItem('language'))) {
      localStorage.setItem('language', JSON.stringify(`uk`));
    }
    dispatch(actions.setLanguage(JSON.parse(localStorage.getItem('language'))));
    dispatch(actions.setLanguageLoading(false));
  } catch (e) {
    console.log(e);
  }
};

export default {
  getLanguage,
};
