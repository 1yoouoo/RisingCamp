import "./Languageselector.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons'

const Languageselector = () => {
    return (
        <div className="lang-selection-container" id="lang-switcher">
            <div className="ui-select-wrapper">
                <label htmlFor="lang-switcher-select" className="ui-label">
                    <span className="ui-label-text">Select Language</span>
                </label>
                <div className="select-arrow medium prefix globe">

                    <FontAwesomeIcon icon={faGlobe} size={'xs'} className="faGlobe"/>
                    <select className="ui-select medium" id="lang-switcher-select" tabIndex="0">
                        <option lang="ko" defaultValue="/kr/" >한국어
                        </option>
                        <option lang="en" defaultValue="/kr-en/">English</option>
                    </select>
                    <FontAwesomeIcon icon={faCaretDown} className="faCaretDown"/>
                </div>
            </div>
        </div>
    )
}

export default Languageselector;