var nav = document.getElementById('header')
let lastScrollY = window.scrollY;
var hideNavbar = document.querySelectorAll('.hide-nav')
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('header-hidden');
        hideNavbar.forEach((hide) => {
            hide.classList.remove('height-navbar')
        });
        click = 0;
    } else {
        nav.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});