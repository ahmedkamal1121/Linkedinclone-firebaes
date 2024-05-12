import { combineReducers } from "redux";
import userReducers from "./userReducers";
import articalReducer from "./articalReducers";

const rootReducers = combineReducers({
  userState: userReducers,
  articalState: articalReducer,
});

export default rootReducers;
