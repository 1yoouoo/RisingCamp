import "./Mainbody.css";
import Slider from "./Slider";
import SliderImg from "./SliderImg";
import Modal from "./Modal";
import React, { useState } from "react";
import API from "./../Api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

const Mainbody = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [myArtId, setMyArtId] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [videoStarts, setVideoStarts] = useState(true);
  const videoEnds = () => setVideoStarts(!videoStarts);

  const [recommenedGenreList, setRecommenedGenreList] = useState(
    API.getRecommenedGenreList().recommenedGenreList
  );

  return (
    <div className="mainview-container">
      <div className="mainview">
        <Modal artId={myArtId} open={modalOpen} close={closeModal} />
        <div className="main">
          <div className="main-img-video-wrapper">
            <video
              className="main-video"
              autoPlay
              playsInline
              muted
              onEnded={() => videoEnds()}
            >
              <source
                src={require(`${"./img/video/main-video.mov"}`)}
                type="video/mp4"
              />
            </video>
            <img
              className="main-img"
              src={require("./img/Netflix-Main-img.jpeg")}
              style={videoStarts ? { opacity: "0" } : { opacity: "1" }}
              alt="Main Img"
            />
          </div>
          <span className="main-img-gradient"></span>
          <div className="main-img-info-wrapper">
            <div className="main-img-info">
              <div
                className={
                  videoStarts
                    ? "main-img-title-videoStarts"
                    : "main-img-title-videoEnds"
                }
              >
                <img src={require("./img/Netflix-Main-img-title.png")} alt="" />
              </div>
              <div
                className={
                  videoStarts
                    ? "main-img-subtitle-videoStarts"
                    : "main-img-subtitle-videoEnds"
                }
              >
                <div>?????? ???????????????</div>
                <div>
                  ???????????? ???????????? ?????? ???????????? ????????? ????????? ?????? ????????? ???
                  ???????????? ????????????. ????????? ??????, ???????????? ????????? ?????? ????????? ???
                  5??? ????????? ??????????????? ???.
                </div>
              </div>
              <div className="main-img-info-button-wrapper">
                <a href="/">
                  <button>
                    <FontAwesomeIcon icon={faPlay} className="faPlay" />
                    <span>??????</span>
                  </button>
                </a>
                <a href="/">
                  <button>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="faCircleInfo"
                    />
                    <span>?????? ??????</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-wrapper">
          {recommenedGenreList.map((genre) => {
            return (
              <Slider
                key={genre.genreId}
                title={genre.name}
                imgList={genre.artList.map((art) => {
                  return (
                    <SliderImg
                      key={art.artId}
                      art={art}
                      openModal={openModal}
                      onClick={() => {
                        setMyArtId(art.artId);
                      }}
                    />
                  );
                })}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mainbody;
