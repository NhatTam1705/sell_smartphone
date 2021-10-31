var click = 0

function textUser() {
    var textUser = document.getElementById('text-user');
    var textPhone = document.getElementById('text-phone')
    var hideTextBoxUser = document.getElementById('textbox-user')
    var hideTextBoxNumber = document.getElementById('textbox-number')
    if (click === 0) {
        textUser.classList.add('blur-text')
        textUser.classList.remove('unblur-text')
        textPhone.classList.add('unblur-text')
        textPhone.classList.remove('blur-text')
        hideTextBoxUser.style.visibility = "hidden"
        hideTextBoxNumber.style.visibility = "visible"
        click = 1
        hidePass()
    }
}

function textPhone() {
    var textUser = document.getElementById('text-user');
    var textPhone = document.getElementById('text-phone')
    var hideTextBoxUser = document.getElementById('textbox-user')
    var hideTextBoxNumber = document.getElementById('textbox-number')
    if (click === 1) {
        textUser.classList.add('unblur-text')
        textUser.classList.remove('blur-text')
        textPhone.classList.add('blur-text')
        textPhone.classList.remove('unblur-text')
        hideTextBoxUser.style.visibility = "visible"
        hideTextBoxNumber.style.visibility = "hidden"
        click = 0
        hidePass()
    }
}


function hidePass() {
    var hideClassShowPass = document.querySelector('.psw-hide')
    var showClassHidePass = document.querySelector('.psw-show')
    hideClassShowPass.style.visibility = 'visible'
    showClassHidePass.style.visibility = 'hidden'
    document.getElementById("password-field").type = "password"
}

function showPass() {
    var hideClassShowPass = document.querySelector('.psw-hide')
    var showClassHidePass = document.querySelector('.psw-show')
    hideClassShowPass.style.visibility = 'hidden'
    showClassHidePass.style.visibility = 'visible'
    document.getElementById("password-field").type = "text"
}


function showPassNew() {
    var hideClassShowNewPass = document.querySelector('.new-psw-hide')
    var showClassHideNewPass = document.querySelector('.new-psw-show')
    hideClassShowNewPass.style.visibility = 'hidden'
    showClassHideNewPass.style.visibility = 'visible'
    document.getElementById("new-password-field").type = "text"
}

function hidePassNew() {
    var hideClassShowNewPass = document.querySelector('.new-psw-hide')
    var showClassHideNewPass = document.querySelector('.new-psw-show')
    hideClassShowNewPass.style.visibility = 'visible'
    showClassHideNewPass.style.visibility = 'hidden'
    document.getElementById("new-password-field").type = "password"
}