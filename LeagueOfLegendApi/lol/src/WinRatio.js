const WinRatio = ({ matchDataDetail }) => {
  let winRatio =
    (matchDataDetail.wins / (matchDataDetail.wins + matchDataDetail.losses)) *
    100;
  return (
    <>
      <div className="contentMain">
        <div className="contentSummary">
          <div
            className="donutGraph"
            data-percent={winRatio}
            style={{
              background: `conic-gradient(rgb(57, 174, 241) 0% ${winRatio}%, rgb(243, 59, 59) ${winRatio}% 100%)`,
            }}
          ></div>
          <div>
            KDA : {matchDataDetail.kills}/{matchDataDetail.deaths}/
            {matchDataDetail.assists}
          </div>
        </div>
      </div>
    </>
  );
};

export default WinRatio;
