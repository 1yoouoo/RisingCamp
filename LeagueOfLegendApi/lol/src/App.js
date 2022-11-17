import { useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Tier from "./Components/Tier";

function App() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerNameData, setSummonerNameData] = useState({});
  const [summonerSoloLeagueData, setSummonerSoloLeagueData] = useState([]);
  const [summonerFlexLeagueData, setSummonerFlexLeagueData] = useState([]);
  const ApiKey = "RGAPI-2e0de1b6-bda0-4c5d-84f5-19173b23ed63";
  function searchForSummoner(event) {
    let NameApiCallString =
      "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      summonerName +
      "?api_key=" +
      ApiKey;

    //name 보냄 -> id, puuid 받음
    axios.get(NameApiCallString).then(function (nameData) {
      setSummonerNameData(nameData.data);
      const summonerId = nameData.data.id;
      const summonerPuuid = nameData.data.puuid;
      let LeagueApiCallString =
        "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
        summonerId +
        "?api_key=" +
        ApiKey;
      // id 보냄 -> leaguedata 받음
      axios.get(LeagueApiCallString).then(function (leagueData) {
        setSummonerSoloLeagueData(leagueData.data[0]);
        setSummonerFlexLeagueData(leagueData.data[2]);
        let MatchApiCallString =
          "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
          summonerPuuid +
          "/ids?start=0&count=100&api_key=" +
          ApiKey;
        // puuid 보냄 -> matchid 받음
        axios.get(MatchApiCallString).then(function (matchData) {
          let matchId = [];
          matchData.data.map((i) => matchId.push(i));
          console.log(matchId);
        });
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
                  <Tier data={summonerSoloLeagueData} />
                  <Tier data={summonerFlexLeagueData} />
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
