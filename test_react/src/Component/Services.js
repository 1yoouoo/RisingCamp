import Card from "./Card";
import Tv from "./img/tv.png"
import Mobile from "./img/mobile.jpeg"
import Device from "./img/device.png"
import Kids from "./img/kids.png"

import Section4_video from "./img/section4_video.m4v"
import Section2_video from "./img/section2_video.m4v"




const Services = () => {
    return (
        <>
            <div className="services">
                <div>
                    <Card 
                        title={"Enjoy on your TV."} 
                        subtitle={"Watch on smart TVs PlayStation Xbox Chromecast Apple TV Blu-ray players and more."}
                        image={Tv} 
                        video={Section2_video}
                    />
                </div>
                <div style={{flexDirection:"row-reverse", direction:"rtl"}}>
                    <Card 
                        title={"Download your shows to watch offline."} 
                        subtitle={"Save your favorites easily and always have something to watch."}
                        image={Mobile} 
                        // video={}
                    />
                </div>
                <div>
                    <Card 
                        title={"Watch everywhere."} 
                        subtitle={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."}
                        image={Device} 
                        video={Section4_video}
                    />
                </div>
                <div style={{flexDirection:"row-reverse", direction:"rtl"}}>
                    <Card 
                        title={"Create profiles for kids."} 
                        subtitle={"Send kids on adventures with their favorite characters in a space made just for them—free with your membership."}
                        image={Kids} 
                        // video={}
                    />
                </div>
            </div>
        </>
    )
}

export default Services;