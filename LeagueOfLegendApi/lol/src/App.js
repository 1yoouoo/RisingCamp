import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Test from "./Test";

function App() {
  // setLosses(losses)
  const [summonerName, setSummonerName] = useState("");
  const [summonerNameData, setSummonerNameData] = useState({});
  const [summonerSoloLeagueData, setSummonerSoloLeagueData] = useState([]);
  const [matchData, setMatchData] = useState([]);
  const ApiKey = "RGAPI-351e57ea-e53d-4524-8baf-15c08936f256";
  async function searchForSummoner() {
    const NameApiCallString = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${ApiKey}`;

    //name 보냄 -> id, puuid 받음
    const nameData = await axios.get(NameApiCallString);
    setSummonerNameData(nameData.data);
    const summonerId = nameData.data.id;
    const summonerPuuid = nameData.data.puuid;
    const LeagueApiCallString = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${ApiKey}`;
    debugger;
    // id 보냄 -> leaguedata 받음
    const leagueData = await axios.get(LeagueApiCallString);
    let summonerSolo;
    for (let i = 0; i < leagueData.data.length; i++) {
      console.log(leagueData.data[i].queueType);
      if (leagueData.data[i].queueType === "RANKED_SOLO_5x5") {
        summonerSolo = leagueData.data[i];
      }
    }
    setSummonerSoloLeagueData(summonerSolo);
    console.log(summonerSoloLeagueData);
    const MatchIdApiCallString = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=100&api_key=${ApiKey}`;

    // puuid 보냄 -> matchid 받음
    const matchIdList = await axios.get(MatchIdApiCallString);

    // console.log(matchIdList.data);
    let newWin = 0;
    let newLosses = 0;
    let kills = 0;
    let deaths = 0;
    let assists = 0;
    for (let i = 0; i < 20; i++) {
      const MatchApiCallString = `https://asia.api.riotgames.com/lol/match/v5/matches/${matchIdList.data[i]}?api_key=${ApiKey}`;
      // matchId 보냄 -> matchdata 받음
      const matchData = await axios.get(MatchApiCallString);
      // console.log(matchIdList.data[i]);
      setMatchData(matchData.data.info);
      // console.log(matchData.data.info);
      for (let j = 0; j < 10; j++) {
        // 조회한 소환사이름이랑 동일하면
        if (matchData.data.info.participants[j].summonerName === summonerName) {
          if (matchData.data.info.participants[j].win === true) {
            newWin = newWin + 1;
            kills = matchData.data.info.participants[j].kills;
            deaths = matchData.data.info.participants[j].deaths;
            assists = matchData.data.info.participants[j].assists;
          } else {
            newLosses = newLosses + 1;
          }
        } else {
        }
      }
    }
  }
  return (
    <>
      <Header
        onChange={(e) => setSummonerName(e.target.value)}
        onClick={(e) => searchForSummoner(e)}
      />

      <Test
        summonerNameData={summonerNameData}
        summonerSoloLeagueData={summonerSoloLeagueData}
      />
    </>
  );
}

export default App;
