import "./Slider.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Slider = (props) => {
    return (
        <>  
            <h3 className="sliderTitle">
                {props.title}
            </h3>
            <div className="handle-wrapper">
                <div className="handle handle-left">
                    <FontAwesomeIcon icon={faChevronLeft} className="faChevronLeft" />
                </div>
                <div className="sliderMask">
                    {props.imgList}
                </div>
                <div className="handle handle-right">
                    <FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />
                </div>
            </div>
        </>
    )
}

export default Slider