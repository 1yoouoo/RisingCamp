import "./Slider.css"

const Slider = (props) => {
    return (
        <>
            <div>
                {props.title}
            </div>
            <div>
                {props.imgList}
            </div>
        </>
    )
}

export default Slider