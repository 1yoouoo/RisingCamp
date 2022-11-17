const Header = ({ onChange, onClick, summonerName }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">logo</div>
        <div>{summonerName}</div>
        <div className="summonerInput">
          <input type="text" onChange={onChange}></input>
          <button onClick={onClick}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
