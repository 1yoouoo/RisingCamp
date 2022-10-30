const Slider = (props) => {
    return (
        <>
            <h2>
                <div>
                    {props.title}
                </div>
            </h2>
            <div className="rowCotent">
                <div className="slider">
                    <div className="sliderMask">
                        {props.imgList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider