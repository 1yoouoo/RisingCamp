import { useState } from "react";
import Tier from "./Components/Tier";
import WinRatio from "./WinRatio";

const Test = ({
  summonerNameData,
  summonerSoloLeagueData,
  matchDataDetail,
  isLoading,
}) => {
  return (
    <div className="contentWrapper">
      {JSON.stringify(summonerNameData) !== "{}" ? (
        <>
          <div className="contentHeader">
            <div className="summonerInfo">
              <div className="summonerIcon">
                <div className="summonerIconImg">
                  <img
                    src={
                      "http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/" +
                      summonerNameData.profileIconId +
                      ".png"
                    }
                    alt="icon"
                  />
                  <div className="summonerLevel">
                    <span>{summonerNameData.summonerLevel}</span>
                  </div>
                </div>
              </div>

              <div className="summonerDetail">
                <h2 className="summonerName">{summonerNameData.name}</h2>
                <Tier data={summonerSoloLeagueData} />

                {!isLoading ? (
                  <WinRatio matchDataDetail={matchDataDetail} />
                ) : (
                  <div>로딩중 ..</div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>소환사 이름을 검색하세요 !</div>
      )}
    </div>
  );
};
export default Test;
