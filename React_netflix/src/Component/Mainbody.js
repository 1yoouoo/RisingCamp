import "./Mainbody.css"
import Slider from "./Slider"
import SliderImg from "./SliderImg";
import Modal from "./Modal";
import React, { useState } from 'react';
import API from './../Api/Api';


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
                <span className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                    <span className="main-img-gradient"></span>
                </span>
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