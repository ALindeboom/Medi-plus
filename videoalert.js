
function showPopUp() {
    const x = document.getElementById("popUp");
    if (x.className === "popUpContainer") {
        x.className += " responsive";
    } else {
        x.className = "popUpContainer";
    }
}

function closePopUp() {
    const x = document.getElementById("popUp");
    x.className = "popUpContainer";
}