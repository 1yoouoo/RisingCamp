const SliderImg = (props) => {
    return (
        <div className="slide-img">
            <img className="each-slide" src={props.contentUrl}  alt="" />
        </div>
    )
}

export default SliderImg;