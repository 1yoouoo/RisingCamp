import "./Mainbody.css"
import Slider from "./Slider"
import SliderImg from "./SliderImg";

const getRecommenedGenreList = () => {
    return {
        recommenedGenreList: [{
                genreId : 1,
                name : '드라마',
                artList: [
                    {
                        artId : "101",
                        thumbnailUrl : "./img/slider1ImgItem1.webp",
                        videoUrl : "./img/video/BreakingBadVideo.mov",

                    }
                ]

            }
        ]
    }
}

const Mainbody = () => {
    const datas = getRecommenedGenreList()
    return (
        <div className="mainview-container">
            <div className="mainview">
                <span className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                    <span className="main-img-gradient"></span>
                </span>
                <div className="slider-wrapper">
                    {datas.recommenedGenreList.map(( genre ) => {
                        return (
                            <Slider 
                                key={genre.genreId}
                                    title = {genre.name}
                                    imgList = {genre.artList.map((art) => {
                                        return <SliderImg 
                                        key={art.artId} 
                                        thumbnailUrl={require(`${art.thumbnailUrl}`)} 
                                        videoUrl={require(`${art.videoUrl}`)}/>
                                })}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mainbody