const Header = ({ onChange, onClick, summonerName }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">LEAGUEOFLEGEND SEARCHING</div>
        <form className="summonerInput">
          <input
            type="text"
            onChange={onChange}
            placeholder="Input Summoner Name"
          ></input>
          <button onClick={onClick}>Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
