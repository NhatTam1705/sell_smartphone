// var click = 0
// {
//     function textUser(){
//         var textUser = document.getElementById('text-user');
//         var textPhone = document.getElementById('text-phone')
//         var hideTextBoxUser= document.getElementById('textbox-user')
//         var hideTextBoxNumber=document.getElementById('textbox-number')
//         if(click === 0){
//             textUser.classList.add('blur-text')
//             textUser.classList.remove('unblur-text')
//             textPhone.classList.add('unblur-text')
//             textPhone.classList.remove('blur-text')
//             hideTextBoxUser.style.visibility ="hidden"
//             hideTextBoxNumber.style.visibility="visible"
//             click = 1
//             hidePass()
//         }
//     }
//     function textPhone(){
//         var textUser = document.getElementById('text-user');
//         var textPhone = document.getElementById('text-phone')
//         var hideTextBoxUser= document.getElementById('textbox-user')
//         var hideTextBoxNumber=document.getElementById('textbox-number')
//         if(click === 1){
//             textUser.classList.add('unblur-text')
//             textUser.classList.remove('blur-text')
//             textPhone.classList.add('blur-text')
//             textPhone.classList.remove('unblur-text')
//             hideTextBoxUser.style.visibility ="visible"
//             hideTextBoxNumber.style.visibility="hidden"
//             click = 0
//             hidePass()
//         }
//     }
// }   

// {
//     function hidePass(){
//         var hideClassShowPass = document.querySelector('.psw-hide')
//         var showClassHidePass = document.querySelector('.psw-show')
//         hideClassShowPass.style.visibility = 'visible'
//         showClassHidePass.style.visibility = 'hidden'
//     }

//     function showPass(){
//         var hideClassShowPass = document.querySelector('.psw-hide')
//         var showClassHidePass = document.querySelector('.psw-show')
//         hideClassShowPass.style.visibility = 'hidden'
//         showClassHidePass.style.visibility = 'visible'
//     }
// }


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
