import Tier from "./Components/Tier";

const Test = ({ summonerNameData, summonerSoloLeagueData }) => {
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
