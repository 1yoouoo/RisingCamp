import React, { useState, useEffect } from 'react';
import "./Modal.css" 
import API from './../Api/Api';
import ModalInfo from './ModalInfo';

//mouse over leave
const Modal = (props) => {
  const { open, close, artId } = props;
  const [art, setArt] = useState()
  useEffect(() => {
      if (open) {
        setArt(API.getArt(artId))
    }
    return () => {console.log('화면에 사라짐', open)};
    }, [open])

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <div>
                <div className='modal-darkbackground' >
                </div>
                <div className='preview-modal-container'>
                    <div className='preview-modal-player'>
                        <video autoPlay playsInline muted>
                            <source src={require(`${'./img/video/main-video.mov'}`)} type="video/mp4"/>
                        </video>
                        <div className='preview-modal-close' >
                            <button onClick={close}>close</button>
                        </div>
                        <div className='preview-modal-gradient-wrapper'>
                            <div className='preview-modal-gradient'></div>
                        </div>
                    </div>
                    <ModalInfo art={art}/>
                </div>
            </div>
        ) : null}
    </div>
  );
};

export default Modal