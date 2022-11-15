import MainHeader from "./MainHeader";
import "./LikeList.css";
import { useDispatch } from "react-redux";

const LikeList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <MainHeader />
      <div className="LikeTitle">
        <div>
          <h2>내가 찜한 콘텐츠</h2>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "PLUS" });
          }}
        >
          asd
        </div>
      </div>
    </>
  );
};

export default LikeList;
