import Emailform from './Emailform';
import "./Navigator.css"

const Navigator = () => {

    return (
        <div className="our-story-card hero-card">
            <div className="our-story-card-background">
                <div>
                    <img className="concord-img vlv-creative" src={require('./img/Netflix-background-img.jpeg')} style={{height: "722.5px"}} alt=''/>
                    <div className="concord-img-gradient"></div>
                </div>
            </div>
            <div className="our-story-card-text">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <Emailform />
            </div>
        </div>
    )
}

export default Navigator;