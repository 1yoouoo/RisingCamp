import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [summonerName, setSummnerName] = useState("");
  const [summonerNameData, setSummonerNameData] = useState({});
  const [summonerLeagueData, setSummonerLeagueData] = useState([]);
  const ApiKey = "RGAPI-8ce823fb-bd3d-4ff4-8e9f-586a00cbacb9";
  function searchForSummoner(event) {
    let NameApiCallString =
      "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      summonerName +
      "?api_key=" +
      ApiKey;

    axios.get(NameApiCallString).then(function (response) {
      console.log(response);
      setSummonerNameData(response.data);
      const summonerId = response.data.id;
      let LeagueApiCallString =
        "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
        summonerId +
        "?api_key=" +
        ApiKey;
      axios.get(LeagueApiCallString).then(function (response) {
        setSummonerLeagueData(response.data[0]);
      });
    });
  }
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">logo</div>
          <div className="summonerInput">
            <input
              type="text"
              onChange={(e) => setSummnerName(e.target.value)}
            ></input>
            <button onClick={(e) => searchForSummoner(e)}>Enter</button>
          </div>
        </div>
      </div>

      <div className="contentWrapper">
        {JSON.stringify(summonerNameData) !== "{}" ? (
          <>
            <div className="contentHeader">
              <div className="summonerInfo">
                <div className="summonerIcon">
                  <div>
                    <img
                      width={100}
                      height={100}
                      src={
                        "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/" +
                        summonerNameData.profileIconId +
                        ".png"
                      }
                      alt="icon"
                    />
                  </div>
                  <div>{summonerNameData.summonerLevel}</div>
                </div>

                <div className="summonerDetail">
                  <h2 className="summonerName">{summonerNameData.name}</h2>
                  <div>
                    <div>Tier : {summonerLeagueData.tier}</div>
                    <div>rank: {summonerLeagueData.rank}</div>
                    <div>loses: {summonerLeagueData.losses}</div>
                    <div>win :{summonerLeagueData.wins}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contentMain"></div>
          </>
        ) : (
          <div>no data</div>
        )}
      </div>
    </>
  );
}

export default App;
