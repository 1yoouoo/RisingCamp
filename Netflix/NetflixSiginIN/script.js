function learnMoreClick() {
    let learnMoreClassName = document.querySelector(".recaptcha-terms-of-use--link-button")
    learnMoreClassName.classList.add("-hidden")
    let disclosureClassName = document.querySelector(".recaptcha-terms-of-use--disclosure")
    disclosureClassName.classList.add("-visible")
}