import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Component/Login";
import Main from "./Main";
import LikeList from "./Component/LikeList";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      likeCount: 0,
    };
  }
  const newState = { ...currentState };
  if (action.type === "ThumbsUp") {
    newState.likeCount++;
  }
  return newState;
}

const store = createStore(reducer);

const Routing = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route exact path="/app" element={<App />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Main" element={<Main />} />
        <Route exact path="/LikeList" element={<LikeList />} />
      </Routes>
    </Provider>
  );
};

export default Routing;
