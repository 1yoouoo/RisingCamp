import "./Mainbody.css"
import Slider from "./Slider"
import SliderImg from "./SliderImg";

function getGroup() {
    const list = [];
    for(let i=1; i<=3; i++){
        const group = {
            group_id: i,
            number: `slider ${i}`,
            title: `그룹 ${i}`,
            movieList: [],
        };
        for(let j=1; j<=10; j++) {
            group.movieList.push({
                movie_id: `movie ${i}${j}`, 
                thumnail_url: require(`./img/slider${i}ImgItem${j}.webp`)
            })
        }
        list.push(group)
    }
    return list;


}

const Mainbody = () => {
    let group_list = getGroup();

    return (
        <div className="mainview-container">
            <div className="mainview">
                <span className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                </span>
                <div>
                    {group_list.map((group) => {
                        return <Slider
                        key={group.group_id} 
                        title = {group.title}
                        imgList = {group.movieList.map((movie) => {
                            return <SliderImg key={movie.movie_id} movie={movie} />
                         })}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mainbody