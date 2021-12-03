//Menu bar
const blurContent = document.querySelector('.content')
$('.btn-menu').click(function () {
    $('.nav-item').toggleClass('nav-item-show')
    $('.nav-item').addClass('trans__li')
    $('.nav-item').show()
    $('.subnav').removeClass('show-subnav')
})

$(window).bind("resize", function () {
    if ($(this).width() > '1024') {
        $('li').removeClass('nav-item-show')
        $('.nav-item').show()
        $('.nav-icon-angle').removeClass('rotate-angle__180')
        $('.subnav').removeClass('show-subnav')
    }
})

var nav = document.getElementById('header')
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('header-hidden');
    } else {
        nav.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
});

$('.nav-item__up').click(function () {
    if (innerWidth < '1024') {
        $('.nav-item__hide').slideToggle()
        $('.subnav').toggleClass('show-subnav')
        $('.nav-icon-angle').toggleClass('rotate-angle__180')
        $('li').removeClass('trans__li')
    }
})


const htvNavBar = document.getElementById('htv-navbar')
const navRight = document.querySelector('.nav-right')
const showSearchBox = document.querySelector('.icon-search')
const navSearch = document.querySelector('.nav-search')
const hideSearchBox = document.querySelector('.nav-search-btn-close')
var screenWidth = "767"

$(window).bind("resize", function () {
    if ($(this).width() <= screenWidth) {
        $('nav').removeClass('htv-navbar__state')
        $('div').removeClass('nav-search__state')
        $('div').removeClass('nav-right__state')
    }
})

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