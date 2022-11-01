const SliderImg = (props) => {
    console.log(props);
    const movie = props.movie;
    return (
        <div className="slide-img">
            <img className="each-slide" src={movie.thumnail_url}  alt="" />
        </div>
    )
}

export default SliderImg;