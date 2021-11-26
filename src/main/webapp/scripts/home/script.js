//Menu bar
const menu = document.querySelector('.btn-menu')
var click = 0
menu.addEventListener('click', () => {
    const navigation = document.querySelectorAll('.nav-item')
    navigation.forEach((nav) => {
        nav.classList.toggle('nav-item-show')
    })
});


// var nav = document.getElementById('header')
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
    //     if (lastScrollY < window.scrollY) {
        //         nav.classList.add('header-hidden');
        //         hideNavbar.forEach((hide) => {
            //             hide.classList.remove('nav-item-show')
            //         });
            //         click = 0;
            //     } else {
                //         nav.classList.remove('header-hidden');
                //     }
                //     lastScrollY = window.scrollY;
// });

//nav-product-hide
var hideNavbar = document.querySelectorAll('.nav-item')
let slideUp = document.querySelector('.nav-item-slide-up')
let showSubnav = document.querySelector('.subnav')
let rotateAngleDown = document.querySelector('.angle-down')
slideUp.addEventListener('click', (e) => {
    e.preventDefault()
    for (var i = 0; i < 5; i++)
        hideNavbar[i].classList.toggle('nav-product-hide')
    showSubnav.classList.toggle('show-subnav')
    rotateAngleDown.classList.toggle('rotate-angle-down')
})


const htvNavBar = document.getElementById('nav')
const navRight = document.querySelector('.nav-right')
const showSearchBox = document.querySelector('.icon-search')
const navSearch = document.querySelector('.nav-search')
const hideSearchBox = document.querySelector('.nav-search-btn-close')
showSearchBox.addEventListener('click',() =>{
    navRight.style.visibility = 'hidden'
    navSearch.style.visibility = 'visible';
    htvNavBar.style.visibility = 'hidden'
})

hideSearchBox.addEventListener('click',() =>{
    navRight.style.visibility = 'visible'
    navSearch.style.visibility = 'hidden';
    htvNavBar.style.visibility = 'visible'
})

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


window.addEventListener("scroll", scrollFunction);

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

const backToTopButton = document.querySelector("#back-to-top-btn");
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

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

const setTheme = (theme) => (document.documentElement.className = theme);

const themeLight = document.querySelector('.theme-light')
const themeDark = document.querySelector('.theme-dark')
const iconDark = document.querySelectorAll('.icon-font')
const iconLight = document.querySelectorAll('.icon-font-white')

themeLight.addEventListener('click', () => {
    iconDark.forEach((iconDarks) => {
        iconDarks.classList.remove('change-icon-font')
        console.log(iconDarks)
    });
    iconLight.forEach((iconLights) => {
        iconLights.classList.add('change-icon-font')
    });
});

themeDark.addEventListener('click', () => {
    iconDark.forEach((iconDarks) => {
        iconDarks.classList.add('change-icon-font')
    });
    iconLight.forEach((iconLights) => {
        iconLights.classList.remove('change-icon-font')
    });
});