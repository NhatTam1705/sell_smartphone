// var button = '<div class="button-find__item"> <input type="button" class="button__cancel" value="Cancel"><a href="" class="c-btnbox"><input type="button" class="button__submit" value="Submit"></a></div>'
var item = document.querySelectorAll('.dropdown__item')
var select = document.querySelectorAll('.dropdown__select')
var btnCancel = document.querySelectorAll('.button__cancel')
var dropdownList = document.querySelectorAll('.dropdown__list')

// btnCancel.forEach((btnCancels) => {
//     btnCancels.addEventListener('click', () => {
//         dropdownList.forEach((dropdownLists) => {
//             dropdownLists.style.display = 'none'
//         })
//     })
// })



//     btnCancels.addEventListener('mouseover', () => {
//         dropdownList.forEach((dropdownLists) => {
//             dropdownLists.style.display = 'none'
//         })
//     })
// })

item.forEach((items) => {
    items.addEventListener('click', (e) => {
        items.classList.add('check')
        e.preventDefault()
    })
})


// $(document).ready(function () {
//     dropdownList.forEach((dropdownLists) => {
//         $(dropdownLists).append(button)
//     })
// })


btnCancel.forEach((btnCancels) => {
    btnCancels.addEventListener('click', () => {
        item.forEach((items) => {
            items.classList.remove('check')
        })
    })
})