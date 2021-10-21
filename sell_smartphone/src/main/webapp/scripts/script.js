var header = document.getElementById('htv-navbar');
var menu = document.getElementById('menu');
menu.onclick = function () {
    var isClosed = header.clientHeight === 83;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = '83px';
    }
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

