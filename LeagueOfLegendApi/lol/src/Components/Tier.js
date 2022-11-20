const Tier = ({ data }) => {
  // console.log(data);
  return (
    <div className="tierWrapper">
      {JSON.stringify(data.tier) !== "undefined" ? (
        <>
          <div>
            <div>
              {/* <img
            src={"https://www.lolog.me/images/icon/" + data.tier + ".png"}
            alt="ㅁㄴㅇ"
          /> */}
              {/* <img src={require(`./img/${data.tier}.png`)} alt="ㅁㄴㅇ" /> */}
            </div>
          </div>
          <div className="tierDetail">
            <div>ranked solo</div>

            <div>
              {data.tier}
              {data.rank}
            </div>
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
