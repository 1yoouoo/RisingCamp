import "./SliderImg.css";


const SliderImg = (props) => {
  const { art, onClick } = props;
  return (
    <>
      <div className="slide-img-popup-wrapper" onClick={onClick}>
        <div className="slide-img-popup">
            <div className="img-popup-top">
              <div className="popup-video-wrapper">
                <video className="popup-video" autoPlay playsInline muted>
                  <source src={require(`${art.videoUrl}`)} type="video/mp4" />
                </video>
                <div className="popup-video-mute">
                  <div className="mute">mute</div>
                </div>
              </div>
            </div>
            <div className="img-popup-bottom">
              <div className="bottom1">
                <div className="bottom1-left">
                  <div>icon</div>
                  <div>icon</div>
                </div>
                <div className="bottom1-right">
                  <div>icon</div>
                  <div>icon</div>
                  <div>icon</div>
                </div>
              </div>
              <div className="bottom2">
                <div>{Math.floor(art.interestPercent)}%일치</div>
                <div>{art.ageRestricted}+</div>
                <div>에피소드 {art.episodeCount}개</div>
                <div>{art.videoQuality}</div>
              </div>
              <div className="bottom3">
                {art.genreDescriptionList.map(description => {
                  return (<div key={description}>{description}</div>)
                })}
              </div>
              <div className="bottom4">
                <div>회차 및 상세정보</div>
                <div>더보기</div>
              </div>
            </div>
          </div>
      </div>
    </>

  );
};

export default SliderImg;
