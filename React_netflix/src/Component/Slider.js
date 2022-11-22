import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LikeList from "./LikeList";

const Slider = (props) => {
  const [isAble, setIsAble] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgList, setImgList] = useState(props.imgList ?? []);

  function onHandleLeftClick() {
    console.log(isAble);
    // if (!isAble) return;
    // setIsAble(false);
    if (currentIndex >= 1) {
      setCurrentIndex(currentIndex - 1);
    }
    setTimeout(() => {
      // onSliderCompleted();
    }, 1000); // FIXME
  }

  function onHandleRightClick() {
    console.log(isAble);
    if (!isAble) return;
    // setIsAble(false);
    setCurrentIndex(currentIndex + 1);
    //sliderImg 1줄 추가 최신순부터
    setTimeout(() => {
      // onSliderCompleted();
    }, 1000); // FIXME
  }

  function randering(currentIndex) {
    imgList.slice(4 * (currentIndex - 1), 4 * (currentIndex - 1) + 8);
    console.log(
      imgList.slice(4 * (currentIndex - 1), 4 * (currentIndex - 1) + 8)
    );
  }

  // function onSliderCompleted() {
  //   setIsAble(true);
  //   console.log("completed!!!");
  //   console.log([...imgList.slice(4), ...imgList.slice(0, 4)]);

  //   setImgList([...imgList.slice(4), ...imgList.slice(0, 4)]);
  // }

  return (
    <>
      <h3 className="sliderTitle">{props.title}</h3>
      <div className="handle-wrapper">
        <div className="handle handle-left" onClick={onHandleLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="faChevronLeft" />
        </div>
        <div
          className="sliderMask"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {randering(currentIndex)}
          {/* {imgList.slice(0, 5)} */}
          {imgList}
        </div>
        <div className="handle handle-right" onClick={onHandleRightClick}>
          <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />
        </div>
      </div>
    </>
  );
};

export default Slider;
