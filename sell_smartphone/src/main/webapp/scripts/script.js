// var header = document.getElementById('htv-navbar');
// var menu = document.getElementById('menu');
// var headerHeight = header.clientHeight;
// menu.onclick = function () {
//     var isClosed = header.clientHeight === headerHeight;
//     if (isClosed) {
//         header.style.height = 'auto';
//         // navigation.style.height = null;
//     }
//     else {
//         header.style.height = null;
//     }
// }

//Search

const navSearch = document.querySelector('.js-nav-search')
const navRight = document.querySelector('.js-nav-right')
const htvNavBar = document.querySelector('.js-htv-navbar')

function showSearchBox() {
    navSearch.classList.add('show-nav-search')
    navRight.classList.add('hide-nav-right')
    htvNavBar.classList.add('hide-htv-navbar')
}

function hideSearchBox() {
    navSearch.classList.remove('show-nav-search')
    navRight.classList.remove('hide-nav-right')
    htvNavBar.classList.remove('hide-htv-navbar')
}

////////////////////////////////
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function () {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});