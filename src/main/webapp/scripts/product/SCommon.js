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


const backToTopButton = document.querySelector("#back-to-top-btn");
function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    } else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function () {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}
backToTopButton.addEventListener("click", () => {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
});