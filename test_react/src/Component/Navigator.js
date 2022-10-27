import Emailform from './Emailform';

const Navigator = () => {
    return (
        <div className="our-story-card hero-card hero_fuji vlv">
            <div className="our-story-card-background">
                <div className="concord-img-wrapper">
                    <img className="concord-img vlv-creative" src={require('./img/Netflix-background-img.jpeg')} style={{height: "722.5px"}} alt=''/>
                    <div className="concord-img-gradient"></div>
                </div>
            </div>
            <div className="our-story-card-text">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <Emailform />
            </div>
            <div className="center-pixel"></div>
        </div>
    )
}

export default Navigator;