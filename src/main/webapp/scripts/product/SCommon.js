//Menu bar
const menu = document.querySelector('.btn-menu')
const blurContent = document.querySelector('.content')
var click = 0
menu.addEventListener('click', () => {
    const navigation = document.querySelectorAll('.nav-item')
    navigation.forEach((nav) => {
        nav.classList.toggle('nav-item-show')
    })
});

$(function () {
    $(window).bind("resize", function () {
        if ($(this).width() > '1024') {
            $('li').removeClass('nav-item-show')
        }
    })
})


var nav = document.getElementById('header')
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('header-hidden');
        // hideNavbar.forEach((hide) => {
        //     hide.classList.remove('nav-item-show')
        // });
        // click = 0;
    } else {
        nav.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});

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


const htvNavBar = document.getElementById('htv-navbar')
const navRight = document.querySelector('.nav-right')
const showSearchBox = document.querySelector('.icon-search')
const navSearch = document.querySelector('.nav-search')
const hideSearchBox = document.querySelector('.nav-search-btn-close')

$(function () {
    $(window).bind("resize", function () {
        // console.log($(this).width())
        if ($(this).width() <= screenWidth) {
            $('nav').removeClass('htv-navbar__state')
            $('div').removeClass('nav-search__state')
            $('div').removeClass('nav-right__state')
        }
    })
})

var screenWidth = "767"
showSearchBox.addEventListener('click', () => {
    if (screenWidth < innerWidth) {
        navRight.classList.add('nav-right__state')
        navSearch.classList.add('nav-search__state')
        htvNavBar.classList.add('htv-navbar__state')
    }
})


hideSearchBox.addEventListener('click', () => {
    if (screenWidth < innerWidth) {
        navRight.classList.remove('nav-right__state')
        navSearch.classList.remove('nav-search__state')
        htvNavBar.classList.remove('htv-navbar__state')
    }
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