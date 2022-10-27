import "./Faqlist.css"

function faqButtonClick(dom) {
    let thinX = dom.querySelector("#thin-x");
    console.log(thinX)
    // thinX.classList.toggle("svg-closed")
    
    // let thinY = dom.parentNode.querySelector("#thin-y")
    // thinY.classList.toggle("closed")
}

const Faqlist = (props) => {
    return (
        <li className="faq-list-item">
            <button className="faq-question" onClick={faqButtonClick}>{props.title}
                <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                </svg>
            </button>
            <div id="thin-y" className="faq-answer closed">
                <span >{props.subtitle}</span>
            </div>
        </li>
    )
}

export default Faqlist;