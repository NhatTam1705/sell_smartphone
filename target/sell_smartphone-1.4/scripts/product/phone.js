let dropDownPrice = document.querySelector('.dropdown__price')
let dropDownListPrice = document.querySelector('.dropdown-list__price')
let buttonCancelPrice = document.querySelector('.button__cancel-price')
let dropDownList = document.querySelector('.dropdownList')
let item = document.querySelector('.dropdown__item')

let dropDownType = document.querySelector('.dropdown__type')
let dropDownListType = document.querySelector('.dropdown-list__type')

let dropDownPin = document.querySelector('.dropdown__pin')
let dropDownListPin = document.querySelector('.dropdown-list__pin')

let dropDownRam = document.querySelector('.dropdown__ram')
let dropDownListRam = document.querySelector('.dropdown-list__ram')

let dropDownRom = document.querySelector('.dropdown__rom')
let dropDownListRom = document.querySelector('.dropdown-list__rom')

let dropDownCamera = document.querySelector('.dropdown__camera')
let dropDownListCamera = document.querySelector('.dropdown-list__camera')

let dropDownFuture = document.querySelector('.dropdown__future')
let dropDownListFuture = document.querySelector('.dropdown-list__future')

let dropDownDesign = document.querySelector('.dropdown__design')
let dropDownListDesign = document.querySelector('.dropdown-list__design')

let dropDownScreen = document.querySelector('.dropdown__screen')
let dropDownListScreen = document.querySelector('.dropdown-list__screen')


function filter(s1, s2){
    s1.classList.toggle('block-dropdown__list')
    s2.classList.add('border-dropdown__select')
}

dropDownPrice.addEventListener('click',()=>{
    filter(dropDownListPrice,dropDownPrice)
});

dropDownType.addEventListener('click',()=>{
    filter(dropDownListType,dropDownType)
});

dropDownPin.addEventListener('click',()=>{
    filter(dropDownListPin,dropDownPin)
});

dropDownRam.addEventListener('click',()=>{
    filter(dropDownListRam,dropDownRam)
});

dropDownRom.addEventListener('click',()=>{
    filter(dropDownListRom,dropDownRom)
});

dropDownCamera.addEventListener('click',()=>{
    filter(dropDownListCamera,dropDownCamera)
});

dropDownFuture.addEventListener('click',()=>{
    filter(dropDownListFuture,dropDownFuture)
});

dropDownDesign.addEventListener('click',()=>{
    filter(dropDownListDesign,dropDownDesign)
});

dropDownScreen.addEventListener('click',()=>{
    filter(dropDownListScreen,dropDownScreen)
});

item.forEach((items) => {
    items.addEventListener('click', (e) => {
        items.classList.toggle('check')
        e.preventDefault()
    })
})

// dropDownPrice.addEventListener('click', () => {
//     dropDownListPrice.classList.toggle('block-dropdown__list')
//     dropDownPrice.classList.add('border-dropdown__select')
// });

buttonCancelPrice.addEventListener('click', () => {
    dropDownListPrice.classList.remove('block-dropdown__list')
    dropDownPrice.classList.remove('border-dropdown__select')
    // item.forEach((items) => {
    //     items.classList.remove('check')
    // })
})

// window.onclick = function (e) {
//     if (!e.target.matches('.dropdown__price')) {
//         if (dropDownListPrice.classList.contains('block-dropdown__list')) {
//             dropDownListPrice.classList.remove('block-dropdown__list');
//         }
//     }
// }