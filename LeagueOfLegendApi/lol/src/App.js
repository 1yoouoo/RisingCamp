import { useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Test from "./Test";

function App() {
  const [summonerName, setSummonerName] = useState("");
  const [summonerNameData, setSummonerNameData] = useState({});
  const [summonerSoloLeagueData, setSummonerSoloLeagueData] = useState([]);
  const [matchDataDetail, setMatchDataDetail] = useState({
    wins: 0,
    losses: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const ApiKey = "RGAPI-4f537184-a4dc-4f9a-8ff8-b75370f906df";

  async function searchForSummoner() {
    setIsLoading(true);
    //name 보냄 -> id, puuid 받음
    const NameApiCallString = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${ApiKey}`;
    console.log(NameApiCallString);
    const nameData = await axios.get(NameApiCallString);

    setSummonerNameData(nameData.data);
    const summonerId = nameData.data.id;
    const summonerPuuid = nameData.data.puuid;

    // id 보냄 -> leaguedata 받음
    const LeagueApiCallString = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${ApiKey}`;
    const leagueData = await axios.get(LeagueApiCallString);

    // solo data찾기
    let summonerSolo;
    for (let i = 0; i < leagueData.data.length; i++) {
      if (leagueData.data[i].queueType === "RANKED_SOLO_5x5") {
        summonerSolo = leagueData.data[i];
      }
    }
    setSummonerSoloLeagueData(summonerSolo);
    const MatchIdApiCallString = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=20&api_key=${ApiKey}`;
    // puuid 보냄 -> matchid 받음
    const matchIdList = await axios.get(MatchIdApiCallString);

    console.log(matchIdList.data);
    let wins = 0;
    let losses = 0;
    let kills = 0;
    let deaths = 0;
    let assists = 0;
    for (let i = 0; i < matchIdList.data.length; i++) {
      const MatchApiCallString = `https://asia.api.riotgames.com/lol/match/v5/matches/${matchIdList.data[i]}?api_key=${ApiKey}`;
      // matchId 보냄 -> matchdata 받음
      const matchData = await axios.get(MatchApiCallString);
      console.log(matchData.data.info);
      for (let j = 0; j < 10; j++) {
        // 조회한 소환사이름이랑 동일하면
        if (matchData.data.info.participants[j].summonerName === summonerName) {
          if (matchData.data.info.participants[j].win === true) {
            wins = wins + 1;
            kills = kills + matchData.data.info.participants[j].kills;
            deaths = deaths + matchData.data.info.participants[j].deaths;
            assists = assists + matchData.data.info.participants[j].assists;
          } else {
            losses = losses + 1;
          }
        }
      }
    }
    setMatchDataDetail((prevState) => ({
      ...prevState,
      wins: wins,
      losses: losses,
      kills: kills,
      deaths: deaths,
      assists: assists,
    }));
    setIsLoading(false);
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
        matchDataDetail={matchDataDetail}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
