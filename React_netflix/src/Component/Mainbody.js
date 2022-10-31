import "./Mainbody.css"
import Slider from "./Slider"

const Mainbody = () => {
    let imgList = [
        { 
            url : require('./img/sliderImgitem1.webp'),
            caption : 'img 1'
        },
        { 
            url : require('./img/sliderImgitem2.webp'),
            caption : 'img 2'
        },
        { 
            url : require('./img/sliderImgitem3.webp'),
            caption : 'img 3'
        },

    ]


    // build(실행준비)  
        // <Slider 
        // title = {"한국이 만든 콘텐츠"}
        // imgList = {<img src={require('./img/sliderImgitem1.webp')} alt="asd" />}
    // runtime(실행)
        // 해봐야지 안다.


    return (
        <div className="mainview-container">
            <div className="mainview">
                <span className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                    <div>asd</div>
                    <div>ss</div>
                    <div>dd</div>
                </span>
                <div>
                    <Slider 
                        title = {"미국이 만든 콘텐츠"}
                        imgList = {imgList.map((img)=> {
                            return (
                                    <div className="each-slide" key={img.caption}>
                                        <div>
                                            <img src={img.url} alt="asd"/>
                                        </div>
                                    </div>
                                    )
                                }
                            )
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Mainbody