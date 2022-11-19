import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Tier from "./Components/Tier";
import WinRatio from "./Main";

function App() {
  // setLosses(losses)
  const [wlkda, setWlkda] = useState({
    win: 0,
    losses: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
  });
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

    // id 보냄 -> leaguedata 받음
    const leagueData = await axios.get(LeagueApiCallString);
    const summonerSolo = leagueData.data[0];
    setSummonerSoloLeagueData(summonerSolo);
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
      console.log(matchData.data.info);
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
    const changeWlkda = (key, value) => {
      setWlkda((current) => {
        let newWlkda = { ...current };
        newWlkda[key] = value;
        return newWlkda;
      });
      console.log(wlkda);
    };
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
                  <WinRatio wlkda={wlkda} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>소환사 이름을 검색하세요 !</div>
        )}
      </div>
    </>
  );
}

export default App;
