import "./Mainbody.css"
import Slider from "./Slider"
import SliderImg from "./SliderImg";
import datas from "./slider.json"

const Mainbody = () => {
    return (
        <div className="mainview-container">
            <div className="mainview">
                <span className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                    <span className="main-img-gradient"></span>
                </span>
                <div className="slider-wrapper">
                    {datas.map(( data ) => {
                        return (
                            <Slider 
                                title = {data.title}
                                imgList = {data.contentList.map((content) => {
                                    return <SliderImg 
                                    key={content.contentId} 
                                    contentImgUrl={require(`${content.contentImgUrl}`)} 
                                    contentVideoUrl={require(`${content.contentVideoUrl}`)}/>
                                })}
                                key={data.groupId}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mainbody