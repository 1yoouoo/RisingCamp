import "./Slider.css"

const Slider = (props) => {
    return (
        <>
            <h3 className="sliderTitle">
                {props.title}
            </h3>
            <div className="sliderMask">
                {props.imgList}
            </div>
        </>
    )
}

export default Slider