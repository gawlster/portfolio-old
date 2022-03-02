window.addEventListener("scroll", function(event) {
    let scroll = this.scrollY;
    let navbar = document.querySelector("#home .navbar");
    if (scroll > window.innerHeight - 1) {
        navbar.style.backgroundColor = "#333333";
    } else {
        navbar.style.backgroundColor = "rgba(128, 128, 128, 0.589)";
    }
});
