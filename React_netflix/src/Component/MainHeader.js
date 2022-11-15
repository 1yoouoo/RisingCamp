import "./MainHeader.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const MainHeader = () => {
  const likeCount = useSelector((state) => state.likeCount);
  const [scrollPosition, setScrollposition] = useState(0);
  const updateScroll = () => {
    setScrollposition(window.scrollY || document.documentElement.scrollTop);
  };
  const artId = useSelector((state) => state.artId);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const [buttonOnClick, setButtonOnClick] = useState(false);
  const handleToggle = () => {
    setButtonOnClick(!buttonOnClick);
  };

  return (
    <div className={scrollPosition < 50 ? "pinning-header" : "moving-header"}>
      <div
        className="pinning-header-container"
        style={{ top: "0px", position: "relative", background: "transparent" }}
      >
        <div
          className="main-header has-billboard menu-navigation"
          role="navigation"
        >
          <span className="mainHeaderNfLogo">
            <svg
              viewBox="0 0 111 30"
              className="svg-icon svg-icon-netflix-logo"
            >
              <g>
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
              </g>
            </svg>
          </span>
          <ul className="tabbed-primary-navigation">
            <li className="navigation-menu">
              <a
                className="menu-trigger"
                role="button"
                href="todo"
                tabIndex="0"
              >
                메뉴
              </a>
            </li>
            <li className="navigation-tab">
              <a className="current active" href="/main">
                홈
              </a>
            </li>
            <li className="navigation-tab">
              <a href="/">시리즈</a>
            </li>
            <li className="navigation-tab">
              <a href="/">영화</a>
            </li>
            <li className="navigation-tab">
              <a href="/">NEW! 요즘 대세 콘텐츠</a>
            </li>
            <li className="navigation-tab">
              <div>내가 찜한 콘텐츠</div>
            </li>
            <li className="navigation-tab">
              <a href="/">언어별로 찾아보기</a>
            </li>
            <li className="navigation-tab">
              <div>REDUX {artId}</div>
            </li>
          </ul>

          <div
            className={
              buttonOnClick
                ? "secondary-navigation-searchFocused"
                : "secondary-navigation"
            }
          >
            <div className="nav-element">
              <div className="searchBox">
                <button className="searchTab" onClick={handleToggle}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <input
                  className={
                    buttonOnClick ? "searchInput-searchFocused" : "searchInput"
                  }
                  placeholder={buttonOnClick ? "제목, 사람, 장르" : null}
                />
              </div>
            </div>

            <div className="nav-element show-kids">
              <a href="/Kids">키즈</a>
            </div>
            <div className="nav-element">
              <span className="notifications">
                <button className="notifications-menu" aria-haspopup="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="likeCount">{likeCount}</span>
                </button>
              </span>
            </div>
            <div className="nav-element">
              <div className="account-menu-item">
                <div className="account-dropdown-button">
                  <a href="/YourAccount" role="button" tabIndex="0">
                    <span className="profile-link" role="presentation">
                      <img
                        className="profile-icon"
                        src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVLoBSVPLWGcJMaF2a-ok9LMApXtKLrdyJh_Oibrfr98pBrWtDUFv0TC5yqWZJk1qsMTFS2aJz5PigbwiW_1HnFmdO-ROIk.png?r=39e"
                        alt=""
                      />
                    </span>
                  </a>
                  <span className="caret" role="presentation"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
