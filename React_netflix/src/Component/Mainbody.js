import "./Mainbody.css"
import Slider from "./Slider"

const Mainbody = () => {
    const imgList = ["1", "2", "3"]

    return (
        <div className="mainview-container">
            <div className="mainview">
                <span>
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                </span>
                <div>
                    <Slider 
                        title = {"한국이 만든 콘텐츠"}
                        imgList = {imgList}
                    />
                    <Slider 
                        title = {"미국이 만든 콘텐츠"}
                        imgList = {imgList}
                    />
                </div>
            </div>
        </div>
    )
}

export default Mainbody