import './App.css';

function App() {
  return (
    <div className="App">
      <div id="appMountPoint">
        <div className="basicLayout">
            <div className="netflix-sans-font-loaded">
                <div className="our-story-desktop-framework">
                    <div className="our-story-container">
                        <div className="our-story-header-wrapper">
                            <div className="our-story-header our-story-header--has-language-selector">
                                <span className="svg-nfLogo our-story-logo nfLogo">
                                    <svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" >
                                        <g id="netflix-logo">
                                            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                                        </g>
                                    </svg>
                                </span>
                                <div className="lang-selection-container">
                                    <div className="ui-select-wrapper">
                                        <label className="ui-label">
                                            <span></span>
                                        </label>
                                        <div className="select-arrow medium prefix globe">
                                            <select className="ui-select medium" id="lang-switcher-header-select">
                                                <option lang="en">English</option>
                                                <option lang="ko">한국어</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                <a href="/NetflixSiginIN/index.html" className="authLinks redButton">Sign In</a>
                            </div>
                        </div>
                        <div className="our-story-cards">
                            {/* <!-- section 1 --> */}
                            <div className="our-story-card hero-card hero_fuji vlv">
                                <div className="our-story-card-background">
                                    <div className="concord-img-wrapper">
                                        <img className="concord-img vlv-creative" src={require('./Netflix-background-img.jpeg')} style={{height: "722.5px"}} alt=''/>
                                        <div className="concord-img-gradient"></div>
                                    </div>
                                </div>
                                <div className="our-story-card-text">
                                    <h1>Unlimited movies, TV shows, and more.</h1>
                                    <h2>Watch anywhere. Cancel anytime.</h2>
                                    <form className="cta-form email-form">
                                        <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                                        <div className="email-form-lockup">
                                            <ul className="simpleForm structural ui-grid">
                                                <li className="nfFormSpace field-email">
                                                    <div className="nfInput nfInputResponsive">
                                                        <div className="nfInputPlacement">
                                                            <label className="input_id" placeholder="email">
                                                                <input type="email" name="email" className="nfTextField" id="id_email_hero_fuji" tabIndex="0" autoomplete="email" maxlenght="50" />
                                                                <label htmlFor="id_email_hero_fuji" className="placeLabel">Email address</label>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="our-story-cta-container cta-link-wrapper">
                                                <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autoomplete="off" tabIndex="0" id="GetstartedButton">
                                                    <span className="cta-btn-txt">Get started</span>
                                                    <span className="chevron-right-arrow">
                                                        <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                            <desc>chevron</desc>
                                                            <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="center-pixel"></div>
                            </div>
                            {/* <!-- section 2 --> */}
                            <div className="our-story-card animation-card watchOnTv">
                                <div className="animation-card-container">
                                    <div className="our-story-card-text-section2">
                                        <h1 className="our-story-card-title">Enjoy on your TV.</h1>
                                        <h2 className="our-story-card-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more.</h2>
                                    </div>
                                    <div className="our-story-card-img-container">
                                        <div className="our-story-card-animation-container">
                                            <img className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt='' />
                                            <div className="our-story-card-animation">
                                                <video className="our-story-card-video" autoPlay playsInline muted loop>
                                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                                </video>
                                                <div className="our-story-card-animation-text"></div>
                                                <div className="our-story-card-animation-custom"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center-pixel" style={{position: "absolute"}}></div>
                                </div>
                            </div>
                            {/* <!-- section 3 --> */}
                            <div className="our-story-card animation-card downloadAndWatch flipped">
                                <div className="animation-card-container">
                                    <div className="our-story-card-text-section3">
                                        <h1 className="our-story-card-title">Download your shows to watch offline.</h1>
                                        <h2 className="our-story-card-subtitle">Save your favorites easily and always have something to watch.</h2>
                                    </div>
                                    <div className="our-story-card-img-container">
                                        <div className="our-story-card-animation-container">
                                            <img className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=''/>
                                            <div className="our-story-card-animation">
                                                <div className="our-story-card-animation-image">
                                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt=''/>
                                                </div>
                                                <div className="our-story-card-animation-text">
                                                    <div className="text-0" >Stranger Things</div>
                                                    <div className="text-1" >Downloading...</div>
                                                </div>
                                                <div className="our-story-card-animation-custom" aria-hidden="true">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center-pixel" style={{position:"absolute"}}></div>
                                </div>
                            </div>
                            {/* <!-- section 4 --> */}
                            <div className="our-story-card animation-card watchOnDevice">
                                <div className="animation-card-container">
                                    <div className="our-story-card-text-section4">
                                        <h1 className="our-story-card-title">Watch everywhere.</h1>
                                        <h2 className="our-story-card-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                                    </div>
                                    <div className="our-story-card-img-container">
                                        <div className="our-story-card-animation-container">
                                            <img className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt='' />
                                            <div className="our-story-card-animation">
                                                <video className="our-story-card-video" autoPlay playsInline muted loop>
                                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                                                </video>
                                                <div className="our-story-card-animation-text">

                                                </div>
                                                <div className="our-story-card-animation-custom" aria-hidden="true">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center-pixel" style={{position:"absolute"}}>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- section 5 --> */}
                            <div className="our-story-card animation-card kidsValueProp flipped">
                                <div className="animation-card-container">
                                    <div className="our-story-card-text-section5">
                                        <h1 className="our-story-card-title">Create profiles for kids.</h1>
                                        <h2 className="our-story-card-subtitle">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                                        </h2>
                                    </div>
                                    <div className="our-story-card-img-container">
                                        <div className="our-story-card-animation-container">
                                            <img className="our-story-card-img" src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt=''/>
                                            <div className="our-story-card-animation">
                                                <div className="our-story-card-animation-text">
                                                </div>
                                                <div className="our-story-card-animation-custom" aria-hidden="true">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="center-pixel" style={{position:"absolute"}}>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- section 6 --> */}
                            <div className="our-story-card faq-card" id="faq">
                                <div className="our-story-card-text-section6">
                                    <h1 className="our-story-card-title-section6">Frequently Asked Questions</h1>
                                    <ul className="faq-list">
                                        <li className="faq-list-item">
                                            <button className="faq-question">What is Netflix?
                                                <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                                </svg>
                                            </button>
                                            <div id="thin-y" className="faq-answer closed">
                                                <span >Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                                    <br /><br />
                                                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                                                </span>
                                                </div>
                                            </li>
                                            <li className="faq-list-item">
                                                <button className="faq-question">How much does Netflix cost?
                                                    <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">

                                                        </path>
                                                    </svg>
                                                </button>
                                                <div id="thin-y" className="faq-answer closed">
                                                    <span >Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from KRW9,500 to KRW17,000 a month. No extra costs, no contracts.

                                                    </span>
                                                </div>
                                            </li>
                                            <li className="faq-list-item">
                                                <button className="faq-question">Where can I watch?
                                                    <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">

                                                        </path>
                                                    </svg>
                                                </button>
                                                <div id="thin-y" className="faq-answer closed">
                                                    <span>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                                        <br /><br />You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="faq-list-item">
                                                <button className="faq-question">How do I cancel?
                                                    <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">

                                                        </path>
                                                    </svg>
                                                </button>
                                                <div id="thin-y" className="faq-answer closed">
                                                    <span >Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.

                                                    </span>
                                                </div>
                                            </li>
                                            <li className="faq-list-item">
                                                <button className="faq-question">What can I watch on Netflix?
                                                    <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                                        <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">

                                                        </path>
                                                    </svg>
                                                    </button>
                                                        <div id="thin-y" className="faq-answer closed">
                                                            <span >Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.

                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="faq-list-item">
                                                        <button className="faq-question">Is Netflix good for kids?
                                                            <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">

                                                                </path>
                                                            </svg>
                                                        </button>
                                                                <div id="thin-y" className="faq-answer closed">
                                                                    <span>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br /><br />Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <form className="cta-form email-form">
                                                            <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.
                                                        </h3>
                                                            <div className="email-form-lockup">
                                                                <ul className="simpleForm structural ui-grid">
                                                                    <li className="nfFormSpace field-email">
                                                                        <div className="nfInput validated nfInputResponsive">
                                                                            <div className="nfInputPlacement">
                                                                            <label className="input_id" placeholder="email">
                                                                                <input type="email" name="email" className="nfTextField hasText" id="id_email_faq" defaultValue="" tabIndex="0" autoomplete="email" maxLength="50" minLength="5" />
                                                                                <label htmlFor="id_email_faq" className="placeLabel">Email address</label>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="our-story-cta-container cta-link-wrapper">
                                                                <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit">
                                                                    <span className="cta-btn-txt" >Get Started</span>
                                                                        <span className="chevron-right-arrow" >
                                                                            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                                        <desc>chevron</desc>
                                                                    <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="center-pixel" style={{position:"absolute"}}>
                                    </div>
                                </div>
                            </div>
                        <div className="our-story-card card-contents footer-card our-story-card-no-border" style={{position:"relative"}}>
                            <div className="site-footer-wrapper centered dark">
                                <div className="footer-divider">

                                </div>
                                <div className="site-footer">
                                    <p className="footer-top">Questions? Call 
                                        <a className="footer-top-a" href="tel:010-6488-2739">010-6488-2739</a>
                                    </p>
                                    <ul className="footer-links structural">
                                        <li className="footer-link-item">
                                            <a className="footer-link" href="a">
                                                <span>FAQ</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Help Center</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Account</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Media Center</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Investor Relations</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Jobs</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Ways to Watch</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Terms of Use</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Privacy</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Cookie Preferences</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Corporate Information</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Contact Us</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Speed Test</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item">
                                            <a className="footer-link"  href="a">
                                                <span>Legal Notices</span>
                                            </a>
                                        </li>
                                        <li className="footer-link-item originals-link">
                                            <a className="footer-link"  href="a">
                                                <span>Only on Netflix</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="lang-selection-container" id="lang-switcher">
                                        <div className="ui-select-wrapper">
                                            <label htmlFor="lang-switcher-select" className="ui-label">
                                                <span className="ui-label-text">Select Language</span>
                                            </label>
                                            <div className="select-arrow medium prefix globe">
                                                <select className="ui-select medium" id="lang-switcher-select" tabIndex="0">
                                                    <option lang="ko" defaultValue="/kr/" >한국어
                                                    </option>
                                                    <option lang="en" defaultValue="/kr-en/">English</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
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
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
