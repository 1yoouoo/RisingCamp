import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Slider = (props) => {
  const [slide, setSlide] = useState(0);
  function onHandleLeftClick() {
    console.log("hi");
    setSlide(slide - 1);
  }
  function onHandleRightClick() {
    console.log("hi");
    setSlide(slide + 1);
  }
  return (
    <>
      <h3 className="sliderTitle">{props.title}</h3>
      <div className="handle-wrapper">
        <div className="handle handle-left" onClick={onHandleLeftClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="faChevronLeft" />
        </div>
        <div
          className="sliderMask"
          style={{ transform: `translateX(${-slide * 100}%)` }}
        >
          {props.imgList}
        </div>
        <div className="handle handle-right" onClick={onHandleRightClick}>
          <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />
        </div>
      </div>
    </>
  );
};

export default Slider;
