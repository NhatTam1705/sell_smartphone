//Menu bar
// var navigation = document.getElementById('htv-navbar')

// var navigation = document.getElementById('nav')
// var count = 0
// var heightNav = navigation.clientHeight;

// function menu() {
//     if (count === 1) {
//             // navigation.style.visibility = "hidden"
//             // navigation.style.height= -200;
//             navigation.style.height = "0px"
//             navigation.style.transition = "height 1s"
//         count = 0;
//     } else {
//         // navigation.style.visibility = "visible"
//         navigation.style.height = "80px"
//         count = 1;
//     }
// }


var count = 0 
{ 
    function menu() {
        var i = 0
        const navigation = document.querySelectorAll('.hide-nav')
        if (count === 0) {
            for (; i < navigation.length; i++)
                navigation[i].classList.add('height-navbar')
            count = 1;
        } else {
            for (; i < navigation.length; i++)
                navigation[i].classList.remove('height-navbar')
            count = 0;
        }
    }
}


//Hide/Appear header
{
    // const nav = document.querySelector("#header");
    var nav = document.getElementById('header')
    let lastScrollY = window.scrollY;
    var hideNavbar = document.querySelectorAll('.hide-nav')
    window.addEventListener("scroll", () => {
        var i;
        if (lastScrollY < window.scrollY) {
            nav.classList.add('header-hidden');
            for (i = 0; i < hideNavbar.length; i++) {
                hideNavbar[i].classList.remove('height-navbar')
            }
        } else {
            nav.classList.remove('header-hidden');
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