import { SET_USER } from "../actions/actionType";

const initialState = {
  user: null,
};

const userReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_USER:
      return {
        ...state,
        user: actions.user,
      };
    default:
      return state;
  }
};

export default userReducers;
