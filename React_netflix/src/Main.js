import Mainbody from "./Component/Mainbody";
import MainHeader from "./Component/MainHeader";
import "./Main.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      artId: 101,
    };
  }
  const newState = { ...currentState };
  if (action.type === "ThumbsUp") {
    console.log("ThumbsUp");
  }
  return newState;
}

const store = createStore(reducer);

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <MainHeader />
        <Mainbody />
      </Provider>
    </>
  );
};

export default Main;
