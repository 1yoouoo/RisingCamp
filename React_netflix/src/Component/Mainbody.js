import "./Mainbody.css"
import Slider from "./Slider"
import SliderImg from "./SliderImg";
import Modal from "./Modal";
import React, { useState } from 'react';
import API from './../Api/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


const Mainbody = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [myArtId, setMyArtId] = useState('')
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    

    const datas = API.getRecommenedGenreList()
    return (
        <div className="mainview-container">
            <div className="mainview">
                <Modal artId={myArtId} open={modalOpen} close={closeModal}/>
                <div className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.jpeg')} alt="Main Img"/>
                    <span className="main-img-gradient"></span>
                    <div className="main-img-info-wrapper">
                        <div className="main-img-info">
                            <div className="main-img-title">
                                <img src={require('./img/Netflix-Main-img-title.png')} alt=""/>
                            </div>
                            <div className="main-img-subtitle">
                                <div>지금 시청하세요</div>
                                <div>
                                    시카고의 잘나가는 재무 컨설턴트 마티는 가족과 함께 미주리 주 오자크로 이사한다. 목적은 하나, 파트너가 횡령한 마약 조직의 돈 5억 달러를 돈세탁하는 것.
                                </div>
                            </div>
                            <div className="main-img-info-button-wrapper">
                                <a href="/">
                                    <button>
                                        <FontAwesomeIcon icon={faPlay} className="faPlay" />
                                        <span>재생</span>
                                    </button>
                                </a>
                                <a href="/">
                                    <button>
                                        <FontAwesomeIcon icon={faCircleInfo} className="faCircleInfo"/>
                                        <span>상세 정보</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-wrapper" onClick={openModal}>
                    {datas.recommenedGenreList.map(( genre ) => {
                        return (
                            <Slider 
                                key={genre.genreId}
                                title = {genre.name}
                                imgList = {genre.artList.map((art) => {
                                    return <SliderImg 
                                    key={art.artId}
                                    art={art}
                                    onClick={() => {setMyArtId(art.artId)}}
                                />
                            })}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mainbody