import * as actions from "../actions/actionType";

export const initialState = {
  loading: false,
  articals: [],
};

const articalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case actions.GET_ARTACAL:
      return {
        ...state,
        articals: action.payload,
      };
    default:
      return state;
  }
};

export default articalReducer;
