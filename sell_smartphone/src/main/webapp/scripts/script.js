//Menu bar
var navigation = document.getElementsByClassName('hidden-nav')
var count = 1

function menu() {
    var i;
    if (count === 0) {
        for (i = 0; i < navigation.length; i++) {
            navigation[i].style.display = 'none'
        }
        count = 1
    } else {
        for (i = 0; i < navigation.length; i++) {
            navigation[i].style.display = 'flex'
        }
        count = 0
    }
}


//Hide/Appear header
{
    // const nav = document.querySelector("#header");
    var nav = document.getElementById('header')
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add('header-hidden');
            // nav.style.display='none'
        } else {
            nav.classList.remove('header-hidden');
            // nav.style.display='block'
        }

        lastScrollY = window.scrollY;
    });
}



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

