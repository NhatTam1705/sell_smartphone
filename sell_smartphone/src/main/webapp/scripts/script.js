// var menu = document.getElementById('menu');
// var test = document.getElementByClassName('hidden');
// var count = 1;
// menu.onclick = function () {
//     var i;
//     if (count === 1) {
//         for (i = 0; i < test.length; i++)
//             test[i].style.display = 'none';
//         count = 0;
//     } else {
//         for (i = 0; i < test.length; i++)
//             test[i].style.display = 'block';
//         count = 1;
//     }
// }


var navigation = document.getElementsByClassName('hidden-nav')
var count = 1
function menu() {
    var i;
    if (count === 0){
        for (i = 0; i < navigation.length; i++) {
            navigation[i].style.display = 'none'
        }
        count = 1;
    }
    else{
        for (i = 0; i < navigation.length; i++) {
            navigation[i].style.display = 'flex'
        }
        count = 0;
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