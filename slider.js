let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n, n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    function showSlides(n, direction) {
    let i;
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
    slideIndex = 1}
    if (n < 1) {
    slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    if (direction === -1) {
    slides[slideIndex-1].classList.add("slide-left");
    setTimeout(() => {
        slides[slideIndex-1].classList.remove("slide-left");
    }, 2000);
    } else {
    slides[slideIndex-1].classList.add("slide-right");
    setTimeout(() => {
        slides[slideIndex-1].classList.remove("slide-right");
    }, 2000);
    }
}