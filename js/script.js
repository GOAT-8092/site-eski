// YAGO
function pagedown(){
    window.scrollTo(0, document.querySelector('.hero').scrollHeight);
}

function scrollWindowTo(id){
    document.getElementById(id).scrollIntoView(true);
}


function myFunction() {
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
    oldscroll = window.pageYOffset;
}
window.addEventListener("scroll", myFunction);