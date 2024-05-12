import * as actions from "./actionType";

export const setUser = (paylod) => {
  return {
    type: actions.SET_USER,
    user: paylod,
  };
};
export const setLoading = (state) => {
  return {
    type: actions.SET_LOADING_STATUS,
    user: state,
  };
};
export const getArticles = (paylod) => {
  return {
    type: actions.GET_ARTACAL,
    user: paylod,
  };
};
