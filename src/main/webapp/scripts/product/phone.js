let dropDownPrice = document.querySelector('.dropdown__price')
let dropDownListPrice = document.querySelector('.dropdown-list__price')
let buttonCancelPrice = document.querySelector('.button__cancel-price')
let dropDownList = document.querySelectorAll('.dropdownList')
let item = document.querySelectorAll('.dropdown__item')

item.forEach((items) => {
    items.addEventListener('click', (e) => {
        items.classList.toggle('check')
        e.preventDefault()
    })
})

dropDownPrice.addEventListener('click', () => {
    dropDownListPrice.classList.toggle('block-dropdown__list')
    dropDownPrice.classList.add('border-dropdown__select')
});

buttonCancelPrice.addEventListener('click', () => {
    dropDownListPrice.classList.remove('block-dropdown__list')
    dropDownPrice.classList.remove('border-dropdown__select')
    item.forEach((items) => {
        items.classList.remove('check')
    })
})

window.onclick = function (e) {
    if (!e.target.matches('.dropdown__price')) {
        if (dropDownListPrice.classList.contains('block-dropdown__list')) {
            dropDownListPrice.classList.remove('block-dropdown__list');
        }
    }
}