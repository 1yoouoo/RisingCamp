const Tier = ({ data }) => {
  // debugger;
  return (
    <div className="TierWrapper">
      <div className="TierDetail">
        <div>ranked solo</div>
        <div>Tier : {data.tier}</div>
        <div>
          <img src={`./img/${data.tier}.png`} alt="ㅁㄴㅇ" />
          {/* <img src={require(`./img/GOLD.png`)} alt="ㅁㄴㅇ" /> */}
          {data.rank}
        </div>
        <div>losses: {data.losses}</div>
        <div>win :{data.wins}</div>
      </div>
      <div>
        total win ratio{" "}
        {Math.round((data.wins / (data.wins + data.losses)) * 1000) / 10}%
      </div>
    </div>
  );
};

export default Tier;
