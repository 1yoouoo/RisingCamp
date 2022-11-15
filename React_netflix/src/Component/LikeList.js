import MainHeader from "./MainHeader";
import "./LikeList.css";
import { useSelector } from "react-redux";

const LikeList = () => {
  const artId = useSelector((state) => state.artId);

  return (
    <>
      <MainHeader />
      <div className="LikeTitle">
        <div>
          <h2>내가 찜한 콘텐츠</h2>
        </div>
        <div>{artId}</div>
      </div>
    </>
  );
};

export default LikeList;
