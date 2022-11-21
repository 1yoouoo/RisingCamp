import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import KakaoLogin from "react-kakao-login";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const isValidEmail = inputValue.email.length > 4;
  const isValidPassword = inputValue.password.length > 4;
  const [touched, setTouched] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (inputValue.email === "12345" && inputValue.password === "12345") {
      setLoginError(false);
      navigate("/main");
    } else {
      setLoginError(true);
    }
    e.preventDefault();
  };
  //KAKAO
  const KAKAO_JS_KEY = "6e77bd46bb262f465b1b15f65c140ec0";

  // 소셜 로그인 성공
  const socialLoginSuccess = (res) => {
    console.log("소셜 로그인 성공");
    console.log(res);
  };

  // 소셜 로그인 실패
  const socialLoginFail = (res) => {
    console.log("소셜 로그인 실패");
    console.log(res);
  };

  return (
    <div id="appMountPoint">
      <div className="login-wrapper hybrid-login-wrapper">
        <div className="login-wrapper-background">
          <img
            className="concord-img vlv-creative"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/296a32a7-870c-4ebe-a49c-0f4223eff344/KR-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt=""
          />
        </div>
        <div className="nfHeader login-header signupBasicHeader">
          <a
            href="/NetflixHome/index.html"
            className="svg-nfLogo signupBasicHeader"
            data-uia="netflix-header-svg-logo"
          >
            <svg
              viewBox="0 0 111 30"
              className="svg-icon svg-icon-netflix-logo"
              focusable="false"
              style={{
                height: "67px",
                verticalAlign: "middle",
                width: "167px",
              }}
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
            <span className="screen-reader-text">Netflix Home</span>
          </a>
        </div>
        <div className="login-body">
          <div className="login-content login-form hybrid-login-form hybrid-login-form-signup">
            <div className="hybrid-login-form-main">
              <h1>Sign In</h1>
              <div
                className="invalidLogin"
                style={loginError ? { display: "block" } : { display: "none" }}
              >
                <div>
                  Sorry, we can't find an account with this number. Please make
                  sure to select the correct country code or sign in with email.
                </div>
              </div>
              <form method="post" className="login-form">
                <div className="nfInput nfEmailPhoneInput login-input login-input-email">
                  <div className="nfInputPlacement">
                    <div className="nfEmailPhoneControls">
                      <label className="input_id">
                        <input
                          type="text"
                          className="nfTextField hasText"
                          id="id_userLoginId"
                          name="email"
                          required
                          value={inputValue.email}
                          onChange={onChange}
                          onBlur={() => setTouched(true)}
                        />

                        <label className="placeLabel-email">
                          Email or phone number
                        </label>
                      </label>
                    </div>
                    <div
                      className="inputErrorEmail"
                      style={
                        touched
                          ? isValidEmail
                            ? { opacity: "0" }
                            : { opacity: "1" }
                          : { opacity: "0" }
                      }
                    >
                      Please enter a valid email.
                    </div>
                  </div>
                </div>
                <div className="nfInput nfPasswordInput login-input login-input-password">
                  <div className="nfInputPlacement">
                    <div className="nfPasswordControls">
                      <label className="input_id">
                        <input
                          type="password"
                          className="nfTextField"
                          id="id_password"
                          name="password"
                          required
                          value={inputValue.password}
                          onChange={onChange}
                          onBlur={() => setTouched(true)}
                        />
                        <label className="placeLabel-password">Password</label>
                      </label>
                      <button
                        id="id_password_toggle"
                        type="button"
                        className="nfPasswordToggle"
                        title="Show Password"
                      >
                        SHOW
                      </button>
                    </div>
                    <div
                      className="inputErrorPassword"
                      style={
                        touched
                          ? isValidPassword
                            ? { opacity: "0" }
                            : { opacity: "1" }
                          : { opacity: "0" }
                      }
                    >
                      Your password must contain between 4 and 60 characters.
                    </div>
                  </div>
                </div>
                <button
                  className="btn login-button btn-submit btn-small"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                <KakaoLogin
                  style={{
                    width: "100%",
                    height: "49px",
                    color: "rgb(60, 30, 30)",
                    backgroundColor: "rgb(255, 235, 0)",
                    border: "1px solid transparent",
                    borderRadius: "3px",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                  // rest api 키가 아닌 js 키를 사용해야 합니다.
                  jsKey={KAKAO_JS_KEY}
                  onSuccess={(res) => socialLoginSuccess(res)}
                  onFailure={(res) => socialLoginFail(res)}
                  // getPofile 속성을 주지 않으면 유저 정보를 받을 수 없습니다.
                  getProfile={true}
                ></KakaoLogin>

                <div className="hybrid-login-form-help">
                  <div className="ui-binary-input login-remember-me">
                    <input
                      type="checkbox"
                      className="rememberMe"
                      id="bxid_rememberMe_true"
                      tabIndex="0"
                    />
                    <label htmlFor="bxid_rememberMe_true">
                      <span className="login-remember-me-label-text">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <a href="/App" className="login-help-link link">
                    Need help?
                  </a>
                </div>
              </form>
            </div>
            <div className="hybrid-login-form-other">
              <div className="login-signup-now">
                New to Netflix?
                <a href="/App">Sign up now</a>.
              </div>
              <div className="recaptcha-terms-of-use">
                <p>
                  <span>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </span>
                  <button className="recaptcha-terms-of-use--link-button">
                    Learn more.
                  </button>
                </p>
                <div className="recaptcha-terms-of-use--disclosure">
                  <span>
                    The information collected by Google reCAPTCHA is subject to
                    the Google
                    <a href="/App" id="recaptcha-privacy-link">
                      Privacy Policy
                    </a>
                    and
                    <a href="/App" id="recaptcha-tos-link">
                      Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalized advertising by Google).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-wrapper centered">
          <div className="footer-divider"></div>
          <div className="site-footer">
            <p className="footer-top">
              Questions? Call
              <a className="footer-top-a" href="tel:080-001-9588">
                080-001-9588
              </a>
            </p>
            <ul className="footer-links structural">
              <li
                className="footer-link-item"
                placeholder="footer_responsive_link_faq_item"
              >
                <a
                  className="footer-link"
                  href="/App"
                  placeholder="footer_responsive_link_faq"
                >
                  <span>FAQ</span>
                </a>
              </li>
              <li
                className="footer-link-item"
                placeholder="footer_responsive_link_help_item"
              >
                <a
                  className="footer-link"
                  href="/App"
                  placeholder="footer_responsive_link_help"
                >
                  <span>Help Center</span>
                </a>
              </li>
              <li
                className="footer-link-item"
                placeholder="footer_responsive_link_terms_item"
              >
                <a
                  className="footer-link"
                  href="/App"
                  placeholder="footer_responsive_link_terms"
                >
                  <span>Terms of Use</span>
                </a>
              </li>
              <li
                className="footer-link-item"
                placeholder="footer_responsive_link_privacy_separate_link_item"
              >
                <a
                  className="footer-link"
                  href="/App"
                  placeholder="footer_responsive_link_privacy_separate_link"
                >
                  <span>Privacy</span>
                </a>
              </li>
              <li
                className="footer-link-item"
                placeholder="footer_responsive_link_cookies_separate_link_item"
              >
                <a
                  className="footer-link"
                  href="/App"
                  placeholder="footer_responsive_link_cookies_separate_link"
                >
                  <span>Cookie Preferences</span>
                </a>
              </li>
              <li
                className="footer-link-item"
                placeholder="footer_responsive_link_corporate_information_item"
              >
                <a
                  className="footer-link"
                  href="/App"
                  placeholder="footer_responsive_link_corporate_information"
                >
                  <span>Corporate Information</span>
                </a>
              </li>
            </ul>
            <div className="lang-selection-container" id="lang-switcher">
              <div className="ui-select-wrapper">
                <label htmlFor="lang-switcher-select" className="ui-label">
                  <span className="ui-label-text">Select Language</span>
                </label>
                <div className="select-arrow medium prefix globe">
                  <select
                    className="ui-select medium"
                    id="lang-switcher-select"
                    tabIndex="0"
                    placeholder="lang-switcher"
                  >
                    <option>한국어</option>
                    <option>English</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="copy-text">
              <div className="copy-text-block">
                Netflix Services Korea Ltd. E-Commerce Registration Number: Je
                2018-Seoul Jong-ro-0426 Ho. Phone: 080-001-9588
              </div>
              <div className="copy-text-block">
                Representative: Reginald Shawn Thompson
              </div>
              <div className="copy-text-block">Email: korea@netflix.com</div>
              <div className="copy-text-block">
                Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro,
                Jongno-gu, Seoul, 03161 Republic of Korea
              </div>
              <div className="copy-text-block">
                Business registration number: 165-87-00119
              </div>
              <div className="copy-text-block">
                Hosted by: Amazon Web Services Inc.
              </div>
              <div className="copy-text-block">
                <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
                  KFTC website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
