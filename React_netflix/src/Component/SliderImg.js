import "./SliderImg.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'


const SliderImg = (props) => {
  const { art, onClick } = props;
  const [isHovering, setIsHovering] = useState(false)

  return (
    <>
      <div className={isHovering ? "slide-img-popup-wrapper-hover" : "slide-img-popup-wrapper"} onClick={onClick} onMouseOver={() => {setIsHovering(true)}} onMouseLeave={() => setIsHovering(false)}>
        <div className="slide-img-popup">
            <div className="img-popup-top">
              <div className="popup-video-wrapper">
                <video className="popup-video" playsInline muted>
                  <source src={require(`${art.videoUrl}`)} type="video/mp4" />
                </video>
                <img className="popup-img" src={require(`${art.thumbnailUrl}`)} alt=""/>
                <div className="popup-video-mute">
                  <div className="mute">mute</div>
                </div>
              </div>
            </div>
            <div className="img-popup-bottom-wrapper">
              <div className="img-popup-bottom">
                <div className="bottom1">
                  <div className="bottom1-left">
                    <div>
                      <FontAwesomeIcon icon={faPlay} className="faPlay" />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faPlus} className="faCirclePlus" />
                    </div>
                  </div>
                  <div className="bottom1-right">
                    <div>
                      <FontAwesomeIcon icon={faThumbsUp} className="faThumbsUp" />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faThumbsDown} className="faThumbsDown" />
                    </div>
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
      </div>
    </>

  );
};

export default SliderImg;
