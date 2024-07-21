
document.addEventListener("DOMContentLoaded", () => {

let mybutton = document.getElementById("myTopBtn");

mybutton.addEventListener("click", () => {
    topFunction();
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
});
