

function faqButtonClick(dom) {
    let thinX = dom.querySelector("#thin-x");
    thinX.classList.toggle("svg-closed")
    
    let thinY = dom.parentNode.querySelector("#thin-y")
    thinY.classList.toggle("closed")
}

let t = document.getElementById('thin-y')
t.addEventListener("click", function(e){
    console.log(e.target)
})