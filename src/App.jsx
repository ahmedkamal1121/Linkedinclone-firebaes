import React, { useEffect } from "react";

import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import Navhead from "./components/Navhead";
import { getuserAuth } from "./redux/actions";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navhead />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

const mapStatToprops = (state) => {
  return {};
};

const mapDispatchToprops = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getuserAuth()),
  };
};

export default connect(mapStatToprops, mapDispatchToprops)(App);
