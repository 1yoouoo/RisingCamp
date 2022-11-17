const Tier = ({ data }) => {
  return (
    <div className="TierWrapper">
      <div className="TierDetail">
        <div>ranked solo</div>
        <div>Tier : {data.tier}</div>
        <div>rank: {data.rank}</div>
        <div>losses: {data.losses}</div>
        <div>win :{data.wins}</div>
      </div>
      <div>
        total win ratio{" "}
        {Math.round((data.wins / (data.wins + data.losses)) * 1000) / 10}%
        <div>recent win ratio</div>
      </div>
    </div>
  );
};

export default Tier;
