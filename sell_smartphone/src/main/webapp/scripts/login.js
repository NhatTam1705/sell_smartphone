var click = 0
{
    function textUser(){
        var textUser = document.getElementById('text-user');
        var textPhone = document.getElementById('text-phone')
        if(click === 0){
            textUser.classList.add('blur-text')
            textUser.classList.remove('unblur-text')
            textPhone.classList.add('unblur-text')
            textPhone.classList.remove('blur-text')
            click = 1
        }
    }
    function textPhone(){
        var textUser = document.getElementById('text-user');
        var textPhone = document.getElementById('text-phone')
        if(click === 1){
            textUser.classList.add('unblur-text')
            textUser.classList.remove('blur-text')
            textPhone.classList.add('blur-text')
            textPhone.classList.remove('unblur-text')
            click = 0
        }
    }
}   

