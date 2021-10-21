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

