import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Slider = (props) => {
  const [slide, setSlide] = useState(0);
  const [isAble, setIsAble] = useState(true);
  const [imgList, setImgList] = useState(props.imgList ?? []);

  function onHandleLeftClick() {
    console.log(isAble);
    if (!isAble) return;
    setIsAble(false);
    if (slide >= 1) {
      setSlide(slide - 1);
    }
    setTimeout(() => {
      onSliderCompleted();
    }, 1000); // FIXME
  }

  function onHandleRightClick() {
    console.log(isAble);
    if (!isAble) return;
    setIsAble(false);
    setSlide(slide + 1);
    //sliderImg 1줄 추가 최신순부터
    setTimeout(() => {
      onSliderCompleted();
    }, 1000); // FIXME << TRANSITION END
  }

  function onSliderCompleted() {
    setIsAble(true);
    setImgList([...imgList.slice(4), ...imgList.slice(0, 4)]);
  }

  return (
    <>
      <h3 className="sliderTitle">{props.title}</h3>
      <div className="handle-wrapper">
        <div className="handle handle-left" onClick={onHandleLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="faChevronLeft" />
        </div>
        {isAble ? (
          <div
            className="sliderMaskStop"
            style={{ transform: "translateX(00%)" }}
          >
            {imgList}
          </div>
        ) : (
          <div
            className="sliderMask"
            style={{ transform: "translateX(-100%)" }}
          >
            {imgList}
          </div>
        )}
        <div className="handle handle-right" onClick={onHandleRightClick}>
          <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />
        </div>
      </div>
    </>
  );
};

export default Slider;
