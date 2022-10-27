
const Card = (props) => {
    return (
        <div className="our-story-card animation-card watchOnTv">
            <div className="animation-card-container">
                <div className="our-story-card-text">
                    <h1 className="our-story-card-title">{props.title}</h1>
                    <h2 className="our-story-card-subtitle">{props.subtitle}</h2>
                </div>
                <div className="our-story-card-img-container">
                    <div className="our-story-card-animation-container">
                        <img className="our-story-card-img" src={props.image} alt='' />
                        <div className="our-story-card-animation">
                            <video className="our-story-card-video" autoPlay playsInline muted loop>
                                <source src={props.video} type="video/mp4" />
                            </video>
                            <div className="our-story-card-animation-text"></div>
                            <div className="our-story-card-animation-custom"></div>
                        </div>
                    </div>
                </div>
                <div className="center-pixel" style={{position: "absolute"}}></div>
            </div>
        </div>
    );
}

export default Card;
