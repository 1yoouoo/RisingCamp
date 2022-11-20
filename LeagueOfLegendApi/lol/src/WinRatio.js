const WinRatio = ({ matchDataDetail }) => {
  return (
    <>
      <div className="contentMain">
        <div className="contentSummary">
          <div>
            {matchDataDetail.wins + matchDataDetail.losses}전{" "}
            {matchDataDetail.wins}승 {matchDataDetail.losses}패
          </div>
          <div>ratio Graph</div>
          <div>winRatiobyteam</div>
          <div>Graph blue : , Red :</div>
          <div>winrationbygameLength</div>
          <div>graph 100%-0%</div>
          <div>KDA</div>
        </div>
      </div>
    </>
  );
};

export default WinRatio;
