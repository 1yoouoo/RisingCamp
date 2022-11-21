const Tier = ({ data }) => {
  // console.log(data);
  return (
    <div className="tierWrapper">
      {JSON.stringify(data.tier) !== "undefined" ? (
        <>
          <div>
            <div>
              <img
                src={"https://www.lolog.me/images/icon/" + data.tier + ".png"}
                alt="ㅁㄴㅇ"
              />
            </div>
          </div>
          <div className="tierDetail">
            <div className="tierTitle">Ranked Solo</div>

            <span className="tierTier">{data.tier}</span>
            <span className="tierRank"> {data.rank}</span>
            <div>
              {Math.round((data.wins / (data.wins + data.losses)) * 1000) / 10}%
            </div>
            <div className="WLCount">
              <span className="winCount">{data.wins}W</span>
              <span className="lossesCount">{data.losses}L</span>
            </div>
          </div>
        </>
      ) : (
        <div>asd</div>
      )}
    </div>
  );
};

export default Tier;
