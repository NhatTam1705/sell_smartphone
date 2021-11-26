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
showSearchBox.addEventListener('click', () => {
    navRight.style.visibility = 'hidden'
    navSearch.style.visibility = 'visible';
    htvNavBar.style.visibility = 'hidden'
})

hideSearchBox.addEventListener('click', () => {
    navRight.style.visibility = 'visible'
    navSearch.style.visibility = 'hidden';
    htvNavBar.style.visibility = 'visible'
})

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