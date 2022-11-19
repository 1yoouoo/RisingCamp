import { useEffect } from "react";

const Main = ({ win, losses }) => {
  useEffect(() => {
    console.log("전적 조회중");
    console.log(win, losses);
    return () => {
      console.log("조회완료");
    };
  }, [win, losses]);
  return (
    <div className="contentMain">
      <div className="contentMainLeft">
        <div className="contentSummary">
          <div>
            {win + losses}전 {win}승 {losses}패
          </div>
          <div>ratio Graph</div>
          <div>winRatiobyteam</div>
          <div>Graph blue : , Red :</div>
          <div>winrationbygameLength</div>
          <div>graph 100%-0%</div>
          <div>KDA</div>
        </div>
        <div className="contentGameList">gameList</div>
      </div>
      <div className="contentMainRight">
        <div></div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Main;
