const Header = ({ onChange, onClick, summonerName }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">LEAGUEOFLEGEND SEARCHING</div>
        <div className="summonerInput">
          <input
            type="text"
            onChange={onChange}
            placeholder="Input Summoner Name"
          ></input>
          <button onClick={onClick}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
