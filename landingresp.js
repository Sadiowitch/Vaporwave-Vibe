var burger = document.querySelector(".burger");
var navbar = document.querySelector(".navbar");

burger.addEventListener("click", burgerMenu);

function burgerMenu() {
    if (navbar.className === "navbar") {
        navbar.className += "responsive";
    } else {
        navbar.className = "navbar";
    }
}