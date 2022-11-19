const WinRatio = ({ wlkda }) => {
  return (
    <>
      <div className="contentMain">
        <div className="contentSummary">
          <div>
            {wlkda.win + wlkda.losses}전 {wlkda.win}승 {wlkda.losses}패
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
