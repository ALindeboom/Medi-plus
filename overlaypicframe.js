document.addEventListener("DOMContentLoaded", function () {
    let pics = document.querySelectorAll(".pic");

    pics.forEach(function (pic) {
        let overlay = pic.querySelector(".overlayPicture");

        pic.addEventListener("mouseover", function () {
        overlay.style.display = "block";
        });

        pic.addEventListener("mouseout", function () {
        overlay.style.display = "none";
        });
    });
});
