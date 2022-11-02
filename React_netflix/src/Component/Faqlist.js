import "./Faqlist.css";
import { useState } from "react";



const Faqlist = (props) => {
    const [classToggleState, setClassToggleState] = useState("false"); 

    function FaqButtonClick() {
        setClassToggleState(!classToggleState)
    }
    
    
    return (
        <li className="faq-list-item">
            <button className="faq-question" onClick={FaqButtonClick}>{props.title}
                <svg id="thin-x" viewBox="0 0 26 26" className={classToggleState ? "svg-icon svg-icon-thin-x svg-closed" : "svg-icon svg-icon-thin-x svg-open"} focusable="true">
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
            </button>
            <div id="thin-y"  className={classToggleState ? "faq-answer closed" : "faq-answer open"}>
                <span >{props.subtitle}</span>
            </div>
        </li>
    )
}

export default Faqlist;

// 컴포넌트 폴더 , 페이지 폴더 -> 폴더 분리
// false << 체크