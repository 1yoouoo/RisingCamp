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
                </span>
                <div>
                    {datas.map(( data ) => {
                        return (
                            <Slider 
                                title = {data.title}
                                imgList = {data.contentList.map((content) => {
                                    return <SliderImg key={content.contentId} contentUrl={require(content.contentUrl)}/>
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