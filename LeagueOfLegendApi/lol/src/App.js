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
  const [matchData, setMatchData] = useState([]);
  const ApiKey = "RGAPI-2e0de1b6-bda0-4c5d-84f5-19173b23ed63";

  async function searchForSummoner(event) {
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
    const summonerFlex = leagueData.data[2];
    setSummonerSoloLeagueData(summonerSolo);
    setSummonerFlexLeagueData(summonerFlex);
    const MatchIdApiCallString = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=100&api_key=${ApiKey}`;

    // puuid 보냄 -> matchid 받음
    const matchIdList = await axios.get(MatchIdApiCallString);
    // console.log(matchIdList.data);
    const MatchApiCallString = `https://asia.api.riotgames.com/lol/match/v5/matches/${matchIdList.data[0]}?api_key=${ApiKey}`;

    // matchId 보냄 -> matchdata 받음
    const matchData = await axios.get(MatchApiCallString);
    setMatchData(matchData.data);
    setMatchData(matchData.data.info);
    console.log(matchData.data.info);
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

            <div className="contentMain">
              <div className="contentMainLeft">
                <div className="contentSummary">
                  <div>?전?승?패</div>
                  <div>ratio Graph</div>
                  <div>winRatiobyteam</div>
                  <div>Graph blue : , Red :</div>
                  <div>winrationbygameLength</div>
                  <div>graph 100%-0%</div>
                  <div>KDA</div>
                </div>
                <div className="contentGameList">gameList</div>
              </div>
              <div className="contentMainRight">
                <div>{matchData.gameDuration}</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </>
        ) : (
          <div>no data</div>
        )}
      </div>
    </>
  );
}

export default App;
