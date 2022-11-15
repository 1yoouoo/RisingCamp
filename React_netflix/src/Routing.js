import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Component/Login";
import Main from "./Main";
import LikeList from "./Component/LikeList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import API from "./Api/Api";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      testArt: {
        artId: 101,
        thumbnailUrl: "./img/slider1ImgItem1.webp",
        videoUrl: "./img/video/main-video.mov",
        interestPercent: 96.3,
        ageRestricted: {
          fill: "#C52E37",
          background:
            "M88.728 100H11.27C5.043 100 0 94.957 0 88.73V11.274C0 5.048 5.043 0 11.27 0h77.458C94.954 0 100 5.048 100 11.274V88.73c0 6.227-5.046 11.27-11.272 11.27",
          number:
            "M81.473 15.482c.846 0 1.534.687 1.534 1.533v22.099c0 2.036-.283 3.563-.852 4.581-.568 1.02-1.542 1.947-2.918 2.784l-4.581 2.431 4.58 2.156c.777.417 1.424.834 1.93 1.254.51.42.917.931 1.215 1.528.298.6.507 1.32.626 2.157.12.84.182 1.858.182 3.058v23.533c0 .846-.686 1.533-1.533 1.533H43.21a1.536 1.536 0 01-1.535-1.533V59.063c0-2.218.255-3.896.763-5.036.51-1.135 1.538-2.127 3.1-2.961l4.582-2.156-4.581-2.43c-1.376-.838-2.35-1.778-2.92-2.832-.565-1.046-.855-2.563-.855-4.534V17.015c0-.846.688-1.533 1.534-1.533zm-45.008 0V84.13H21.103V34.62h-5.485l7.104-19.136h13.743zm29.913 39.176h-7.89c-.845 0-1.534.686-1.534 1.532v13.737c0 .846.689 1.534 1.535 1.534h7.89c.846 0 1.534-.688 1.534-1.534V56.19c0-.846-.688-1.532-1.535-1.532zm0-26.548h-7.89c-.845 0-1.534.686-1.534 1.532v12.014c0 .846.689 1.533 1.535 1.533h7.89c.846 0 1.534-.687 1.534-1.533V29.642c0-.846-.688-1.532-1.535-1.532z",
        },
        episodeCount: 16,
        videoQuality: "HD",
        genreDescriptionList: ["폭력적인", "어두운", "스릴러"],
      },
    };
  }
  const newState = { ...currentState };
  if (action.type === "ThumbsUp") {
    newState.artId++;
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
