import { useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";

function App() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerNameData, setSummonerNameData] = useState({});
  const [summonerSoloLeagueData, setSummonerSoloLeagueData] = useState([]);
  const [summonerFlexLeagueData, setSummonerFlexLeagueData] = useState([]);
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
        setSummonerSoloLeagueData(response.data[0]);
        setSummonerFlexLeagueData(response.data[2]);
      });
    });
  }
  return (
    <>
      <Header
        onChange={(e) => setSummonerName(e.target.value)}
        onClick={(e) => searchForSummoner(e)}
      />

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
                  <div className="soloTierWrapper">
                    <div className="soloTierDetail">
                      <div>ranked solo</div>
                      <div>Tier : {summonerSoloLeagueData.tier}</div>
                      <div>rank: {summonerSoloLeagueData.rank}</div>
                      <div>losses: {summonerSoloLeagueData.losses}</div>
                      <div>win :{summonerSoloLeagueData.wins}</div>
                    </div>
                    <div>
                      total win ratio{" "}
                      {Math.round(
                        (summonerSoloLeagueData.wins /
                          (summonerSoloLeagueData.wins +
                            summonerSoloLeagueData.losses)) *
                          1000
                      ) / 10}
                      %<div>recent win ratio</div>
                    </div>
                  </div>
                  <div className="flexTierWrapper">
                    <div className="flexTierDetail">
                      <div>ranked flex</div>
                      <div>Tier : {summonerFlexLeagueData.tier}</div>
                      <div>rank: {summonerFlexLeagueData.rank}</div>
                      <div>losses: {summonerFlexLeagueData.losses}</div>
                      <div>win :{summonerFlexLeagueData.wins}</div>
                    </div>
                    <div>
                      total win ratio{" "}
                      {Math.round(
                        (summonerFlexLeagueData.wins /
                          (summonerFlexLeagueData.wins +
                            summonerFlexLeagueData.losses)) *
                          1000
                      ) / 10}
                      %<div>recent win ratio</div>
                    </div>
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
