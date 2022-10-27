const Emailform = () => {
    return (
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
    )
}

export default Emailform;