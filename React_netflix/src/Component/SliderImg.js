import "./SliderImg.css";

const SliderImg = (props) => {
  return (
    <div className="slide-img-popup-wrapper">
      <div className="slide-img-popup">
          <div className="img-popup-top">
            <div className="popup-video-wrapper">
              <video className="popup-video" autoplay playsInline muted>
                <source src={props.contentVideoUrl} type="video/mp4" />
              </video>
              <div className="popup-video-mute">
                <div className="mute">mute</div>
              </div>
            </div>
          </div>
          {/* <div className="img-popup-bottom">
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
              <div>96%일치</div>
              <div>15+</div>
              <div>에피소드 16개</div>
              <div>HD</div>
            </div>
            <div className="bottom3">
              <div>힐링</div>
              <div>감명을 주는</div>
              <div>드라마</div>
              <div>장르</div>
            </div>
            <div className="bottom4">
              <div>회차 및 상세정보</div>
              <div>더보기</div>
            </div>
          </div> */}
        </div>
    </div>
  );
};

export default SliderImg;
