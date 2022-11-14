import React, { useState, useEffect } from "react";
import "./Modal.css";
import API from "./../Api/Api";
import ModalInfo from "./ModalInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

//mouse over leave
const Modal = (props) => {
  const { open, close, artId } = props;
  const [art, setArt] = useState();
  useEffect(() => {
    if (open) {
      setArt(API.getArt(artId));
    }
    return () => {
      console.log("화면에 사라짐", open);
    };
  }, [open]);

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <div>
          <div className="modal-darkbackground"></div>
          <div className="preview-modal-container">
            <div className="preview-modal-player">
              <video autoPlay playsInline muted>
                <source
                  src={require(`${"./img/video/main-video.mov"}`)}
                  type="video/mp4"
                />
              </video>
              <div className="modal-main-img-info-wrapper">
                <div className="main-img-info">
                  <div className="main-img-title-videoEnds">
                    <img
                      src={require("./img/Netflix-Main-img-title.png")}
                      alt=""
                    />
                  </div>
                  <div className="main-img-subtitle-videoEnds"></div>
                  <div className="main-img-info-button-wrapper">
                    <a href="/">
                      <button>
                        <FontAwesomeIcon icon={faPlay} className="faPlay" />
                        <span>재생</span>
                      </button>
                    </a>
                    <div id="asd">
                      <FontAwesomeIcon icon={faPlus} className="faCirclePlus" />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="faThumbsUp"
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        className="faThumbsDown"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="preview-modal-close">
                <button onClick={close}>close</button>
              </div>
              <div className="preview-modal-gradient-wrapper">
                <div className="preview-modal-gradient"></div>
              </div>
            </div>
            <ModalInfo art={art} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
