import React from 'react';
import "./Modal.css" 
import API from './../Api/Api';

const Modal = (props) => {
  const { open, close, artId } = props;
  const art = API.getArt(artId);

  console.log(`artId: ${artId}`)
  console.log(`title: ${art.title}`)

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
                    </div>
                    <div className='preview-modal-close'>
                        <button onClick={close}>close</button>
                    </div>
                    <div className='preview-modal-info'>
                        {art.title}
                    </div>
                </div>
            </>
        ) : null}
    </div>
  );
};

export default Modal