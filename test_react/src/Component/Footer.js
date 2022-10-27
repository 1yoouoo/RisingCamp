import Footerbox from "./Footerbox";
import Languageselector from "./Languageselector";

const Footer = () => {
    return (
        <div className="our-story-card card-contents footer-card our-story-card-no-border" style={{position:"relative"}}>
            <div className="site-footer-wrapper centered dark">
                <div className="footer-divider">
                </div>
                <div className="site-footer">
                    <p className="footer-top">Questions? Call 
                        <a className="footer-top-a" href="tel:010-6488-2739">010-6488-2739</a>
                    </p>
                    <ul className="footer-links structural">
                        <Footerbox href={""} detail={"FAQ"}/>
                        <Footerbox href={""} detail={"Help Center"}/>
                        <Footerbox href={""} detail={"Account"}/>
                        <Footerbox href={""} detail={"Media Center"}/>
                        <Footerbox href={""} detail={"Investor Relations"}/>
                        <Footerbox href={""} detail={"Jobs"}/>
                        <Footerbox href={""} detail={"Ways to Watch"}/>
                        <Footerbox href={""} detail={"Terms of Use"}/>
                        <Footerbox href={""} detail={"Privacy"}/>
                        <Footerbox href={""} detail={"Cookie Preferences"}/>
                        <Footerbox href={""} detail={"Corporate Information"}/>
                        <Footerbox href={""} detail={"Contact Us"}/>
                        <Footerbox href={""} detail={"Speed Test"}/>
                        <Footerbox href={""} detail={"Legal Notices"}/>
                        <Footerbox href={""} detail={"Only on Netflix"}/>
                    </ul>
                    <Languageselector />
                    <p className="footer-country">Netflix South Korea</p>
                    <div className="copy-text">
                        <div className="copy-text-block">Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588

                        </div>
                        <div className="copy-text-block">Representative: Reginald Shawn Thompson

                        </div>
                        <div className="copy-text-block">Email: korea@netflix.com

                        </div>
                        <div className="copy-text-block">Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea

                        </div>
                        <div className="copy-text-block">Business registration number: 165-87-00119

                        </div>
                        <div className="copy-text-block">Hosted by: Amazon Web Services Inc.

                        </div>
                        <div className="copy-text-block">
                            <a href="a">KFTC website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-pixel" style={{position:"absolute"}}>
            </div>
        </div>
    )
}

export default Footer;