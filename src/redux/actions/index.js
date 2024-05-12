import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./action";

// مراجعه تقيله
export function signinAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((err) => alert(err.massage));
  };
}

export function getuserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}

export function signOut() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((err) => alert(err.massage));
  };
}
