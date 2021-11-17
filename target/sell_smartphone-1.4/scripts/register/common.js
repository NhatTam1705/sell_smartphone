function trim(s) {
    var tempStr;
    tempStr = s.replace(/\s+$/g, '');
    tempStr = tempStr.replace(/^\s+/g, '');
    return tempStr;
}

function isEmpty(s) {
    return ((s == null) || (trim(s).length == 0))
}

function isContainChinese(str) {
    if (str.match(/[^\x00-\xff]/ig))
        return true
    return false
}

//Phone Number
function isValidPhone(phone) {
    if (isEmpty(phone))
        return 'Phone cannot be empty.'
    var str = /^[+]{0}[0-9]{10}$/
    if (!str.test(phone))
        return 'Invalid phone number format.'
    return ''
}

function checkPhone() {
    document.getElementById('spanphoneinfo').innerHTML = ''
    var phone = document.getElementById('registerVO.phone').value
    var errorMessage = isValidPhone(phone)
    if (errorMessage != '')
        document.getElementById('spanphoneinfo').innerHTML = errorMessage
    else document.getElementById('spanphoneinfo').innerHTML = passIMG
}

//Check SMS
function isValidSMS(sms) {
    if (isEmpty(sms))
        return 'SMS cannot be empty'
    return ''
}

function checkSMS() {
    document.getElementById('spansmsinfo').innerHTML = ''
    var sms = document.getElementById('registerVO.sms').value
    var errorMessage = isValidSMS(sms)
    if (errorMessage != '')
        document.getElementById('spansmsinfo').innerHTML = errorMessage
    else document.getElementById('spansmsinfo').innerHTML = passIMG
}

//Register common
var formResubmitFlag = false;
function isFormResubmit() {
    if (formResubmitFlag == true)
        return false;
    else {
        formResubmitFlag = true;
        return true;
    }
}

function userRegister() {
    if (!checkRegisterForm())
        return
    if (isFormResubmit()) {
        document.registerInfoForm.method.value = "doRegister";
		document.registerInfoForm.submit();
    }
}
