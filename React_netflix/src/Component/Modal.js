import React from 'react';
import "./Modal.css" 
import API from './../Api/Api';
import ModalInfo from './ModalInfo';

const Modal = (props) => {
  const { open, close, artId } = props;
  const art = API.getArt(artId);

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
            <>
                <div className='modal-darkbackground'>
                </div>
                <div className='preview-modal-container'>
                    <div className='preview-modal-player'>
                        <video autoPlay playsInline muted>
                            <source src={require(`${'./img/video/BreakingBadVideo.mov'}`)} type="video/mp4"/>
                        </video>
                        <div className='preview-modal-close' onClick={close}>
                            <button onClick={close}></button>
                        </div>
                        <div className='preview-modal-gradient-wrapper'>
                            <div className='preview-modal-gradient'></div>
                        </div>
                    </div>
                    <ModalInfo art ={art}/>
                </div>
            </>
        ) : null}
    </div>
  );
};

export default Modal