const Footerbox = (props) => {
    return (
        <li className="footer-link-item">
            <a className="footer-link" href={props.href}>
                <span>{props.detail}</span>
            </a>
        </li>
    )
}

export default Footerbox