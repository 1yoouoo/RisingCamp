import "./Mainbody.css"
import Slider from "./Slider"

function getContentList() {
    const list = [];
    for(let i=1; i<=3; i++){
        const item = {
            key: i,
            number: `slider ${i}`,
            detail: `콘텐츠 ${i}`,
            imgList: [],
        };
        for(let j=1; j<=10; j++) {
            item.imgList.push({
                number: `img ${j}`, 
                url: require(`./img/slider${i}ImgItem${j}.webp`)
            })
        }
        list.push(item)
    }
    return list;
}

const Mainbody = () => {
    let content_list = getContentList();

    return (
        <div className="mainview-container">
            <div className="mainview">
                <span className="main" >
                    <img className="main-img" src={require('./img/Netflix-Main-img.webp')} alt="Main Img"/>
                </span>
                <div>
                    {content_list.map((content) => {
                        return <Slider
                        key={content.key} 
                        title = {content.detail}
                        imgList = {content.imgList.map((img) => {
                            return (
                                <img className="each-slide" src={img.url} key={img.number} alt="" />
                            )
                         })}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mainbody